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


export const getCasino = (slug: string) => casinos.find((c) => c.slug === slug);
export const relatedCasinos = (slug: string, count = 3) =>
  casinos.filter((c) => c.slug !== slug).slice(0, count);
