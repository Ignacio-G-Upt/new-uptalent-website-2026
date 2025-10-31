export async function GET() {
  const pages = ['/', '/engineers/', '/architects/', '/health/'];
  const urls = pages
    .map((p) => `<url><loc>${p}</loc></url>`) 
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}


