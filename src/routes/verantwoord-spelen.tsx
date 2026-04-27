import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { ShieldCheck, Phone, Heart } from "lucide-react";

export const Route = createFileRoute("/verantwoord-spelen")({
  head: () => ({
    meta: [
      { title: "Verantwoord Spelen — Hulp en Tools voor Nederlandse Spelers" },
      { name: "description", content: "Speel je teveel? Cruks, limieten en hulpinstanties. Alles over verantwoord gokken in Nederland." },
      { property: "og:title", content: "Verantwoord Spelen — Buitenlandse Casino's" },
      { property: "og:description", content: "Hulp bij gokproblemen voor Nederlandse spelers." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Verantwoord spelen" }]} />
        <header className="mt-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Verantwoord spelen</h1>
          <div className="mt-3"><PageMeta /></div>
        </header>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5 shadow-card">
            <ShieldCheck className="h-8 w-8 text-trust" />
            <h3 className="mt-3 font-bold">Cruks</h3>
            <p className="mt-1 text-sm text-muted-foreground">Centraal Register Uitsluiting Kansspelen — zelf-uitsluiting bij alle KSA-vergunde casino's. <strong>Let op:</strong> buitenlandse casino's zijn niet aangesloten op Cruks.</p>
            <a className="mt-3 inline-block text-sm font-semibold text-trust hover:underline" href="https://cruksregister.nl" rel="noopener noreferrer" target="_blank">cruksregister.nl →</a>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-card">
            <Phone className="h-8 w-8 text-trust" />
            <h3 className="mt-3 font-bold">Loket Kansspel</h3>
            <p className="mt-1 text-sm text-muted-foreground">Anoniem en gratis advies bij gokproblemen, voor jezelf of een naaste.</p>
            <a className="mt-3 inline-block text-sm font-semibold text-trust hover:underline" href="tel:0900-2177721">0900-217 77 21 →</a>
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-card">
            <Heart className="h-8 w-8 text-trust" />
            <h3 className="mt-3 font-bold">AGOG</h3>
            <p className="mt-1 text-sm text-muted-foreground">Anonieme Gokkers Onder Gokkers — lotgenotencontact bij gokverslaving.</p>
            <a className="mt-3 inline-block text-sm font-semibold text-trust hover:underline" href="https://www.agog.nl" rel="noopener noreferrer" target="_blank">agog.nl →</a>
          </div>
        </div>
        <article className="prose prose-neutral mt-10 max-w-none">
          <h2 className="text-2xl font-bold">Tips voor verantwoord spelen</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Stel zelf limieten in</strong> — bij offshore casino's moet je dit handmatig in je accountinstellingen doen</li>
            <li><strong className="text-foreground">Zie het als entertainment</strong> — niet als manier om geld te verdienen</li>
            <li><strong className="text-foreground">Speel nooit met geleend geld</strong> en niet om verliezen 'terug te halen'</li>
            <li><strong className="text-foreground">Houd pauzes</strong> en bepaal vooraf hoeveel tijd je speelt</li>
            <li><strong className="text-foreground">Vraag hulp</strong> als spelen niet meer leuk voelt</li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}
