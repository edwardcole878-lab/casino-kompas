import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { TopThreePodium } from "@/components/site/TopThreePodium";
import { TrustStrip } from "@/components/site/TrustStrip";
import { casinos } from "@/data/casinos";
import { Award, Wallet, ShieldCheck, Smartphone, Gift, Zap, Dice5, Coins } from "lucide-react";

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
      <Hero
        eyebrow="Editie 2026 — bijgewerkt deze maand"
        title="Beste Online Casino Nederland 2026"
        subtitle="Onafhankelijke top 10 van Nederlandse online casino's met KSA-vergunning. Vergelijk bonussen, iDEAL-uitbetalingen en spelaanbod in één overzicht."
        primaryCta={{ label: "Bekijk top 10 casino's", to: "#top10" }}
        secondary={{ label: "Lees onze methode", to: "/redactiebeleid" }}
        meta="42 casino's getest · 380+ uur speeltijd"
      />

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Top 3 podium — primary attention zone */}
        <section className="-mt-24 md:-mt-32 relative z-10 pt-6">
          <TopThreePodium casinos={casinos} />
          <div className="mt-6"><TrustStrip /></div>
        </section>

        <article className="prose prose-neutral max-w-3xl">
          <div className="mt-12">
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

        <section className="mt-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold md:text-3xl">Vind direct wat je zoekt</h2>
            <p className="mt-1 text-muted-foreground">Spring naar de categorie die past bij jouw speelstijl.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <Link key={to} to={to} className="group hover-lift relative overflow-hidden rounded-2xl border bg-card p-5 shadow-card">
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

        <section id="top10" className="mt-20 scroll-mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gold">De volledige ranking</div>
              <h2 className="mt-1 text-2xl font-extrabold md:text-4xl">Top 10 online casino's Nederland</h2>
              <p className="mt-2 text-muted-foreground">Ranking bijgewerkt op basis van onze meest recente testronde.</p>
            </div>
          </div>
          <ComparisonTable casinos={top} />
        </section>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_320px]">
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

        <div className="mt-12">
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
