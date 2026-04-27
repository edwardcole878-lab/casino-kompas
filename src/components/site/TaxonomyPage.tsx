import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ComparisonGrid } from "@/components/site/ComparisonGrid";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { jsonLdString } from "@/lib/jsonld";
import type { Casino } from "@/data/casinos";
import type { Term } from "@/data/taxonomies";

const SITE = "https://buitenlandsecasino.com";

export function TaxonomyPage({
  parentLabel,
  parentTo,
  term,
  casinos,
  pageUrl,
}: {
  parentLabel: string;
  parentTo: string;
  term: Term;
  casinos: Casino[];
  /** Absolute URL of the current page (used for JSON-LD ItemList) */
  pageUrl: string;
}) {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Beste ${term.name} casino's Nederland`,
    url: pageUrl,
    numberOfItems: casinos.length,
    itemListElement: casinos.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/review/${c.slug}`,
      name: c.name,
    })),
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(itemListJsonLd) }}
      />
      <div className="container mx-auto max-w-[1240px] px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ to: parentTo, label: parentLabel }, { label: term.name }]} />

        <header className="mt-6 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">
            {parentLabel}
          </div>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight md:text-4xl">
            Beste {term.name} casino's Nederland 2026
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{term.tagline}</p>
          <div className="mt-3"><PageMeta /></div>
          <p className="mt-4 leading-relaxed text-muted-foreground">{term.intro}</p>
        </header>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">
            {casinos.length} {casinos.length === 1 ? "casino" : "casino's"} gevonden
          </h2>
          {casinos.length > 0 ? (
            <ComparisonGrid casinos={casinos} />
          ) : (
            <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">
              Geen casino's gevonden voor deze categorie.
            </div>
          )}
        </section>

        <article className="prose prose-neutral mt-12 max-w-3xl">
          <h2>Meer over {term.name}</h2>
          {term.body.split("\n\n").map((p, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
          ))}
        </article>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ items={term.faq} />
          <TrustNotice />
        </div>
      </div>
    </Layout>
  );
}