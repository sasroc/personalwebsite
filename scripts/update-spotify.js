const fetch = require('node-fetch');
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.database();

async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await res.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function getCurrentlyPlaying(token) {
  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 204 || res.status > 400) return null;
  const data = await res.json();
  // Skip podcasts/episodes — they don't have album art
  if (data.currently_playing_type !== 'track') return null;
  return data;
}

async function getRecentlyPlayed(token) {
  const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.items?.[0] ?? null;
}

function buildTrackPayload(track, isPlaying) {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((a) => a.name).join(', '),
    album: track.album.name,
    albumArt: track.album.images[0]?.url ?? null,
    songUrl: track.external_urls.spotify,
    updatedAt: Date.now(),
  };
}

async function main() {
  const token = await getAccessToken();

  const current = await getCurrentlyPlaying(token);

  // Handle both actively playing and paused tracks
  if (current?.item) {
    const payload = buildTrackPayload(current.item, current.is_playing === true);
    await db.ref('spotify/nowPlaying').set(payload);
    console.log(payload.isPlaying ? 'Now playing:' : 'Paused:', payload.title, '-', payload.artist);
    process.exit(0);
  }

  const recent = await getRecentlyPlayed(token);
  if (recent?.track) {
    const payload = buildTrackPayload(recent.track, false);
    await db.ref('spotify/nowPlaying').set(payload);
    console.log('Last played:', payload.title, '-', payload.artist);
  } else {
    console.log('No track data found, skipping update.');
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
