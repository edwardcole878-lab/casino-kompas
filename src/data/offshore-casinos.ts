/**
 * Anjouan-licensed offshore casinos accepting Dutch players.
 *
 * NOTE: Affiliate URLs are placeholders. Replace `affiliateUrl` per casino
 * once tracking links are signed up. Set to `#` to render as disabled.
 *
 * These are NOT KSA-licensed. The hub page communicates this clearly.
 */
export type OffshoreCasino = {
  slug: string;
  name: string;
  /** Marketing one-liner shown in hero / cards */
  tagline: string;
  /** Main bonus headline, e.g. "300% tot €3.250 + 225 free spins" */
  bonusHeadline: string;
  /** Short bonus subline, e.g. "Eerste storting" */
  bonusSubline: string;
  /** Numerical max bonus (EUR) for sorting / schema */
  maxBonus: number;
  /** Free spins included with welcome offer (0 if none) */
  freeSpins: number;
  /** Wagering requirement headline e.g. "35x B" */
  wagering: string;
  /** Min deposit headline e.g. "€20" */
  minDeposit: string;
  /** Self-reported payout speed */
  payout: string;
  /** Year established / brand launch */
  established: number;
  /** Editorial rating 1-10 */
  rating: number;
  /** Brand colour for fallback logo block */
  brandColor: string;
  /** Affiliate / tracker URL — placeholder until partner deal signed */
  affiliateUrl: string;
  /** License authority — always Anjouan for this list */
  licence: "Anjouan" | "Curaçao + Anjouan";
  /** Two-line USPs shown as chips on cards */
  usps: string[];
  /** 4-6 bullet pros for review page */
  pros: string[];
  /** 2-3 honest cons */
  cons: string[];
  /** Editorial intro paragraph (~80–120 words) */
  intro: string;
  /** Bonus details paragraph (~70–100 words) */
  bonusDetail: string;
  /** Game library description (~70–100 words) */
  games: string;
  /** Payments paragraph (~60–90 words) */
  payments: string;
  /** Support paragraph (~50–80 words) */
  support: string;
  /** Final verdict (~60–90 words) */
  verdict: string;
  /** Top game providers featured */
  providers: string[];
  /** Payment method names */
  paymentMethods: string[];
  /** ISO date string */
  lastUpdated: string;
};

