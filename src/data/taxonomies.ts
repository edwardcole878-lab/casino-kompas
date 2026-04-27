import type { Casino, PaymentMethod, Provider, Licence, BonusType } from "./casinos";
import { casinos } from "./casinos";

/** A taxonomy term: the URL slug, display name, intro copy and SEO meta. */
export type Term = {
  slug: string;
  name: string;
  /** Short subtitle used on listing/cards */
  tagline: string;
  /** 1-2 sentence intro (used in meta description and page intro) */
  intro: string;
  /** Long-form copy (Markdown-free, supports paragraphs separated by \n\n) */
  body: string;
  /** FAQ specific to this term */
  faq: { q: string; a: string }[];
};

// ── Payment methods ────────────────────────────────────────────────
export const paymentTerms: Record<PaymentMethod, Term> = {
  iDEAL: {
    slug: "ideal",
    name: "iDEAL",
    tagline: "De populairste betaalmethode van Nederland",
    intro:
      "iDEAL is verreweg de meest gebruikte betaalmethode in Nederlandse online casino's. Direct vanuit je eigen bank, zonder kaartgegevens en met de snelste uitbetalingen.",
    body:
      "Vrijwel ieder KSA-vergund online casino in Nederland accepteert iDEAL. De methode is gratis, werkt vanuit je eigen bank-app en stortingen zijn binnen seconden zichtbaar in je casino-account.\n\nVoor uitbetalingen geldt: hoe sneller het casino zelf is met de interne goedkeuring, hoe sneller het geld op je rekening staat. Bij de besten in onze ranking is dat binnen een uur — ook in het weekend.",
    faq: [
      { q: "Zijn iDEAL-stortingen direct beschikbaar?", a: "Ja, iDEAL-stortingen zijn doorgaans binnen enkele seconden zichtbaar in je casino-account." },
      { q: "Wat is de minimum iDEAL-storting?", a: "De meeste casino's hanteren €10. Sommige, zoals iDEAL Prime, accepteren al vanaf €5." },
      { q: "Hoe snel kan ik geld opnemen via iDEAL?", a: "Bij snelle casino's binnen een uur, gemiddeld 1–4 uur, en bij langzamere operators tot 24 uur." },
      { q: "Kost iDEAL extra?", a: "Nee, iDEAL is altijd gratis voor de speler. Casino's brengen geen kosten in rekening voor stortingen of opnames." },
    ],
  },
  Bancontact: {
    slug: "bancontact",
    name: "Bancontact",
    tagline: "De Belgische tegenhanger van iDEAL",
    intro: "Bancontact wordt door veel KSA-casino's geaccepteerd en werkt vergelijkbaar met iDEAL voor Belgische en grensbewoners.",
    body: "Bancontact is een snelle bank-naar-bank betaalmethode, voornamelijk gebruikt door Belgische spelers maar ook door Nederlanders met een Bancontact-kaart.",
    faq: [
      { q: "Werkt Bancontact bij KSA-casino's?", a: "Ja, de meeste grote buitenlandse casino's accepteren Bancontact." },
    ],
  },
  Trustly: {
    slug: "trustly",
    name: "Trustly",
    tagline: "Pay-N-Play technologie voor razendsnelle uitbetalingen",
    intro: "Trustly maakt directe bank-naar-bank stortingen mogelijk en wordt vaak gebruikt voor casino's zonder traditionele registratie.",
    body: "Trustly verbindt je bank rechtstreeks met het casino. Stortingen zijn direct, uitbetalingen vaak binnen minuten — vooral handig voor wie snel wil spelen zonder eerst een wallet aan te maken.",
    faq: [
      { q: "Is Trustly veilig?", a: "Ja, Trustly is een gereguleerde Zweedse betaaldienstverlener met EU-licentie." },
    ],
  },
  Visa: {
    slug: "visa",
    name: "Visa",
    tagline: "Wereldwijd geaccepteerde creditcard",
    intro: "Visa is de meest geaccepteerde creditcard in online casino's wereldwijd, ook in alle KSA-vergunde Nederlandse casino's.",
    body: "Stortingen via Visa zijn direct. Opnames duren doorgaans 1–5 werkdagen, omdat de transactie via het internationale Visa-netwerk loopt.",
    faq: [{ q: "Werkt mijn Visa-creditcard altijd?", a: "Bij Nederlandse banken kan online gokken soms geblokkeerd zijn — controleer je kaartinstellingen." }],
  },
  Mastercard: {
    slug: "mastercard",
    name: "Mastercard",
    tagline: "Wereldwijde creditcard-acceptatie",
    intro: "Naast Visa is Mastercard de tweede grote internationale kaart die door vrijwel ieder KSA-vergund casino wordt geaccepteerd.",
    body: "Mastercard-stortingen zijn direct. Opnames via Mastercard Send (waar beschikbaar) zijn binnen een dag, anders 1–5 werkdagen.",
    faq: [{ q: "Verschil tussen Visa en Mastercard?", a: "Voor casino-gebruik functioneel hetzelfde — beide werken bij vrijwel alle operators." }],
  },
  PayPal: {
    slug: "paypal",
    name: "PayPal",
    tagline: "De wereldwijde standaard voor online betalingen",
    intro: "PayPal wordt door een beperkt aantal buitenlandse casino's geaccepteerd, maar groeit snel als alternatief voor iDEAL.",
    body: "PayPal biedt extra koperbescherming en houdt je bankgegevens privé. Stortingen zijn direct, opnames doorgaans binnen 24 uur.",
    faq: [{ q: "Welke NL-casino's accepteren PayPal?", a: "Een groeiend aantal — bekijk onze actuele lijst hierboven." }],
  },
  Crypto: {
    slug: "crypto",
    name: "Crypto",
    tagline: "Bitcoin, Ethereum en stablecoins",
    intro: "Crypto-betalingen zijn zeldzaam bij buitenlandse casino's, maar de paar die het wel aanbieden bieden snellere uitbetalingen en lagere kosten.",
    body: "Crypto-stortingen zijn direct na bevestiging op de blockchain (10–30 minuten). Uitbetalingen zijn vaak sneller dan iDEAL, maar de waarde van je crypto kan tussen storten en opnemen veranderen.",
    faq: [{ q: "Welke crypto's worden geaccepteerd?", a: "Doorgaans BTC, ETH en USDT." }],
  },
  Klarna: {
    slug: "klarna",
    name: "Klarna",
    tagline: "Achteraf betalen — beperkt beschikbaar",
    intro: "Klarna wordt door een handvol Nederlandse casino's ondersteund voor stortingen.",
    body: "Let op: 'achteraf betalen' is voor casino-stortingen meestal niet beschikbaar — alleen directe overboekingen via Klarna.",
    faq: [{ q: "Kan ik gokken met Klarna achteraf betalen?", a: "Nee, KSA-regelgeving verbiedt krediet-financiering van kansspelen." }],
  },
  Skrill: {
    slug: "skrill",
    name: "Skrill",
    tagline: "E-wallet met snelle uitbetalingen",
    intro: "Skrill is een internationaal e-wallet en wordt door verschillende KSA-casino's ondersteund.",
    body: "Stortingen zijn direct. Opnames via Skrill zijn doorgaans binnen 24 uur op je wallet — vandaaruit kun je doorboeken naar je bank.",
    faq: [{ q: "Is Skrill veilig?", a: "Ja, Skrill is FCA-gereguleerd en werkt al sinds 2001." }],
  },
};

