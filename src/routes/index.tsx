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
import { Award, Wallet, ShieldCheck, Smartphone } from "lucide-react";

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

        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {[
            { icon: Award, label: "Top bonus", to: "/casino-bonussen" },
            { icon: Wallet, label: "iDEAL casino's", to: "/ideal-casinos" },
            { icon: ShieldCheck, label: "Betrouwbaar", to: "/betrouwbare-online-casinos" },
            { icon: Smartphone, label: "Mobiel spelen", to: "/mobiele-casinos" },
          ].map(({ icon: Icon, label, to }) => (
            <Link key={to} to={to} className="group flex items-center gap-3 rounded-xl border bg-card p-4 shadow-card transition-shadow hover:shadow-elegant">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
              <span className="font-semibold group-hover:text-gold">{label}</span>
            </Link>
          ))}
        </div>

        <section id="top10" className="mt-16 scroll-mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Top 10 online casino's Nederland</h2>
              <p className="mt-1 text-muted-foreground">Ranking bijgewerkt op basis van onze meest recente testronde.</p>
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
