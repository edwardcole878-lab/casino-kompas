import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { TaxonomyPage } from "@/components/site/TaxonomyPage";
import { findLicenceBySlug, casinosByLicence } from "@/data/taxonomies";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/licentie/$slug")({
  loader: ({ params }) => {
    const found = findLicenceBySlug(params.slug);
    if (!found) throw notFound();
    const [licence, term] = found;
    return { licence, term, casinos: casinosByLicence(licence) };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.term;
    if (!t) return { meta: [{ title: "Licentie niet gevonden" }] };
    return {
      meta: [
        { title: `${t.name}-vergunde casino's Nederland 2026` },
        { name: "description", content: t.intro.slice(0, 155) },
        { property: "og:title", content: `${t.name} casino's 2026` },
        { property: "og:description", content: t.intro.slice(0, 155) },
        { property: "og:type", content: "website" },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Licentie niet gevonden</h1>
        <Button asChild className="mt-6"><Link to="/">Naar home</Link></Button>
      </div>
    </Layout>
  ),
  component: LicenceTaxonomyPage,
});

function LicenceTaxonomyPage() {
  const { term, casinos } = Route.useLoaderData();
  return (
    <TaxonomyPage
      parentLabel="Licenties"
      parentTo="/"
      term={term}
      casinos={casinos}
      pageUrl={`${SITE}/licentie/${term.slug}`}
    />
  );
}