// ── Providers ────────────────────────────────────────────────
export const providerTerms: Record<Provider, Term> = {
  NetEnt: {
    slug: "netent", name: "NetEnt",
    tagline: "De Scandinavische slot-pionier",
    intro: "NetEnt is wereldwijd één van de meest gerespecteerde slot-ontwikkelaars, beroemd om titels als Starburst, Gonzo's Quest en Dead or Alive.",
    body: "Sinds 1996 maakt NetEnt slots met een onmiskenbare visuele stijl en bewezen eerlijke RTP's. Bijna ieder KSA-vergund casino voert NetEnt-titels.",
    faq: [{ q: "Wat is de bekendste NetEnt slot?", a: "Starburst — al jaren een van de populairste slots ter wereld." }],
  },
  "Pragmatic Play": {
    slug: "pragmatic-play", name: "Pragmatic Play",
    tagline: "High-volatility slots en live casino",
    intro: "Pragmatic Play is de snelst groeiende provider van het laatste decennium met hits als Sweet Bonanza, Gates of Olympus en The Dog House.",
    body: "Naast slots biedt Pragmatic ook een sterk live casino-aanbod. Hun games zijn aanwezig in vrijwel ieder KSA-vergund casino.",
    faq: [{ q: "Zijn Pragmatic-slots eerlijk?", a: "Ja, alle games zijn onafhankelijk getest en gecertificeerd." }],
  },
  Evolution: {
    slug: "evolution", name: "Evolution",
    tagline: "Marktleider in live casino",
    intro: "Evolution is de absolute marktleider voor live casino-spellen — denk aan live blackjack, roulette, Lightning Roulette en Crazy Time.",
    body: "Evolution-studio's streamen 24/7 in HD vanuit Riga, Malta en andere locaties. Iedere serieuze KSA-operator biedt Evolution-tafels.",
    faq: [{ q: "Wat is Crazy Time?", a: "Een live game-show stijl spel van Evolution, één van de populairste live games." }],
  },
  "Play'n GO": {
    slug: "playn-go", name: "Play'n GO",
    tagline: "Mobile-first slot-specialist",
    intro: "Play'n GO is bekend om Book of Dead — één van de meest gespeelde slots in Europa — en levert mobile-first slots aan honderden operators.",
    body: "Het Zweedse Play'n GO publiceert tientallen nieuwe slots per jaar en heeft een sterk portfolio aan klassieke en moderne titels.",
    faq: [{ q: "Wat is Book of Dead?", a: "Een Egypte-thema slot van Play'n GO, vergelijkbaar met Book of Ra." }],
  },
  "Hacksaw Gaming": {
    slug: "hacksaw-gaming", name: "Hacksaw Gaming",
    tagline: "High-volatility slot-innovator",
    intro: "Hacksaw is een jonge Maltese provider die in korte tijd cult-status verwierf met extreem volatile slots zoals Wanted Dead or a Wild en Stack 'em.",
    body: "Hacksaw-titels zijn niet voor iedereen — hoge volatiliteit betekent grote winsten of lange droge periodes. Cult-favoriet bij ervaren spelers.",
    faq: [{ q: "Waarom is Hacksaw zo populair?", a: "Hoge max-win caps (tot 100.000x inzet) en strakke visuele stijl." }],
  },
  Microgaming: {
    slug: "microgaming", name: "Microgaming",
    tagline: "De grondlegger van online gaming",
    intro: "Microgaming claimt het allereerste online casino software te hebben gemaakt in 1994 en draait nog steeds mega-progressives zoals Mega Moolah.",
    body: "Mega Moolah heeft inmiddels meer dan €1 miljard aan jackpots uitgekeerd — meermaals boven €10 miljoen per spin.",
    faq: [{ q: "Wat is Mega Moolah?", a: "De beroemdste progressive jackpot slot ter wereld." }],
  },
  Yggdrasil: {
    slug: "yggdrasil", name: "Yggdrasil",
    tagline: "Premium slots met Noordse mythologie",
    intro: "Yggdrasil is bekend om visueel hoogstaande slots zoals Vikings Go Berzerk, Valley of the Gods en het GATI-platform.",
    body: "Het Maltese Yggdrasil staat bekend om strakke productie en innovatieve bonus-mechanieken.",
    faq: [{ q: "Wat is GATI?", a: "Een ontwikkelplatform van Yggdrasil dat partners gebruiken om slots te bouwen." }],
  },
  "Red Tiger": {
    slug: "red-tiger", name: "Red Tiger",
    tagline: "Daily Drops & Wins",
    intro: "Red Tiger (onderdeel van Evolution Group) is bekend om hun Daily Drops & Wins-toernooien met dagelijkse prijzenpotten.",
    body: "Naast slots biedt Red Tiger ook een unieke jackpot-mechaniek waarbij prijzen gegarandeerd vóór een bepaalde tijd vallen.",
    faq: [{ q: "Wat zijn Daily Drops?", a: "Toernooien met gegarandeerde prijzen die dagelijks bij willekeurige spelers vallen." }],
  },
  "Nolimit City": {
    slug: "nolimit-city", name: "Nolimit City",
    tagline: "Extreme slots, niet voor watjes",
    intro: "Nolimit City staat bekend om ruige thema's en extreem hoge max-wins (tot 75.000x). Hits: San Quentin, Mental, Tombstone R.I.P.",
    body: "Cult-favoriet onder slot-enthousiasten dankzij de xWays/xNudge mechanieken die enorme winsten kunnen produceren.",
    faq: [{ q: "Wat is xWays?", a: "Een Nolimit-mechaniek waarbij symbolen splitsen voor extra winlijnen." }],
  },
  "Push Gaming": {
    slug: "push-gaming", name: "Push Gaming",
    tagline: "Innovatieve mechanieken met cartoon-stijl",
    intro: "Push Gaming maakt unieke slots zoals Razor Shark, Jammin' Jars en Wild Swarm met herkenbare visuele stijl.",
    body: "De Britse studio levert aan vrijwel alle grote operators en blijft jaar na jaar fan-favoriet.",
    faq: [{ q: "Beste Push slot?", a: "Razor Shark — een echte cult-hit met hoge volatiliteit." }],
  },
};

