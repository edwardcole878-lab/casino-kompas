import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Gift,
  ShieldCheck,
  Zap,
  Globe2,
  Star,
  Check,
  X,
  Gamepad2,
  Wallet,
  Headphones,
  Clock,
  Coins,
  Sparkles,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { getOffshoreCasino, relatedOffshoreCasinos, offshoreCasinos } from "@/data/offshore-casinos";
import { jsonLdString } from "@/lib/jsonld";
import { defaultAuthor, authorJsonLd, publisherJsonLd } from "@/data/authors";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/buitenlandse-casino/$slug")({
  loader: ({ params }) => {
    const casino = getOffshoreCasino(params.slug);
    if (!casino) throw notFound();
    return { casino };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.casino;
    if (!c) return { meta: [{ title: "Casino niet gevonden" }] };
    const title = `${c.name} Review 2026 — ${c.bonusHeadline} | Buitenlands Casino`;
    const description = `${c.name} buitenlands online casino review: ${c.bonusHeadline}. ${c.tagline}. ${c.licence}-vergund. Lees onze test van 2026.`.slice(0, 160);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: `${c.name} — ${c.bonusHeadline}` },
        { property: "og:description", content: c.tagline },
        { property: "og:type", content: "article" },
        { property: "article:author", content: defaultAuthor.name },
        { property: "article:modified_time", content: c.lastUpdated },
        { name: "author", content: defaultAuthor.name },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Casino niet gevonden</h1>
        <p className="mt-3 text-muted-foreground">
          Bekijk alle buitenlandse casino's op de{" "}
          <Link to="/buitenlandse-casino" className="text-trust underline">overzichtspagina</Link>.
        </p>
      </div>
    </div>
  ),
  component: OffshoreReviewPage,
});

