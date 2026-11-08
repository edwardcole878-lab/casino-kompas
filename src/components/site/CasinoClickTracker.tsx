import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { casinoSlugFromHref, clickSourcePath } from '@/lib/casino-clicks';

/** Aggregate click telemetry only: no cookies, visitor IDs, IPs or page queries. */
export function CasinoClickTracker() {
  useEffect(() => {
    const record = (event: MouseEvent) => {
      if (!event.isTrusted || (event.type === 'auxclick' && event.button !== 1)) return;
      if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;
      const element = event.target instanceof Element ? event.target : null;
      const anchor = element?.closest('a[href]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      const slug = casinoSlugFromHref(href, window.location.origin);
      if (!slug) return;
      // Never delay or cancel the casino link; failures must not block conversions.
      void supabase.from('casino_click_events').insert({
        id: crypto.randomUUID(),
        casino_slug: slug,
        source_path: clickSourcePath(window.location.pathname),
      }).then(({ error }) => {
        if (error) console.warn('Casino click could not be recorded.');
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