// ── Licences ────────────────────────────────────────────────
export const licenceTerms: Record<Licence, Term> = {
  KSA: {
    slug: "ksa", name: "Kansspelautoriteit (KSA)",
    tagline: "De Nederlandse toezichthouder",
    intro: "De KSA is de officiële Nederlandse toezichthouder voor online kansspelen. Sinds oktober 2021 mogen alleen buitenlandse casino's Nederlandse spelers bedienen.",
    body: "Een KSA-vergunning vereist klachtenroute, depositlimieten, NL-talige support en strikte eerlijk-spel audits. Speel nooit bij een casino zonder KSA-licentie.",
    faq: [
      { q: "Hoeveel KSA-vergunningen zijn er?", a: "Per 2026 zijn er ruim 25 vergunde operators." },
      { q: "Hoe controleer ik een KSA-licentie?", a: "Op kansspelautoriteit.nl staat een actueel register van vergunninghouders." },
    ],
  },
  MGA: {
    slug: "mga", name: "Malta Gaming Authority (MGA)",
    tagline: "EU-licentie van Malta",
    intro: "De MGA is een gerespecteerde EU-toezichthouder. Voor Nederlandse spelers geldt: een MGA-licentie alleen is niet genoeg — je hebt ook een KSA-vergunning nodig.",
    body: "Veel internationale operators hebben zowel KSA als MGA. Voor jou als speler is alleen de KSA-status doorslaggevend.",
    faq: [{ q: "Mag ik bij een MGA-only casino spelen?", a: "Het is technisch toegankelijk maar niet legaal in NL en biedt geen NL-spelersbescherming." }],
  },
  Curacao: {
    slug: "curacao", name: "Curaçao eGaming",
    tagline: "Internationale offshore-licentie",
    intro: "Curaçao-licenties zijn historisch makkelijk te verkrijgen en bieden minimale spelersbescherming. Voor Nederlandse spelers geldt: niet legaal zonder aanvullende KSA-vergunning.",
    body: "Sommige operators combineren Curaçao met KSA. Voor jou telt alleen de KSA-status — Curaçao biedt geen extra zekerheid.",
    faq: [{ q: "Is Curaçao veilig?", a: "Substantieel minder gereguleerd dan KSA of MGA." }],
  },
  UKGC: {
    slug: "ukgc", name: "UK Gambling Commission",
    tagline: "De Britse toezichthouder",
    intro: "De UKGC is een van de strengste toezichthouders ter wereld, maar dekt alleen de Britse markt.",
    body: "Voor NL-spelers irrelevant zonder KSA, maar UKGC-status zegt iets over algemene operator-kwaliteit.",
    faq: [{ q: "Geldt UKGC ook in NL?", a: "Nee, alleen in het VK." }],
  },
  Gibraltar: {
    slug: "gibraltar", name: "Gibraltar Gambling Commission",
    tagline: "Britse offshore-licentie",
    intro: "Gibraltar is historisch een populaire vestigingsplaats voor grote operators, met goede spelersbescherming maar niet geldig in NL zonder KSA.",
    body: "Veel operators hebben Gibraltar als secundaire licentie naast KSA of MGA.",
    faq: [{ q: "Is Gibraltar serieus?", a: "Ja, vergelijkbaar kwaliteitsniveau met UKGC en MGA." }],
  },
  Anjouan: {
    slug: "anjouan", name: "Anjouan Gaming License",
    tagline: "Internationale offshore-licentie van de Comoren",
    intro: "De Anjouan Gaming Authority is een offshore licentieverstrekker uit het Comoren-eilandenstaat. Sinds 2024 een populair alternatief voor Curaçao bij internationale operators.",
    body: "Anjouan-vergunde casino's accepteren Nederlandse spelers, maar zijn niet KSA-geregistreerd. Dit betekent geen klachtenroute, geen verplichte NL-talige support en geen Nederlandse spelersbescherming. Speel altijd verantwoord.",
    faq: [
      { q: "Is een Anjouan-licentie veilig?", a: "Anjouan biedt basisregulering maar minder spelersbescherming dan KSA of MGA. Controleer altijd reviews en uitbetalingsgeschiedenis voor je stort." },
      { q: "Mag ik bij Anjouan-casino's spelen vanuit Nederland?", a: "Technisch toegankelijk, maar buiten het KSA-systeem. Je valt niet onder Nederlandse spelersbescherming of Cruks-zelfuitsluiting." },
    ],
  },
};

