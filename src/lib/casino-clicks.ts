import { listingCasinos } from '@/data/listing';

export function casinoSlugFromHref(href: string, origin: string): string | null {
  try {
    const url = new URL(href, origin);
    if (url.origin !== origin) return null;
    const match = /^\/go\/([a-z0-9-]+)\/?$/.exec(url.pathname);
    const slug = match?.[1];
    return slug && listingCasinos.some((casino) => casino.slug === slug) ? slug : null;
  } catch {
    return null;
  }
}

export function clickSourcePath(pathname: string): string {
  return pathname.startsWith('/') ? pathname.slice(0, 250) : '/';
}