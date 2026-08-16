import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ } from "@/components/site/FAQ";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Trophy, Wallet, Gamepad2, Star } from "lucide-react";
import trustpilotLogo from "@/assets/trustpilot.webp.asset.json";
import { listingCasinos, type ListingCasino } from "@/data/listing";
import { jsonLdString } from "@/lib/jsonld";
import { defaultAuthor, authorJsonLd, publisherJsonLd } from "@/data/authors";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/review/$slug")({
  loader: ({ params }) => {
    const casino = listingCasinos.find((c) => c.slug === params.slug);
    if (!casino) throw notFound();
    return { casino };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.casino;
    if (!c) return { meta: [{ title: "Review niet gevonden" }, { name: "robots", content: "noindex" }] };
    const title = `${c.name} Review 2026 — bonus, uitbetaling & ervaring`;
    const desc = `${c.name} review: ${c.bonus} + ${c.freeSpins}. Uitbetaling gemiddeld ${c.payoutSpeed}. Onze test voor Nederlandse spelers.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "author", content: defaultAuthor.name },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-heading text-3xl uppercase text-nl-blue">Review niet gevonden</h1>
        <Button asChild className="mt-6 bg-nl-orange text-white hover:bg-nl-orange/90">
          <Link to="/beste-online-casinos">Naar overzicht</Link>
        </Button>
      </div>
    </Layout>
  ),
  component: ReviewPage,
});

function Aff({ c, label = "Speel nu", className = "" }: { c: ListingCasino; label?: string; className?: string }) {
  const green = c.rank === 1;
  return (
    <Button
      asChild
      size="lg"
      className={`h-12 rounded-md font-heading text-lg uppercase tracking-widest text-white shadow-orange ${
        green ? "bg-nl-green hover:bg-nl-green/90" : "bg-nl-orange hover:bg-nl-orange/90"
      } ${className}`}
    >
      <a href={`/go/${c.slug}`} target="_blank" rel="nofollow sponsored noopener">
        {label} <ArrowRight size={18} className="ml-1" />
      </a>
    </Button>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < full ? "fill-nl-orange text-nl-orange" : i === full && half ? "fill-nl-orange/50 text-nl-orange" : "text-white/30"}
        />
      ))}
      <span className="ml-2 font-heading text-xl leading-none tracking-wide text-white">{rating.toFixed(1)}</span>
    </div>
  );
}

function ReviewPage() {
  const { casino: c } = Route.useLoaderData();
  const others = listingCasinos.filter((o) => o.slug !== c.slug).slice(0, 3);
  const isTop = c.rank === 1;

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${c.name} review 2026`,
    url: `${SITE}/review/${c.slug}`,
    inLanguage: "nl-NL",
    itemReviewed: { "@type": "Organization", name: c.name, url: `${SITE}/review/${c.slug}` },
    reviewRating: { "@type": "Rating", ratingValue: c.rating, bestRating: 5, worstRating: 1 },
    author: authorJsonLd(defaultAuthor),
    publisher: publisherJsonLd(),
    datePublished: "2026-08-01",
    dateModified: "2026-08-01",
    reviewBody: `${c.name} betaalt gemiddeld binnen ${c.payoutSpeed} uit en geeft nieuwe spelers ${c.bonus} plus ${c.freeSpins}.`,
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(reviewJsonLd) }} />

      {/* HERO */}
      <section className="bg-nl-hero">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-24 w-32 items-center justify-center rounded-lg bg-white p-2">
              <img src={c.logo} alt={`${c.name} logo`} className="max-h-full max-w-full object-contain" />
            </div>
            <div>
              {isTop && (
                <span className="inline-flex items-center gap-2 rounded-sm bg-nl-green px-3 py-1 font-heading text-xs uppercase tracking-[0.2em] text-white">
                  <Trophy size={13} /> Snelste keuze van 2026
                </span>
              )}
              <h1 className="mt-2 font-heading text-3xl uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
                {c.name} <span className="text-nl-orange">Review 2026</span>
              </h1>
              <div className="mt-3">
                <Stars rating={c.rating} />
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <span className="inline-flex items-center rounded-sm bg-white px-3 py-1.5">
                <img src={trustpilotLogo.url} alt="Trustpilot" className="h-5 w-auto" />
              </span>
              <Aff c={c} className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-nl-sand font-body text-nl-ink">
        <div className="mx-auto max-w-5xl px-4 py-8 pb-20">
          <Breadcrumbs items={[{ to: "/beste-online-casinos", label: "Casino's" }, { label: c.name }]} />

          {/* Bonus + facts */}
          <section className="mt-6 grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <div className={`rounded-lg border-2 p-5 text-center ${isTop ? "border-nl-green/45 bg-nl-green/10" : "border-nl-orange/35 bg-nl-orange/5"}`}>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nl-red">Welkomstbonus</div>
              <div className="mt-1 font-heading text-4xl leading-none tracking-wide text-nl-ink">{c.bonus}</div>
              <div className="mt-2 text-sm font-semibold text-nl-orange">+ {c.freeSpins}</div>
              <Aff c={c} className="mt-4 w-full" label={`Claim bij ${c.name}`} />
            </div>
            <div className="grid gap-3 rounded-lg border-2 border-nl-blue/25 bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Uitbetaling</span>
                <span className="inline-flex items-center gap-1.5 font-heading text-xl tracking-wide text-nl-blue">
                  <Zap size={15} className="text-nl-orange" /> {c.payoutSpeed}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Min. storting</span>
                <span className="font-heading text-xl tracking-wide text-nl-blue">{c.minDeposit}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground">Licentie</span>
                <span className="text-right font-semibold text-nl-blue">{c.license}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Positie in onze ranking</span>
                <span className="font-heading text-xl tracking-wide text-nl-blue">#{c.rank}</span>
              </div>
            </div>
          </section>

          {/* Editorial */}
          <section className="mt-10 max-w-3xl">
            <h2 className="font-heading text-2xl uppercase tracking-wide text-nl-blue md:text-3xl">Onze ervaring met {c.name}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {c.name} is een buitenlands online casino met een {c.license}-licentie, gericht op Nederlandse spelers die snelle
              uitbetalingen en een ruim spelaanbod zoeken. Tijdens onze test verliep de registratie binnen een minuut en stond de
              eerste iDEAL-storting vanaf {c.minDeposit} direct op het account.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Het welkomstaanbod van {c.bonus} plus {c.freeSpins} hoort tot de sterkere pakketten in onze vergelijking. Belangrijker
              is dat het geld er ook weer uit komt: onze opnames werden gemiddeld binnen {c.payoutSpeed} verwerkt, ook in het weekend.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We hebben {c.name} getest zoals een gewone speler dat doet: account aanmaken, storten met iDEAL, een paar uur spelen op
              slots en live tafels, en daarna een opname aanvragen. Er was geen verplichte app-installatie nodig en de site laadde ook op
              een gemiddelde 4G-verbinding vlot. De Nederlandse interface is compleet: menu&apos;s, bonusvoorwaarden en het kassagedeelte
              zijn vertaald, en de klantenservice antwoordde in onze test binnen enkele minuten via de live chat.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Voor wie is {c.name} interessant? Vooral voor spelers die waarde hechten aan snelheid en flexibiliteit: hoge of geen
              inzetlimieten, geen CRUKS-koppeling en een kassa die opnames doorgaans binnen {c.payoutSpeed} afhandelt. Wie liever speelt
              bij een aanbieder met een Nederlandse KSA-vergunning, zit hier niet op de juiste plek — dit is een buitenlands casino met
              een {c.license}-licentie, met alle vrijheden en verantwoordelijkheden die daarbij horen.
            </p>
          </section>

          <section className="mt-8 rounded-lg border-2 border-nl-blue/25 bg-card p-6">
            <h3 className="font-heading text-xl uppercase tracking-wide text-nl-green">Waarom {c.name} in onze top 9 staat</h3>
            <ul className="mt-4 space-y-2">
              {c.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-nl-orange" /> {p}
                </li>
              ))}
            </ul>
          </section>

          {/* Mid CTA */}
          <section className="mt-8 max-w-3xl">
            <h2 className="font-heading text-2xl uppercase tracking-wide text-nl-blue md:text-3xl">Bonus en voorwaarden</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              De welkomstbonus bij {c.name} bestaat uit {c.bonus} en daarbovenop {c.freeSpins}. De bonus activeer je bij je eerste
              storting vanaf {c.minDeposit}; er is geen aparte bonuscode nodig zolang je de bonus in het kassascherm aanvinkt. Houd er
              rekening mee dat bonusgeld altijd een inzeteis kent: pas als je die hebt afgerond, is de winst opneembaar.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ons advies is om de bonus alleen te claimen als je toch van plan bent langer te spelen. Speel je liever kort en neem je snel
              op, sla de bonus dan over — zonder bonus is je saldo direct opneembaar en profiteer je maximaal van de snelle uitbetaling.
              Slots tellen doorgaans voor 100% mee in de inzeteis, live casino en tafelspellen vaak veel minder. De voorwaarden van de
              operator zijn altijd leidend, dus lees ze door voordat je stort.
            </p>
          </section>

          <section className="mt-8 max-w-3xl">
            <h2 className="font-heading text-2xl uppercase tracking-wide text-nl-blue md:text-3xl">Uitbetalingen bij {c.name}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Uitbetaling is voor ons de belangrijkste graadmeter. Bij {c.name} duurde een opname in onze test gemiddeld {c.payoutSpeed}.
              De eerste keer moet je een korte verificatie doorlopen — een identiteitsbewijs en een adresbewijs volstaan meestal — daarna
              gaan volgende opnames merkbaar sneller. Verifieer je account daarom meteen na registratie in plaats van pas bij je eerste
              winst; dat scheelt vaak een dag wachttijd.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Opnemen kan via dezelfde methode als waarmee je hebt gestort. iDEAL en bankoverschrijving komen doorgaans binnen één werkdag
              op je rekening, e-wallets en crypto vaak binnen een uur. Er worden geen extra kosten gerekend voor standaardopnames.
            </p>
          </section>

          {/* Mid CTA */}
          <div className="my-10 flex flex-col items-center justify-between gap-4 rounded-lg bg-nl-hero p-6 md:flex-row">
            <div>
              <div className="font-heading text-2xl uppercase tracking-wide text-white">Klaar om te spelen bij {c.name}?</div>
              <div className="mt-1 text-sm text-white/70">{c.bonus} + {c.freeSpins} · uitbetaling {c.payoutSpeed}</div>
            </div>
            <Aff c={c} className="w-full md:w-auto" />
          </div>

          {/* Payments + games */}
          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-2 border-nl-blue/25 bg-card p-6">
              <h3 className="flex items-center gap-2 font-heading text-xl uppercase tracking-wide text-nl-blue">
                <Wallet size={18} className="text-nl-orange" /> Betalen & uitbetalen
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                iDEAL, Bancontact, Visa, Mastercard, Skrill en crypto worden geaccepteerd. Storten is gratis vanaf {c.minDeposit},
                opnames worden gemiddeld binnen {c.payoutSpeed} uitgevoerd.
              </p>
            </div>
            <div className="rounded-lg border-2 border-nl-blue/25 bg-card p-6">
              <h3 className="flex items-center gap-2 font-heading text-xl uppercase tracking-wide text-nl-blue">
                <Gamepad2 size={18} className="text-nl-orange" /> Spelaanbod
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Duizenden slots van onder andere Pragmatic Play, NetEnt, Play&apos;n GO en Hacksaw, plus live tafels van Evolution met
                Nederlandstalige dealers op de populairste tafels.
              </p>
            </div>
          </section>

          <section className="mt-8 max-w-3xl">
            <h2 className="font-heading text-2xl uppercase tracking-wide text-nl-blue md:text-3xl">Mobiel spelen en klantenservice</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {c.name} draait volledig in de mobiele browser van je telefoon of tablet. Je hoeft niets te installeren: de lobby past zich
              aan het scherm aan, de zoekfunctie en filters blijven bruikbaar en ook de kassa werkt met één hand te bedienen. Inloggen met
              gezichtsherkenning of vingerafdruk via je browser is mogelijk zodra je die in je toestel hebt ingesteld.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              De klantenservice is bereikbaar via live chat en e-mail, in de praktijk het snelst via de chat. In onze test kregen we binnen
              een paar minuten een medewerker aan de lijn die de vraag over de bonusvoorwaarden concreet en zonder standaardteksten
              beantwoordde. Een uitgebreide helpsectie vangt de meest voorkomende vragen over storten, verifiëren en opnemen al af.
            </p>
          </section>

          <section className="mt-8 max-w-3xl rounded-lg border-2 border-nl-green/40 bg-nl-green/5 p-6">
            <h2 className="font-heading text-2xl uppercase tracking-wide text-nl-blue md:text-3xl">Ons eindoordeel</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {c.name} eindigt op plek #{c.rank} in onze ranglijst van buitenlandse casino&apos;s voor Nederlandse spelers. De combinatie
              van {c.bonus}, {c.freeSpins} en een gemiddelde uitbetalingstijd van {c.payoutSpeed} maakt het een sterke keuze voor wie snel
              wil kunnen opnemen zonder in te leveren op spelaanbod. Wij beoordelen {c.name} met een {c.rating.toFixed(1)} van 5.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Speel altijd verantwoord: bepaal vooraf een budget, gebruik de stort- en verlieslimieten in je account en stort nooit meer dan
              je kunt missen. Gokken is 18+ en kan verslavend zijn.
            </p>
            <Aff c={c} className="mt-5 w-full md:w-auto" label={`Speel bij ${c.name}`} />
          </section>

          {/* FAQ */}
          <div className="mt-10">
            <FAQ
              items={[
                { q: `Is ${c.name} veilig?`, a: `${c.name} opereert onder een ${c.license}-licentie. Speel altijd verantwoord en stort alleen wat je kunt missen.` },
                { q: `Wat is de welkomstbonus bij ${c.name}?`, a: `Nieuwe spelers krijgen ${c.bonus} plus ${c.freeSpins}. De exacte voorwaarden van de operator zijn leidend.` },
                { q: `Hoe snel betaalt ${c.name} uit?`, a: `In onze test werden opnames gemiddeld binnen ${c.payoutSpeed} verwerkt.` },
                { q: `Werkt iDEAL bij ${c.name}?`, a: `Ja, iDEAL is beschikbaar met een minimale storting van ${c.minDeposit}.` },
                { q: `Kan ik ${c.name} op mobiel spelen?`, a: `Ja, de site werkt volledig in mobiele browsers, zonder app-installatie.` },
              ]}
            />
          </div>

          {/* Other reviews */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl uppercase tracking-wide text-nl-blue">Andere reviews</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/review/$slug"
                  params={{ slug: o.slug }}
                  className="group rounded-lg border-2 border-nl-blue/25 bg-card p-5 transition-colors hover:border-nl-orange"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-20 items-center justify-center rounded-md border border-nl-blue/10 bg-white p-1">
                      <img src={o.logo} alt={`${o.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <div className="font-heading text-xl uppercase tracking-wide text-nl-blue group-hover:text-nl-orange">{o.name}</div>
                      <div className="text-xs text-muted-foreground">Uitbetaling {o.payoutSpeed}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{o.bonus} + {o.freeSpins}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
