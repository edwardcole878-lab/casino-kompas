import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { Button } from "@/components/ui/button";
import { Gift, Clock, Percent, Wallet, ArrowRight, Tag } from "lucide-react";
import { allBonusesSorted, type Bonus } from "@/data/bonuses";
import { getCasino } from "@/data/casinos";
import { bonusTypeTerms } from "@/data/taxonomies";
import { jsonLdString } from "@/lib/jsonld";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/bonussen")({
  head: () => ({
    meta: [
      { title: "Beste Casino Bonussen Nederland 2026 | Vergelijk" },
      { name: "description", content: "Vergelijk welkomstbonussen, free spins, no-deposit en cashback van alle KSA-vergunde casino's. Eerlijke wagering, transparante voorwaarden." },
      { property: "og:title", content: "Beste Casino Bonussen Nederland 2026" },
      { property: "og:description", content: "Vergelijk welkomstbonussen, free spins en no-deposit aanbiedingen van alle KSA-casino's." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BonussenIndex,
});

function BonusRow({ b }: { b: Bonus }) {
  const casino = getCasino(b.casinoSlug);
  const term = bonusTypeTerms[b.type];
  return (
    <article className="rounded-2xl border bg-card p-5 shadow-soft transition-shadow hover:shadow-elegant">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold">
            <Link to="/bonus-type/$slug" params={{ slug: term.slug }} className="hover:underline">
              <Tag className="inline h-3 w-3" /> {term.name}
            </Link>
            {casino && (
              <span className="text-muted-foreground">·{" "}
                <Link to="/review/$slug" params={{ slug: casino.slug }} className="text-foreground hover:text-gold">
                  {casino.name}
                </Link>
              </span>
            )}
          </div>
          <h3 className="mt-1 text-xl font-extrabold leading-tight">
            <Link to="/bonus/$slug" params={{ slug: b.slug }} className="hover:text-gold">
              {b.headline}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
          <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted-foreground sm:grid-cols-4">
            <div><Percent className="inline h-3 w-3" /> Wagering <strong className="text-foreground">{b.wagering}</strong></div>
            <div><Wallet className="inline h-3 w-3" /> Min. <strong className="text-foreground">{b.minDeposit}</strong></div>
            <div><Clock className="inline h-3 w-3" /> Geldig <strong className="text-foreground">{b.validity}</strong></div>
            {b.code && <div>Code: <code className="rounded bg-secondary px-1.5 py-0.5 font-bold text-foreground">{b.code}</code></div>}
          </dl>
        </div>
        <Button asChild size="lg" className="shrink-0 bg-gold text-gold-foreground hover:bg-gold/90 font-extrabold shadow-gold">
          <a href={`/go/${b.casinoSlug}`} rel="sponsored nofollow">Claim bonus <ArrowRight className="h-4 w-4" /></a>
        </Button>
      </div>
    </article>
  );
}

function BonussenIndex() {
  const sorted = allBonusesSorted;
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Casino bonussen Nederland",
    url: `${SITE}/bonussen`,
    numberOfItems: sorted.length,
    itemListElement: sorted.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/bonus/${b.slug}`,
      name: b.headline,
    })),
  };
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(itemListJsonLd) }} />
      <div className="container mx-auto max-w-[1240px] px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Bonussen" }]} />
        <header className="mt-6 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Bonussen vergelijken</div>
          <h1 className="mt-1 text-3xl font-extrabold md:text-4xl">
            <Gift className="inline h-8 w-8 text-gold" /> Alle casino bonussen 2026
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Welkomstbonussen, free spins, no-deposit en cashback — alle KSA-vergunde aanbiedingen op een rij.
          </p>
          <div className="mt-3"><PageMeta /></div>
        </header>

        {/* Type filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {Object.values(bonusTypeTerms).map((t) => (
            <Link
              key={t.slug}
              to="/bonus-type/$slug"
              params={{ slug: t.slug }}
              className="rounded-full border bg-card px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.name}
            </Link>
          ))}
        </div>

        <section className="mt-8 space-y-4">
          {sorted.map((b) => <BonusRow key={b.slug} b={b} />)}
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ items={[
            { q: "Welke bonus is het beste?", a: "Niet de hoogste — let op wagering, max-inzet, geldigheidsduur en welke spellen meetellen. Een bescheiden bonus met 25x wagering is vaak meer waard dan €1.000 met 50x." },
            { q: "Kan ik meerdere bonussen tegelijk claimen?", a: "Doorgaans niet — welkomstbonussen zijn per persoon eenmalig per casino. Reload-bonussen kun je daarna apart claimen." },
            { q: "Wat is een no-deposit bonus?", a: "Gratis speelgeld of free spins zonder dat je hoeft te storten — alleen registratie + KYC vereist." },
            { q: "Tellen alle spellen mee voor wagering?", a: "Nee. Slots tellen meestal 100%, live casino vaak slechts 10–20% of helemaal niet. Lees de T&C." },
          ]} />
          <TrustNotice />
        </div>
      </div>
    </Layout>
  );
}