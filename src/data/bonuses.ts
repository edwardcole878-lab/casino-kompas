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

export const bonuses: Bonus[] = [
  {
    slug: "royal-orange-welkomstbonus",
    casinoSlug: "royal-orange",
    type: "welkomstbonus",
    name: "Royal Orange Welkomstpakket",
    headline: "100% tot €500 + 200 Free Spins",
    amount: 500,
    freeSpins: 200,
    wagering: "25x",
    wageringValue: 25,
    minDeposit: "€10",
    validity: "30 dagen",
    description:
      "Verdubbel je eerste storting tot €500 én ontvang 200 free spins op Starburst. Met een wagering van slechts 25x is dit een van de eerlijkste welkomstbonussen in onze test.",
    terms: [
      "Minimum storting €10",
      "Wagering 25x bonus + storting",
      "Maximale inzet tijdens vrijspelen €5",
      "Free spins op Starburst, €0,10 per spin",
      "Bonus geldig op slots, niet op live casino",
    ],
    lastUpdated: "2026-04-12",
  },
  {
    slug: "tulip-spin-welkomstbonus",
    casinoSlug: "tulip-spin",
    type: "welkomstbonus",
    name: "Tulip Spin Welkomstbonus",
    headline: "€200 + 100 Free Spins",
    amount: 200,
    freeSpins: 100,
    wagering: "30x",
    wageringValue: 30,
    minDeposit: "€10",
    validity: "21 dagen",
    description:
      "Lager bonusbedrag, maar in combinatie met de razendsnelle uitbetalingen krijg je je winsten ook écht snel op je rekening.",
    terms: ["Minimum storting €10", "Wagering 30x bonus", "Free spins op Book of Dead"],
    lastUpdated: "2026-04-08",
  },
  {
    slug: "nederzicht-no-deposit",
    casinoSlug: "nederzicht-casino",
    type: "no-deposit",
    name: "Nederzicht €100 zonder doorzet",
    headline: "€100 zonder doorzet",
    amount: 100,
    wagering: "1x",
    wageringValue: 1,
    minDeposit: "n.v.t.",
    validity: "14 dagen",
    description:
      "Uitzonderlijk: een bonus van €100 die je na slechts 1x inzet kunt opnemen. Verificatie vooraf vereist.",
    terms: ["Geen storting nodig", "KYC-verificatie vereist", "Maximale opname €100", "Geldig 14 dagen na registratie"],
    lastUpdated: "2026-04-02",
  },
  {
    slug: "delta-welkomstbonus",
    casinoSlug: "delta-casino",
    type: "welkomstbonus",
    name: "Delta Casino Welkomstpakket",
    headline: "€150 + 50 Free Spins",
    amount: 150,
    freeSpins: 50,
    wagering: "35x",
    wageringValue: 35,
    minDeposit: "€10",
    validity: "30 dagen",
    description: "Solide welkomstbonus met free spins, claimbaar via de Delta-app.",
    terms: ["Minimum storting €10", "Wagering 35x", "Bonus geldig op slots"],
    lastUpdated: "2026-04-05",
  },
  {
    slug: "live-arena-bonus",
    casinoSlug: "live-arena",
    type: "welkomstbonus",
    name: "Live Arena Live Casino Bonus",
    headline: "€250 Live Casino Bonus",
    amount: 250,
    wagering: "30x",
    wageringValue: 30,
    minDeposit: "€20",
    validity: "30 dagen",
    description:
      "Unieke bonus die ook op live tafels telt voor het vrijspelen — een zeldzaamheid in de NL markt.",
    terms: ["Minimum storting €20", "Wagering 30x", "Geldig op alle live tafels"],
    lastUpdated: "2026-03-28",
  },
  {
    slug: "spin-paleis-free-spins",
    casinoSlug: "spin-paleis",
    type: "free-spins",
    name: "Spin Paleis 300 Free Spins",
    headline: "€300 + 300 Free Spins",
    amount: 300,
    freeSpins: 300,
    wagering: "35x",
    wageringValue: 35,
    minDeposit: "€10",
    validity: "10 dagen",
    description:
      "300 free spins verspreid over 10 dagen — 30 spins per dag op wisselende slots.",
    terms: ["Minimum storting €10", "30 spins per dag, 10 dagen", "Wagering 35x op spin-winsten"],
    lastUpdated: "2026-03-25",
  },
  {
    slug: "diamant-club-cashback",
    casinoSlug: "diamant-club",
    type: "cashback",
    name: "Diamant Club VIP Cashback",
    headline: "Tot €1.000 cashback per maand",
    amount: 1000,
    wagering: "20x",
    wageringValue: 20,
    minDeposit: "€20",
    validity: "Maandelijks",
    description:
      "10% maandelijkse cashback voor VIP-leden vanaf level 3 — automatisch uitgekeerd.",
    terms: ["Alleen voor VIP-level 3+", "10% van netto verlies", "Wagering 20x"],
    lastUpdated: "2026-03-22",
  },
  {
    slug: "ideal-prime-welkomstbonus",
    casinoSlug: "ideal-prime",
    type: "welkomstbonus",
    name: "iDEAL Prime iDEAL-bonus",
    headline: "€100 + 50 Free Spins via iDEAL",
    amount: 100,
    freeSpins: 50,
    wagering: "30x",
    wageringValue: 30,
    minDeposit: "€5",
    validity: "21 dagen",
    code: "IDEAL26",
    description: "Exclusieve bonus die alleen geactiveerd wordt bij iDEAL-stortingen.",
    terms: ["Minimum storting €5", "Alleen iDEAL", "Wagering 30x"],
    lastUpdated: "2026-03-18",
  },
  {
    slug: "crypto-vault-btc-bonus",
    casinoSlug: "crypto-vault",
    type: "welkomstbonus",
    name: "Crypto Vault BTC Welkomstbonus",
    headline: "1 BTC bonus + 100 Free Spins",
    amount: 1000,
    freeSpins: 100,
    wagering: "40x",
    wageringValue: 40,
    minDeposit: "€10",
    validity: "30 dagen",
    description: "Storting in crypto activeert een aparte BTC-bonus naast de standaard iDEAL-bonus.",
    terms: ["Min. storting 0.001 BTC of €10", "Wagering 40x", "Crypto-koers gefixeerd op moment van storting"],
    lastUpdated: "2026-03-15",
  },
  {
    slug: "zilveren-spin-low-wagering",
    casinoSlug: "zilveren-spin",
    type: "welkomstbonus",
    name: "Zilveren Spin Low-Wagering",
    headline: "€75 met slechts 10x doorzet",
    amount: 75,
    wagering: "10x",
    wageringValue: 10,
    minDeposit: "€10",
    validity: "30 dagen",
    description: "De laagste doorzetvereiste in onze hele test — een bescheiden bonus die je écht kunt vrijspelen.",
    terms: ["Minimum storting €10", "Wagering slechts 10x", "Geen max-winst limiet"],
    lastUpdated: "2026-03-10",
  },
];

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
