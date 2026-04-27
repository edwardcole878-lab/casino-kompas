import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";

export const Route = createFileRoute("/redactiebeleid")({
  head: () => ({
    meta: [
      { title: "Redactiebeleid — Hoe Buitenlandse Casino's beoordeelt" },
      { name: "description", content: "Onze testmethode, weging en redactionele onafhankelijkheid uitgelegd. Transparant over commerciële relaties en offshore-licenties." },
      { property: "og:title", content: "Redactiebeleid — Buitenlandse Casino's" },
      { property: "og:description", content: "Hoe wij offshore casino's testen en rangschikken." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Redactiebeleid" }]} />
        <article className="prose prose-neutral mt-6 max-w-none">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Redactiebeleid</h1>
          <div className="mt-3"><PageMeta /></div>
          <h2 className="mt-8 text-2xl font-bold">Wie wij wel en niet beoordelen</h2>
          <p className="text-muted-foreground leading-relaxed">Buitenlandse Casino's beoordeelt uitsluitend online casino's die <strong className="text-foreground">géén Nederlandse KSA-vergunning hebben</strong>. Het zijn operators met een offshore licentie (Anjouan, Curaçao of MGA) die Nederlandse spelers accepteren. Deze casino's vallen niet onder Nederlands toezicht en zijn niet aangesloten op het Cruks-register.</p>
          <h2 className="mt-8 text-2xl font-bold">Hoe wij casino's testen</h2>
          <p className="text-muted-foreground leading-relaxed">Elk casino in onze ranking wordt persoonlijk getest met een vaste protocollering: identieke storting van €50, een testperiode van minimaal twee weken, en drie afzonderlijke uitbetaalverzoeken op verschillende momenten van de week. We documenteren wachttijden, KYC-vragen en supportresponses.</p>
          <h2 className="mt-8 text-2xl font-bold">Onze weging</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Bonus & voorwaarden (25%)</strong> — netto-waarde gecorrigeerd voor wagering</li>
            <li><strong className="text-foreground">Uitbetaalsnelheid (25%)</strong> — gemeten in minuten en uren</li>
            <li><strong className="text-foreground">Support (20%)</strong> — Nederlandstalig, response time</li>
            <li><strong className="text-foreground">Spelaanbod (20%)</strong> — variëteit, providers en kwaliteit</li>
            <li><strong className="text-foreground">Trust (10%)</strong> — licentie-uitgever, klachtenhistorie, transparantie van eigenaarschap</li>
          </ul>
          <h2 className="mt-8 text-2xl font-bold">Commerciële relaties</h2>
          <p className="text-muted-foreground leading-relaxed">Buitenlandse Casino's ontvangt commissie wanneer een speler via onze link een account aanmaakt. Deze commissie heeft <strong className="text-foreground">geen invloed op onze ranking</strong>. Casino's die slecht presteren worden niet hoger gerankt voor een hogere commissie. Sterker nog: enkele van de hoogst-betalende affiliates komen in onze top 10 helemaal niet voor.</p>
          <h2 className="mt-8 text-2xl font-bold">Updates en herzieningen</h2>
          <p className="text-muted-foreground leading-relaxed">Elk kwartaal hertesten we de top 15 en passen de ranking aan. Bij significante incidenten (klachten, vertraagde uitbetalingen, licentie-issues) updaten we per direct.</p>
          <h2 className="mt-8 text-2xl font-bold">Risico's van offshore spelen</h2>
          <p className="text-muted-foreground leading-relaxed">Spelen bij een buitenlands casino zonder KSA-vergunning betekent dat je geen beroep kunt doen op de Nederlandse Kansspelautoriteit bij geschillen. Er is geen automatische Cruks-bescherming. Stel altijd zelf storting- en verlieslimieten in en raadpleeg <a href="https://www.agog.nl" target="_blank" rel="noopener" className="text-primary underline">AGOG</a> bij gokproblemen.</p>
        </article>
      </div>
    </Layout>
  );
}
