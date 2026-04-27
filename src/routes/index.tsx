import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CasinoCard } from "@/components/site/CasinoCard";
import { ComparisonGrid } from "@/components/site/ComparisonGrid";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { Methodology } from "@/components/site/Methodology";
import { AuthorByline } from "@/components/site/AuthorByline";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { CasinoLogo } from "@/components/site/CasinoLogo";
import { Rating } from "@/components/site/Rating";
import { CategoryLists } from "@/components/site/CategoryLists";
import { casinos } from "@/data/casinos";
import { ArrowRight, Gift, ShieldCheck as ShieldIcon, PlayCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beste buitenlandse online casino's voor Nederland — top 10 van 2026 | Buitenlandse Casino's" },
      { name: "description", content: "Onafhankelijke ranking van buitenlandse online casino's voor Nederlandse spelers. Bonusvoorwaarden, uitbetaalsnelheid en transparantie — geen commissie-ranking." },
      { property: "og:title", content: "Top 10 buitenlandse casino's voor NL — 2026" },
      { property: "og:description", content: "Buitenlandse casino's getest met eigen geld. Dit zijn de aanbieders die door onze redactie heen kwamen." },
    ],
  }),
  component: Index,
});

function Index() {
  const top = casinos.slice(0, 10);
  const number1 = casinos[0];
  const filtered = top;

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background via-background to-secondary/40">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(700px_300px_at_80%_-100px,oklch(0.82_0.16_85/0.18),transparent),radial-gradient(600px_300px_at_10%_120%,oklch(0.6_0.16_245/0.12),transparent)]" />
        <div className="container relative mx-auto max-w-[1240px] px-6 pt-10 pb-10 md:pt-14 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur">
                <ShieldIcon className="h-3.5 w-3.5 text-trust" />
                Editie april 2026 · onafhankelijk getest
              </div>
              <h1 className="text-[30px] font-extrabold leading-[1.1] tracking-tight md:text-[42px] lg:text-[46px]">
                Wij testen buitenlandse online casino's voor Nederlandse spelers.
                <span className="text-gold"> Dit zijn de casino's die onze test overleefden.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                Onafhankelijke ranking op basis van uitbetaalsnelheid, bonusvoorwaarden en
                transparantie — <strong className="text-foreground">geen commissie-ranking</strong>.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
                <Link to="/redactiebeleid" className="inline-flex items-center gap-1.5 hover:text-foreground">
                  <PlayCircle className="h-4 w-4 text-trust" /> Hoe wij testen
                </Link>
                <span className="inline-flex items-center gap-1.5">🇳🇱 Speciaal voor Nederland</span>
              </div>
            </div>

            {/* #1 PICK CARD */}
            <article className="relative overflow-hidden rounded-2xl border-2 border-gold/60 bg-gradient-to-br from-card via-card to-accent/40 p-5 shadow-glow-gold md:p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full gradient-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
                  <Trophy className="h-3.5 w-3.5" /> #1 van april 2026
                </div>
                <div className="mt-4 flex items-center gap-4">
                  {(number1.logoUrl ?? number1.image) ? (
                    <img
                      src={number1.logoUrl ?? number1.image}
                      alt={`${number1.name} logo`}
                      width={64}
                      height={64}
                      decoding="async"
                      fetchPriority="high"
                      className="h-16 w-16 overflow-hidden rounded-xl bg-white object-contain p-1 text-[0] shadow-card"
                    />
                  ) : (
                    <CasinoLogo name={number1.name} brandColor={number1.brandColor} size="lg" />
                  )}
                  <div className="min-w-0">
                    <h2 className="text-2xl font-extrabold leading-tight">{number1.name}</h2>
                    <div className="mt-1 flex items-center gap-2">
                      <Rating value={number1.rating} />
                      <span className="text-xs text-muted-foreground">· {number1.tagline}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-xl gradient-bonus border border-gold/40 p-4">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                      <Gift className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">Welkomstbonus</div>
                      <div className="text-lg font-black leading-tight md:text-xl">{number1.bonusHeadline}</div>
                      <div className="mt-1 text-[12px] text-foreground/70">Wagering {number1.wagering} · Min. {number1.minDeposit}</div>
                    </div>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-5 h-14 w-full gradient-cta cta-glow text-base font-extrabold text-gold-foreground shadow-gold md:text-lg">
                  <a href={`/go/${number1.slug}`} rel="sponsored nofollow">
                    {number1.ctaLabel ?? "Speel Nu"} <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <div className="mt-2 text-center text-[11px] text-muted-foreground">
                  ⚡ Direct toegang · binnen 1 minuut · 18+
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1240px] px-6 pb-16 md:pb-24">
        {/* COMPARISON TABLE */}
        <section className="mt-12 md:mt-16">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Side-by-side vergelijking</div>
              <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">Vergelijk de top 10 in één oogopslag</h2>
              <p className="mt-1 text-sm text-muted-foreground">Klik op een kolomtitel om te sorteren.</p>
            </div>
          </div>
          <ComparisonGrid casinos={top} />
        </section>

        {/* AUTHOR + INTRO */}
        <section className="mt-16 max-w-3xl">
          <AuthorByline />
          <article className="prose prose-neutral mt-6 max-w-none">
            <div className="mt-2"><PageMeta /></div>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">Welkom bij dé vergelijker voor buitenlandse online casino's</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sinds de Nederlandse markt in 2021 reguleerde, kiezen veel spelers er bewust voor om bij <strong className="text-foreground">buitenlandse online casino's</strong> te spelen — voor hogere bonussen, ruimer spelaanbod, snellere uitbetalingen of crypto-opties die op de KSA-markt niet beschikbaar zijn. Dit platform vergelijkt uitsluitend casino's met een offshore-licentie (Anjouan, Curaçao, MGA). Wij zijn geen vervanger voor KSA-vergunde aanbieders en raden spelers die in CRUKS staan af om hier te spelen — CRUKS bestaat niet voor niets.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Onze ranking weegt vier zaken zwaarder dan de rest: <strong className="text-foreground">snelheid van uitbetaling</strong>, <strong className="text-foreground">eerlijkheid van bonusvoorwaarden</strong>, <strong className="text-foreground">kwaliteit van support voor Nederlandse spelers</strong> en <strong className="text-foreground">transparantie van de operator</strong>. Geen ranking op basis van wie de hoogste commissie betaalt — onze redactionele onafhankelijkheid leggen we uit op{" "}
              <Link to="/redactiebeleid" className="text-trust underline">de redactiebeleid-pagina</Link>.
            </p>
          </article>
        </section>

        {/* TOP 10 with filter */}
        <section id="top10" className="mt-20 scroll-mt-24">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gold">De volledige ranking</div>
              <h2 className="mt-1 text-3xl font-extrabold md:text-4xl">Top 10 online casino's Nederland</h2>
              <p className="mt-2 text-muted-foreground">Onze volledige ranking, getest met eigen geld.</p>
            </div>
          </div>
          <div className="space-y-5">
            {filtered.map((c, i) => (
              <CasinoCard key={c.slug} casino={c} featured={i === 0} />
            ))}
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="mt-20">
          <Methodology />
        </section>

        {/* FAQ */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ
            items={[
              { q: `Welk buitenlands casino is in 2026 het beste voor Nederlandse spelers?`, a: `Op basis van onze tests staat ${number1.name} dit jaar bovenaan dankzij ${number1.bonusHeadline} en de combinatie van crypto en iDEAL. De ranking verandert per kwartaal — we hertesten doorlopend.` },
              { q: "Is spelen bij een buitenlands casino legaal in Nederland?", a: "Voor de speler is het niet strafbaar. De aanbieder mag zonder KSA-vergunning geen Nederlandse spelers actief werven. Spelen gebeurt op eigen verantwoordelijkheid." },
              { q: "Wat is het verschil met een KSA-casino?", a: "KSA-casino's vallen onder Nederlands toezicht (Cruks, stortlimieten, kansspelbelasting). Buitenlandse casino's hanteren hun eigen regime — vaak hogere bonussen en snellere uitbetalingen, maar minder spelersbescherming." },
              { q: "Wat als ik in CRUKS sta?", a: "Speel dan niet bij deze casino's. CRUKS bestaat om je te beschermen — buitenlandse casino's vallen buiten dat register." },
              { q: "Wat is wagering of doorzetvereiste?", a: "De doorzetvereiste bepaalt hoe vaak je je bonusbedrag moet inzetten voordat winst opneembaar wordt. 30x op een €100 bonus = €3.000 inzet. Hoe lager, hoe eerlijker." },
              { q: "Hoe verifieer ik dat een buitenlands casino betrouwbaar is?", a: "Controleer licentiehouder (Anjouan, Curaçao, MGA), eigenaar, klachtenroute, betaalmethoden en uitbetaaltrack-record. Onze reviews testen elk van deze punten." },
            ]}
          />
          <TrustNotice />
        </div>

        {/* CATEGORY LISTS — types & betaalmethoden */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-extrabold md:text-3xl">Verken meer categorieën</h2>
          <CategoryLists
            groups={[
              {
                title: "Casino types",
                items: [
                  { to: "/beste-online-casinos", label: "Echt Geld Casino's" },
                  { to: "/casinos-zonder-registratie", label: "Casino's Zonder Registratie" },
                  { to: "/casinos-zonder-cruks", label: "Casino's Zonder CRUKS" },
                  { to: "/casinos-zonder-limiet", label: "Casino's Zonder Limiet" },
                  { to: "/snelle-uitbetaling-casino", label: "Snelle Uitbetaling Casino's" },
                  { to: "/buitenlandse-casino", label: "Buitenlandse Casino's" },
                ],
              },
              {
                title: "Betaalmethoden",
                items: [
                  { to: "/ideal-casinos", label: "iDEAL Casino's" },
                  { to: "/crypto-casino", label: "Crypto Casino's" },
                  { to: "/betaalmethoden", label: "Alle betaalmethoden" },
                ],
              },
            ]}
          />
        </section>
      </div>

      {/* Sticky mobile CTA — #1 pick, dismissable */}
      <StickyMobileCTA
        slug={number1.slug}
        name={number1.name}
        brandColor={number1.brandColor}
        image={number1.logoUrl ?? number1.image}
        bonus={number1.bonusHeadline}
        label="Speel Nu →"
      />
    </Layout>
  );
}