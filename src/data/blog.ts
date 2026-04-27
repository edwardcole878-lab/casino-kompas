export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  readingTime: string;
  /** Array of paragraphs / headings rendered in order */
  content: { type: "h2" | "p" | "ul"; text?: string; items?: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "wagering-uitgelegd",
    title: "Wagering uitgelegd: zo bereken je de echte waarde van een bonus",
    excerpt:
      "Doorzetvereisten zijn de belangrijkste — en meest verwarrende — voorwaarde van elke casinobonus. We rekenen het uit met concrete voorbeelden.",
    publishedAt: "2026-03-14",
    updatedAt: "2026-04-02",
    readingTime: "6 min",
    content: [
      { type: "p", text: "Wagering — ook wel doorzetvereiste of rollover genoemd — bepaalt hoe vaak je een bonus moet inzetten voordat je winst kunt opnemen. Een bonus van €100 met 35x wagering betekent dat je €3.500 aan inzetten moet draaien voordat je geld vrijkomt." },
      { type: "h2", text: "De formule" },
      { type: "p", text: "De basis: bonusbedrag × wagering = totaal in te zetten. Bij sommige casino's geldt de wagering ook over je storting (D+B), wat de eis verdubbelt. Lees altijd de voorwaarden." },
      { type: "h2", text: "Bijdrage per spelcategorie" },
      { type: "p", text: "Niet elk spel telt 100% mee. Slots zijn meestal 100%, blackjack vaak 10%, roulette soms 0%. €1 inzet op blackjack telt dan als €0,10 richting je doorzet." },
      { type: "h2", text: "Vuistregels" },
      { type: "ul", items: [
        "Onder 30x wagering: relatief gunstig",
        "30–40x: marktstandaard",
        "Boven 40x: kritisch nakijken",
        "Maximale inzet tijdens bonus: meestal €5",
        "Bonus verloopt vaak na 7–30 dagen",
      ]},
      { type: "h2", text: "Conclusie" },
      { type: "p", text: "Een hoge bonus met 50x wagering is vaak minder waard dan een kleinere bonus met 25x. Reken altijd door — de rekenkundige verwachtingswaarde is wat telt." },
    ],
  },
  {
    slug: "ideal-casino-veiligheid",
    title: "Hoe veilig is iDEAL bij online casino's?",
    excerpt:
      "iDEAL is razend populair, maar wat gebeurt er precies tussen jouw bank en het casino? Een technische uitleg in begrijpelijke taal.",
    publishedAt: "2026-02-22",
    updatedAt: "2026-03-30",
    readingTime: "5 min",
    content: [
      { type: "p", text: "iDEAL is in Nederland de standaard voor online betalingen — ook bij buitenlandse casino's. De veiligheid komt niet alleen van iDEAL zelf, maar van de combinatie met je bank en de PSD2-richtlijn." },
      { type: "h2", text: "Wat ziet je bank?" },
      { type: "p", text: "Je bank ziet de naam van het casino (of de PSP zoals Mollie of Adyen) en het bedrag. Sinds 2021 is duidelijke labeling verplicht onder de Wet Kansspelen op afstand." },
      { type: "h2", text: "Twee-factor-authenticatie" },
      { type: "p", text: "Elke iDEAL-betaling vereist 2FA via je bank-app. Phishing op iDEAL is daarmee bijna onmogelijk — zolang je nooit op valse 'iDEAL'-pagina's klikt buiten je bank-app om." },
      { type: "h2", text: "Tips" },
      { type: "ul", items: [
        "Controleer altijd de URL voor je bank-app opent",
        "Gebruik nooit een iDEAL-link uit een e-mail",
        "Check of het casino een KSA-vergunning heeft",
        "Stel een dagelijkse storting-limiet in",
      ]},
    ],
  },
  {
    slug: "ksa-vergunning-controleren",
    title: "Zo controleer je in 30 seconden of een casino een KSA-vergunning heeft",
    excerpt:
      "Stap-voor-stap controleren via het officiële Kansspelautoriteit-register. Doe het altijd voordat je je eerste storting doet.",
    publishedAt: "2026-01-18",
    updatedAt: "2026-04-01",
    readingTime: "3 min",
    content: [
      { type: "p", text: "De Kansspelautoriteit (KSA) houdt een openbaar register bij van alle vergunde aanbieders. Een controle kost je 30 seconden en voorkomt dat je geld stort bij een illegale operator." },
      { type: "h2", text: "Stap voor stap" },
      { type: "ul", items: [
        "Ga naar kansspelautoriteit.nl",
        "Klik op 'Vergunninghouders' in het menu",
        "Zoek op de naam van het casino of de domeinnaam",
        "Controleer of de vergunning actief is (niet ingetrokken)",
      ]},
      { type: "h2", text: "Wat als het casino er niet bij staat?" },
      { type: "p", text: "Geen vergunning = geen klachtenroute, geen verplichte spelersbescherming en geen toegang tot de Geschillencommissie. Speel nooit bij niet-vergunde casino's, ongeacht hoe goed de bonus klinkt." },
    ],
  },
  {
    slug: "blackjack-basisstrategie",
    title: "Blackjack basisstrategie voor beginners",
    excerpt:
      "Met de juiste basisstrategie reduceer je het house edge tot onder 1%. We leggen uit wanneer je hit, stand of double doet.",
    publishedAt: "2026-03-02",
    updatedAt: "2026-04-05",
    readingTime: "7 min",
    content: [
      { type: "p", text: "Blackjack heeft het laagste house edge van alle casino-spellen — als je de basisstrategie volgt. Zonder strategie is het edge ~2%, met perfecte basis-strategie zakt het naar 0,5%." },
      { type: "h2", text: "De drie kerngebieden" },
      { type: "ul", items: [
        "Harde hand (geen Aas, of Aas telt als 1)",
        "Zachte hand (Aas telt als 11)",
        "Splitsbare hand (twee gelijke kaarten)",
      ]},
      { type: "h2", text: "Vuistregels harde hand" },
      { type: "ul", items: [
        "8 of lager: altijd hit",
        "9: double tegen 3–6, anders hit",
        "10–11: double als hoger dan dealer-kaart",
        "12–16: stand tegen 2–6, hit tegen 7+",
        "17 of hoger: altijd stand",
      ]},
      { type: "h2", text: "Splitsen" },
      { type: "p", text: "Splits altijd Azen en achten. Splits nooit tienen of vijven. De rest hangt af van de kaart van de dealer." },
      { type: "h2", text: "Verzekering" },
      { type: "p", text: "Negeer altijd insurance. Wiskundig is het een slechte deal — het house edge op de verzekering is ~7%." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
