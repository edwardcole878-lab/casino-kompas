import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { TaxonomyPage } from "@/components/site/TaxonomyPage";
import { findBonusTypeBySlug, casinosByBonusType } from "@/data/taxonomies";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/bonus-type/$slug")({
  loader: ({ params }) => {
    const found = findBonusTypeBySlug(params.slug);
    if (!found) throw notFound();
    const [type, term] = found;
    return { type, term, casinos: casinosByBonusType(type) };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.term;
    if (!t) return { meta: [{ title: "Bonus type niet gevonden" }] };
    return {
      meta: [
        { title: `Beste ${t.name} casino's Nederland 2026` },
        { name: "description", content: t.intro.slice(0, 155) },
        { property: "og:title", content: `${t.name} casino's — top selectie 2026` },
        { property: "og:description", content: t.intro.slice(0, 155) },
        { property: "og:type", content: "website" },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Bonus type niet gevonden</h1>
        <Button asChild className="mt-6"><Link to="/">Naar home</Link></Button>
      </div>
    </Layout>
  ),
  component: BonusTypeTaxonomyPage,
});

function BonusTypeTaxonomyPage() {
  const { term, casinos } = Route.useLoaderData();
  return (
    <TaxonomyPage
      parentLabel="Bonussen"
      parentTo="/bonussen"
      term={term}
      casinos={casinos}
      pageUrl={`${SITE}/bonus-type/${term.slug}`}
    />
  );
}