// ── Bonus types ────────────────────────────────────────────────
export const bonusTypeTerms: Record<BonusType, Term> = {
  welkomstbonus: {
    slug: "welkomstbonus", name: "Welkomstbonus",
    tagline: "Eerste-storting bonus voor nieuwe spelers",
    intro: "Een welkomstbonus is een eenmalig aanbod voor nieuwe spelers, doorgaans een match-percentage op je eerste storting plus eventueel free spins.",
    body: "Let altijd op de wagering, maximale inzet tijdens het vrijspelen en welke spellen meetellen. Een hoog bonusbedrag met onhaalbare voorwaarden is minder waard dan een kleine bonus die je echt kunt vrijspelen.",
    faq: [
      { q: "Wat is een goede welkomstbonus?", a: "Een 100% match tot €100–€500 met wagering ≤30x is doorgaans aantrekkelijk." },
      { q: "Mag ik een welkomstbonus afslaan?", a: "Ja, je kunt altijd kiezen om zonder bonus te spelen — handig als je je winst direct wilt opnemen." },
    ],
  },
  "no-deposit": {
    slug: "no-deposit", name: "No Deposit Bonus",
    tagline: "Spelen zonder eigen storting",
    intro: "Een no-deposit bonus geeft je gratis speelgeld of free spins zonder dat je eerst hoeft te storten — alleen registreren en verifiëren.",
    body: "No-deposit bonussen hebben doorgaans hogere wagering en lage maximale uitbetalingen, maar zijn ideaal om een casino zonder risico te testen.",
    faq: [{ q: "Is een no-deposit bonus echt gratis?", a: "Ja, maar winsten moet je vrijspelen voor opname." }],
  },
  "free-spins": {
    slug: "free-spins", name: "Free Spins",
    tagline: "Gratis spins op slots",
    intro: "Free spins zijn gratis draaiingen op specifieke slots, vaak Starburst, Book of Dead of een nieuwe titel.",
    body: "Winst uit free spins moet meestal worden vrijgespeeld. Sommige aanbiedingen geven 'free spins zonder wagering' — die zijn het meest waard.",
    faq: [{ q: "Op welke slot krijg ik free spins?", a: "Verschilt per casino — Starburst en Book of Dead zijn klassiekers." }],
  },
  cashback: {
    slug: "cashback", name: "Cashback",
    tagline: "Geld terug op je verlies",
    intro: "Cashback betekent dat je een percentage van je netto verlies terugkrijgt — meestal wekelijks of maandelijks.",
    body: "Cashback is doorgaans 5–25% en geldt vaak alleen voor VIP-leden. Hoge wagering komt minder voor — het is bijna altijd direct opneembaar.",
    faq: [{ q: "Heeft cashback wagering?", a: "Vaak niet — controleer per casino." }],
  },
  reload: {
    slug: "reload", name: "Reload Bonus",
    tagline: "Bonus op opvolgende stortingen",
    intro: "Een reload-bonus is een match-bonus op je tweede, derde of latere stortingen. Vaak wekelijks aangeboden aan actieve spelers.",
    body: "Reload-bonussen zijn meestal kleiner dan welkomstbonussen (25–50% match) maar wel herhaalbaar.",
    faq: [{ q: "Hoe vaak krijg ik een reload-bonus?", a: "Doorgaans wekelijks bij actieve spelers." }],
  },
  vip: {
    slug: "vip", name: "VIP-programma",
    tagline: "Loyaliteitsbeloningen voor high rollers",
    intro: "VIP-programma's belonen frequente spelers met cashback, persoonlijke account managers, snellere uitbetalingen en exclusieve evenementen.",
    body: "Echt VIP-niveau bereik je doorgaans pas met grote inzetten. Voor casual spelers minder relevant.",
    faq: [{ q: "Hoe word ik VIP?", a: "Door consistente speel-volume — vaak op uitnodiging." }],
  },
};

