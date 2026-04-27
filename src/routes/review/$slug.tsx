import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ } from "@/components/site/FAQ";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { TrustNotice } from "@/components/site/TrustNotice";
import { PageMeta } from "@/components/site/PageMeta";
import { CasinoLogo } from "@/components/site/CasinoLogo";
import { Rating } from "@/components/site/Rating";
import { CasinoBadge } from "@/components/site/Badge";
import { PaymentIcons } from "@/components/site/PaymentIcons";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Wallet, Gamepad2, Clock } from "lucide-react";
import { getCasino, relatedCasinos, casinos } from "@/data/casinos";

export const Route = createFileRoute("/review/$slug")({
  loader: ({ params }) => {
    const casino = getCasino(params.slug);
    if (!casino) throw notFound();
    return { casino };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.casino;
    if (!c) return { meta: [{ title: "Review niet gevonden" }] };
    return {
      meta: [
        { title: `${c.name} Review 2026 — ${c.tagline} | Buitenlandse Casino` },
        { name: "description", content: `${c.name} review: ${c.bonusHeadline}. ${c.verdict}` },
        { property: "og:title", content: `${c.name} Review — ${c.rating}/10` },
        { property: "og:description", content: c.verdict },
        { property: "og:type", content: "article" },
        ...(c.logoUrl ? [{ property: "og:image", content: c.logoUrl }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Review niet gevonden</h1>
        <p className="mt-3 text-muted-foreground">Bekijk al onze reviews op de homepagina.</p>
        <Button asChild className="mt-6"><Link to="/beste-online-casinos">Naar overzicht</Link></Button>
      </div>
    </Layout>
  ),
  component: ReviewPage,
});

const angleHeadlines: Record<string, { focus: string; emphasis: string }> = {
  "best-bonus": { focus: "Bonus & promoties", emphasis: "Onze diepteanalyse focust op wat dit casino uniek maakt: het bonusaanbod." },
  "fastest-payout": { focus: "Uitbetaalsnelheid", emphasis: "We meten en vergelijken uitbetaaltijden — daar onderscheidt dit casino zich." },
  "mobile-experience": { focus: "Mobiele ervaring", emphasis: "Volledig op telefoon getest — dat is waar dit casino primair op scoort." },
  "trust-license": { focus: "Veiligheid & licentie", emphasis: "Trust en regelgeving krijgen extra aandacht in deze review." },
  "live-casino": { focus: "Live casino-aanbod", emphasis: "We zoomen in op het live tafelaanbod — de kerncompetentie hier." },
  "slots-variety": { focus: "Slots-variatie", emphasis: "De slots-bibliotheek is het verkoopargument; daar is deze review op gericht." },
  "vip-program": { focus: "VIP-programma", emphasis: "Loyaliteit wordt hier beloond — we volgden het programma maandenlang." },
  "ideal-experience": { focus: "iDEAL-flow", emphasis: "Speciale aandacht voor de iDEAL-implementatie en NL-spelersgerichtheid." },
  "crypto-friendly": { focus: "Crypto + iDEAL", emphasis: "Beide betaalwerelden in één review uitgelicht." },
  "low-wagering": { focus: "Bonusvoorwaarden", emphasis: "We rekenen de wagering door — daar valt of staat dit aanbod mee." },
};

function ReviewPage() {
  const { casino } = Route.useLoaderData();
  const angle = angleHeadlines[casino.angle];
  const related = relatedCasinos(casino.slug, 3);
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: casino.name,
      ...(casino.logoUrl ? { image: casino.logoUrl } : {}),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: casino.rating,
      bestRating: 10,
      worstRating: 1,
    },
    author: { "@type": "Organization", name: "Buitenlandse Casino" },
    publisher: { "@type": "Organization", name: "Buitenlandse Casino" },
    datePublished: casino.lastTested,
    reviewBody: casino.verdict,
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      <div className="container mx-auto max-w-5xl px-4 py-8 pb-24 md:pb-12 md:py-12">
        <Breadcrumbs items={[
          { to: "/beste-online-casinos", label: "Casino's" },
          { label: casino.name },
        ]} />

        <header className="mt-6 grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
          <CasinoLogo name={casino.name} brandColor={casino.brandColor} size="lg" />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {casino.badges?.map((b) => <CasinoBadge key={b} variant={b} />)}
              <span className="text-xs text-muted-foreground">Focus: {angle.focus}</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">{casino.name} Review 2026</h1>
            <p className="mt-2 text-lg text-muted-foreground">{casino.tagline}</p>
            <div className="mt-3"><PageMeta /></div>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <Rating value={casino.rating} />
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-gold">
              <a href={`/go/${casino.slug}`} rel="sponsored nofollow">Speel Nu <ArrowRight className="h-4 w-4" /></a>
            </Button>
          </div>
        </header>

        {/* Summary box */}
        <section className="mt-8 grid gap-4 rounded-2xl border bg-card p-6 shadow-card md:grid-cols-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Bonus</div>
            <div className="mt-1 font-bold text-gold">{casino.bonusHeadline}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Uitbetaling</div>
            <div className="mt-1 font-semibold inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {casino.payoutTime}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Min. storting</div>
            <div className="mt-1 font-semibold">{casino.minDeposit}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Licentie</div>
            <div className="mt-1 font-semibold inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-trust" /> KSA</div>
          </div>
          <div className="md:col-span-4 mt-2 rounded-lg bg-secondary/60 p-4">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Eindoordeel</div>
            <p className="mt-1 text-base font-medium">{casino.verdict}</p>
          </div>
        </section>


        {/* Editorial intro */}
        <section className="mt-10 prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold md:text-3xl">Onze {casino.name} ervaring</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{casino.intro}</p>
          <p className="mt-3 text-sm text-muted-foreground italic">{angle.emphasis}</p>
        </section>

        {/* Mid CTA */}
        <div className="my-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-accent/40 p-6 md:flex-row">
          <div>
            <div className="font-bold">Klaar om te starten?</div>
            <div className="text-sm text-muted-foreground">Claim {casino.bonusHeadline}</div>
          </div>
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-gold">
            <a href={`/go/${casino.slug}`} rel="sponsored nofollow">Speel Nu <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>

        {/* Pros */}
        <section>
          <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
            <h3 className="text-lg font-bold text-success">Voordelen</h3>
            <ul className="mt-4 space-y-2">
              {casino.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />{p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Payment methods */}
        <section className="mt-10 rounded-2xl border bg-card p-6 shadow-card">
          <h2 className="flex items-center gap-2 text-2xl font-bold"><Wallet className="h-6 w-6 text-trust" /> Betaalmethoden</h2>
          <p className="mt-2 text-muted-foreground">{casino.name} accepteert de volgende betaalmethoden voor Nederlandse spelers. iDEAL is {casino.payments.includes("iDEAL") ? "beschikbaar als primaire optie" : "helaas niet aanwezig"}.</p>
          <div className="mt-4"><PaymentIcons methods={casino.payments} max={10} /></div>
          <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
            <div><span className="text-muted-foreground">Min. storting:</span> <strong>{casino.minDeposit}</strong></div>
            <div><span className="text-muted-foreground">Uitbetaling:</span> <strong>{casino.payoutTime}</strong></div>
            <div><span className="text-muted-foreground">Kosten:</span> <strong>Geen</strong></div>
          </div>
        </section>

        {/* Games */}
        <section className="mt-10 rounded-2xl border bg-card p-6 shadow-card">
          <h2 className="flex items-center gap-2 text-2xl font-bold"><Gamepad2 className="h-6 w-6 text-gold" /> Spelaanbod</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-secondary/60 p-4">
              <div className="text-xs uppercase text-muted-foreground">Slots</div>
              <div className="mt-1 text-3xl font-bold">{casino.games.slots.toLocaleString("nl-NL")}+</div>
            </div>
            <div className="rounded-xl bg-secondary/60 p-4">
              <div className="text-xs uppercase text-muted-foreground">Live tafels</div>
              <div className="mt-1 text-3xl font-bold">{casino.games.live}</div>
            </div>
            <div className="rounded-xl bg-secondary/60 p-4">
              <div className="text-xs uppercase text-muted-foreground">Tafelspellen</div>
              <div className="mt-1 text-3xl font-bold">{casino.games.table}</div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <div className="mt-10"><TrustNotice /></div>

        {/* FAQ */}
        <div className="mt-10">
          <FAQ items={[
            { q: `Is ${casino.name} betrouwbaar?`, a: `Ja, ${casino.name} beschikt over een geldige vergunning van de Kansspelautoriteit (KSA) en is sinds ${casino.established} actief op de Nederlandse markt.` },
            { q: `Wat is de bonus bij ${casino.name}?`, a: `Het welkomstaanbod is ${casino.bonusHeadline}. ${casino.bonusDetail}` },
            { q: `Hoe snel betaalt ${casino.name} uit?`, a: `Tijdens onze testen registreerden we uitbetalingen binnen ${casino.payoutTime}. Dit kan in het weekend iets langer duren.` },
            { q: `Werkt iDEAL bij ${casino.name}?`, a: casino.payments.includes("iDEAL") ? `Ja, iDEAL is beschikbaar met minimum storting ${casino.minDeposit}.` : `Nee, helaas accepteert dit casino momenteel geen iDEAL.` },
            { q: `Kan ik ${casino.name} op mijn telefoon gebruiken?`, a: `Ja, het casino werkt volledig in mobiele browsers.${casino.angle === "mobile-experience" ? " Daarnaast is er een eigen iOS- en Android-app." : ""}` },
          ]} />
        </div>

        {/* Related casinos */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Vergelijkbare casino's</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/review/$slug" params={{ slug: r.slug }} className="group rounded-2xl border bg-card p-5 shadow-card transition-shadow hover:shadow-elegant">
                <div className="flex items-center gap-3">
                  <CasinoLogo name={r.name} brandColor={r.brandColor} />
                  <div>
                    <div className="font-bold group-hover:text-gold">{r.name}</div>
                    <Rating value={r.rating} />
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA + Related links */}
        <div className="my-10 flex flex-col items-center justify-between gap-4 rounded-2xl gradient-hero p-8 text-primary-foreground md:flex-row">
          <div>
            <div className="text-xl font-bold">Begin vandaag bij {casino.name}</div>
            <div className="mt-1 text-sm text-white/80">{casino.bonusHeadline} — 18+ | Speel verantwoord</div>
          </div>
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-gold">
            <a href={`/go/${casino.slug}`} rel="sponsored nofollow">Speel Nu <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>

        <RelatedLinks links={[
          { to: "/beste-online-casinos", label: "Top 10 casino's" },
          { to: "/casino-bonussen", label: "Bonussen vergelijken" },
          { to: "/ideal-casinos", label: "iDEAL casino's" },
        ]} />
      </div>
      <StickyMobileCTA slug={casino.slug} bonus={casino.bonusHeadline} />
    </Layout>
  );
}

// Force build of all review slugs as static via type-side reference
export const _allCasinos = casinos;
