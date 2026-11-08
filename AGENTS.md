# Project conventions

- Keep casino listing presentation in the shared CasinoListing component so all listing pages stay consistent; mobile first-place treatment must leave desktop markup and the other casino rows intact.
- Record casino-link clicks once through the shared root listener using keepalive append-only Cloud writes; never store visitor identifiers or expose click reports publicly. This preserves navigation and limits tracking to aggregate events.