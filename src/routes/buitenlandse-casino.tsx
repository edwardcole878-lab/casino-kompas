import { createFileRoute } from "@tanstack/react-router";
import {
  Shield,
  Zap,
  Star,
  Trophy,
  Clock,
  CreditCard,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import winheroLogo from "@/assets/logos/winhero.t.asset.json";
import cristalpokerLogo from "@/assets/logos/cristalpoker.t.asset.json";
import balooLogo from "@/assets/logos/baloo.t.asset.json";
import velwinsLogo from "@/assets/logos/velwins.t.asset.json";
import spinmillsLogo from "@/assets/logos/spinmills.new.asset.json";
import trustpilotLogo from "@/assets/trustpilot.webp.asset.json";
import shakebetLogo from "@/assets/logos/shakebet.t.asset.json";

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
    payoutSpeed: "~35 min",
    pros: [
      "Direct uitbetaalbare welkomstbonus",
      "Snelle uitbetaling (~35 min)",
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
    payoutSpeed: "~50 min",
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
    payoutSpeed: "~25 min",
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
    payoutSpeed: "~45 min",
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
    logo: shakebetLogo.url,
    rating: 4.5,
    bonus: "100% tot €2.000 (pakket tot €7.000)",
    freeSpins: "350 Free Spins",
    minDeposit: "€20",
    license: "Anjouan / Comoros",
    payoutSpeed: "~30 min",
    pros: [
      "Gunstige bonusvoorwaarden",
      "Nederlandstalige live chat",
      "Free spins op Book of Dead",
    ],
    cta: "https://record.shakepartners.com/_4QIgC6d2ZO5hg6WO2I1rgWNd7ZgqdRLk/1/?pg=1",
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
      ],
    };
  },
  component: LandingPage,
});


function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < full
              ? "fill-nl-orange text-nl-orange"
              : i === full && half
                ? "fill-nl-orange/50 text-nl-orange"
                : "text-nl-blue/25"
          }
        />
      ))}
      <span className="ml-1.5 font-heading text-lg leading-none tracking-wide text-nl-blue">
        {rating.toFixed(1)}
      </span>
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

