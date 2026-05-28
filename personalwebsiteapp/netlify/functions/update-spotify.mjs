import admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

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

export default async function handler() {
  try {
    const token = await getAccessToken();

    const current = await getCurrentlyPlaying(token);
    if (current?.item) {
      const payload = buildTrackPayload(current.item, current.is_playing === true);
      await db.ref('spotify/nowPlaying').set(payload);
      console.log(payload.isPlaying ? 'Now playing:' : 'Paused:', payload.title);
      return new Response('ok');
    }

    const recent = await getRecentlyPlayed(token);
    if (recent?.track) {
      const payload = buildTrackPayload(recent.track, false);
      await db.ref('spotify/nowPlaying').set(payload);
      console.log('Last played:', payload.title);
    } else {
      console.log('No track data, skipping.');
    }

    return new Response('ok');
  } catch (err) {
    console.error('Spotify update failed:', err.message);
    return new Response('error', { status: 500 });
  }
}
