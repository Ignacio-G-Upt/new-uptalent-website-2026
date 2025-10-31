import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const approvedDir = path.join(root, 'assets', 'approved');
const registryPath = path.join(root, 'assets', 'registry.json');

const maxSizeKB = {
  default: 160, // ≤1920px
  large: 320,   // 2560+
};

function getSizeKB(filePath) {
  const stat = fs.statSync(filePath);
  return Math.ceil(stat.size / 1024);
}

function warn(msg) {
  console.warn(`[asset-validator] ${msg}`);
}

function fail(msg) {
  console.error(`[asset-validator] ${msg}`);
  process.exitCode = 1;
}

try {
  const registryRaw = fs.readFileSync(registryPath, 'utf8');
  const registry = JSON.parse(registryRaw);
  if (!registry || !Array.isArray(registry.assets)) {
    fail('registry.json must have an "assets" array.');
  }
} catch (e) {
  fail(`Unable to read/parse registry.json: ${e.message}`);
}

if (!fs.existsSync(approvedDir)) {
  warn('assets/approved directory does not exist; skipping file checks.');
  process.exit(0);
}

const files = fs.readdirSync(approvedDir);
for (const name of files) {
  const filePath = path.join(approvedDir, name);
  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) continue;
  const sizeKB = getSizeKB(filePath);

  // crude width detection from filename convention: ..._w{width}_...
  const match = name.match(/_w(\d+)/);
  const width = match ? Number(match[1]) : undefined;
  const limit = width && width >= 2560 ? maxSizeKB.large : maxSizeKB.default;
  if (sizeKB > limit) {
    fail(`${name} is ${sizeKB}KB exceeding ${limit}KB limit`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
} else {
  console.log('[asset-validator] OK');
}


