import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const brandPath = path.join(root, 'brand', 'uptalent', 'brand_profile.json');
const outPath = path.join(root, 'src', 'styles', 'tokens.brand.css');

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

try {
  const raw = fs.readFileSync(brandPath, 'utf8');
  const brand = JSON.parse(raw);
  const palette = brand.palette_hex || brand.paletteHex || [];
  const fonts = brand.fonts || {};

  const lines = [
    ':root {',
    `  /* generated from ${path.relative(root, brandPath)} */`,
  ];

  if (fonts.sans) lines.push(`  --font-family-sans: '${fonts.sans}', 'Inter', system-ui, sans-serif;`);
  if (fonts.serif) lines.push(`  --font-family-serif: '${fonts.serif}', Georgia, serif;`);
  if (fonts.mono) lines.push(`  --font-family-mono: '${fonts.mono}', ui-monospace, monospace;`);

  if (Array.isArray(palette) && palette.length >= 4) {
    // naive mapping: [surface, surface-alt, text, accent]
    const [surface, surfaceAlt, text, accent] = palette;
    lines.push(`  --color-surface: ${surface};`);
    lines.push(`  --color-surface-alt: ${surfaceAlt || surface};`);
    lines.push(`  --color-text: ${text || '#0f172a'};`);
    lines.push(`  --color-accent: ${accent || '#2563eb'};`);
  }

  lines.push('}');

  write(outPath, lines.join('\n') + '\n');
  console.log(`[tokens] Wrote ${path.relative(root, outPath)}`);
} catch (e) {
  // Create (or keep) a minimal file so imports don't break
  write(outPath, `/* tokens.brand.css generation skipped: ${e.message} */\n:root { }\n`);
  console.warn('[tokens] Generation skipped:', e.message);
}


