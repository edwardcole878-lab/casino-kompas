import { useEffect } from 'react';
import { casinoSlugFromHref, clickSourcePath } from '@/lib/casino-clicks';

/** Aggregate click telemetry only: no cookies, visitor IDs, IPs or page queries. */
export function CasinoClickTracker() {
  useEffect(() => {
    const record = (event: MouseEvent) => {
      if (!event.isTrusted || (event.type === 'auxclick' && event.button !== 1)) return;
      if (('globalPrivacyControl' in navigator && navigator.globalPrivacyControl === true) || navigator.doNotTrack === '1') return;
      const element = event.target instanceof Element ? event.target : null;
      const anchor = element?.closest('a[href]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      const slug = casinoSlugFromHref(href, window.location.origin);
      if (!slug) return;
      // Never delay or cancel the casino link; failures must not block conversions.
      const url = import.meta.env.VITE_SUPABASE_URL;
      const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (!url || !key) return;
      void fetch(`${url}/rest/v1/casino_click_events`, {
        method: 'POST',
        keepalive: true,
        headers: { apikey: key, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          casino_slug: slug,
          source_path: clickSourcePath(window.location.pathname),
        }),
      }).then((response) => {
        if (!response.ok) console.warn('Casino click could not be recorded.');
      }).catch(() => console.warn('Casino click could not be recorded.'));
    };
    document.addEventListener('click', record, true);
    document.addEventListener('auxclick', record, true);
    return () => {
      document.removeEventListener('click', record, true);
      document.removeEventListener('auxclick', record, true);
    };
  }, []);
  return null;
}