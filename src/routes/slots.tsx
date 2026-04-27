import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { Dices } from "lucide-react";
import { slots } from "@/data/slots";
import { jsonLdString } from "@/lib/jsonld";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/slots")({
  head: () => ({
    meta: [
      { title: "Beste online slots Nederland 2026 | RTP & volatiliteit" },
      { name: "description", content: "Vergelijk de populairste slots: RTP, volatiliteit, max-win en bij welke KSA-casino's je ze kunt spelen." },
      { property: "og:title", content: "Beste online slots Nederland 2026" },
      { property: "og:description", content: "Vergelijk RTP, volatiliteit en max-win van de populairste slots." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SlotsIndex,
});

function SlotsIndex() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Beste online slots Nederland",
    url: `${SITE}/slots`,
    numberOfItems: slots.length,
    itemListElement: slots.map((s, i) => ({
      "@type": "ListItem", position: i + 1,
      url: `${SITE}/slot/${s.slug}`, name: s.name,
    })),
  };
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(itemListJsonLd) }} />
      <div className="container mx-auto max-w-[1240px] px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Slots" }]} />
        <header className="mt-6 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold">Slots vergelijken</div>
          <h1 className="mt-1 text-3xl font-extrabold md:text-4xl">
            <Dices className="inline h-8 w-8 text-gold" /> Beste online slots 2026
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">RTP, volatiliteit en max-win van de populairste titels — plus waar je ze kunt spelen.</p>
          <div className="mt-3"><PageMeta /></div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {slots.map((s) => (
            <article key={s.slug} className="rounded-2xl border bg-card p-5 shadow-soft hover:shadow-elegant transition-shadow">
              <div className="text-[11px] font-bold uppercase tracking-widest text-gold">{s.provider}</div>
              <h2 className="mt-1 text-xl font-extrabold">
                <Link to="/slot/$slug" params={{ slug: s.slug }} className="hover:text-gold">{s.name}</Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <div>RTP: <strong className="text-foreground">{s.rtp}%</strong></div>
                <div>Volatiliteit: <strong className="text-foreground">{s.volatility}</strong></div>
                <div>Max win: <strong className="text-foreground">{s.maxWin}</strong></div>
                <div>Paylines: <strong className="text-foreground">{s.paylines}</strong></div>
              </dl>
            </article>
          ))}
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ items={[
            { q: "Wat is RTP?", a: "Return To Player — het percentage van alle inzetten dat een slot op lange termijn uitkeert. 96% is gemiddeld; 97%+ is goed." },
            { q: "Wat betekent volatiliteit?", a: "Hoe vaak en hoe groot de uitbetalingen zijn. Lage volatiliteit = vaak kleine winsten; hoge volatiliteit = zelden, maar potentieel groot." },
          ]} />
          <TrustNotice />
        </div>
      </div>
    </Layout>
  );
}