function OffshoreReviewPage() {
  const { casino } = Route.useLoaderData();
  const related = relatedOffshoreCasinos(casino.slug, 3);

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${casino.name} review 2026`,
    url: `${SITE}/buitenlandse-casino/${casino.slug}`,
    inLanguage: "nl-NL",
    itemReviewed: {
      "@type": "Organization",
      name: casino.name,
      url: casino.affiliateUrl !== "#" ? casino.affiliateUrl : `${SITE}/buitenlandse-casino/${casino.slug}`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: casino.rating,
      bestRating: 10,
      worstRating: 1,
    },
    author: authorJsonLd(defaultAuthor),
    publisher: publisherJsonLd(),
    datePublished: casino.lastUpdated,
    dateModified: casino.lastUpdated,
    reviewBody: casino.verdict,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Buitenlandse casino's", item: `${SITE}/buitenlandse-casino` },
      { "@type": "ListItem", position: 3, name: casino.name },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(reviewJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbJsonLd) }} />

      {/* Top bar */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <Link to="/buitenlandse-casino" className="text-sm font-bold tracking-tight text-muted-foreground hover:text-foreground">
            ← Alle buitenlandse casino's
          </Link>
          <span className="text-xs text-muted-foreground">Onafhankelijke review</span>
        </div>
      </header>

      <main className="container mx-auto max-w-[1100px] px-6 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">›</span>
          <Link to="/buitenlandse-casino" className="hover:text-foreground">Buitenlandse casino's</Link>
          <span className="mx-1.5">›</span>
          <span className="text-foreground">{casino.name}</span>
        </nav>

        {/* Hero */}
        <section>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <Globe2 className="h-3.5 w-3.5 text-trust" /> {casino.licence}-licentie · sinds {casino.established}
          </div>
          <h1 className="max-w-3xl text-[30px] font-extrabold leading-[1.15] tracking-tight md:text-[42px]">
            {casino.name} review 2026 — {casino.bonusHeadline}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">{casino.tagline}</p>
        </section>

        {/* Casino card */}
        <section className="mt-8">
          <article className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-card p-6 shadow-glow-gold md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
              {/* Logo placeholder using brandColor */}
              <div className="flex justify-center">
                <div
                  className="grid h-44 w-44 place-items-center rounded-2xl border bg-[#0f1530] p-4 text-center shadow-card md:h-52 md:w-52"
                  style={{ background: `linear-gradient(135deg, ${casino.brandColor}, #0f1530)` }}
                >
                  <div>
                    <div className="text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg md:text-4xl">
                      {casino.name.split(" ")[0]}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                      {casino.licence}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                    <Star className="h-3 w-3" /> {casino.rating}/10
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-trust/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-trust">
                    <Globe2 className="h-3 w-3" /> Buitenlandse licentie
                  </span>
                  {casino.usps.map((u) => (
                    <span key={u} className="inline-flex items-center rounded-full border bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/80">
                      {u}
                    </span>
                  ))}
                </div>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{casino.name}</h2>

                {/* Bonus box */}
                <div className="mt-4 relative overflow-hidden rounded-2xl gradient-bonus border-2 border-gold/40 p-5">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gold/25 blur-2xl" />
                  <div className="relative flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                      <Gift className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">
                        Welkomstbonus
                      </div>
                      <div className="text-xl font-black leading-tight text-foreground md:text-2xl">
                        {casino.bonusHeadline}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground/70">{casino.bonusSubline}</div>
                    </div>
                  </div>
                </div>

                {/* Quick stats */}
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 rounded-lg border bg-secondary/40 p-3 text-[12px] sm:grid-cols-4">
                  <div><dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Wagering</dt><dd className="font-bold tabular-nums">{casino.wagering}</dd></div>
                  <div><dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Min. storting</dt><dd className="font-bold tabular-nums">{casino.minDeposit}</dd></div>
                  <div><dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Uitbetaling</dt><dd className="font-bold">{casino.payout}</dd></div>
                  <div><dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Licentie</dt><dd className="font-bold">{casino.licence}</dd></div>
                </dl>

                {/* CTA */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className={`h-14 gradient-cta cta-glow rounded-xl px-8 text-lg font-extrabold text-gold-foreground shadow-gold ${casino.affiliateUrl === "#" ? "pointer-events-none opacity-70" : ""}`}
                  >
                    <a href={casino.affiliateUrl} target="_blank" rel="sponsored nofollow noopener">
                      {casino.affiliateUrl === "#" ? "Binnenkort beschikbaar" : "Speel Nu"} <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <div className="text-xs leading-snug text-muted-foreground">
                    <div className="font-semibold text-success">✓ Direct registreren</div>
                    <div>18+ · Voorwaarden gelden · Speel bewust</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Score banner */}
        <section className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-card md:p-8">
            <div className="relative flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="grid h-20 w-20 place-items-center rounded-2xl gradient-gold text-gold-foreground shadow-gold">
                  <div className="text-center leading-none">
                    <div className="text-2xl font-black">{casino.rating}</div>
                    <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider opacity-80">/ 10</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <h2 className="mt-1 text-xl font-extrabold md:text-2xl">{casino.name} — eindscore</h2>
                  <p className="text-sm text-muted-foreground">Actief sinds {casino.established} · {casino.licence}-vergund</p>
                </div>
              </div>
              <div className="rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-success">Kort oordeel</div>
                <div className="mt-1 max-w-[260px] text-sm font-semibold">{casino.tagline}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-trust/10 text-trust">
                <Globe2 className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Over {casino.name}</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{casino.intro}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Zap, label: casino.payout },
                { icon: Sparkles, label: `Wagering ${casino.wagering}` },
                { icon: TrendingUp, label: `Sinds ${casino.established}` },
                { icon: Globe2, label: casino.licence },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl border bg-secondary/40 px-3.5 py-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-card text-trust shadow-soft">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros / Cons */}
        <section className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-success">
              <Check className="h-5 w-5" /> Voordelen
            </h3>
            <ul className="mt-4 space-y-2.5">
              {casino.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-destructive">
              <X className="h-5 w-5" /> Aandachtspunten
            </h3>
            <ul className="mt-4 space-y-2.5">
              {casino.cons.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bonus detail */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                <Gift className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Welkomstbonus uitgelegd</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{casino.bonusDetail}</p>
          </div>
        </section>

        {/* Games */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Spelaanbod</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{casino.games}</p>
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Top providers</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {casino.providers.map((p) => (
                  <span key={p} className="inline-flex items-center rounded-md border bg-secondary/40 px-2 py-1 text-xs font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payments */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-trust/10 text-trust">
                <Wallet className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Betaalmethoden & uitbetalingen</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{casino.payments}</p>
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Geaccepteerd</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {casino.paymentMethods.map((m) => (
                  <span key={m} className="inline-flex items-center gap-1 rounded-md border bg-secondary/40 px-2 py-1 text-xs font-medium">
                    <Coins className="h-3 w-3 opacity-60" />
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-success/10 text-success">
                <Headphones className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Support & beschikbaarheid</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">{casino.support}</p>
          </div>
        </section>

        {/* Verdict */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-card via-card to-accent/30 p-6 shadow-glow-gold md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                <Star className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Eindoordeel</h2>
            </div>
            <p className="mt-4 leading-relaxed text-foreground/90">{casino.verdict}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className={`h-14 gradient-cta cta-glow rounded-xl px-8 text-lg font-extrabold text-gold-foreground shadow-gold ${casino.affiliateUrl === "#" ? "pointer-events-none opacity-70" : ""}`}
              >
                <a href={casino.affiliateUrl} target="_blank" rel="sponsored nofollow noopener">
                  {casino.affiliateUrl === "#" ? "Binnenkort beschikbaar" : `Claim ${casino.bonusHeadline.split(" ")[0]} bonus`} <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <div className="text-xs text-muted-foreground">18+ · Voorwaarden gelden · Speel bewust</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Veelgestelde vragen</h2>
          <div className="mt-5 space-y-3">
            {[
              { q: `Is ${casino.name} legaal in Nederland?`, a: `${casino.name} beschikt over een ${casino.licence}-licentie en heeft géén Nederlandse KSA-vergunning. Het accepteert wel Nederlandse spelers, maar valt buiten de KSA-bescherming en de klachtenroute.` },
              { q: `Hoe snel betaalt ${casino.name} uit?`, a: `Uitbetalingen verlopen ${casino.payout.toLowerCase()} via de meeste methodes. Crypto is doorgaans het snelst, traditionele methodes (iDEAL, kaarten) duren iets langer.` },
              { q: `Werkt iDEAL bij ${casino.name}?`, a: `Ja. ${casino.name} accepteert iDEAL (en Trustly) als betaalmethode voor Nederlandse spelers. Stortingen zijn instant; uitbetalingen via iDEAL duren typisch 12–48 uur.` },
              { q: `Wat is de wagering van de welkomstbonus?`, a: `${casino.wagering} op het bonusbedrag. Reken het altijd door: een bonus van €100 met ${casino.wagering.replace(/\D/g, "")}x wagering vereist €${parseInt(casino.wagering, 10) * 100} aan inzet voordat winst opneembaar is.` },
              { q: `Is mijn geld veilig bij een Anjouan-casino?`, a: `${casino.name} is gereguleerd door de Anjouan Gaming Authority. Dit biedt minder bescherming dan een KSA-vergunning. Speel alleen met geld dat je kunt missen, gebruik twee-factor-authenticatie en houd je stortingen onder controle.` },
            ].map((f, i) => (
              <details key={i} className="group rounded-xl border bg-card p-4 shadow-soft">
                <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold">
                  <span>{f.q}</span>
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-500/15 text-amber-600">
                <AlertTriangle className="h-4 w-4" />
              </span>
              <div className="text-sm leading-relaxed text-foreground/80">
                <strong className="text-foreground">Belangrijk:</strong>{" "}
                {casino.name} is geen KSA-vergund casino. Spelen bij offshore casino's gebeurt op eigen risico —
                je hebt geen toegang tot de Nederlandse Geschillencommissie en geen klachtenroute. Kies bewust en
                speel alleen met geld dat je kunt missen.{" "}
                <Link to="/verantwoord-spelen" className="text-trust underline">
                  Lees over verantwoord spelen →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Andere buitenlandse casino's</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/buitenlandse-casino/$slug"
                params={{ slug: r.slug }}
                className="group rounded-2xl border bg-card p-5 shadow-card transition-shadow hover:shadow-elegant"
              >
                <div
                  className="mb-3 grid h-16 w-16 place-items-center rounded-xl text-white"
                  style={{ background: `linear-gradient(135deg, ${r.brandColor}, #0f1530)` }}
                >
                  <span className="text-lg font-black uppercase">{r.name.split(" ")[0].slice(0, 4)}</span>
                </div>
                <div className="font-bold group-hover:text-gold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.bonusHeadline}</div>
                <div className="mt-2 text-xs text-trust">Bekijk review →</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/buitenlandse-casino" className="text-sm font-semibold text-trust hover:underline">
              ← Terug naar overzicht buitenlandse casino's
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

// Force build registration for all offshore slugs
export const _allOffshore = offshoreCasinos;