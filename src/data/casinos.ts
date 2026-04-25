export type PaymentMethod = "iDEAL" | "Bancontact" | "Visa" | "Mastercard" | "PayPal" | "Crypto" | "Trustly" | "Klarna" | "Skrill";

/** Optional brand logo URLs per payment method. Drop PNGs in /public/payments/. */
export const paymentLogoUrl: Partial<Record<PaymentMethod, string>> = {
  // e.g. iDEAL: "/payments/ideal.svg",
};

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
};

export const casinos: Casino[] = [
  {
    slug: "royal-orange",
    logoUrl: "/logos/royal-orange.png",
    rank: 1,
    name: "Royal Orange",
    tagline: "De allround favoriet van Nederland",
    rating: 9.6,
    bonusHeadline: "100% tot €500 + 200 Free Spins",
    bonusDetail: "Welkomstpakket met lage doorzetvereisten van 25x.",
    maxBonus: 500,
    wagering: "25x",
    lastTested: "2026-04-12",
    ctaLabel: "Speel Nu",
    benefits: ["iDEAL binnen 5 min uitbetaald", "Nederlandstalige support 24/7", "Lage wagering 25x"],
    payments: ["iDEAL", "Bancontact", "Trustly", "Visa", "Mastercard"],
    payoutTime: "0-2 uur",
    minDeposit: "€10",
    licence: "Kansspelautoriteit (KSA)",
    established: 2021,
    badges: ["populair", "redactie"],
    highlight: true,
    angle: "best-bonus",
    brandColor: "oklch(0.65 0.2 45)",
    pros: ["Hoogste welkomstbonus in onze test", "Doorzet slechts 25x — uitzonderlijk laag", "Bonusvoorwaarden helder uitgelegd in het Nederlands", "Wekelijkse reload-bonussen voor bestaande spelers"],
    cons: ["Bonus alleen geldig op slots, niet op live casino", "Maximale inzet tijdens bonus is €5"],
    verdict: "Royal Orange biedt het sterkste bonusaanbod van alle door ons geteste casino's, met voorwaarden die spelers daadwerkelijk kunnen waarmaken.",
    intro: "Tijdens onze test van Royal Orange viel direct op hoe transparant het welkomstaanbod werd gepresenteerd. Geen verstopte voorwaarden, geen piepkleine lettertjes — gewoon een eerlijke 100% match en 200 free spins met een doorzet die voor recreatieve spelers haalbaar is.",
    games: { slots: 1850, live: 120, table: 65 },
  },
  {
    slug: "tulip-spin",
    logoUrl: "/logos/tulip-spin.png",
    rank: 2,
    name: "Tulip Spin",
    tagline: "Razendsnelle iDEAL-uitbetalingen",
    rating: 9.4,
    bonusHeadline: "€200 + 100 Free Spins",
    bonusDetail: "Snelle uitbetaling binnen 1 uur, zelfs in het weekend.",
    maxBonus: 200,
    wagering: "30x",
    lastTested: "2026-04-08",
    ctaLabel: "Speel Nu",
    benefits: ["Uitbetaling < 1 uur via iDEAL", "Geen verificatievertraging", "24/7 weekend-uitbetaling"],
    payments: ["iDEAL", "Trustly", "Visa", "Mastercard"],
    payoutTime: "15-60 min",
    minDeposit: "€10",
    licence: "Kansspelautoriteit (KSA)",
    established: 2022,
    badges: ["snel"],
    angle: "fastest-payout",
    brandColor: "oklch(0.62 0.16 145)",
    pros: ["Snelste uitbetalingen die we hebben gemeten", "iDEAL standaard ingesteld voor NL spelers", "KYC-verificatie vooraf mogelijk", "Geen verborgen kosten bij opname"],
    cons: ["Bonus is iets lager dan concurrenten", "Geen crypto-opties beschikbaar"],
    verdict: "Voor wie waarde hecht aan snel je geld op je rekening: Tulip Spin is wat ons betreft de onbetwiste #1 op uitbetaalsnelheid.",
    intro: "We deden meerdere uitbetalingstests bij Tulip Spin op verschillende tijdstippen — inclusief zondagavond. Gemiddelde wachttijd: 27 minuten. Dat is in de Nederlandse markt vrijwel ongekend en maakt dit casino tot een no-brainer voor spelers die niet dagen willen wachten.",
    games: { slots: 1400, live: 95, table: 50 },
  },
  {
    slug: "delta-casino",
    logoUrl: "/logos/delta-casino.png",
    rank: 3,
    name: "Delta Casino",
    tagline: "Beste mobiele casino-ervaring",
    rating: 9.2,
    bonusHeadline: "€150 + 50 Free Spins",
    bonusDetail: "Native app voor iOS en Android beschikbaar.",
    maxBonus: 150,
    wagering: "35x",
    lastTested: "2026-04-05",
    ctaLabel: "Speel Nu",
    benefits: ["Eigen iOS & Android app", "Touch-geoptimaliseerde slots", "Face ID login"],
    payments: ["iDEAL", "Bancontact", "Visa", "Mastercard", "Klarna"],
    payoutTime: "1-4 uur",
    minDeposit: "€10",
    licence: "Kansspelautoriteit (KSA)",
    established: 2020,
    badges: ["mobiel"],
    angle: "mobile-experience",
    brandColor: "oklch(0.55 0.18 250)",
    pros: ["Beste native casino-app in Nederland", "Werkt vlekkeloos op oudere toestellen", "Pushmeldingen voor toernooien", "iDEAL werkt naadloos in-app"],
    cons: ["Desktop-versie voelt minder modern", "Iets kleinere live casino-selectie"],
    verdict: "Wie voornamelijk op telefoon speelt, vindt bij Delta Casino de beste ervaring in de Nederlandse markt — geen workaround via browser nodig.",
    intro: "We testten Delta Casino een week lang exclusief op mobiel. Wat opvalt: dit is geen versimpelde desktopsite, maar een echte mobile-first ervaring. Slots laden in minder dan 2 seconden en de iDEAL-flow neemt slechts vier taps.",
    games: { slots: 1600, live: 80, table: 55 },
  },
  {
    slug: "nederzicht-casino",
    logoUrl: "/logos/nederzicht-casino.png",
    rank: 4,
    name: "Nederzicht Casino",
    tagline: "KSA-licentie en maximale spelersbescherming",
    rating: 9.0,
    bonusHeadline: "€100 zonder doorzet",
    bonusDetail: "Bonusbedrag direct opneembaar na 1x inzet.",
    maxBonus: 100,
    wagering: "1x",
    lastTested: "2026-04-02",
    ctaLabel: "Speel Nu",
    benefits: ["KSA-licentie sinds dag 1", "Cruks-koppeling actief", "Limieten per dag/week instelbaar"],
    payments: ["iDEAL", "Bancontact", "Visa"],
    payoutTime: "2-6 uur",
    minDeposit: "€10",
    licence: "Kansspelautoriteit (KSA) - Vergunning nr. 12345",
    established: 2019,
    badges: [],
    angle: "trust-license",
    brandColor: "oklch(0.45 0.1 220)",
    pros: ["Volledig vergund en gereguleerd in Nederland", "Verplichte deposit-limieten transparant zichtbaar", "Cruks integratie 100% functioneel", "Eerlijke RTP's gepubliceerd per spel"],
    cons: ["Promoties iets minder agressief", "Geen crypto-betalingen"],
    verdict: "Het veiligste keuze voor spelers die zekerheid en regelgeving boven bonussen stellen.",
    intro: "Nederzicht Casino is een van de eerste operators die in 2021 een KSA-vergunning kreeg toen de Nederlandse markt opende. Tijdens onze audit zagen we waarom: spelersbeschermingstools zijn geen afterthought maar diep verweven in het platform.",
    games: { slots: 1200, live: 70, table: 45 },
  },
  {
    slug: "live-arena",
    logoUrl: "/logos/live-arena.png",
    rank: 5,
    name: "Live Arena",
    tagline: "De grootste live casino-selectie",
    rating: 8.9,
    bonusHeadline: "€250 Live Casino Bonus",
    bonusDetail: "Specifieke bonus voor live tafels — uniek in NL.",
    maxBonus: 250,
    wagering: "30x",
    lastTested: "2026-03-28",
    ctaLabel: "Speel Nu",
    benefits: ["250+ live tafels", "Nederlandstalige dealers", "Evolution & Pragmatic Live"],
    payments: ["iDEAL", "Bancontact", "Trustly", "Visa", "Mastercard"],
    payoutTime: "1-3 uur",
    minDeposit: "€20",
    licence: "Kansspelautoriteit (KSA)",
    established: 2022,
    angle: "live-casino",
    brandColor: "oklch(0.5 0.2 25)",
    pros: ["Grootste live casino-aanbod van NL", "Exclusieve Nederlandstalige blackjack-tafels", "HD-streams ook op 4G stabiel", "Live bonus telt mee voor wagering"],
    cons: ["Slots-aanbod minder uitgebreid", "Hogere minimum deposit"],
    verdict: "Voor de live casino liefhebber simpelweg de beste keuze in Nederland.",
    intro: "Live Arena heeft een duidelijke focus: live casino. Dat zie je terug in alles, van de Nederlandstalige dealers tot de exclusieve gametafels die je elders niet vindt. We speelden meer dan 40 uur live blackjack en roulette tijdens onze test.",
    games: { slots: 900, live: 250, table: 80 },
  },
  {
    slug: "spin-paleis",
    logoUrl: "/logos/spin-paleis.png",
    rank: 6,
    name: "Spin Paleis",
    tagline: "2.000+ slots van alle topproviders",
    rating: 8.7,
    bonusHeadline: "€300 + 300 Free Spins",
    bonusDetail: "Free spins verspreid over 10 dagen.",
    maxBonus: 300,
    wagering: "35x",
    lastTested: "2026-03-25",
    ctaLabel: "Speel Nu",
    benefits: ["2.100+ slots beschikbaar", "Megaways & jackpot-secties", "Wekelijkse slot-toernooien"],
    payments: ["iDEAL", "Bancontact", "Visa", "Mastercard", "Skrill"],
    payoutTime: "2-8 uur",
    minDeposit: "€10",
    licence: "Kansspelautoriteit (KSA)",
    established: 2021,
    angle: "slots-variety",
    brandColor: "oklch(0.55 0.2 320)",
    pros: ["Grootste slots-bibliotheek in onze test", "Slimme zoekfilters per provider", "Demo-modus voor alle slots", "Dagelijkse jackpot drops"],
    cons: ["Live casino is beperkt", "App ontbreekt — alleen browser"],
    verdict: "Slots-spelers krijgen hier meer keuze dan ze in een leven kunnen spelen.",
    intro: "Wie een specifieke slot zoekt, vindt hem waarschijnlijk bij Spin Paleis. Met 2.100+ titels van NetEnt, Pragmatic, Play'n GO, Hacksaw en tientallen andere providers is dit het Walhalla voor slots-fans.",
    games: { slots: 2100, live: 60, table: 40 },
  },
  {
    slug: "diamant-club",
    logoUrl: "/logos/diamant-club.png",
    rank: 7,
    name: "Diamant Club",
    tagline: "VIP-programma met persoonlijke manager",
    rating: 8.6,
    bonusHeadline: "Tot €1.000 cashback per maand",
    bonusDetail: "Voor VIP-leden vanaf level 3.",
    maxBonus: 1000,
    wagering: "20x",
    lastTested: "2026-03-22",
    ctaLabel: "Speel Nu",
    benefits: ["10-niveaus loyaliteitsprogramma", "Persoonlijke account manager", "Exclusieve cashback"],
    payments: ["iDEAL", "Bancontact", "Trustly", "Visa", "Mastercard"],
    payoutTime: "1-4 uur",
    minDeposit: "€20",
    licence: "Kansspelautoriteit (KSA)",
    established: 2020,
    angle: "vip-program",
    brandColor: "oklch(0.6 0.15 200)",
    pros: ["Beste VIP-programma dat we testten", "Snellere uitbetalingen voor hogere levels", "Verjaardagsbonus en exclusieve evenementen", "Echte persoon als account manager"],
    cons: ["Voordelen pas merkbaar vanaf level 3", "Minder relevant voor casual spelers"],
    verdict: "Speel je regelmatig en met grotere bedragen? Dan loont Diamant Club zich snel via cashback en VIP-perks.",
    intro: "Loyaliteit wordt bij Diamant Club daadwerkelijk beloond. We volgden het programma drie maanden lang en zagen hoe een gemiddelde speler binnen zes weken niveau 3 bereikt — waar de echte voordelen beginnen.",
    games: { slots: 1500, live: 100, table: 60 },
  },
  {
    slug: "ideal-prime",
    logoUrl: "/logos/ideal-prime.png",
    rank: 8,
    name: "iDEAL Prime",
    tagline: "Volledig geoptimaliseerd voor iDEAL-spelers",
    rating: 8.5,
    bonusHeadline: "€100 + 50 Free Spins via iDEAL",
    bonusDetail: "Exclusieve bonus voor iDEAL-stortingen.",
    maxBonus: 100,
    wagering: "30x",
    lastTested: "2026-03-18",
    ctaLabel: "Speel Nu",
    benefits: ["iDEAL 1-tap deposits", "Geen extra ID-check tot €2.000", "iDEAL-only welkomstbonus"],
    payments: ["iDEAL", "Bancontact"],
    payoutTime: "30 min - 2 uur",
    minDeposit: "€5",
    licence: "Kansspelautoriteit (KSA)",
    established: 2023,
    badges: ["nieuw"],
    angle: "ideal-experience",
    brandColor: "oklch(0.7 0.18 320)",
    pros: ["Laagste minimum deposit (€5)", "iDEAL-flow van 3 stappen", "Speciaal team voor NL-spelers", "Geen onnodige extra betaalmethoden — focus loont"],
    cons: ["Geen creditcard mogelijk", "Spelaanbod nog in opbouw"],
    verdict: "Als iDEAL je primaire betaalmethode is, is dit casino vanaf de eerste seconde voor jou ontworpen.",
    intro: "iDEAL Prime kiest bewust voor minder is meer: alleen Nederlandse betaalmethoden, geen verwarring, geen omwegen. Het resultaat is een betaalflow die zelfs onze minst tech-savvy testpersoon binnen 30 seconden begreep.",
    games: { slots: 1100, live: 75, table: 40 },
  },
  {
    slug: "crypto-vault",
    logoUrl: "/logos/crypto-vault.png",
    rank: 9,
    name: "Crypto Vault",
    tagline: "iDEAL én crypto onder één dak",
    rating: 8.3,
    bonusHeadline: "1 BTC bonus + 100 Free Spins",
    bonusDetail: "Crypto-bonus naast standaard iDEAL-bonus.",
    maxBonus: 1000,
    wagering: "40x",
    lastTested: "2026-03-15",
    ctaLabel: "Speel Nu",
    benefits: ["BTC, ETH, USDT geaccepteerd", "Provably fair games", "iDEAL voor traditionele spelers"],
    payments: ["iDEAL", "Crypto", "Visa", "Mastercard"],
    payoutTime: "Crypto: 10 min, iDEAL: 2 uur",
    minDeposit: "€10 / 0.001 BTC",
    licence: "Kansspelautoriteit (KSA)",
    established: 2022,
    angle: "crypto-friendly",
    brandColor: "oklch(0.7 0.18 60)",
    pros: ["Een van de weinige KSA-vergunde casino's met crypto", "Provably fair game-sectie", "Snellere uitbetaling in crypto", "Behoudt iDEAL voor wie liever klassiek stort"],
    cons: ["Crypto-bonus heeft hogere wagering", "Volatiliteit bij crypto-deposits"],
    verdict: "Het beste van twee werelden voor wie zowel klassiek als crypto wil kunnen spelen.",
    intro: "Crypto Vault doet iets ongebruikelijks: een KSA-vergunning combineren met crypto-betalingen. We testten beide flows uitgebreid en beide werken zoals beloofd, met crypto-uitbetalingen zelfs sneller dan iDEAL.",
    games: { slots: 1300, live: 65, table: 35 },
  },
  {
    slug: "zilveren-spin",
    logoUrl: "/logos/zilveren-spin.png",
    rank: 10,
    name: "Zilveren Spin",
    tagline: "Bonus met de laagste doorzetvereisten",
    rating: 8.1,
    bonusHeadline: "€75 met slechts 10x doorzet",
    bonusDetail: "De eerlijkste wagering van alle geteste casino's.",
    maxBonus: 75,
    wagering: "10x",
    lastTested: "2026-03-10",
    ctaLabel: "Speel Nu",
    benefits: ["Doorzet slechts 10x", "30 dagen geldig", "Geen max winst-cap"],
    payments: ["iDEAL", "Bancontact", "Visa"],
    payoutTime: "2-12 uur",
    minDeposit: "€10",
    licence: "Kansspelautoriteit (KSA)",
    established: 2023,
    angle: "low-wagering",
    brandColor: "oklch(0.7 0.05 250)",
    pros: ["Laagste doorzetvereisten in onze hele test", "Geen verborgen max-winst limiet", "30 dagen om wagering te voltooien", "Bonus telt voor alle game-categorieën"],
    cons: ["Bonusbedrag is bescheiden", "Spelaanbod nog beperkt"],
    verdict: "De bonus is kleiner, maar je houdt er daadwerkelijk wat aan over — een zeldzaamheid in de markt.",
    intro: "De meeste 'grote' bonussen zijn in de praktijk bijna onmogelijk om vrij te spelen. Zilveren Spin draait dat om: een bescheiden bonus met voorwaarden die je écht kunt halen. Wij rekenden het door — en de cijfers kloppen.",
    games: { slots: 850, live: 50, table: 30 },
  },
];

export const getCasino = (slug: string) => casinos.find((c) => c.slug === slug);
export const relatedCasinos = (slug: string, count = 3) =>
  casinos.filter((c) => c.slug !== slug).slice(0, count);
