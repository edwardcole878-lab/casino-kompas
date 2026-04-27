import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";

export const Route = createFileRoute("/redactiebeleid")({
  head: () => ({
    meta: [
      { title: "Redactiebeleid — Hoe Buitenlandse Casino Casino's Beoordeelt" },
      { name: "description", content: "Onze testmethode, weging en redactionele onafhankelijkheid uitgelegd. Transparant over commerciële relaties." },
      { property: "og:title", content: "Redactiebeleid — Buitenlandse Casino" },
      { property: "og:description", content: "Hoe wij casino's testen en rangschikken." },
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
          <h2 className="mt-8 text-2xl font-bold">Hoe wij casino's testen</h2>
          <p className="text-muted-foreground leading-relaxed">Elk casino in onze ranking wordt persoonlijk getest met een vaste protocollering: identieke storting van €50, een testperiode van minimaal twee weken, en drie afzonderlijke uitbetaalverzoeken op verschillende momenten van de week.</p>
          <h2 className="mt-8 text-2xl font-bold">Onze weging</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Bonus & voorwaarden (25%)</strong> — netto-waarde gecorrigeerd voor wagering</li>
            <li><strong className="text-foreground">Uitbetaalsnelheid (25%)</strong> — gemeten in minuten en uren</li>
            <li><strong className="text-foreground">Support (20%)</strong> — Nederlandstalig, response time</li>
            <li><strong className="text-foreground">Spelaanbod (20%)</strong> — variëteit, providers en kwaliteit</li>
            <li><strong className="text-foreground">Trust (10%)</strong> — KSA-licentie, klachtenhistorie, transparantie</li>
          </ul>
          <h2 className="mt-8 text-2xl font-bold">Commerciële relaties</h2>
          <p className="text-muted-foreground leading-relaxed">Buitenlandse Casino ontvangt commissie wanneer een speler via onze link een account aanmaakt. Deze commissie heeft <strong className="text-foreground">geen invloed op onze ranking</strong>. Casino's die slecht presteren worden niet hoger gerankt voor een hogere commissie. Sterker nog: enkele van de hoogst-betalende affiliates komen in onze top 10 helemaal niet voor.</p>
          <h2 className="mt-8 text-2xl font-bold">Updates en herzieningen</h2>
          <p className="text-muted-foreground leading-relaxed">Elk kwartaal hertesten we de top 15 en passen de ranking aan. Bij significante incidenten (bijv. KSA-handhaving) updaten we per direct.</p>
        </article>
      </div>
    </Layout>
  );
}
