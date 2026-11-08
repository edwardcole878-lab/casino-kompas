# Project conventions

- Keep casino listing presentation in the shared CasinoListing component so all listing pages stay consistent; mobile first-place treatment must leave desktop markup and the other casino rows intact.
- Keep the full casino order and offers in src/data/listing.ts; derived datasets must not truncate the list, so additions appear site-wide.