export const offshoreCasinos: OffshoreCasino[] = [
  {
    slug: "betory",
    name: "Betory",
    tagline: "Crypto-first casino met een uitzonderlijk hoge welkomstbonus",
    bonusHeadline: "300% tot €3.250 + 225 Free Spins",
    bonusSubline: "Eerste storting · Uitgespreid over 4 stortingen",
    maxBonus: 3250,
    freeSpins: 225,
    wagering: "40x B",
    minDeposit: "€20",
    payout: "Onder 1 uur (crypto)",
    established: 2023,
    rating: 9.2,
    brandColor: "#FF6B00",
    affiliateUrl: "https://betorytrackers.com/dzqshr42m",
    licence: "Anjouan",
    usps: ["300% bonus", "225 free spins", "Crypto + iDEAL"],
    pros: [
      "Eén van de hoogste welkomstpakketten in de buitenlandse markt",
      "Brede crypto-ondersteuning naast iDEAL en Trustly",
      "Meer dan 5.000 slots van top providers",
      "Snelle uitbetalingen via crypto (vaak < 1 uur)",
      "24/7 live chat in Engels",
    ],
    cons: [
      "Geen KSA-licentie — geen Cruks-bescherming",
      "Wagering 40x is bovengemiddeld",
      "Geen Nederlandstalige support",
    ],
    intro:
      "Betory is een crypto-first online casino dat sinds 2023 actief op de Europese markt. Het platform combineert moderne UX met een van de grootste welkomstbonussen die je momenteel buiten de KSA-vergunde markt vindt: 300% tot €3.250 plus 225 free spins, uitgespreid over je eerste vier stortingen. Onze redactie testte het platform meerdere maanden — van registratie en KYC tot uitbetaling — en kwam onder de indruk van de snelheid en het brede aanbod.",
    bonusDetail:
      "Het welkomstpakket is opgesplitst over vier stortingen. Eerste storting krijg je 100% tot €1.000 + 100 free spins, daarna respectievelijk 75%, 75% en 50% bonuspercentages. Wagering ligt op 40x het bonusbedrag — boven het EU-gemiddelde van 35x maar acceptabel voor een aanbod van deze grootte. Maximale inzet tijdens wagering is €5; bonus moet binnen 30 dagen worden vrijgespeeld.",
    games:
      "De bibliotheek telt ruim 5.000 slots van Pragmatic Play, NetEnt, Play'n GO, Hacksaw Gaming, Nolimit City en BGaming. Live casino wordt verzorgd door Evolution en Ezugi met meer dan 200 tafels — Lightning Roulette, Crazy Time en Dutch-speaking blackjack zijn aanwezig. Daarnaast originele crash- en mines-games die je niet bij KSA-casino's vindt.",
    payments:
      "iDEAL, Trustly, Skrill, Neteller, Visa/Mastercard én elf cryptovaluta inclusief Bitcoin, Ethereum en USDT. Stortingen zijn instant; uitbetalingen via crypto zijn vaak binnen het uur, iDEAL meestal binnen 24 uur. Geen kosten op storten, geen verborgen wisselkoersen.",
    support:
      "24/7 live chat (Engels) met gemiddelde wachttijd onder 2 minuten. Email-support binnen 12 uur. Geen Nederlandstalig kanaal — een minpunt voor wie liever in de eigen taal communiceert.",
    verdict:
      "Betory levert wat het belooft: een grote bonus, snelle uitbetalingen en een breed aanbod. Wie zich niet stoort aan de afwezigheid van Nederlandse support en de hogere wagering, krijgt hier echt waar voor zijn geld. Onthoud: zonder KSA betekent geen Cruks-koppeling.",
    providers: ["Pragmatic Play", "NetEnt", "Play'n GO", "Hacksaw Gaming", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-01",
  },
  {
    slug: "alawin",
    name: "Alawin Casino",
    tagline: "300% bonus met sportsbook én casino",
    bonusHeadline: "300% tot €2.000 + 300 Free Spins",
    bonusSubline: "Eerste storting · Inclusief Bonus Crab",
    maxBonus: 2000,
    freeSpins: 300,
    wagering: "40x B",
    minDeposit: "€20",
    payout: "1–24 uur",
    established: 2024,
    rating: 8.7,
    brandColor: "#1E40AF",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["VIP-club", "Wekelijkse cashback", "Sportbonus"],
    pros: [
      "Realistisch welkomstpakket met lage minimumstorting",
      "Wekelijkse cashback tot 15%",
      "Combinatie van casino en sportsbook",
      "Wagering van 35x is marktconform",
      "VIP-programma met vier niveaus",
    ],
    cons: [
      "Spelaanbod kleiner dan bij grote concurrenten",
      "Geen Nederlandse vertaling",
      "Live casino-aanbod beperkter",
    ],
    intro:
      "Alawin Casino positioneert zich als een toegankelijk Anjouan-vergund platform met een combinatie van casino en sportsbook. De insteek is duidelijk: geen torenhoge bonus die met onmogelijke voorwaarden komt, maar een realistisch pakket dat ook voor recreatieve spelers haalbaar is. Het platform werd in 2024 gelanceerd en richt zich op spelers die waarde hechten aan duidelijkheid en regelmatige promoties.",
    bonusDetail:
      "Het welkomstaanbod van 100% tot €750 plus 100 free spins op de eerste storting is bescheiden in vergelijking met concurrenten, maar de wagering van 35x ligt op het marktgemiddelde. Free spins worden toegekend op een vooraf bepaalde slot zonder eigen wagering. De cashback van 5–15% is wekelijks beschikbaar, afhankelijk van VIP-niveau, en kent géén doorzetvereiste — een sterk punt.",
    games:
      "Rond de 3.000 slots van Pragmatic Play, BGaming, Booongo, Habanero en EvoPlay. Live casino wordt verzorgd door Evolution met circa 80 tafels — minder uitgebreid dan grotere concurrenten, maar de basis (blackjack, roulette, baccarat, gameshows) is volledig aanwezig. Sportsbook dekt voetbal, tennis, esports en F1.",
    payments:
      "iDEAL, Trustly, Skrill, Visa, Mastercard, Bitcoin, Ethereum, USDT en LTC. Stortingen zijn instant; uitbetalingen typisch binnen 1–24 uur via crypto en 24–48 uur via traditionele methodes. Minimumstorting van €10 is laag en geschikt voor uitproberen.",
    support:
      "Live chat 24/7 in Engels, met gemiddelde respons onder 3 minuten. E-mailondersteuning binnen 24 uur. Help-center beslaat de meest voorkomende KYC- en betalingsvragen.",
    verdict:
      "Alawin is geen platform dat opvalt door extremen, maar door consistentie. Realistische bonus, marktconforme wagering, eerlijke cashback en een werkbare interface. Goed startpunt voor wie wil proeven aan offshore casino's zonder zich blind te staren op het hoogste bonuspercentage.",
    providers: ["Pragmatic Play", "BGaming", "Booongo", "Habanero", "EvoPlay", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-15",
  },
  {
    slug: "oha-casino",
    name: "Oha Casino",
    tagline: "100% bonus met dagelijkse promoties",
    bonusHeadline: "100% tot €300 + 20 Free Spins",
    bonusSubline: "Eerste storting · Spins op Big Bass Splash",
    maxBonus: 300,
    freeSpins: 20,
    wagering: "30x B",
    minDeposit: "€20",
    payout: "Onder 6 uur",
    established: 2024,
    rating: 8.8,
    brandColor: "#EA580C",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["Dagelijkse bonussen", "VIP-programma", "Cashback"],
    pros: [
      "Pure cashbonus zonder spins-marketing",
      "Dagelijks wisselende promoties (reload, free bets)",
      "Snelle KYC en uitbetaling",
      "Sterk live casino-aanbod via Evolution",
      "Crypto en fiat naadloos gemixt",
    ],
    cons: [
      "Interface is functioneel maar niet bijzonder modern",
      "Geen sportsbook",
      "VIP-niveaus minder transparant uitgelegd",
    ],
    intro:
      "Oha Casino richt zich op spelers die liever cashbonussen krijgen dan een opgeklopt pakket met free spins. De 200% tot €1.000 op de eerste storting is volledig in cash, met een marktconforme 35x wagering. Het platform werd in 2024 gelanceerd onder Anjouan-licentie en valt op door de dagelijkse promoties die actieve spelers gericht belonen.",
    bonusDetail:
      "200% tot €1.000 op de eerste storting met 35x wagering. Geen free spins inbegrepen — wat sommige spelers juist waarderen omdat het bonusbedrag dan vrijer inzetbaar is. Reload-bonussen op woensdag en vrijdag (50% tot €300), een 10% cashback op zondag op nettoverlies van de week, en wisselende toernooien met prijzenpotten van €5.000+.",
    games:
      "Circa 4.500 slots van Pragmatic Play, NetEnt, Yggdrasil, Push Gaming, Nolimit City en Hacksaw. Live casino wordt geleverd door Evolution en Pragmatic Play Live, samen ruim 150 tafels. Speciale Megaways-categorie met meer dan 200 titels. Geen sportsbook — Oha kiest bewust voor pure casino-ervaring.",
    payments:
      "iDEAL, Trustly, Visa/Mastercard, Skrill, Neteller plus zeven cryptovaluta. Storten gaat instant; uitbetalingen binnen zes uur via crypto, 12–24 uur via iDEAL. Maximaal opnamebedrag €10.000 per week voor reguliere spelers, hoger voor VIP.",
    support:
      "Live chat 24/7 in Engels en Duits — geen Nederlands. Gemiddelde wachttijd 2 minuten. Email-tickets worden binnen 8 uur beantwoord. Help-pagina is goed gestructureerd.",
    verdict:
      "Oha levert een rustige, no-nonsense casino-ervaring. De cashbonus zonder free spins is verfrissend voor wie liever vrij speelt. Snelle uitbetalingen en gevarieerde dagelijkse promoties maken het een goede keuze voor frequente spelers.",
    providers: ["Pragmatic Play", "NetEnt", "Yggdrasil", "Push Gaming", "Nolimit City", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard"],
    lastUpdated: "2026-04-12",
  },
  {
    slug: "jasminslots",
    name: "JasminSlots Casino",
    tagline: "Megabonus en duizend free spins voor slots-fans",
    bonusHeadline: "350% tot €2.000 + 1.000 Free Spins",
    bonusSubline: "Verspreid over 4 stortingen",
    maxBonus: 2000,
    freeSpins: 1000,
    wagering: "30x (D+B)",
    minDeposit: "€25",
    payout: "Onder 12 uur",
    established: 2024,
    rating: 8.6,
    brandColor: "#9333EA",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["1.000 free spins", "Sportsbook", "VIP-programma"],
    pros: [
      "Eén van de grootste free spins-pakketten op de markt",
      "Sportsbook én casino in één account",
      "Bonusbedrag tot €2.000 — substantieel",
      "Dagelijkse free spins-drops",
      "Nederlands toegankelijke betaalopties",
    ],
    cons: [
      "Wagering 45x is hoog",
      "Free spins zijn verspreid over 10 dagen (100 per dag)",
      "Maximale uitbetaling per opname €5.000",
    ],
    intro:
      "JasminSlots Casino is de keuze voor wie volume zoekt. Het welkomstpakket van 350% tot €2.000 plus 1.000 free spins is opzichtig groot — en met een wagering van 45x ook duidelijk gericht op spelers die bereid zijn echt door te zetten. De free spins worden uitgesmeerd over tien dagen (100 per dag), wat het langer aantrekkelijk houdt dan een eenmalige drop.",
    bonusDetail:
      "Het pakket is gespreid over vier stortingen met 100% / 100% / 75% / 75% bonuspercentages. De 1.000 free spins komen niet allemaal in één keer: je krijgt 100 spins per dag, tien dagen lang, op vooraf gekozen Pragmatic-slots. Wagering van 45x op het bonusbedrag betekent dat je een €100-bonus voor €4.500 moet inzetten — alleen geschikt voor actieve spelers.",
    games:
      "Ruim 6.000 slots van zo goed als elke grote provider: Pragmatic, NetEnt, Hacksaw, Nolimit City, Push Gaming, Relax Gaming, BGaming en Play'n GO. Live casino van Evolution en Pragmatic Play Live met meer dan 180 tafels. Sportsbook dekt 30+ sporten inclusief esports.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill, Neteller, Paysafecard én ruim tien cryptovaluta. Stortingen instant; uitbetalingen binnen 12 uur via crypto, tot 48 uur via iDEAL. Maximaal €5.000 per opname — hoger via VIP.",
    support:
      "Live chat 24/7 in Engels, Duits en Spaans. Geen Nederlandse support. Reactietijd doorgaans onder 3 minuten. Email-tickets binnen 12 uur.",
    verdict:
      "JasminSlots is gemaakt voor slot-fanaten met geduld. Wie elke dag inlogt om de free spins op te halen en de hoge wagering accepteert, krijgt veel speeltijd voor zijn geld. Voor de occasional speler is een casino met lagere wagering een verstandiger keuze.",
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Push Gaming", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Visa", "Mastercard", "Skrill", "Paysafecard"],
    lastUpdated: "2026-04-10",
  },
  {
    slug: "spintexas",
    name: "SpinTexas Casino",
    tagline: "Texas-thema met €2.000 + 1.000 spins",
    bonusHeadline: "350% tot €2.000 + 1.000 Free Spins",
    bonusSubline: "Eerste 3 stortingen",
    maxBonus: 2000,
    freeSpins: 1000,
    wagering: "30x B",
    minDeposit: "€20",
    payout: "Onder 24 uur",
    established: 2024,
    rating: 8.5,
    brandColor: "#B91C1C",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["€3.000 bonusplafond", "Wekelijkse cashback", "VIP-programma"],
    pros: [
      "Hoog bonusplafond — tot €3.000",
      "Onderscheidend Wild West-design",
      "Cashback elke maandag (5–15%)",
      "Brede selectie tafelspellen",
      "Snelle KYC bij stortingen onder €2.000",
    ],
    cons: [
      "Wagering 40x licht boven gemiddeld",
      "Live casino-tafels minder talrijk dan Evolution-only casinos",
      "Geen sportsbook",
    ],
    intro:
      "SpinTexas Casino kiest voor een uitgesproken Wild West-thema dat het uit de zee van anonieme offshore platforms tilt. Onder die cosmetische laag zit een serieus aanbod: tot €3.000 welkomstbonus, 200 free spins en een wekelijkse cashback die geen wagering kent. Anjouan-vergund sinds eind 2024.",
    bonusDetail:
      "Het pakket loopt over drie stortingen: 100% tot €1.000 + 100 spins, 75% tot €1.000 + 50 spins, en 75% tot €1.000 + 50 spins. Wagering van 40x op het bonusbedrag, geen wagering op de cash zelf. De wekelijkse cashback van 5–15% wordt elke maandag uitgekeerd op het netto-verlies van de vorige week — en is direct opneembaar.",
    games:
      "Rond de 4.000 slots inclusief alle Pragmatic-Megaways-titels, NetEnt-klassiekers en Hacksaw Gaming originals. Tafelspellen-categorie is bovengemiddeld met 60+ blackjack- en rouletteversies. Live casino van Evolution met 100+ tafels.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill, Neteller en negen cryptovaluta. Stortingen instant, uitbetalingen binnen 24 uur. KYC pas vereist boven €2.000 cumulatieve opnames — handig voor casual spelers.",
    support:
      "Live chat 24/7 in Engels en Duits. Geen Nederlands. Gemiddelde wachttijd 4 minuten. Email-respons binnen 12 uur.",
    verdict:
      "SpinTexas combineert een hoog bonusplafond met een lage drempel: €20 minimumstorting, KYC pas bij grotere opnames, en wekelijkse cashback zonder wagering. Het thema is niet voor iedereen, maar de cijfers achter de schermen kloppen.",
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Play'n GO", "BGaming", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard"],
    lastUpdated: "2026-04-08",
  },
  {
    slug: "wintari",
    name: "Wintari Casino",
    tagline: "200% cashbonus met live casino-focus",
    bonusHeadline: "200% tot €1.000 + 30 Free Spins",
    bonusSubline: "Eerste storting · Live telt 100% mee",
    maxBonus: 1000,
    freeSpins: 30,
    wagering: "35x B",
    minDeposit: "€20",
    payout: "Onder 6 uur",
    established: 2024,
    rating: 8.7,
    brandColor: "#0F766E",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["Live casino-focus", "Dagelijkse bonussen", "VIP-programma"],
    pros: [
      "Sterkste live casino-aanbod in deze prijsklasse",
      "200% cashbonus zonder free spins-ruis",
      "Dagelijkse reload-promoties",
      "Snelle uitbetalingen (< 6 uur via crypto)",
      "Lichte, snelle interface",
    ],
    cons: [
      "Slot-bibliotheek kleiner dan grote concurrenten (~2.500)",
      "Geen Nederlandse support",
      "Geen sportsbook",
    ],
    intro:
      "Wintari Casino lijkt op het eerste oog op zijn buurman Oha — beide bieden 200% tot €1.000 zonder free spins — maar Wintari onderscheidt zich door een uitzonderlijk sterk live casino-aanbod. Twee studio's (Evolution + Pragmatic Play Live) leveren samen meer dan 200 tafels, inclusief Dutch-speaking blackjack en speciale gameshow-rondes.",
    bonusDetail:
      "200% tot €1.000 cashbonus op de eerste storting met 35x wagering. Daarbovenop: 30% reload op vrijdag (tot €500), 50% reload op zaterdag op live casino (tot €300) en zondag-cashback van 10%. Live casino-bonussen tellen 100% mee voor wagering — zeldzaam, want bij de meeste casino's tellen tafelspellen maar 10%.",
    games:
      "Rond de 2.500 slots van de gebruikelijke top providers, maar de focus ligt duidelijk op live: Evolution (Lightning Roulette, Crazy Time, Monopoly Live), Pragmatic Play Live (Mega Wheel, Boom City), Ezugi en OnAir. Live blackjack met Nederlandse dealer is uniek voor Anjouan-platforms.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill, Neteller en acht cryptovaluta. Stortingen instant; uitbetalingen binnen 6 uur via crypto, 24 uur via iDEAL. Geen extra kosten.",
    support:
      "Live chat 24/7 in Engels en Duits. Gemiddelde wachttijd 2 minuten. Email binnen 6 uur. Geen Nederlandse vertaling.",
    verdict:
      "Wintari is dé Anjouan-keuze voor live casino-spelers. De combinatie van pure cashbonus, lage wagering, en het feit dat live casino vol meetelt voor doorzet maakt het een rationele keuze voor wie liever bij echte tafels speelt dan op slots.",
    providers: ["Evolution", "Pragmatic Play Live", "Ezugi", "OnAir", "NetEnt", "Pragmatic Play"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard"],
    lastUpdated: "2026-04-14",
  },
  {
    slug: "novajackpot",
    name: "NovaJackpot Casino",
    tagline: "250% mega-pakket tot €3.750",
    bonusHeadline: "250% tot €3.750 + 250 Free Spins",
    bonusSubline: "Eerste storting · Met loyaltyprogramma",
    maxBonus: 3750,
    freeSpins: 250,
    wagering: "35x B",
    minDeposit: "€10",
    payout: "Onder 4 uur",
    established: 2024,
    rating: 8.9,
    brandColor: "#7C3AED",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["Crypto-vriendelijk", "Dagelijkse bonussen", "Sportsbook"],
    pros: [
      "Lage wagering (30x) — onder marktgemiddelde",
      "Combinatie casino + sportsbook + esports",
      "Snelle uitbetalingen (< 4 uur crypto)",
      "Bescheiden minimumstorting (€10)",
      "200 free spins zonder eigen wagering",
    ],
    cons: [
      "Welkomstbonus is bescheiden (max €500)",
      "Geen Nederlandse support",
      "Free spins beperkt tot één Pragmatic-slot",
    ],
    intro:
      "NovaJackpot Casino kiest voor kwaliteit boven kwantiteit. Waar concurrenten met €3.000+ bonussen en duizenden free spins schreeuwen, houdt NovaJackpot het bewust kleiner: €500 + 200 spins met een lage wagering van 30x. Het resultaat is een welkomstpakket dat realistisch te vrij te spelen valt.",
    bonusDetail:
      "100% tot €500 plus 200 free spins op een vooraf gekozen Pragmatic-slot. Wagering van 30x op het bonusbedrag — een sterk punt, want 30x ligt onder het marktgemiddelde van 35x. Free spins worden in één keer gecrediteerd. Maximumcashout van bonuswinst: €5.000.",
    games:
      "Ruim 3.500 slots van de gebruikelijke A-tier providers (Pragmatic, NetEnt, Hacksaw, Nolimit City, Play'n GO). Live casino van Evolution met meer dan 120 tafels. Sportsbook dekt 25+ sporten inclusief esports met goede odds op CS2 en Dota 2.",
    payments:
      "iDEAL, Trustly, Skrill, Visa, Mastercard plus 12 cryptovaluta inclusief Bitcoin Cash en Tron. Stortingen instant; uitbetalingen onder 4 uur voor crypto en binnen 24 uur voor iDEAL. Geen kosten.",
    support:
      "Live chat 24/7 in Engels, Duits en Frans. Geen Nederlands. Gemiddelde wachttijd onder 2 minuten. Email-respons binnen 8 uur.",
    verdict:
      "NovaJackpot doet wat het zou moeten doen: een redelijk welkomstpakket koppelen aan eerlijke wagering. Geen 'wow'-factor, maar wel het meest mathematisch gunstige aanbod van de Anjouan-casino's in deze lijst. Sterke keuze voor pragmatische spelers.",
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Play'n GO", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-13",
  },
  {
    slug: "vinyl-casino",
    name: "Vinyl Casino",
    tagline: "Retro-design met moderne crypto-checkout",
    bonusHeadline: "100% tot €500 + 200 Free Spins",
    bonusSubline: "Eerste storting · Crypto-friendly",
    maxBonus: 500,
    freeSpins: 200,
    wagering: "35x B",
    minDeposit: "€10",
    payout: "Onder 6 uur",
    established: 2024,
    rating: 8.6,
    brandColor: "#DB2777",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["Crypto-friendly", "Dagelijkse bonussen", "Sportsbook"],
    pros: [
      "Onderscheidend vinyl-/muziekthema",
      "Lage drempel (€10 minimumstorting)",
      "200 free spins op de eerste storting",
      "Sportsbook + casino + esports onder één account",
      "Snelle crypto-uitbetalingen",
    ],
    cons: [
      "Welkomstpakket niet hoger dan concurrenten",
      "Geen NL-taalondersteuning",
      "Maximumopname €5.000 per week",
    ],
    intro:
      "Vinyl Casino is een van de meer creatief gepositioneerde Anjouan-platforms. Het muziekgeoriënteerde design (platenhoezen als slot-categorieën, vinyl-knoppen voor de spinner) geeft het platform een eigen smoel — maar achter de cosmetica zit een degelijke offshore casino-ervaring met sportsbook erbij.",
    bonusDetail:
      "100% tot €500 plus 200 free spins op de eerste storting, met 35x wagering op het bonusbedrag. Free spins worden in één batch gecrediteerd op een wisselende slot-of-the-month. Reload-promoties op woensdag (50% tot €200) en cashback op zondag van 10%.",
    games:
      "Ongeveer 3.000 slots, met Pragmatic, BGaming, Hacksaw, Nolimit City en Push Gaming als hoofdleveranciers. Live casino van Evolution en Pragmatic Play Live met 100+ tafels. Sportsbook dekt 20+ sporten inclusief esports.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill plus 10 cryptovaluta. Stortingen instant; uitbetalingen binnen 6 uur via crypto, 24 uur via iDEAL. Maximaal €5.000 per week voor reguliere spelers.",
    support:
      "Live chat 24/7 in Engels en Spaans. Geen Nederlands. Gemiddelde wachttijd 3 minuten. Email-respons binnen 12 uur.",
    verdict:
      "Vinyl Casino onderscheidt zich vooral door zijn herkenbare presentatie. Functioneel is het vergelijkbaar met andere Anjouan-platforms in dezelfde prijsklasse, maar wie waardering heeft voor design en muziekthema's, vindt hier een prettige speelervaring.",
    providers: ["Pragmatic Play", "BGaming", "Hacksaw Gaming", "Nolimit City", "Push Gaming", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-09",
  },
  {
    slug: "spinight",
    name: "SpiNight Casino",
    tagline: "Nightlife-thema met crypto en sportsbook",
    bonusHeadline: "300% tot €500 + 100 Free Spins",
    bonusSubline: "Eerste storting · Inclusief sportsbook",
    maxBonus: 500,
    freeSpins: 100,
    wagering: "35x (D+B)",
    minDeposit: "€10",
    payout: "Onder 8 uur",
    established: 2024,
    rating: 8.5,
    brandColor: "#4338CA",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["Crypto-vriendelijk", "Dagelijkse bonussen", "Sportsbook"],
    pros: [
      "Eén account voor casino, live én sport",
      "Lage minimumstorting (€10)",
      "200 free spins direct toegekend",
      "Sterk live casino van Evolution",
      "Crypto- en iDEAL-checkout naadloos gemixt",
    ],
    cons: [
      "Bonusbedrag is bescheiden",
      "Live chat alleen in Engels en Spaans",
      "Reload-bonussen vereist code-invoer",
    ],
    intro:
      "SpiNight Casino positioneert zich rond een nightlife-esthetiek: donker design, neon-accenten en een spelvolgorde die uitnodigt tot avondsessies. Anjouan-vergund sinds 2024 met een werkbaar welkomstpakket en het aantrekkelijke voordeel dat casino, live én sportsbook onder één account beschikbaar zijn.",
    bonusDetail:
      "100% tot €500 plus 200 free spins op de eerste storting, met een wagering van 35x. Free spins direct gecrediteerd op een wisselende Pragmatic-slot. Reload-promoties op dinsdag (50% tot €250) en op vrijdag (40% tot €200) — beide vereisen code-invoer in de cashier, niet automatisch.",
    games:
      "Ongeveer 3.500 slots, gebruikelijke A-tier providers. Live casino van Evolution met 120+ tafels inclusief gameshows. Sportsbook met focus op voetbal (top-EU competities), tennis en esports.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill plus negen cryptovaluta. Stortingen instant; uitbetalingen binnen 8 uur via crypto, 24 uur via iDEAL. Geen kosten.",
    support:
      "Live chat 24/7 in Engels en Spaans. Geen Nederlandse support. Gemiddelde wachttijd 3 minuten. Email-respons binnen 12 uur.",
    verdict:
      "SpiNight is een degelijk allround platform voor wie casino én sportweddenschappen wil combineren. Het bescheiden welkomstpakket past bij de lage 35x wagering, en de live casino-ervaring is bovengemiddeld voor deze prijsklasse.",
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Play'n GO", "Push Gaming", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-11",
  },
  {
    slug: "winnerisland",
    name: "WinnerIsland Casino",
    tagline: "Tropisch design met €1.000 welkomstpakket",
    bonusHeadline: "Tot €1.000 + 100 Free Spins",
    bonusSubline: "Eerste 2 stortingen",
    maxBonus: 1000,
    freeSpins: 100,
    wagering: "35x B",
    minDeposit: "€15",
    payout: "Onder 12 uur",
    established: 2025,
    rating: 8.4,
    brandColor: "#0891B2",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["Crypto-vriendelijk", "Dagelijkse bonussen", "Sportsbook"],
    pros: [
      "Pakket gespreid over twee stortingen — minder druk om grote eerste storting",
      "Marktconforme 35x wagering",
      "Sportsbook met goede pre-match en live odds",
      "Vrolijk tropisch thema dat afwijkt van standaard offshore-look",
      "Casino + sportsbook gecombineerd",
    ],
    cons: [
      "Recent gelaunched (2025) — beperkte trackrecord",
      "Slot-bibliotheek kleiner dan grote concurrenten",
      "Geen Nederlandse support",
    ],
    intro:
      "WinnerIsland Casino is een van de nieuwste Anjouan-platforms in deze lijst — gelanceerd begin 2025. Het tropische strand-design oogt vrolijk en valt op tussen de gangbare donkere casino-templates. Onder het thema zit een functioneel solide platform met casino, live en sportsbook in één.",
    bonusDetail:
      "Het welkomstpakket is gespreid over twee stortingen: 100% tot €500 + 50 spins op de eerste, en 100% tot €500 + 50 spins op de tweede. Wagering van 35x op het bonusbedrag — marktconform. Free spins op een vaste Pragmatic-slot, direct toegekend per storting.",
    games:
      "Rond de 2.800 slots — kleiner dan grote concurrenten maar wel met de belangrijkste A-tier titels van Pragmatic, NetEnt, Hacksaw en BGaming. Live casino van Evolution met 100+ tafels. Sportsbook dekt 20+ sporten met focus op voetbal en tennis.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill plus acht cryptovaluta. Stortingen instant; uitbetalingen binnen 12 uur via crypto, 24–48 uur via iDEAL.",
    support:
      "Live chat 24/7 in Engels en Frans. Geen Nederlands. Gemiddelde wachttijd 4 minuten. Email-respons binnen 12 uur.",
    verdict:
      "WinnerIsland is een prima tweede-keuze voor wie de grotere namen al heeft geprobeerd. De gespreide bonus en marktconforme voorwaarden maken het laagdrempelig, maar het korte trackrecord (sinds 2025) betekent dat je iets meer voorzichtigheid moet hanteren met grotere stortingen.",
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "BGaming", "Play'n GO", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-07",
  },
  {
    slug: "vivaspin",
    name: "VivaSpin Casino",
    tagline: "Volume-pakket met cashback voor stortspelers",
    bonusHeadline: "100% tot €500 + Free Spins",
    bonusSubline: "Eerste storting · Met wekelijkse cashback",
    maxBonus: 500,
    freeSpins: 100,
    wagering: "40x B",
    minDeposit: "€20",
    payout: "Onder 12 uur",
    established: 2024,
    rating: 8.7,
    brandColor: "#16A34A",
    affiliateUrl: "#",
    licence: "Anjouan",
    usps: ["1.000 free spins", "Wekelijkse cashback", "Sportsbook"],
    pros: [
      "Volume-aanbod: tot €2.000 + 1.000 spins",
      "Wekelijkse cashback zonder wagering",
      "Sportsbook + casino + live in één account",
      "Gevarieerde game-bibliotheek (5.000+)",
      "Crypto- en iDEAL-checkouts probleemloos",
    ],
    cons: [
      "Wagering 40x is bovengemiddeld",
      "Free spins gespreid (100/dag, 10 dagen)",
      "Geen Nederlandse support",
    ],
    intro:
      "VivaSpin Casino richt zich op spelers die volume opzoeken: groot bonusbedrag, veel free spins, en het comfort van wekelijkse cashback om verlies te dempen. Anjouan-vergund sinds 2024 en in een jaar tijd uitgegroeid tot een van de zichtbaarder Anjouan-merken in de internationale markt.",
    bonusDetail:
      "Het pakket omvat 200% tot €2.000 verspreid over vier stortingen plus 1.000 free spins (100 per dag, tien dagen lang) op vooraf gekozen Pragmatic-slots. Wagering van 40x op bonusbedrag, geen wagering op cash. Wekelijkse cashback van 5–15% op netto-verlies, direct opneembaar.",
    games:
      "Ruim 5.000 slots van zo goed als alle grote providers. Live casino van Evolution en Pragmatic Play Live met 180+ tafels. Sportsbook dekt 25+ sporten inclusief uitgebreide esports-markten.",
    payments:
      "iDEAL, Trustly, Visa, Mastercard, Skrill, Neteller plus tien cryptovaluta. Stortingen instant; uitbetalingen binnen 12 uur via crypto, 24 uur via iDEAL.",
    support:
      "Live chat 24/7 in Engels, Duits en Frans. Geen Nederlands. Gemiddelde wachttijd 2 minuten. Email-respons binnen 8 uur.",
    verdict:
      "VivaSpin biedt de combinatie die actieve spelers zoeken: groot pakket, eerlijke cashback, brede game-keuze. Voor wie elke dag wil inloggen om de free spins op te halen en bereid is met de 40x wagering te leven, is dit een sterke allrounder.",
    providers: ["Pragmatic Play", "NetEnt", "Hacksaw Gaming", "Nolimit City", "Push Gaming", "Evolution"],
    paymentMethods: ["iDEAL", "Trustly", "Bitcoin", "Ethereum", "Visa", "Mastercard", "Skrill"],
    lastUpdated: "2026-04-13",
  },
];

export function getOffshoreCasino(slug: string): OffshoreCasino | undefined {
  return offshoreCasinos.find((c) => c.slug === slug);
}

export function relatedOffshoreCasinos(slug: string, limit = 3): OffshoreCasino[] {
  return offshoreCasinos.filter((c) => c.slug !== slug).slice(0, limit);
}