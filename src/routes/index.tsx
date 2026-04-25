import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { CasinoCard } from "@/components/site/CasinoCard";
import { ComparisonGrid } from "@/components/site/ComparisonGrid";
import { HomeFilters, applyHomeFilter, type HomeFilterId } from "@/components/site/HomeFilters";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Methodology } from "@/components/site/Methodology";
import { AuthorByline } from "@/components/site/AuthorByline";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { CasinoLogo } from "@/components/site/CasinoLogo";
import { Rating } from "@/components/site/Rating";
import { casinos } from "@/data/casinos";
import { ArrowRight, Gift, ShieldCheck as ShieldIcon, PlayCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "42 NL casino's getest — top 10 die overleefden | CasinoWijzer 2026" },
      { name: "description", content: "Onafhankelijke ranking van 42 geteste Nederlandse online casino's. iDEAL-uitbetaling, bonusvoorwaarden en KSA-naleving — geen commissie-ranking." },
      { property: "og:title", content: "Top 10 NL casino's die onze test overleefden — 2026" },
      { property: "og:description", content: "42 casino's getest met eigen geld. Dit zijn de 10 die door onze redactie heen kwamen." },
    ],
  }),
  component: Index,
});

function Index() {
  const top = casinos.slice(0, 10);
  const number1 = casinos[0];
  const [filter, setFilter] = useState<HomeFilterId | null>(null);

  const filtered = useMemo(() => applyHomeFilter(top, filter), [top, filter]);

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
                Wij hebben 42 Nederlandse casino's getest met eigen geld.
                <span className="text-gold"> Dit zijn de 10 die overleefden.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                Onafhankelijke ranking op basis van iDEAL-uitbetaaltijd, bonusvoorwaarden en
                KSA-naleving — <strong className="text-foreground">geen commissie-ranking</strong>.
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
                    {number1.ctaLabel ?? `Claim €${number1.maxBonus} Bonus`} <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <div className="mt-2 text-center text-[11px] text-muted-foreground">
                  ⚡ Direct toegang · binnen 1 minuut · 18+
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Full-width trust strip directly under hero */}
        <div className="border-t bg-card/40">
          <div className="container mx-auto max-w-[1240px] px-6 py-5">
            <TrustStrip />
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
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">Welkom bij Nederland's eerlijkste casinovergelijker</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              De Nederlandse online casinomarkt bestaat sinds oktober 2021 — en is sindsdien explosief gegroeid. Met inmiddels meer dan 25 vergunde operators is het voor de gemiddelde speler nauwelijks nog te overzien wie nou écht een goed aanbod biedt en wie alleen op marketing leunt. Daarom doen wij het werk: elk casino in deze ranking hebben we daadwerkelijk getest met eigen geld, eigen iDEAL-stortingen en eigen uitbetalingen.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Onze ranking weegt vier zaken zwaarder dan de rest: <strong className="text-foreground">snelheid van iDEAL-uitbetaling</strong>, <strong className="text-foreground">eerlijkheid van bonusvoorwaarden</strong>, <strong className="text-foreground">kwaliteit van de Nederlandstalige support</strong> en <strong className="text-foreground">naleving van Cruks en KSA-regelgeving</strong>. Geen ranking op basis van wie de hoogste commissie betaalt — onze redactionele onafhankelijkheid leggen we uit op{" "}
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
              <p className="mt-2 text-muted-foreground">Filter de lijst — alle kaarten en de tabel hierboven werken mee.</p>
            </div>
          </div>
          <div className="mb-6">
            <HomeFilters active={filter} onToggle={(id) => setFilter((f) => (f === id ? null : id))} onClear={() => setFilter(null)} />
          </div>
          <div className="space-y-5">
            {filtered.map((c, i) => (
              <CasinoCard key={c.slug} casino={c} featured={!filter && i === 0} />
            ))}
            {filtered.length === 0 && (
              <div className="rounded-2xl border bg-card p-8 text-center text-sm text-muted-foreground">
                Geen casino's gevonden — pas je filter aan.
              </div>
            )}
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
              { q: "Welk online casino is in 2026 het beste in Nederland?", a: "Op basis van onze tests komt Royal Orange dit jaar als #1 uit de bus, vooral dankzij de combinatie van een sterk welkomstaanbod en lage doorzetvereisten. De ranking verandert echter periodiek — we hertesten ieder kwartaal." },
              { q: "Zijn online casino's legaal in Nederland?", a: "Ja, sinds oktober 2021. Alleen casino's met een vergunning van de Kansspelautoriteit (KSA) mogen Nederlandse spelers bedienen. Alle casino's in onze ranking zijn vergund." },
              { q: "Hoe snel kan ik geld opnemen via iDEAL?", a: "Bij de besten in onze ranking, zoals Tulip Spin, ontvang je je geld binnen een uur. Andere KSA-casino's hanteren 2 tot 24 uur. We meten dit per casino opnieuw." },
              { q: "Wat betekent KSA-vergunning?", a: "De Kansspelautoriteit (KSA) is de Nederlandse toezichthouder. Een KSA-vergunning betekent dat het casino voldoet aan eisen rond eerlijk spel, spelersbescherming, Cruks-koppeling en verantwoord spelen." },
              { q: "Wat is Cruks en wanneer zou ik me inschrijven?", a: "Cruks is het Centraal Register Uitsluiting Kansspelen. Wie zich inschrijft, kan tijdelijk of permanent niet meer bij vergunde casino's spelen. Bedoeld voor mensen die hun speelgedrag willen onderbreken." },
              { q: "Wat is wagering of doorzetvereiste?", a: "De doorzetvereiste (wagering) bepaalt hoe vaak je je bonusbedrag moet inzetten voordat je winst opneembaar wordt. Een wagering van 25x op een €100 bonus betekent dat je voor €2.500 moet inzetten. Hoe lager het getal, hoe eerlijker de bonus." },
              { q: "Welke betaalmethoden zijn het snelst?", a: "iDEAL is in Nederland verreweg de snelste methode voor zowel storten als opnemen — bij de besten ontvang je je geld binnen een uur. Trustly werkt vergelijkbaar. Creditcards en Bancontact zijn meestal binnen 24 uur. Crypto kan zelfs binnen 10 minuten zijn, maar wordt door minder KSA-casino's ondersteund." },
            ]}
          />
          <TrustNotice />
        </div>

        {/* RELATED LINKS — kept at bottom (post-content), top duplicate removed */}
        <div className="mt-20">
          <RelatedLinks
            title="Verken meer categorieën"
            links={[
              { to: "/casino-bonussen", label: "Casino bonussen", description: "Alle types bonussen vergeleken" },
              { to: "/ideal-casinos", label: "iDEAL casino's", description: "Snelste NL-stortmethode" },
              { to: "/casino-spellen", label: "Casinospellen", description: "Slots, live, blackjack en meer" },
              { to: "/nieuwe-online-casinos", label: "Nieuwe casino's", description: "Recent gelanceerd in NL" },
              { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling", description: "< 1 uur op je rekening" },
              { to: "/blog", label: "Blog & gidsen", description: "Artikelen voor beginners" },
            ]}
          />
        </div>
      </div>

      {/* Sticky mobile CTA — #1 pick, dismissable */}
      <StickyMobileCTA
        slug={number1.slug}
        name={number1.name}
        brandColor={number1.brandColor}
        image={number1.logoUrl ?? number1.image}
        bonus={number1.bonusHeadline}
        label="Claim →"
      />
    </Layout>
  );
}