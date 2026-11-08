# Technical improvements — 2026-11-08

## Completed
- Enabled Lovable Cloud and created append-only casino_click_events storage. Anonymous visitors can insert only id, casino_slug and source_path; no public read/update/delete policies. Timestamp is server-generated.
- Shared root listener tracks same-origin known /go casino links, normal and middle clicks. Writes use keepalive and never cancel navigation. No cookies, visitor IDs, IPs, query strings or historical backfill. DNT/GPC visitors are skipped. Repeat clicks count separately; unique visitors/registrations/deposits are not measured.
- Verified a real Winhero mobile button click returned 201 and read the event back from Cloud with correct casino/path. Removed that test event.
- Three attribution tests pass. Latest preview build OK; no runtime errors during click test.
- Added missing og:type/twitter:card fields on content routes without changing existing copy. Removed root default OG image tags in accordance with leaf-image conventions.
- Updated Vite within major 7 to 7.3.7 and Zod to 4.6.7. No existing application Zod consumers found. Other transitive tooling advisories remain; dependency audit is not a clean security guarantee.
- All 10 casino redirect slugs returned 302 without following destinations. Mobile navigation reached the selected category successfully. Subsequent full-image-load checks found no broken logos on category, review, and main listing. Earlier agent image failures were not reproduced after eager loading.
- No sampled mobile/desktop horizontal overflow or browser runtime errors. Approved design unchanged.

## Google findings and limits
- Homepage stored inspection: indexed, successful fetch, expected canonical.
- Sitemap: 0 warnings, 0 errors; Google downloaded it November 6. Deprecated sitemap indexed count is not an index inventory.
- Main listing stored inspection: Discovered - currently not indexed. No crawl/fetch result is reported. It is not a confirmed blocking code error; API inspection does not request indexing.
- Both root URL-prefix and domain properties are verified. Further per-property actions require the user's explicit property choice under current connector rules.
- Full six exclusion reasons still unavailable; request the Search Console exclusion report from user. Do not change excluded claims, editorial text or update dates.
- Publish before expecting the new tracker and metadata changes on the public website. No publish executed.

## Pending casino additions
See casino-additions-research.md: Spinogrino offer and Carlospin Dutch availability remain blocked on supplied source/confirmation.