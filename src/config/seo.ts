export function resolvePageTitle(input?: string): string {
  const base = 'Uptalent 2026';
  if (!input || !input.trim()) return base;
  return `${input.trim()} — ${base}`;
}

export function resolveDescription(input?: string): string {
  const fallback = 'Uptalent site initialization in progress.';
  return input?.trim() || fallback;
}
export const siteMetadata = {
  name: 'Uptalent 2026',
  titleTemplate: '%s · Uptalent 2026',
  defaultTitle: 'Uptalent 2026',
  description:
    'Uptalent connects companies with vetted engineering and architecture talent across LATAM. Placeholder copy until owner-provided content is available.',
  siteUrl: 'https://example.com',
  locale: 'en',
  twitterHandle: '@uptalent',
};

export function resolvePageTitle(title?: string) {
  if (!title || title === siteMetadata.defaultTitle) {
    return siteMetadata.defaultTitle;
  }

  return siteMetadata.titleTemplate.replace('%s', title);
}

export function resolveDescription(description?: string) {
  return description ?? siteMetadata.description;
}

