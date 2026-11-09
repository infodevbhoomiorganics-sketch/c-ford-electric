import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/service-areas', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

export function generateSitemap(): string {
  const urls: { loc: string; priority: string; changefreq: string }[] = [];

  staticPages.forEach((p) => {
    urls.push({ loc: `${SITE.url}${p.path}`, priority: p.priority, changefreq: p.changefreq });
  });

  LOCATIONS.forEach((l) => {
    urls.push({
      loc: `${SITE.url}/service-areas/${l.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  });

  SERVICES.forEach((s) => {
    LOCATIONS.forEach((l) => {
      urls.push({
        loc: `${SITE.url}/${s.slug}-${l.slug}`,
        priority: l.slug === 'oklahoma-city-ok' ? '0.8' : '0.7',
        changefreq: 'monthly',
      });
    });
  });

  const today = new Date().toISOString().split('T')[0];

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
