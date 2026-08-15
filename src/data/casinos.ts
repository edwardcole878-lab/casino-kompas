import { listingCasinos } from "./listing";

export type PaymentMethod = "iDEAL" | "Bancontact" | "Visa" | "Mastercard" | "PayPal" | "Crypto" | "Trustly" | "Klarna" | "Skrill";

/** Optional brand logo URLs per payment method. Drop PNGs in /public/payments/. */
export const paymentLogoUrl: Partial<Record<PaymentMethod, string>> = {
  // e.g. iDEAL: "/payments/ideal.svg",
};

/** Software/game providers (Mercury-style taxonomy) */
export type Provider =
  | "NetEnt"
  | "Pragmatic Play"
  | "Evolution"
  | "Play'n GO"
  | "Hacksaw Gaming"
  | "Microgaming"
  | "Yggdrasil"
  | "Red Tiger"
  | "Nolimit City"
  | "Push Gaming";

/** Licensing authorities */
export type Licence = "KSA" | "MGA" | "Curacao" | "UKGC" | "Gibraltar" | "Anjouan";

/** Bonus type taxonomy */
export type BonusType =
  | "welkomstbonus"
  | "no-deposit"
  | "free-spins"
  | "cashback"
  | "reload"
  | "vip";

export type Casino = {
  slug: string;
  rank: number;
  name: string;
  tagline: string;
  rating: number; // 0-10
  bonusHeadline: string;
  bonusDetail: string;
  /** Numeric max bonus value in EUR, used for sorting & dynamic CTA copy */
  maxBonus: number;
  /** Wagering / doorzetvereiste, e.g. "25x" or "n.v.t." */
  wagering: string;
  /** Date of last editorial test (ISO YYYY-MM-DD) */
  lastTested: string;
  /** Optional: bonus-specific CTA label, falls back to derived value */
  ctaLabel?: string;
  /** Optional: real brand logo URL (preferred) — leave empty to use initials placeholder */
  logoUrl?: string;
  /** @deprecated use logoUrl */
  image?: string;
  benefits: string[];
  payments: PaymentMethod[];
  payoutTime: string;
  minDeposit: string;
  licence: string;
  established: number;
  badges?: ("populair" | "redactie" | "snel" | "nieuw" | "mobiel")[];
  highlight?: boolean;
  /** Unique angle this review will emphasize */
  angle:
    | "best-bonus"
    | "fastest-payout"
    | "mobile-experience"
    | "trust-license"
    | "live-casino"
    | "slots-variety"
    | "vip-program"
    | "ideal-experience"
    | "crypto-friendly"
    | "low-wagering";
  brandColor: string; // for logo block
  pros: string[];
  cons: string[];
  verdict: string;
  intro: string; // unique editorial intro
  games: { slots: number; live: number; table: number };
  // ── Mercury-style relational taxonomy fields ──
  /** Software/game providers */
  providers?: Provider[];
  /** Licensing authorities (in addition to legacy `licence` text) */
  licences?: Licence[];
  /** Bonus types this casino offers */
  bonusTypes?: BonusType[];
  /** ISO 3166-1 alpha-2 country codes where this casino is restricted */
  restrictedCountries?: string[];
  /** Owner / parent company */
  owner?: string;
  /** Affiliate redirect URL (used by /go/$slug) */
  affiliateUrl?: string;
};

const parseMaxBonus = (bonus: string) => {
  const m = bonus.replace(/\./g, "").match(/€\s?(\d+)/);
  return m ? Number(m[1]) : 0;
};

/**
 * The site-wide casino set. Derived from the single canonical listing so that
 * every page, review and taxonomy shows exactly the same casinos in the same order.
 */
export const casinos: Casino[] = listingCasinos.map((c) => ({
  slug: c.slug,
  rank: c.rank,
  name: c.name,
  tagline: `${c.bonus} + ${c.freeSpins}`,
  rating: Number((c.rating * 2).toFixed(1)),
  bonusHeadline: `${c.bonus} + ${c.freeSpins}`,
  bonusDetail: `Welkomstbonus voor nieuwe spelers bij ${c.name}.`,
  maxBonus: parseMaxBonus(c.bonus),
  wagering: "35x B",
  lastTested: "2026-08-01",
  ctaLabel: "Speel Nu",
  logoUrl: c.logo,
  benefits: c.pros,
  payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"] as PaymentMethod[],
  payoutTime: c.payoutSpeed,
  minDeposit: c.minDeposit,
  licence: c.license,
  established: 2023,
  badges: c.rank === 1 ? (["populair", "redactie", "snel"] as const).slice() as Casino["badges"] : undefined,
  highlight: c.rank === 1,
  angle: "fastest-payout" as const,
  brandColor: "oklch(0.68 0.19 45)",
  pros: c.pros,
  cons: [],
  verdict: `${c.name} betaalt gemiddeld binnen ${c.payoutSpeed} uit en biedt ${c.bonus} plus ${c.freeSpins} voor nieuwe spelers.`,
  intro: `${c.name} is een buitenlands online casino met een ${c.license}-licentie, gericht op Nederlandse spelers die snelle uitbetalingen en een ruime welkomstbonus zoeken.`,
  games: { slots: 3000, live: 150, table: 60 },
  providers: ["Pragmatic Play", "NetEnt", "Play'n GO", "Hacksaw Gaming", "Evolution"] as Provider[],
  licences: (c.license.includes("Anjouan") ? ["Anjouan"] : ["Curacao"]) as Licence[],
  bonusTypes: ["welkomstbonus", "free-spins", "reload"] as BonusType[],
  affiliateUrl: c.cta,
}));

export const getCasino = (slug: string) => casinos.find((c) => c.slug === slug);
export const relatedCasinos = (slug: string, count = 3) =>
  casinos.filter((c) => c.slug !== slug).slice(0, count);

/**
 * Canonical Top 10 casino listing.
 * RULE: every page that shows a generic casino comparison list MUST use this
 * export so the order and selection are identical site-wide. Only filtered
 * taxonomy pages (provider, payment method, licence, bonus-type, single slot)
 * may deviate, because they're inherently "casinos that support X".
 */
export const topCasinos = casinos;
