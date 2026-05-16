import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { ComparisonGrid } from "@/components/site/ComparisonGrid";
import { Button } from "@/components/ui/button";
import { getSlot, casinosForSlot } from "@/data/slots";
import { providerTerms } from "@/data/taxonomies";
import type { Provider } from "@/data/casinos";
import { jsonLdString } from "@/lib/jsonld";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/slot/$slug")({
  loader: ({ params }) => {
    const slot = getSlot(params.slug);
    if (!slot) throw notFound();
    return { slot, casinos: casinosForSlot(slot.slug) };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.slot;
    if (!s) return { meta: [{ title: "Slot niet gevonden" }] };
    return {
      meta: [
        { title: `${s.name} slot review | RTP ${s.rtp}% — ${s.provider}` },
        { name: "description", content: `${s.tagline}. RTP ${s.rtp}%, ${s.volatility} volatiliteit, max win ${s.maxWin}.`.slice(0, 155) },
        { property: "og:title", content: `${s.name} (${s.provider}) — slot review` },
        { property: "og:description", content: s.tagline },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Slot niet gevonden</h1>
        <Button asChild className="mt-6"><Link to="/slots">Alle slots</Link></Button>
      </div>
    </Layout>
  ),
  component: SlotDetail,
});

function SlotDetail() {
  const { slot: s, casinos } = Route.useLoaderData();
  const providerTerm = providerTerms[s.provider as Provider];
  const gameJsonLd = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: s.name,
    url: `${SITE}/slot/${s.slug}`,
    description: s.description,
    gamePlatform: "Web",
    publisher: { "@type": "Organization", name: s.provider },
    datePublished: String(s.releaseYear),
  };
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(gameJsonLd) }} />
      <div className="container mx-auto max-w-[1240px] px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ to: "/slots", label: "Slots" }, { label: s.name }]} />
        <header className="mt-6 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">
            {providerTerm ? (
              <Link to="/provider/$slug" params={{ slug: providerTerm.slug }} className="hover:underline">{s.provider}</Link>
            ) : s.provider}
          </div>
          <h1 className="mt-1 text-3xl font-extrabold md:text-4xl">{s.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{s.tagline}</p>
          <div className="mt-3"><PageMeta /></div>
        </header>

        <section className="mt-8 grid gap-3 rounded-2xl border bg-card p-6 shadow-soft md:grid-cols-4">
          <div><div className="text-xs uppercase text-muted-foreground">RTP</div><div className="text-2xl font-extrabold">{s.rtp}%</div></div>
          <div><div className="text-xs uppercase text-muted-foreground">Volatiliteit</div><div className="text-2xl font-extrabold">{s.volatility}</div></div>
          <div><div className="text-xs uppercase text-muted-foreground">Max win</div><div className="text-2xl font-extrabold">{s.maxWin}</div></div>
          <div><div className="text-xs uppercase text-muted-foreground">Paylines</div><div className="text-2xl font-extrabold">{s.paylines}</div></div>
        </section>

        <article className="prose prose-neutral mt-10 max-w-3xl">
          <h2>Over {s.name}</h2>
          <p className="leading-relaxed text-muted-foreground">{s.description}</p>
        </article>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Speel {s.name} bij deze KSA-casino's</h2>
          {casinos.length > 0 ? <ComparisonGrid casinos={casinos} /> : (
            <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">Geen casino's gevonden.</div>
          )}
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ items={[
            { q: `Wat is de RTP van ${s.name}?`, a: `${s.rtp}% — gemeten over miljoenen spins. De korte termijn varieert sterk.` },
            { q: `Is ${s.name} geschikt voor beginners?`, a: s.volatility === "Laag" || s.volatility === "Medium" ? "Ja, lagere volatiliteit betekent regelmatigere kleine winsten." : "Minder geschikt — hoge volatiliteit vraagt om een groter budget." },
          ]} />
          <TrustNotice />
        </div>
      </div>
    </Layout>
  );
}