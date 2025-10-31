import https from 'node:https';

const apiKey = process.env.NEBIUS_API_KEY;
if (!apiKey) {
  console.log('[ping] NEBIUS_API_KEY not set; skipping ping.');
  process.exit(0);
}

const options = {
  method: 'GET',
  hostname: 'studio.nebius.com',
  path: '/project/api-keys',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Accept: 'application/json',
    'User-Agent': 'uptalent-astro-ci/1.0',
  },
};

const req = https.request(options, (res) => {
  const { statusCode } = res;
  if (statusCode && statusCode >= 200 && statusCode < 300) {
    console.log('[ping] Nebius reachable, auth OK');
    process.exit(0);
  } else if (statusCode && statusCode >= 400 && statusCode < 500) {
    console.log(`[ping] Nebius reachable; auth likely invalid (status ${statusCode}).`);
    // Connectivity proven; fail to signal invalid token
    process.exit(1);
  } else if (statusCode) {
    console.error(`[ping] Unexpected status ${statusCode}`);
    process.exit(1);
  } else {
    console.error('[ping] Unknown response');
    process.exit(1);
  }
});

req.on('error', (err) => {
  console.error(`[ping] Network error: ${err.message}`);
  process.exit(1);
});

req.end();


