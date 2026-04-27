import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { TrustNotice } from "@/components/site/TrustNotice";
import { FAQ } from "@/components/site/FAQ";
import { jsonLdString } from "@/lib/jsonld";
import { ArrowRight } from "lucide-react";
import type { Term } from "@/data/taxonomies";

const SITE = "https://buitenlandsecasino.com";

export type HubItem = {
  term: Term;
  /** Full URL path for this term, e.g. /betaalmethode/ideal */
  to: string;
  /** Number of casinos/items behind this term (shown as a count chip) */
  count: number;
};

export function TaxonomyHub({
  title,
  kicker,
  intro,
  items,
  pageUrl,
  countLabel = "casino's",
  faq,
}: {
  title: string;
  kicker: string;
  intro: string;
  items: HubItem[];
  pageUrl: string;
  /** Singular noun to label counts, e.g. "casino's" */
  countLabel?: string;
  faq?: { q: string; a: string }[];
}) {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    url: pageUrl,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: SITE + it.to,
      name: it.term.name,
    })),
  };
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(itemListJsonLd) }}
      />
      <div className="container mx-auto max-w-[1240px] px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: title }]} />

        <header className="mt-6 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">{kicker}</div>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight md:text-4xl">{title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{intro}</p>
          <div className="mt-3"><PageMeta /></div>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group flex flex-col rounded-2xl border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-elegant"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-extrabold leading-tight text-foreground group-hover:text-gold">
                  {it.term.name}
                </h2>
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-foreground">
                  {it.count} {countLabel}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{it.term.tagline}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold">
                Bekijk casino's <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </section>

        {faq && faq.length > 0 && (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
            <FAQ items={faq} />
            <TrustNotice />
          </div>
        )}
      </div>
    </Layout>
  );
}