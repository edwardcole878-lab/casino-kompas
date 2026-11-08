CREATE TABLE public.casino_click_events (
 id uuid PRIMARY KEY,
 casino_slug text NOT NULL CHECK (casino_slug ~ '^[a-z0-9-]{1,60}$'),
 source_path text NOT NULL CHECK (length(source_path) <= 250 AND source_path LIKE '/%'),
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT (id, casino_slug, source_path) ON public.casino_click_events TO anon, authenticated;
GRANT ALL ON public.casino_click_events TO service_role;
ALTER TABLE public.casino_click_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may append click events" ON public.casino_click_events FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX casino_click_events_date_casino ON public.casino_click_events (created_at, casino_slug);
COMMENT ON TABLE public.casino_click_events IS 'Append-only casino button events; no visitor identifiers, IP addresses or public read access. Untrusted telemetry, not registrations or deposits.';