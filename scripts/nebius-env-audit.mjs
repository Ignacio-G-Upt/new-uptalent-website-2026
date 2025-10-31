const required = [
  'NEBIUS_API_KEY',
  'BRAND_ID',
  'ASSETS_BASE_URL',
  'SITE_URL',
];

let ok = true;
for (const name of required) {
  const present = Boolean(process.env[name] && String(process.env[name]).trim());
  if (!present) {
    console.error(`[env] Missing ${name}`);
    ok = false;
  }
}

if (!ok) {
  process.exit(1);
} else {
  console.log('[env] All required variables present');
}


