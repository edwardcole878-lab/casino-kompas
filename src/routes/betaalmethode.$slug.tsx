import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { TaxonomyPage } from "@/components/site/TaxonomyPage";
import { findPaymentBySlug, casinosByPayment } from "@/data/taxonomies";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/betaalmethode/$slug")({
  loader: ({ params }) => {
    const found = findPaymentBySlug(params.slug);
    if (!found) throw notFound();
    const [method, term] = found;
    return { method, term, casinos: casinosByPayment(method) };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.term;
    if (!t) return { meta: [{ title: "Betaalmethode niet gevonden" }] };
    return {
      meta: [
        { title: `Beste ${t.name} casino's Nederland 2026 | Buitenlandse Casino` },
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
        <h1 className="text-3xl font-bold">Betaalmethode niet gevonden</h1>
        <Button asChild className="mt-6"><Link to="/">Naar home</Link></Button>
      </div>
    </Layout>
  ),
  component: PaymentTaxonomyPage,
});

function PaymentTaxonomyPage() {
  const { term, casinos } = Route.useLoaderData();
  return (
    <TaxonomyPage
      parentLabel="Betaalmethoden"
      parentTo="/betaalmethoden"
      term={term}
      casinos={casinos}
      pageUrl={`${SITE}/betaalmethode/${term.slug}`}
    />
  );
}