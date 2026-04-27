import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { TaxonomyPage } from "@/components/site/TaxonomyPage";
import { findProviderBySlug, casinosByProvider } from "@/data/taxonomies";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/provider/$slug")({
  loader: ({ params }) => {
    const found = findProviderBySlug(params.slug);
    if (!found) throw notFound();
    const [provider, term] = found;
    return { provider, term, casinos: casinosByProvider(provider) };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.term;
    if (!t) return { meta: [{ title: "Provider niet gevonden" }] };
    return {
      meta: [
        { title: `${t.name} casino's Nederland 2026 — beste selectie` },
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
        <h1 className="text-3xl font-bold">Provider niet gevonden</h1>
        <Button asChild className="mt-6"><Link to="/">Naar home</Link></Button>
      </div>
    </Layout>
  ),
  component: ProviderTaxonomyPage,
});

function ProviderTaxonomyPage() {
  const { term, casinos } = Route.useLoaderData();
  return (
    <TaxonomyPage
      parentLabel="Providers"
      parentTo="/"
      term={term}
      casinos={casinos}
      pageUrl={`${SITE}/provider/${term.slug}`}
    />
  );
}