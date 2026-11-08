import { test } from "node:test";
import { strict as assert } from "node:assert";
import { listingCasinos } from "./listing";
import { casinos } from "./casinos";
import { casinoSlugFromHref } from "../lib/casino-clicks";

test("uses the requested order with NixBet and Betory and skips the two excluded casinos", () => {
  assert.deepEqual(listingCasinos.map(c => c.slug), ["winhero", "wildies", "rivo", "seven", "spininio", "nixbet", "baloo", "mrpunter", "velwins", "spinmills", "shakebet", "betory"]);
  assert.deepEqual(casinos.map(c => c.slug), listingCasinos.map(c => c.slug));
  assert.deepEqual(listingCasinos.map(c => c.rank), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});
test("preserves the supplied NixBet destination and sourced offer", () => {
  const c = listingCasinos.find(c => c.slug === "nixbet");
  assert.equal(c?.cta, "https://trackingnixbet.com/drnjwxnmi");
  assert.equal(c?.bonus, "200% tot €1.000");
  assert.equal(c?.freeSpins, "150 Free Spins");
  assert.equal(casinoSlugFromHref("/go/nixbet", "https://buitenlandsecasino.com"), "nixbet");
});
test("preserves the supplied Betory destination and sourced offer", () => {
  const c = listingCasinos.find(c => c.slug === "betory");
  assert.equal(c?.cta, "https://betorytrackers.com/dzqshr42m");
  assert.equal(c?.bonus, "150% tot €750");
  assert.equal(casinoSlugFromHref("/go/betory", "https://buitenlandsecasino.com"), "betory");
});