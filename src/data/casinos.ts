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

export const casinos: Casino[] = [
  {
    slug: "betory",
    rank: 1,
    name: "Betory",
    tagline: "Crypto-first casino met de hoogste welkomstbonus",
    rating: 9.2,
    bonusHeadline: "300% tot €3.250 + 225 Free Spins",
    bonusDetail: "Welkomstpakket gespreid over je eerste vier stortingen.",
    maxBonus: 3250,
    wagering: "40x B",
    lastTested: "2026-04-01",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/betory.png",
    benefits: ["Tot €3.250 bonusgeld", "225 free spins", "Crypto + iDEAL checkout"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 1 uur (crypto)",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2023,
    badges: ["populair", "redactie"],
    highlight: true,
    angle: "best-bonus",
    brandColor: "oklch(0.7 0.2 45)",
    pros: ["Eén van de hoogste welkomstpakketten op de markt", "Crypto, iDEAL én Trustly", "5.000+ slots van top providers", "Snelle uitbetalingen via crypto", "24/7 live chat"],
    cons: ["Geen KSA-licentie — geen Cruks", "Wagering 40x bovengemiddeld", "Geen Nederlandstalige support"],
    verdict: "Betory levert wat het belooft: grote bonus, snelle uitbetalingen, breed aanbod. Eén van de sterkste casino's met Anjouan-licentie.",
    intro: "Betory is een crypto-first online casino actief sinds 2023. Het platform voelt modern aan en biedt een van de grootste welkomstbonussen die je momenteel buiten de KSA-vergunde markt vindt.",
    games: { slots: 5000, live: 200, table: 80 },
    providers: ["Pragmatic Play", "NetEnt", "Play'n GO", "Hacksaw Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "reload"],
    owner: "Betory N.V.",
    affiliateUrl: "https://betorytrackers.com/dzqshr42m",
  },
  {
    slug: "novajackpot",
    rank: 2,
    name: "NovaJackpot",
    tagline: "250% mega-pakket tot €3.750",
    rating: 8.9,
    bonusHeadline: "250% tot €3.750 + 250 Free Spins",
    bonusDetail: "Welkomstpakket met loyaltyprogramma en sportsbook.",
    maxBonus: 3750,
    wagering: "35x B",
    lastTested: "2026-04-13",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/novajackpot.png",
    benefits: ["€3.750 bonusplafond", "Loyaltyprogramma met punten", "13.000+ games + esports sportsbook"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "1–3 dagen",
    minDeposit: "€10",
    licence: "Anjouan",
    established: 2023,
    badges: ["populair", "redactie"],
    angle: "best-bonus",
    brandColor: "oklch(0.55 0.22 290)",
    pros: ["Hoogste bonusplafond in deze lijst (€3.750)", "Loyaltyprogramma waar punten te ruilen zijn voor prijzen", "Combinatie casino + sportsbook + esports", "Bescheiden minimumstorting (€10)", "Wekelijkse toernooien"],
    cons: ["Uitbetalingen 1–3 dagen — niet de snelste", "Geen Nederlandse support", "Free spins beperkt tot één Pragmatic-slot"],
    verdict: "NovaJackpot biedt het grootste bonusplafond in de Anjouan-categorie en een sterk loyaltyprogramma — topkeuze voor frequente spelers.",
    intro: "NovaJackpot Casino is sinds 2023 actief en uitgegroeid tot een van de zichtbaardere Anjouan-platforms. 13.000+ games, weekly tournaments en een loyalty program waar je punten kunt inwisselen voor prijzen.",
    games: { slots: 13000, live: 400, table: 90 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Play'n GO", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload", "vip"],
    owner: "NovaJackpot Holdings",
    affiliateUrl: "#",
  },
  {
    slug: "alawin",
    rank: 3,
    name: "Alawin",
    tagline: "300% bonus met sportsbook én casino",
    rating: 8.7,
    bonusHeadline: "300% tot €2.000 + 300 Free Spins",
    bonusDetail: "Welkomstpakket inclusief Bonus Crab op eerste storting.",
    maxBonus: 2000,
    wagering: "40x B",
    lastTested: "2026-04-15",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/alawin.png",
    benefits: ["300% match-bonus", "300 free spins + Bonus Crab", "Casino + sportsbook"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "1–24 uur",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2024,
    badges: ["nieuw"],
    angle: "best-bonus",
    brandColor: "oklch(0.55 0.18 260)",
    pros: ["Royale 300% bonus tot €2.000", "Sportsbook én casino in één account", "Wekelijkse cashback tot 15%", "VIP-programma met vier niveaus", "Bonus Crab als extra speelelement"],
    cons: ["Wagering 40x is hoog", "Geen Nederlandse vertaling", "Live casino-aanbod beperkter"],
    verdict: "Alawin biedt een fors welkomstpakket dat opvalt in de Anjouan-markt, met de extra Bonus Crab als speels element.",
    intro: "Alawin Casino positioneert zich als een toegankelijk Anjouan-vergund platform met een combinatie van casino en sportsbook. Operator NovaForge LTD lanceerde het in 2024.",
    games: { slots: 8900, live: 80, table: 60 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Play'n GO", "Push Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload", "vip"],
    owner: "NovaForge LTD",
    affiliateUrl: "#",
  },
  {
    slug: "wintari",
    rank: 4,
    name: "Wintari",
    tagline: "200% cashbonus met live casino-focus",
    rating: 8.7,
    bonusHeadline: "200% tot €1.000 + 30 Free Spins",
    bonusDetail: "Pure cashbonus zonder ingewikkelde voorwaarden.",
    maxBonus: 1000,
    wagering: "35x B",
    lastTested: "2026-04-14",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/wintari.png",
    benefits: ["200% cashbonus", "Live casino telt 100% mee voor wagering", "Dutch-speaking blackjack"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 6 uur",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2025,
    badges: ["snel", "nieuw"],
    angle: "live-casino",
    brandColor: "oklch(0.55 0.15 180)",
    pros: ["Sterkste live casino-aanbod in deze prijsklasse", "Pure cashbonus, geen verplichte free spins", "Dagelijkse reload-promoties", "Snelle uitbetalingen < 6 uur via crypto", "Live casino telt 100% mee voor wagering — zeldzaam"],
    cons: ["Slot-bibliotheek kleiner dan grote concurrenten", "Geen Nederlandse support", "Geen sportsbook"],
    verdict: "Wintari is dé Anjouan-keuze voor live casino-spelers dankzij Dutch-speaking dealers en gunstige live wagering.",
    intro: "Wintari Casino lijkt op het eerste oog op zijn buurman Oha — beide bieden 200% tot €1.000 — maar Wintari onderscheidt zich door een uitzonderlijk sterk live casino-aanbod. Operator: Accelcore Enterprise Limitada.",
    games: { slots: 2500, live: 200, table: 60 },
    providers: ["Evolution", "Pragmatic Play", "NetEnt", "Yggdrasil"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload"],
    owner: "Accelcore Enterprise Limitada",
    affiliateUrl: "#",
  },
  {
    slug: "vivaspin",
    rank: 5,
    name: "VivaSpin",
    tagline: "Volume-pakket met cashback voor stortspelers",
    rating: 8.7,
    bonusHeadline: "100% tot €500 + Free Spins",
    bonusDetail: "Welkomstpakket met wekelijkse cashback inbegrepen.",
    maxBonus: 500,
    wagering: "40x B",
    lastTested: "2026-04-13",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/vivaspin.png",
    benefits: ["100% match + free spins", "Wekelijkse cashback zonder wagering", "5.000+ games"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 12 uur",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2025,
    angle: "vip-program",
    brandColor: "oklch(0.6 0.2 145)",
    pros: ["Wekelijkse cashback zonder wagering", "Sportsbook + casino + live in één account", "Gevarieerde game-bibliotheek (5.000+)", "Crypto- en iDEAL-checkouts probleemloos", "VIP-programma voor frequente spelers"],
    cons: ["Wagering 40x is bovengemiddeld", "Geen Nederlandse support", "Casino.guru noteert dat NL-spelers worden geweigerd op sommige bonus-promo's"],
    verdict: "VivaSpin biedt een eerlijke combinatie van bonus, cashback en game-aanbod voor actieve spelers.",
    intro: "VivaSpin Casino is sinds 2025 actief onder Anjouan-licentie, opererend onder Costa Ricaans recht. Het platform combineert casino, live en sportsbook met een wekelijkse cashback-structuur.",
    games: { slots: 5000, live: 180, table: 70 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Push Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload", "vip"],
    owner: "VivaSpin Operations",
    affiliateUrl: "#",
  },
  {
    slug: "oha-casino",
    rank: 6,
    name: "Oha",
    tagline: "100% bonus met dagelijkse promoties",
    rating: 8.6,
    bonusHeadline: "100% tot €300 + 20 Free Spins",
    bonusDetail: "Pure cashbonus + spins op Big Bass Splash.",
    maxBonus: 300,
    wagering: "30x B",
    lastTested: "2026-04-12",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/oha.png",
    benefits: ["Lage 30x wagering", "Snelle uitbetalingen < 6 uur", "Dagelijkse promoties"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 6 uur",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2025,
    badges: ["nieuw", "snel"],
    angle: "low-wagering",
    brandColor: "oklch(0.65 0.2 35)",
    pros: ["Lage 30x wagering — onder marktgemiddelde", "Bescheiden maar realistisch bonusbedrag", "Snelle KYC en uitbetaling", "Sterk live casino-aanbod via Evolution", "Crypto en fiat naadloos gemixt"],
    cons: ["Bonusbedrag bescheiden (max €300)", "Interface functioneel maar niet bijzonder modern", "Geen sportsbook"],
    verdict: "Oha kiest voor een eerlijk, haalbaar bonusaanbod met lage wagering — perfect voor recreatieve spelers.",
    intro: "Oha Casino is in oktober 2025 gelanceerd onder Anjouan-licentie. Het platform onderscheidt zich met dagelijkse promoties die actieve spelers gericht belonen.",
    games: { slots: 4500, live: 150, table: 65 },
    providers: ["Pragmatic Play", "NetEnt", "Yggdrasil", "Push Gaming", "Nolimit City", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload"],
    owner: "Oha Operations Ltd.",
    affiliateUrl: "#",
  },
  {
    slug: "jasminslots",
    rank: 7,
    name: "JasminSlots",
    tagline: "350% bonus en 1.000 free spins",
    rating: 8.6,
    bonusHeadline: "350% tot €2.000 + 1.000 Free Spins",
    bonusDetail: "Welkomstpakket gespreid over 4 stortingen + sportsbook.",
    maxBonus: 2000,
    wagering: "30x (D+B)",
    lastTested: "2026-04-10",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/jasminslots.png",
    benefits: ["350% match-bonus", "1.000 free spins inbegrepen", "13.000+ games + sportsbook"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 12 uur",
    minDeposit: "€25",
    licence: "Anjouan",
    established: 2026,
    badges: ["nieuw"],
    angle: "slots-variety",
    brandColor: "oklch(0.55 0.22 305)",
    pros: ["Eén van de grootste free spins-pakketten in de markt", "Sportsbook én casino in één account", "13.000+ games — enorm aanbod", "Dagelijkse free spins-drops", "Arabian Nights-thema valt op"],
    cons: ["Wagering op deposit + bonus", "Free spins gespreid over 10 dagen (100/dag)", "Maximale uitbetaling per opname €5.000"],
    verdict: "JasminSlots is gemaakt voor slot-fanaten met geduld. Het volume aan free spins is uitzonderlijk groot.",
    intro: "JasminSlots werd in 2026 gelanceerd door Green Champions Leader SRL. Het Arabian Nights-thema en de drie-deels welkomstbonus maken het direct herkenbaar.",
    games: { slots: 13000, live: 180, table: 70 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Push Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "reload", "vip"],
    owner: "Green Champions Leader SRL",
    affiliateUrl: "#",
  },
  {
    slug: "vinyl-casino",
    rank: 8,
    name: "Vinyl",
    tagline: "Retro muziekthema met crypto checkout",
    rating: 8.6,
    bonusHeadline: "100% tot €500 + 200 Free Spins",
    bonusDetail: "Welkomstbonus met onderscheidend muziekthema.",
    maxBonus: 500,
    wagering: "35x B",
    lastTested: "2026-04-09",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/vinyl.png",
    benefits: ["Onderscheidend vinyl-thema", "Lage drempel (€10)", "Sportsbook + casino + esports"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 6 uur",
    minDeposit: "€10",
    licence: "Anjouan",
    established: 2023,
    angle: "mobile-experience",
    brandColor: "oklch(0.55 0.22 350)",
    pros: ["Onderscheidend vinyl-/muziekthema", "Lage drempel (€10 minimumstorting)", "200 free spins op eerste storting", "9.000+ games en VIP-programma", "Snelle crypto-uitbetalingen"],
    cons: ["Welkomstpakket niet hoger dan concurrenten", "Geen NL-taalondersteuning", "Maximumopname €5.000 per week"],
    verdict: "Vinyl Casino onderscheidt zich vooral door zijn herkenbare presentatie. Functioneel solide met sportsbook erbij.",
    intro: "Vinyl Casino is een Anjouan-platform sinds 2023 met een muziekgeoriënteerd design (platenhoezen als slot-categorieën) en een rewardprogramma met tournaments.",
    games: { slots: 9000, live: 100, table: 60 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Push Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload", "vip"],
    owner: "Vinyl Entertainment Ltd.",
    affiliateUrl: "#",
  },
  {
    slug: "spintexas",
    rank: 9,
    name: "SpinTexas",
    tagline: "Texas-thema met €2.000 + 1.000 spins",
    rating: 8.5,
    bonusHeadline: "350% tot €2.000 + 1.000 Free Spins",
    bonusDetail: "Welkomstaanbod over eerste drie stortingen.",
    maxBonus: 2000,
    wagering: "30x B",
    lastTested: "2026-04-08",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/spintexas.png",
    benefits: ["350% bonusplafond", "Cashback elke maandag (zonder wagering)", "13.000+ games + sportsbook"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 24 uur",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2025,
    badges: ["populair"],
    angle: "best-bonus",
    brandColor: "oklch(0.58 0.2 25)",
    pros: ["Hoog 350% bonusplafond", "Cashback zonder wagering elke maandag", "Onderscheidend Wild West-design", "13.000+ titels van 100+ providers", "Bet Mentor sportsbook-tool"],
    cons: ["Player complaints over account disputes", "Wagering 30x op bonusbedrag", "Live casino-tafels minder talrijk"],
    verdict: "SpinTexas combineert hoog bonusplafond met wekelijkse cashback. Sterk pakket voor wie veel speelt.",
    intro: "SpinTexas Casino kiest voor een uitgesproken Wild West-thema dat het uit de zee van anonieme offshore platforms tilt. Anjouan-vergund sinds 2025.",
    games: { slots: 13000, live: 100, table: 80 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Play'n GO", "Push Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "cashback", "reload"],
    owner: "SpinTexas Operations",
    affiliateUrl: "#",
  },
  {
    slug: "spinight",
    rank: 10,
    name: "SpiNight",
    tagline: "Nightlife thema met crypto en sportsbook",
    rating: 8.5,
    bonusHeadline: "300% tot €500 + 100 Free Spins",
    bonusDetail: "Welkomstpakket met loyalty-programma.",
    maxBonus: 500,
    wagering: "35x (D+B)",
    lastTested: "2026-04-11",
    ctaLabel: "Speel Nu",
    logoUrl: "/casino-logos/spinight.png",
    benefits: ["300% match-bonus", "Eén account voor casino, live én sport", "Crypto + iDEAL checkout"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard", "Skrill", "Crypto"],
    payoutTime: "Onder 8 uur",
    minDeposit: "€20",
    licence: "Anjouan",
    established: 2024,
    angle: "crypto-friendly",
    brandColor: "oklch(0.5 0.2 280)",
    pros: ["Aantrekkelijk 300% match-percentage", "Eén account voor casino, live én sport", "Loyaltyprogramma met progressive jackpots", "Sterk live casino van Evolution", "Crypto- en iDEAL-checkout naadloos gemixt"],
    cons: ["Bonusbedrag is bescheiden (max €500)", "Wagering op deposit + bonus", "Reload-bonussen vereisen code-invoer"],
    verdict: "SpiNight is een degelijk allround platform voor wie casino én sportweddenschappen wil combineren met een aantrekkelijk match-percentage.",
    intro: "SpiNight Casino positioneert zich rond een nightlife-esthetiek: donker design, neon-accenten en avondsessie-vibes. Anjouan-vergund sinds 2024.",
    games: { slots: 3500, live: 120, table: 60 },
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Play'n GO", "Push Gaming", "Evolution"],
    licences: ["Anjouan"],
    bonusTypes: ["welkomstbonus", "free-spins", "reload", "vip"],
    owner: "SpiNight Operations",
    affiliateUrl: "#",
  },
];

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
export const topCasinos = casinos.slice(0, 10);
