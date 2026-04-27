/**
 * Run this ONCE locally to get your Spotify refresh token.
 *
 * Usage:
 *   SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/get-spotify-token.js
 *
 * In your Spotify app settings, set the Redirect URI to:
 *   https://example.com/callback
 */

const readline = require('readline');

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://example.com/callback';
const SCOPES = 'user-read-currently-playing user-read-recently-played';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('\n❌ Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET before running.\n');
  process.exit(1);
}

const authUrl =
  `https://accounts.spotify.com/authorize` +
  `?client_id=${CLIENT_ID}` +
  `&response_type=code` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(SCOPES)}`;

console.log('\n── Step 1 ─────────────────────────────────────────────────');
console.log('Open this URL in your browser:\n');
console.log(authUrl);
console.log('\n── Step 2 ─────────────────────────────────────────────────');
console.log('Log in with Spotify and click Agree.');
console.log('Your browser will redirect to a page that won\'t load — that\'s fine.');
console.log('Copy the FULL URL from your browser address bar.\n');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('── Step 3 ──────────────────────────────────────────────────\nPaste the full redirect URL here: ', async (redirectedUrl) => {
  rl.close();

  let code;
  try {
    const url = new URL(redirectedUrl.trim());
    code = url.searchParams.get('code');
  } catch {
    console.error('\n❌ Could not parse that URL. Make sure you pasted the full address bar URL.\n');
    process.exit(1);
  }

  if (!code) {
    console.error('\n❌ No "code" parameter found in the URL.\n');
    process.exit(1);
  }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const tokens = await res.json();

  if (!tokens.refresh_token) {
    console.error('\n❌ Error:', JSON.stringify(tokens, null, 2), '\n');
    process.exit(1);
  }

  console.log('\n✅ Your Spotify refresh token:\n');
  console.log(tokens.refresh_token);
  console.log('\nSave this as the SPOTIFY_REFRESH_TOKEN GitHub Secret.\n');
});
