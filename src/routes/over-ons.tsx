import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Buitenlandse Casino's" },
      { name: "description", content: "Wie wij zijn, hoe wij testen en waarom wij buitenlandse online casino's voor Nederlandse spelers vergelijken." },
      { property: "og:title", content: "Over Buitenlandse Casino's" },
      { property: "og:description", content: "Onafhankelijke redactie, transparante methodiek, geen commissie-ranking." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Over ons" }]} />
        <article className="prose prose-neutral mt-6 max-w-none">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Over Buitenlandse Casino's</h1>
          <div className="mt-3"><PageMeta /></div>

          <h2 className="mt-8 text-2xl font-bold">Onze missie</h2>
          <p className="text-muted-foreground leading-relaxed">
            Eerlijke, getoetste informatie over <strong className="text-foreground">buitenlandse online casino's</strong> voor Nederlandse spelers. Wij zijn geen vervanging voor KSA-vergunde aanbieders en raden mensen die in CRUKS staan af om hier te spelen — CRUKS bestaat niet voor niets. Voor iedereen die bewust kiest voor een offshore casino, willen wij de beste informatiebron in het Nederlands zijn.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Hoe deze site is opgebouwd</h2>
          <p className="text-muted-foreground leading-relaxed">
            Elke casino-review op deze site is gebaseerd op een eigen testaccount, een eigen storting en minstens twee weken speeltijd. We klokken uitbetalingen, testen support, en hertesten elk kwartaal. Ons <Link to="/redactiebeleid" className="text-trust underline">redactiebeleid</Link> beschrijft de exacte methodiek en hoe we omgaan met commerciële relaties.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Bedrijfsgegevens</h2>
          <div className="rounded-2xl border bg-card p-5 not-prose">
            <dl className="grid gap-2 text-sm md:grid-cols-2">
              <div><dt className="text-muted-foreground">Handelsnaam</dt><dd className="font-semibold">Buitenlandse Casino's</dd></div>
              <div><dt className="text-muted-foreground">KvK</dt><dd className="font-semibold">[TBC]</dd></div>
              <div><dt className="text-muted-foreground">BTW</dt><dd className="font-semibold">[TBC]</dd></div>
              <div><dt className="text-muted-foreground">Adres</dt><dd className="font-semibold">[TBC]</dd></div>
              <div><dt className="text-muted-foreground">E-mail</dt><dd className="font-semibold"><a className="underline" href="mailto:redactie@buitenlandsecasinos.com">redactie@buitenlandsecasinos.com</a></dd></div>
            </dl>
          </div>

          <h2 className="mt-8 text-2xl font-bold">Onze redactie</h2>
          <p className="text-muted-foreground leading-relaxed">
            De redactie wordt geleid door <Link to="/auteur/$slug" params={{ slug: "mark-de-vries" }} className="text-trust underline">Mark de Vries</Link>, hoofdredacteur met acht jaar ervaring in de Nederlandse online gokmarkt. Het team groeit en we breiden de redactie de komende maanden verder uit.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Commerciële relaties</h2>
          <p className="text-muted-foreground leading-relaxed">
            We ontvangen commissie wanneer een speler via onze affiliate-link een account aanmaakt bij een casino. Deze commissie heeft <strong className="text-foreground">geen invloed op onze ranking</strong>. Lees meer in ons <Link to="/redactiebeleid" className="text-trust underline">redactiebeleid</Link>.
          </p>
        </article>
      </div>
    </Layout>
  );
}
