import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Percent, Wallet } from "lucide-react";
import { getBonus } from "@/data/bonuses";
import { getCasino } from "@/data/casinos";
import { bonusTypeTerms } from "@/data/taxonomies";
import type { BonusType } from "@/data/casinos";
import { jsonLdString } from "@/lib/jsonld";
import { defaultAuthor, publisherJsonLd } from "@/data/authors";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/bonus/$slug")({
  loader: ({ params }) => {
    const bonus = getBonus(params.slug);
    if (!bonus) throw notFound();
    const casino = getCasino(bonus.casinoSlug);
    return { bonus, casino };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.bonus;
    if (!b) return { meta: [{ title: "Bonus niet gevonden" }] };
    return {
      meta: [
        { title: `${b.headline} | ${loaderData?.casino?.name ?? "Casino"} bonus 2026` },
        { name: "description", content: b.description.slice(0, 155) },
        { property: "og:title", content: b.headline },
        { property: "og:description", content: b.description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "author", content: defaultAuthor.name },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Bonus niet gevonden</h1>
        <Button asChild className="mt-6"><Link to="/bonussen">Alle bonussen</Link></Button>
      </div>
    </Layout>
  ),
  component: BonusDetail,
});

function BonusDetail() {
  const { bonus: b, casino } = Route.useLoaderData();
  const term = bonusTypeTerms[b.type as BonusType];
  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: b.headline,
    description: b.description,
    url: `${SITE}/bonus/${b.slug}`,
    category: term.name,
    seller: casino ? { "@type": "Organization", name: casino.name } : undefined,
    offeredBy: publisherJsonLd(),
    availability: "https://schema.org/InStock",
    validFrom: b.lastUpdated,
    priceSpecification: {
      "@type": "PriceSpecification",
      price: b.amount,
      priceCurrency: "EUR",
    },
  };
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(offerJsonLd) }} />
      <div className="container mx-auto max-w-[1240px] px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ to: "/bonussen", label: "Bonussen" }, { label: b.name }]} />
        <header className="mt-6 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">
            <Link to="/bonus-type/$slug" params={{ slug: term.slug }} className="hover:underline">{term.name}</Link>
            {casino && <> · <Link to="/review/$slug" params={{ slug: casino.slug }} className="hover:underline">{casino.name}</Link></>}
          </div>
          <h1 className="mt-1 text-3xl font-extrabold md:text-4xl">{b.headline}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{b.description}</p>
          <div className="mt-3"><PageMeta /></div>
        </header>

        <section className="mt-8 grid gap-6 rounded-2xl border bg-card p-6 shadow-soft md:grid-cols-2">
          <dl className="space-y-2 text-sm">
            <div><Percent className="inline h-4 w-4 text-gold" /> Wagering: <strong>{b.wagering}</strong></div>
            <div><Wallet className="inline h-4 w-4 text-gold" /> Min. storting: <strong>{b.minDeposit}</strong></div>
            <div><Clock className="inline h-4 w-4 text-gold" /> Geldigheid: <strong>{b.validity}</strong></div>
            {b.code && <div>Bonuscode: <code className="rounded bg-secondary px-2 py-0.5 font-bold">{b.code}</code></div>}
            {b.freeSpins && <div>Free spins: <strong>{b.freeSpins}</strong></div>}
          </dl>
          <div className="flex flex-col items-start justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-extrabold shadow-gold">
              <a href={`/go/${b.casinoSlug}`} rel="sponsored nofollow">Claim deze bonus <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <p className="text-xs text-muted-foreground">18+ | Speel bewust | Voorwaarden van toepassing</p>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold">Voorwaarden</h2>
          <ul className="mt-4 space-y-2">
            {b.terms.map((t: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{t}</li>
            ))}
          </ul>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ items={[
            { q: "Hoe claim ik deze bonus?", a: "Klik op de CTA, registreer een account, verifieer je identiteit en doe een eerste storting. De bonus wordt automatisch toegekend." },
            { q: "Wat gebeurt er als ik de wagering niet haal?", a: "Bonusgeld vervalt na de geldigheidsduur — alleen je eigen storting blijft beschikbaar." },
          ]} />
          <TrustNotice />
        </div>
      </div>
    </Layout>
  );
}