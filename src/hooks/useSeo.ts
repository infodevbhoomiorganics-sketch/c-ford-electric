import { useEffect } from 'react';
import { SITE } from '@/data/site';

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object | object[];
  noindex?: boolean;
};

const ensureMeta = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  const el = ensureMeta(
    `meta[${attr}="${key}"]`,
    () => {
      const m = document.createElement('meta');
      m.setAttribute(attr, key);
      return m;
    },
  );
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  const el = ensureMeta(
    `link[rel="${rel}"]`,
    () => {
      const l = document.createElement('link');
      l.setAttribute('rel', rel);
      return l;
    },
  ) as HTMLLinkElement;
  el.setAttribute('href', href);
};

export function useSeo({
  title,
  description,
  path,
  image,
  type = 'website',
  jsonLd,
  noindex = false,
}: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
    const canonical = `${SITE.url}${path}`;
    const ogImage = image || `${SITE.url}/og-image.svg`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setLink('canonical', canonical);

    if (noindex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('name', 'robots', 'index, follow');
    }

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:image', ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    const existing = document.getElementById('page-jsonld');
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, path, image, type, jsonLd, noindex]);
}