function CasinoRow({ c }: { c: Casino }) {
  const isTop = c.rank === 1;
  return (
    <article
      className={`relative overflow-hidden rounded-lg border bg-card shadow-row transition-colors ${
        isTop ? "border-nl-orange/60 ring-1 ring-nl-orange/30" : "border-nl-blue/15 hover:border-nl-blue/35"
      }`}
    >
      {isTop && (
        <div className="flex items-center gap-2 bg-nl-orange px-4 py-1.5 font-heading text-sm uppercase tracking-[0.2em] text-white">
          <Trophy size={14} /> Snelste keuze van 2026
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 p-3 text-center sm:p-5 lg:grid-cols-[auto_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,240px)] lg:items-center lg:gap-6 lg:text-left">
        {/* Rank + logo */}
        <div className="col-span-2 flex items-center justify-center lg:col-span-1">
          <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-md border border-nl-blue/10 bg-white p-0 lg:h-28 lg:w-32 lg:shrink-0">
            <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="h-full w-full scale-110 object-contain" />
          </div>
        </div>

        {/* Name, rating, pros */}
        <div className="min-w-0 self-center">
          <h3 className="font-heading text-2xl uppercase leading-none tracking-wide text-nl-blue lg:text-3xl">{c.name}</h3>
          <div className="mt-1 flex justify-center lg:justify-start">
            <Stars rating={c.rating} />
          </div>
          <ul className="mt-2 space-y-0.5">
            {c.pros.map((p) => (
              <li
                key={p}
                className="flex items-start justify-center gap-1.5 text-xs text-muted-foreground lg:justify-start lg:text-sm"
              >
                <Check size={14} className="mt-0.5 shrink-0 text-nl-orange" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bonus + facts */}
        <div className="self-center border-l border-nl-blue/10 pl-3 lg:border-l-0 lg:border-x lg:px-6 lg:py-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nl-red">Welkomstbonus</div>
          <div className="font-heading text-2xl leading-none tracking-wide text-nl-ink lg:text-3xl">{c.bonus}</div>
          <div className="mt-1 text-xs font-medium text-nl-orange lg:text-sm">+ {c.freeSpins}</div>
        </div>

        {/* Payout + CTA */}
        <div className="col-span-2 lg:col-span-1 lg:text-right">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-nl-blue/8 px-3 py-1 text-nl-blue">
            <Zap size={14} className="text-nl-orange" />
            <span className="font-heading text-lg leading-none tracking-wide lg:text-xl">{c.payoutSpeed}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">uitbetaling</span>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-2 h-11 w-full rounded-md bg-nl-orange font-heading text-lg uppercase tracking-widest text-white shadow-orange hover:bg-nl-orange/90 lg:mt-3 lg:h-12 lg:text-xl"
          >
            <AffiliateLink href={c.cta} ariaLabel={`Speel nu bij ${c.name}`}>
              Speel nu <ArrowRight size={18} className="ml-1" />
            </AffiliateLink>
          </Button>
        </div>
      </div>
    </article>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-nl-sand font-body text-nl-ink">
      <div className="h-1.5 w-full bg-nl-flag" aria-hidden />

      {/* HERO */}
      <section className="bg-nl-hero">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:py-9">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-sm bg-white px-3 py-1.5">
              <img src={trustpilotLogo.url} alt="Trustpilot" className="h-5 w-auto sm:h-6" />
            </span>
          </div>
          <h1 className="mt-2 max-w-3xl font-heading text-2xl uppercase leading-[0.95] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl">
            Snelst Uitbetalende <span className="text-nl-orange">iDEAL Casino&apos;s</span> van 2026
          </h1>
          <p className="mt-2 hidden max-w-2xl text-sm text-white/70 sm:mt-3 sm:block sm:text-base">
            Ontvang je winst binnen minuten. Wij testen en rangschikken de snelste buitenlandse online casino&apos;s
            voor Nederlandse spelers — één duidelijke lijst, van 1 tot 6.
          </p>
          <p className="mt-2 text-sm text-white/70 sm:hidden">
            Winst binnen minuten — getest voor Nederlandse spelers.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="Voordelen" className="border-b border-nl-blue/10 bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-1.5 px-4 py-2.5 sm:gap-x-6 sm:gap-y-3 sm:py-4 sm:grid-cols-4">
          {[
            { icon: Zap, label: "Directe uitbetaling" },
            { icon: Clock, label: "Onder 60 minuten" },
            { icon: CreditCard, label: "iDEAL & crypto" },
            { icon: Shield, label: "Verifieerd getest" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <Icon size={14} className="shrink-0 text-nl-orange" />
              <span className="truncate text-[10px] font-semibold uppercase tracking-wide text-nl-blue sm:text-xs sm:tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LISTING */}
      <section id="top6" aria-label="Top 6 buitenlandse casino's met snelle uitbetaling" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-5 sm:py-10">
        <h2 className="font-heading text-2xl uppercase leading-none tracking-wide text-nl-blue sm:text-5xl">
          Top 6 buitenlandse casino&apos;s met snelle uitbetaling
        </h2>
        <p className="mt-2 hidden max-w-2xl text-sm text-muted-foreground sm:block">
          De zes beste buitenlandse online casino&apos;s voor Nederlandse spelers, gerangschikt op uitbetalingssnelheid,
          betrouwbaarheid en welkomstbonus.
        </p>

        <div className="mt-4 space-y-4 sm:mt-6">
          {casinos.map((c) => (
            <CasinoRow key={c.slug} c={c} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-nl-ink text-white/70">
        <div className="h-1.5 w-full bg-nl-flag" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs">
          <p>© 2026 Buitenlandse Casino&apos;s — Alle rechten voorbehouden.</p>
        </div>
      </footer>


      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-nl-blue/15 bg-card/95 p-3 backdrop-blur md:hidden">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-md bg-nl-orange font-heading text-xl uppercase tracking-widest text-white shadow-orange hover:bg-nl-orange/90"
        >
          <AffiliateLink href={casinos[0].cta} ariaLabel={`Speel nu bij ${casinos[0].name}`}>
            <Trophy size={18} className="mr-2" /> #1 {casinos[0].name} · Speel nu
          </AffiliateLink>
        </Button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