// ── Helpers ────────────────────────────────────────────────
export const casinosByPayment = (m: PaymentMethod): Casino[] =>
  casinos.filter((c) => c.payments.includes(m)).sort((a, b) => a.rank - b.rank);

export const casinosByProvider = (p: Provider): Casino[] =>
  casinos.filter((c) => c.providers?.includes(p)).sort((a, b) => a.rank - b.rank);

export const casinosByLicence = (l: Licence): Casino[] =>
  casinos.filter((c) => c.licences?.includes(l)).sort((a, b) => a.rank - b.rank);

export const casinosByBonusType = (b: BonusType): Casino[] =>
  casinos.filter((c) => c.bonusTypes?.includes(b)).sort((a, b2) => a.rank - b2.rank);

export const findPaymentBySlug = (slug: string) =>
  (Object.entries(paymentTerms) as [PaymentMethod, Term][]).find(([, t]) => t.slug === slug);
export const findProviderBySlug = (slug: string) =>
  (Object.entries(providerTerms) as [Provider, Term][]).find(([, t]) => t.slug === slug);
export const findLicenceBySlug = (slug: string) =>
  (Object.entries(licenceTerms) as [Licence, Term][]).find(([, t]) => t.slug === slug);
export const findBonusTypeBySlug = (slug: string) =>
  (Object.entries(bonusTypeTerms) as [BonusType, Term][]).find(([, t]) => t.slug === slug);
