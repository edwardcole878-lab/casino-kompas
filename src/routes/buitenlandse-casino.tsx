import { createFileRoute } from "@tanstack/react-router";
import {
  Shield,
  Zap,
  Star,
  Trophy,
  Wallet,
  Clock,
  AlertTriangle,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import winheroLogo from "@/assets/logos/winhero.webp.asset.json";
import cristalpokerLogo from "@/assets/logos/cristalpoker.jpg.asset.json";
import balooLogo from "@/assets/logos/baloo.webp.asset.json";
import velwinsLogo from "@/assets/logos/velwins.png.asset.json";
import spinmillsLogo from "@/assets/logos/spinmills.webp.asset.json";
import shakebetLogo from "@/assets/shakebet-logo.png";

type Casino = {
  rank: number;
  name: string;
  slug: string;
  logo: string;
  rating: number;
  bonus: string;
  freeSpins: string;
  minDeposit: string;
  license: string;
  payoutSpeed: string;
  pros: string[];
  cta: string;
};

const casinos: Casino[] = [
  {
    rank: 1,
    name: "Winhero",
    slug: "winhero",
    logo: winheroLogo.url,
    rating: 5.0,
    bonus: "325% tot €3.750",
    freeSpins: "500 Free Spins",
    minDeposit: "€20",
    license: "Curaçao / Costa Rica",
    payoutSpeed: "~15 min",
    pros: [
      "Welkomstpakket tot €3.750 + 500 FS",
      "3000+ games én sportsbook",
      "Dagelijkse cashback & missions",
    ],
    cta: "https://goplaywithstars.com/tfaffuzzb",
  },
  {
    rank: 2,
    name: "CristalPoker",
    slug: "cristalpoker",
    logo: cristalpokerLogo.url,
    rating: 4.9,
    bonus: "100% tot €500",
    freeSpins: "25 Free Spins",
    minDeposit: "€20",
    license: "Curaçao — Antillephone",
    payoutSpeed: "~12 uur",
    pros: [
      "Direct uitbetaalbare welkomstbonus",
      "Snelle uitbetaling (~12u)",
      "No-deposit free spins bij registratie",
    ],
    cta: "https://record.cristalaffiliates.com/_dqE1Gz9m5lnUOsjNOfgKeWNd7ZgqdRLk/1",
  },
  {
    rank: 3,
    name: "Baloo",
    slug: "baloo",
    logo: balooLogo.url,
    rating: 4.8,
    bonus: "100% tot €1.250 (pakket tot €4.000)",
    freeSpins: "675 Free Spins",
    minDeposit: "€20",
    license: "Curaçao — Hollycorn N.V.",
    payoutSpeed: "~24 uur",
    pros: [
      "675 free spins over 4 stortingen",
      "7000+ games, 80+ providers",
      "Cashback & rakeback tot 20%, eigen apps",
    ],
    cta: "https://gobooplay.com/txe84kaq5",
  },
  {
    rank: 4,
    name: "Velwins",
    slug: "velwins",
    logo: velwinsLogo.url,
    rating: 4.7,
    bonus: "400% tot €2.200",
    freeSpins: "350 Free Spins",
    minDeposit: "€25",
    license: "Anjouan — Fortuna Games N.V.",
    payoutSpeed: "~10 min",
    pros: [
      "Apart sport-welkomstpakket tot €1.000",
      "Dagelijkse cashback 10–35%",
      "Min. opname slechts €10",
    ],
    cta: "https://record.hexaffiliates.io/_hChiLzFJeCLBIopaNv7uDWNd7ZgqdRLk/1/?pg=1",
  },
  {
    rank: 5,
    name: "Spinmills",
    slug: "spinmills",
    logo: spinmillsLogo.url,
    rating: 4.6,
    bonus: "400% tot €2.200",
    freeSpins: "350 Free Spins",
    minDeposit: "€25",
    license: "Anjouan — Buscarar SRL",
    payoutSpeed: "~30 min",
    pros: [
      "Enorm aanbod: 9000+ games",
      "Bonus over 5 stortingen",
      "iDEAL én crypto",
    ],
    cta: "https://record.hexaffiliates.io/_hChiLzFJeCLiFUAaTMnmeGNd7ZgqdRLk/1/?pg=2",
  },
  {
    rank: 6,
    name: "Shakebet",
    slug: "shakebet",
    logo: shakebetLogo,
    rating: 4.5,
    bonus: "100% tot €2.000 (pakket tot €7.000)",
    freeSpins: "350 Free Spins",
    minDeposit: "€20",
    license: "Anjouan / Comoros",
    payoutSpeed: "~20 min",
    pros: [
      "Gunstige bonusvoorwaarden",
      "Nederlandstalige live chat",
      "Free spins op Book of Dead",
    ],
    cta: "https://record.shakepartners.com/_4QIgC6d2ZO5hg6WO2I1rgWNd7ZgqdRLk/1/?pg=1",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wat is een buitenlands online casino met snelle uitbetaling?",
    a: "Een offshore casino dat je opname binnen enkele minuten tot een paar uur verwerkt. Snelle uitbetalingen hangen samen met de betaalmethode (iDEAL, crypto, e-wallets) en een efficiënte KYC-procedure.",
  },
  {
    q: "Hoe snel kan ik mijn geld opnemen?",
    a: "De snelste buitenlandse casino's op onze lijst betalen binnen 5 tot 30 minuten uit, vooral bij crypto en e-wallets. iDEAL-uitbetalingen duren meestal 15 minuten tot 24 uur.",
  },
  {
    q: "Zijn deze casino's legaal in Nederland?",
    a: "Deze casino's hebben géén KSA-vergunning en vallen niet onder CRUKS. Als speler word je niet vervolgd, maar je mist de bescherming van het Nederlandse systeem. Speel altijd bewust en binnen je grenzen.",
  },
  {
    q: "Welke betaalmethode is het snelst?",
    a: "Crypto en e-wallets zijn doorgaans het snelst. iDEAL is snel voor storten, maar uitbetalingen duren meestal iets langer dan crypto.",
  },
  {
    q: "Hoe kies ik het beste buitenlandse casino voor snelle uitbetaling?",
    a: "Winhero en Velwins scoren hoog op snelheid. CristalPoker staat bekend om uitbetalingen binnen 12 uur. Kijk naar betaalmethode, KYC-procedure en bonusvoorwaarden.",
  },
];

const PAGE_TITLE = "Buitenlandse Casino's Snelle Uitbetaling 2026 — Top 6";
const PAGE_DESC =
  "Ontdek buitenlandse online casino's met de snelste uitbetalingen voor Nederlandse spelers. Vergelijk directe opnames, bonussen en betaalmethoden. Geüpdatet voor 2026.";

export const Route = createFileRoute("/buitenlandse-casino")({
  head: () => {
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Beste buitenlandse casino's met snelle uitbetaling 2026",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: casinos.length,
      itemListElement: casinos.map((c) => ({
        "@type": "ListItem",
        position: c.rank,
        name: c.name,
        url: c.cta,
        description: `${c.bonus} + ${c.freeSpins}. Uitbetaling ${c.payoutSpeed}. Min. storting ${c.minDeposit}.`,
      })),
    };
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: PAGE_TITLE },
        { name: "description", content: PAGE_DESC },
        { property: "og:title", content: PAGE_TITLE },
        { property: "og:description", content: PAGE_DESC },
        { name: "twitter:title", content: PAGE_TITLE },
        { name: "twitter:description", content: PAGE_DESC },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(itemList) },
        { type: "application/ld+json", children: JSON.stringify(faqPage) },
      ],
    };
  },
  component: LandingPage,
});

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < full
              ? "fill-gold text-gold"
              : i === full && half
                ? "fill-gold/50 text-gold"
                : "text-muted-foreground/40"
          }
        />
      ))}
      <span className="ml-1 text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

function CasinoLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-border">
      <img src={src} alt={`${name} logo`} loading="lazy" className="h-full w-full object-contain" />
    </div>
  );
}

function AffiliateLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}

function LandingPage() {
  return (
    <div className="dark relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3">
            <Badge variant="outline" className="border-gold/40 bg-gold/10 text-gold">
              18+ | Speel bewust
            </Badge>
          </div>
        </header>

        <section className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:py-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald/75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                </span>
                Live Update 2026
              </div>
              <h1 className="font-display text-balance text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                Buitenlandse Casino's <span className="bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent">Snelle Uitbetaling</span> 2026
              </h1>
              <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
                Ontvang je winst binnen minuten. Wij testen en vergelijken de snelste buitenlandse online casino's voor Nederlandse spelers.
              </p>
              <div className="mt-5">
                <Button asChild size="sm" className="bg-gold text-gold-foreground shadow-gold hover:bg-gold/90">
                  <a href="#top6">Bekijk de Top 6</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Voordelen" className="border-y border-border/60 bg-surface/50 backdrop-blur">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-2 px-4 py-3 sm:grid-cols-4">
            {[
              { icon: Zap, label: "Directe uitbetaling" },
              { icon: Clock, label: "Onder 30 minuten" },
              { icon: CreditCard, label: "iDEAL & crypto" },
              { icon: Shield, label: "Verifieerd getest" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-left">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald/15 text-emerald">
                  <Icon size={14} />
                </div>
                <span className="text-xs font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="top6" aria-label="Top 6 buitenlandse casino's met snelle uitbetaling" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 pb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Top 6 buitenlandse casino's met snelle uitbetaling
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            De zes beste buitenlandse online casino's voor Nederlandse spelers, gerangschikt op uitbetalingssnelheid, betrouwbaarheid en welkomstbonus.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {casinos.map((c) => (
              <article
                key={c.slug}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald/40 hover:bg-white/[0.05]"
              >
                {c.rank === 1 && (
                  <div className="absolute -top-3 -right-3 z-20 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
                    ★ Snelste keuze
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <CasinoLogo name={c.name} src={c.logo} />
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-emerald">
                      <Zap size={16} className="fill-emerald/20" />
                      <span className="text-lg font-bold leading-none">{c.payoutSpeed}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">uitbetaling</div>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">{c.name}</h3>
                  <Stars rating={c.rating} />
                </div>

                <div className="mt-5 space-y-1.5">
                  {c.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/5 p-4">
                  <div className="text-[10px] uppercase tracking-wider text-gold/80">Welkomstbonus</div>
                  <div className="font-display text-2xl font-bold tracking-tight text-gold">{c.bonus}</div>
                  <div className="text-xs text-foreground/80">+ {c.freeSpins}</div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Min. storting: <span className="text-foreground">{c.minDeposit}</span></span>
                  <span>Licentie: <span className="text-foreground">{c.license}</span></span>
                </div>

                <div className="mt-5">
                  <Button asChild size="lg" className="w-full bg-gold text-gold-foreground shadow-gold hover:bg-gold/90">
                    <AffiliateLink href={c.cta} ariaLabel={`Speel nu bij ${c.name}`}>
                      Speel nu
                    </AffiliateLink>
                  </Button>
                  <p className="mt-2 text-center text-[10px] text-muted-foreground">
                    Nieuwe spelers · 18+ · Voorwaarden van toepassing
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-surface/40">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Hoe wij beoordelen</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              Elk casino in onze lijst wordt getest op echte uitbetalingssnelheid. We storten, spelen en laten ons geld overmaken om de beloofde tijden te verifiëren.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "Uitbetalingssnelheid", desc: "Van opname-aanvraag tot geld op je rekening." },
                { icon: Shield, title: "Veiligheid & licentie", desc: "Geldige offshore licentie en beveiligde transacties." },
                { icon: Zap, title: "Bonusvoorwaarden", desc: "Eerlijke voorwaarden zonder verborgen limieten." },
                { icon: CreditCard, title: "Betaalmethoden", desc: "iDEAL, crypto, e-wallets en Trustly beschikbaar." },
              ].map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="border-border/60 bg-white/[0.03] backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-white">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Wat is een buitenlands online casino met snelle uitbetaling?
          </h2>
          <div className="mt-6 space-y-4 text-sm text-muted-foreground">
            <p>
              Een <strong className="text-foreground">buitenlands online casino met snelle uitbetaling</strong> verwerkt je opname-aanvraag direct of binnen enkele minuten. In plaats van dagen te wachten, staat je geld vaak binnen 5 tot 30 minuten op je rekening. Dit wordt mogelijk gemaakt door moderne betaalmethoden zoals iDEAL, crypto en e-wallets.
            </p>
            <p>
              De casino's op deze pagina richten zich op Nederlandse spelers onder een buitenlandse licentie (Anjouan, Curaçao, MGA). Ze bieden snellere verificatie, lagere drempels en hogere bonussen dan traditionele Nederlandse aanbieders. Let wel: ze vallen niet onder KSA-toezicht en niet onder CRUKS.
            </p>
            <p>
              Onze testpanel heeft elke aanbieder daadwerkelijk uitbetaald. De getoonde uitbetalingstijden zijn gebaseerd op praktijktests met de meest gebruikte betaalmethoden. Kies het casino dat het beste past bij jouw voorkeur voor snelheid, bonus en spelaanbod.
            </p>
          </div>
        </section>

        <section className="border-t border-border/60 bg-surface/40">
          <div className="mx-auto max-w-3xl px-4 py-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Veelgestelde vragen</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-gold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <footer className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-12">
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-destructive/30 bg-destructive/5 p-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/20 text-destructive">
                <AlertTriangle size={22} />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Gokken kan verslavend zijn. Speel bewust. 18+.</p>
                <p className="mt-1 text-muted-foreground">
                  Deze casino's bezitten géén Nederlandse KSA-vergunning en vallen niet onder CRUKS. Je speelt bij een buitenlandse aanbieder zonder Nederlandse spelersbescherming.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 text-sm font-bold">18+</div>
                <span className="text-sm font-medium text-foreground">Stop op tijd</span>
              </div>
            </div>

            <div className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-3">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Hulp & informatie</h3>
                <ul className="space-y-1.5">
                  <li><a href="https://www.speelbewust.nl" rel="noopener" target="_blank" className="hover:text-gold">Speelbewust.nl</a></li>
                  <li><a href="https://www.loketkansspel.nl" rel="noopener" target="_blank" className="hover:text-gold">Loket Kansspel</a></li>
                  <li><a href="https://www.agog.nl" rel="noopener" target="_blank" className="hover:text-gold">AGOG</a></li>
                </ul>
              </div>
              <div className="sm:col-span-2">
                <h3 className="mb-2 font-semibold text-foreground">Affiliate disclosure</h3>
                <p>
                  Wij kunnen een vergoeding ontvangen van de genoemde casino's. Dit beïnvloedt onze rangschikking niet. Onze beoordelingen zijn gebaseerd op onafhankelijk onderzoek en daadwerkelijke uitbetalingstesten.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
              <p>© 2026 Buitenlandse Casino's — Alle rechten voorbehouden.</p>
              <p className="flex items-center gap-2">
                <Wallet size={14} className="text-gold" />
                Onafhankelijk vergeleken voor Nederlandse spelers.
              </p>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <Button asChild size="lg" className="w-full bg-gold text-gold-foreground shadow-gold hover:bg-gold/90">
            <AffiliateLink href={casinos[0].cta} ariaLabel={`Speel nu bij de snelste uitbetaling ${casinos[0].name}`}>
              <Trophy size={18} className="mr-2" /> #1 {casinos[0].name} · Snelle uitbetaling
            </AffiliateLink>
          </Button>
        </div>
        <div className="h-20 md:hidden" aria-hidden />
      </div>
    </div>
  );
}
