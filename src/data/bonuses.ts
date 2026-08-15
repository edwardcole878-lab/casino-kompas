import type { BonusType } from "./casinos";
import { casinos, getCasino } from "./casinos";

export type Bonus = {
  slug: string;
  /** Slug of the casino this bonus belongs to */
  casinoSlug: string;
  type: BonusType;
  name: string;
  /** Headline shown on cards */
  headline: string;
  /** Numeric max bonus in EUR (sortable) */
  amount: number;
  /** Optional free spins count */
  freeSpins?: number;
  /** Wagering label, e.g. "25x", "n.v.t." */
  wagering: string;
  /** Wagering numeric value (sortable, lower = better) */
  wageringValue: number;
  minDeposit: string;
  /** Validity / expiry */
  validity: string;
  /** Optional promo code */
  code?: string;
  /** Short editorial description */
  description: string;
  /** Bullet list of T&C highlights */
  terms: string[];
  /** ISO YYYY-MM-DD */
  lastUpdated: string;
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** One welcome bonus per casino, derived from the canonical casino listing. */
export const bonuses: Bonus[] = casinos.map((c) => ({
  slug: `${c.slug}-welkomstbonus`,
  casinoSlug: c.slug,
  type: "welkomstbonus" as BonusType,
  name: `${c.name} Welkomstbonus`,
  headline: c.bonusHeadline,
  amount: c.maxBonus,
  freeSpins: Number((c.bonusHeadline.match(/(\d+)\s*Free Spins/i) ?? [])[1]) || undefined,
  wagering: c.wagering,
  wageringValue: Number((c.wagering.match(/(\d+)/) ?? [])[1]) || 35,
  minDeposit: c.minDeposit,
  validity: "30 dagen",
  description: `${c.name} geeft nieuwe spelers ${c.bonusHeadline}. Uitbetalingen verlopen gemiddeld binnen ${c.payoutTime}.`,
  terms: [
    `Minimum storting ${c.minDeposit}`,
    `Wagering ${c.wagering}`,
    "Alleen voor nieuwe spelers, 18+",
    "Voorwaarden van de operator zijn leidend",
  ],
  lastUpdated: c.lastTested,
}));

void slugify;

export const getBonus = (slug: string) => bonuses.find((b) => b.slug === slug);
export const bonusesByCasino = (casinoSlug: string) =>
  bonuses.filter((b) => b.casinoSlug === casinoSlug);
export const bonusesByType = (type: string) => bonuses.filter((b) => b.type === type);

export const enrichBonus = (b: Bonus) => ({
  ...b,
  casino: getCasino(b.casinoSlug),
});

/** All bonuses ordered by amount desc — used as default list ordering */
export const allBonusesSorted = [...bonuses].sort((a, b) => b.amount - a.amount);
