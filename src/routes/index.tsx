import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { TopThreePodium } from "@/components/site/TopThreePodium";
import { TrustStrip } from "@/components/site/TrustStrip";
import { casinos } from "@/data/casinos";
import { Award, Wallet, ShieldCheck, Smartphone, Gift, Zap, Dice5, Coins, ArrowRight, ShieldCheck as ShieldIcon, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beste Online Casino Nederland 2026 — Top 10 Vergelijking | CasinoWijzer" },
      { name: "description", content: "Vergelijk de beste online casino's van Nederland in 2026. Onafhankelijke top 10 met KSA-vergunning, iDEAL, snelle uitbetaling en eerlijke bonussen." },
      { property: "og:title", content: "Beste Online Casino Nederland 2026 — Top 10" },
      { property: "og:description", content: "Onafhankelijke vergelijking van Nederlandse online casino's met KSA-licentie." },
    ],
  }),
  component: Index,
});

function Index() {
  const top = casinos.slice(0, 10);
  return (
    <Layout>
      {/* Section 1 — Minimal hero intro strip */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background via-background to-secondary/40">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(700px_300px_at_80%_-100px,oklch(0.82_0.16_85/0.18),transparent),radial-gradient(600px_300px_at_10%_120%,oklch(0.6_0.16_245/0.12),transparent)]" />
        <div className="container relative mx-auto max-w-[1240px] px-6 pt-10 pb-6 md:pt-14 md:pb-8 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur">
            <ShieldIcon className="h-3.5 w-3.5 text-trust" /> Editie 2026 · onafhankelijk getest
          </div>
          <h1 className="mx-auto max-w-3xl text-[32px] font-extrabold leading-[1.15] tracking-tight md:text-[44px]">
            Beste Online Casino Nederland 2026
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Vergelijk direct de beste casino's en speel veilig bij top aanbieders met KSA-vergunning.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="h-12 gradient-cta cta-glow rounded-xl px-6 text-base font-extrabold text-gold-foreground shadow-gold">
              <a href="#top3">Vergelijk Casino's <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Link to="/redactiebeleid" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
              Hoe wij testen →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldIcon className="h-3.5 w-3.5 text-trust" /> KSA-vergund</span>
            <span className="inline-flex items-center gap-1.5"><TrendingUp className="h-3.5 w-3.5 text-success" /> 42 casino's getest</span>
            <span>🇳🇱 Speciaal voor Nederland</span>
          </div>
        </div>
      </section>

      {/* Section 2 — TOP 3 Decision System (above-the-fold core) */}
      <section id="top3" className="container mx-auto max-w-[1240px] px-6 pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Top 3 · April 2026</div>
            <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">Direct de beste keuze</h2>
          </div>
          <Link to="/beste-online-casinos" className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground sm:inline-flex">
            Volledige top 10 →
          </Link>
        </div>
        <TopThreePodium casinos={casinos} />
        <div className="mt-8"><TrustStrip /></div>
      </section>

      <div className="container mx-auto max-w-[1240px] px-6 pb-16 md:pb-24">

        <article className="prose prose-neutral max-w-3xl">
          <div className="mt-16 md:mt-24">
          <PageMeta />
          </div>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">Welkom bij Nederland's eerlijkste casinovergelijker</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            De Nederlandse online casinomarkt bestaat sinds oktober 2021 — en is sindsdien explosief gegroeid. Met inmiddels meer dan 25 vergunde operators is het voor de gemiddelde speler nauwelijks nog te overzien wie nou écht een goed aanbod biedt en wie alleen op marketing leunt. Daarom doen wij het werk: elk casino in deze ranking hebben we daadwerkelijk getest met eigen geld, eigen iDEAL-stortingen en eigen uitbetalingen.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Onze ranking weegt vier zaken zwaarder dan de rest: <strong className="text-foreground">snelheid van iDEAL-uitbetaling</strong>, <strong className="text-foreground">eerlijkheid van bonusvoorwaarden</strong>, <strong className="text-foreground">kwaliteit van de Nederlandstalige support</strong> en <strong className="text-foreground">naleving van Cruks en KSA-regelgeving</strong>. Geen ranking op basis van wie de hoogste commissie betaalt — onze redactionele onafhankelijkheid leggen we uit op{" "}
            <Link to="/redactiebeleid" className="text-trust underline">de redactiebeleid-pagina</Link>.
          </p>
        </article>

        <section className="mt-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Vind direct wat je zoekt</h2>
            <p className="mt-2 text-muted-foreground">Spring naar de categorie die past bij jouw speelstijl.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gift, label: "Top bonussen", desc: "Welkomstaanbod vergeleken", to: "/casino-bonussen", color: "from-gold/20 to-gold/5" },
              { icon: Wallet, label: "iDEAL casino's", desc: "Direct storten in NL", to: "/ideal-casinos", color: "from-trust/20 to-trust/5" },
              { icon: Zap, label: "Snelle uitbetaling", desc: "Binnen 1 uur op je rekening", to: "/snelle-uitbetaling-casino", color: "from-success/20 to-success/5" },
              { icon: Dice5, label: "Live casino", desc: "Spelen met echte dealer", to: "/live-casino", color: "from-destructive/15 to-destructive/5" },
              { icon: Coins, label: "Online slots", desc: "Duizenden gokkasten", to: "/online-slots", color: "from-accent to-accent/30" },
              { icon: Smartphone, label: "Mobiel casino", desc: "Spelen op je telefoon", to: "/mobiele-casinos", color: "from-primary/15 to-primary/5" },
              { icon: ShieldCheck, label: "Betrouwbaar", desc: "KSA & Cruks-compliant", to: "/betrouwbare-online-casinos", color: "from-trust/20 to-trust/5" },
              { icon: Award, label: "Nieuwe casino's", desc: "Recent gelanceerd", to: "/nieuwe-online-casinos", color: "from-gold/20 to-gold/5" },
            ].map(({ icon: Icon, label, desc, to, color }) => (
              <Link key={to} to={to} className="group hover-lift relative overflow-hidden rounded-2xl border bg-card p-5 shadow-soft">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color} opacity-60`} />
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-background/80 text-foreground shadow-card backdrop-blur"><Icon className="h-5 w-5" /></span>
                  <div className="mt-4 font-bold group-hover:text-gold">{label}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="top10" className="mt-24 scroll-mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gold">De volledige ranking</div>
              <h2 className="mt-1 text-3xl font-extrabold md:text-4xl">Top 10 online casino's Nederland</h2>
              <p className="mt-2 text-muted-foreground">Ranking bijgewerkt op basis van onze meest recente testronde.</p>
            </div>
          </div>
          <ComparisonTable casinos={top} />
        </section>

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ
            items={[
              { q: "Welk online casino is in 2026 het beste in Nederland?", a: "Op basis van onze tests komt Royal Orange dit jaar als #1 uit de bus, vooral dankzij de combinatie van een sterk welkomstaanbod en lage doorzetvereisten. De ranking verandert echter periodiek — we hertesten ieder kwartaal." },
              { q: "Zijn online casino's legaal in Nederland?", a: "Ja, sinds oktober 2021. Alleen casino's met een vergunning van de Kansspelautoriteit (KSA) mogen Nederlandse spelers bedienen. Alle casino's in onze ranking zijn vergund." },
              { q: "Hoe snel kan ik geld opnemen via iDEAL?", a: "Bij de besten in onze ranking, zoals Tulip Spin, ontvang je je geld binnen een uur. Andere KSA-casino's hanteren 2 tot 24 uur. We meten dit per casino opnieuw." },
              { q: "Wat betekent KSA-vergunning?", a: "De Kansspelautoriteit (KSA) is de Nederlandse toezichthouder. Een KSA-vergunning betekent dat het casino voldoet aan eisen rond eerlijk spel, spelersbescherming, Cruks-koppeling en verantwoord spelen." },
              { q: "Wat is Cruks en wanneer zou ik me inschrijven?", a: "Cruks is het Centraal Register Uitsluiting Kansspelen. Wie zich inschrijft, kan tijdelijk of permanent niet meer bij vergunde casino's spelen. Bedoeld voor mensen die hun speelgedrag willen onderbreken." },
            ]}
          />
          <TrustNotice />
        </div>

        <div className="mt-24">
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
    </Layout>
  );
}
