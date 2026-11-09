import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import type { Crumb } from '@/components/Breadcrumbs';

const BASE = SITE.url;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: BASE,
  logo: `${BASE}/og-image.svg`,
  telephone: SITE.phoneHref.replace('tel:', ''),
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: 'US',
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: SITE.name,
  publisher: { '@id': `${BASE}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${BASE}/#localbusiness`,
  name: SITE.legalName,
  image: `${BASE}/og-image.svg`,
  url: BASE,
  telephone: SITE.phoneHref.replace('tel:', ''),
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
  areaServed: LOCATIONS.map((l) => ({
    '@type': 'City',
    name: l.city,
    containedInPlace: { '@type': 'State', name: 'Oklahoma' },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Electrical Services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.short },
    })),
  },
  sameAs: ['https://maps.app.goo.gl/oWpUijijRZ27eyHQ7'],
};

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: item.href ? `${BASE}${item.href}` : undefined,
      })),
    ],
  };
}

export function serviceJsonLd(serviceSlug: string) {
  const s = SERVICES.find((x) => x.slug === serviceSlug);
  if (!s) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.name,
    name: s.name,
    description: s.short,
    provider: { '@id': `${BASE}/#localbusiness` },
    areaServed: LOCATIONS.map((l) => ({
      '@type': 'City',
      name: l.city,
      containedInPlace: { '@type': 'State', name: 'Oklahoma' },
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
