import { createFileRoute } from "@tanstack/react-router";
import { getCasino } from "@/data/casinos";
import { Rating } from "@/components/site/Rating";
import { PaymentIcons } from "@/components/site/PaymentIcons";
import { CasinoBadge } from "@/components/site/Badge";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock,
  Gift,
  ShieldCheck,
  Trophy,
  X,
} from "lucide-react";

export const Route = createFileRoute("/buitenlandse-casino")({
  head: () => ({
    meta: [
      { title: "Betory Casino — Het Beste Buitenlandse Casino voor NL Spelers (2026)" },
      {
        name: "description",
        content:
          "Volledige Betory review: 300% welkomstbonus tot €3.250 + 225 free spins, snelle crypto-uitbetalingen en 5.000+ slots. Ons #1 buitenlandse casino voor Nederlandse spelers.",
      },
      { property: "og:title", content: "Betory Casino — Het Beste Buitenlandse Casino voor NL Spelers" },
      {
        property: "og:description",
        content:
          "Hoogste welkomstbonus, snelle uitbetalingen en duizenden slots. Lees onze volledige Betory review.",
      },
    ],
  }),
  component: Page,
});

const MONTHS_NL = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const dateNL = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS_NL[m - 1]} ${y}`;
};

function Page() {
  const casino = getCasino("betory");
  if (!casino) return null;
  const affiliate = casino.affiliateUrl ?? `/go/${casino.slug}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        {/* Hero / intro */}
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-foreground">
            <Trophy className="h-3.5 w-3.5" /> #1 Buitenlands casino — 2026
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Betory Casino — het beste buitenlandse casino voor Nederlandse spelers
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Betory is een snelgroeiend internationaal online casino dat sinds 2025 enorm aan
            populariteit wint onder Nederlandse spelers. Het platform combineert een{" "}
            <strong className="text-foreground">300% welkomstbonus tot €3.250 + 225 free spins</strong>,
            een bibliotheek van 5.000+ slots, snelle crypto-uitbetalingen en een soepele iDEAL-checkout.
            Op deze pagina vind je onze volledige Betory review als hét voorbeeld van een betrouwbaar
            buitenlands casino.
          </p>
        </header>

        {/* Featured casino card — Betory only, no internal links */}
        <article
          className="relative mt-10 overflow-hidden rounded-2xl border border-gold/60 bg-gradient-to-br from-card via-card to-accent/40 p-6 pt-11 shadow-glow-gold md:p-8 md:pt-11"
          style={{ borderWidth: "1.5px" }}
        >
          <div className="absolute left-0 top-0 inline-flex items-center gap-1.5 rounded-br-2xl gradient-gold px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-gold-foreground shadow-gold">
            <Trophy className="h-3.5 w-3.5" />
            #1 Beste Keuze
          </div>
          <div className="absolute right-3 top-2 inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
            <CalendarCheck className="h-3 w-3" /> Laatst getest: {dateNL(casino.lastTested)}
          </div>

          <div className="grid gap-6 md:grid-cols-[auto_1fr_280px] md:items-center">
            <div className="flex items-center gap-4">
              {casino.logoUrl && (
                <img
                  src={casino.logoUrl}
                  alt={`${casino.name} logo`}
                  width={96}
                  height={96}
                  className="h-16 w-16 overflow-hidden rounded-xl bg-white object-contain p-1.5 shadow-card md:h-24 md:w-24"
                  loading="eager"
                />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h2 className="text-2xl font-extrabold tracking-tight md:text-[28px]">{casino.name}</h2>
                <Rating value={casino.rating} />
              </div>
              <p className="mt-1 text-[13px] text-muted-foreground">{casino.tagline}</p>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full border border-trust/30 bg-trust/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-trust">
                  <BadgeCheck className="h-3 w-3" /> Geverifieerd
                </span>
                {casino.badges?.map((b) => <CasinoBadge key={b} variant={b} />)}
              </div>

              <div className="relative mt-4 min-h-[80px] overflow-hidden rounded-xl gradient-bonus border-2 border-gold/40 p-5">
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gold/20 blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                    <Gift className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">
                      Welkomstbonus
                    </div>
                    <div className="text-xl font-black leading-tight text-foreground md:text-2xl">
                      {casino.bonusHeadline}
                    </div>
                    <div className="mt-1 text-[13px] font-medium text-foreground/70">
                      {casino.bonusDetail}
                    </div>
                  </div>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-lg border bg-secondary/40 p-3 text-[12px] sm:grid-cols-3 md:grid-cols-5">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Wagering</dt>
                  <dd className="font-bold tabular-nums">{casino.wagering}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Max bonus</dt>
                  <dd className="font-bold tabular-nums">€{casino.maxBonus}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Min. storting</dt>
                  <dd className="font-bold tabular-nums">{casino.minDeposit}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Uitbetaling</dt>
                  <dd className="font-bold tabular-nums">{casino.payoutTime}</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Licentie</dt>
                  <dd className="font-bold">{casino.licence}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t pt-3">
                <PaymentIcons methods={casino.payments} />
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                  <Clock className="h-3 w-3" /> {casino.payoutTime}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-trust">
                  <ShieldCheck className="h-3 w-3" /> {casino.licence}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <Button
                asChild
                size="lg"
                className="gradient-cta cta-glow h-14 w-full text-lg font-extrabold text-gold-foreground shadow-gold md:h-[56px] md:text-xl"
              >
                <a href={affiliate} target="_blank" rel="sponsored nofollow noopener">
                  Speel Nu <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <div className="text-center text-[10px] leading-snug text-muted-foreground">
                <div className="font-semibold text-success">✓ Direct toegang · binnen 1 minuut</div>
                <div className="mt-0.5">18+ · Voorwaarden gelden · Speel bewust</div>
              </div>
            </div>
          </div>
        </article>

        {/* Editorial review */}
        <section className="prose prose-neutral mt-12 max-w-none leading-relaxed text-foreground/90 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:text-muted-foreground [&_strong]:text-foreground [&_li]:text-muted-foreground">
          <h2>Is Betory betrouwbaar?</h2>
          <p>
            Betory onderscheidt zich door een grote keuze aan spellen, een overzichtelijke website en
            consistent positieve reacties op Trustpilot. Het platform opereert onder een Costa
            Ricaanse vergunning, afgegeven aan Nimbus Enterprises Limitada (registratienummer
            3-102-903193). In aanvulling daarop draagt Betory een Anjouan-licentie, wat het tot een
            geloofwaardige speler in de offshore-markt maakt.
          </p>
          <p>Spelers noemen in hun reviews vooral:</p>
          <ul>
            <li>een gebruiksvriendelijke website met heldere navigatie;</li>
            <li>toegankelijke en beleefde technische ondersteuning;</li>
            <li>royale bonussen voor zowel nieuwkomers als actieve gamers;</li>
            <li>veilige transacties zonder noemenswaardige vertragingen;</li>
            <li>een aantrekkelijk VIP-programma met crypto-cashback.</li>
          </ul>

          <h2>Spelaanbod bij Betory</h2>
          <p>
            Betory biedt 5.000+ titels van bekende providers als Pragmatic Play, NetEnt, Hacksaw
            Gaming, BGaming, Spinomenal, Spribe en Nolimit City. Het aanbod omvat:
          </p>
          <ul>
            <li>
              <strong>Slots</strong> — populaire klassiekers en nieuwe releases zoals Twin Spin,
              Gold Rush, Le Pharaoh, Ze Zeus en Wild Fruits;
            </li>
            <li>
              <strong>Tafelspellen</strong> — American Roulette, blackjack-varianten, baccarat en
              meer;
            </li>
            <li>
              <strong>Minigames</strong> — Aviator, Plinko, Space XY, B-Ball Blitz;
            </li>
            <li>
              <strong>Live casino</strong> — meerdere roulette- en kaartspelvarianten, Dragon Tiger
              en spelshows;
            </li>
            <li>
              <strong>Sportsbook</strong> — pre-match en live wedden op voetbal, basketbal, tennis,
              hockey en meer.
            </li>
          </ul>

          <h2>Betory bonusoverzicht</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-secondary/40 text-left">
                  <th className="px-3 py-2 font-semibold">Bonus</th>
                  <th className="px-3 py-2 font-semibold">Bedrag</th>
                  <th className="px-3 py-2 font-semibold">Min. storting</th>
                  <th className="px-3 py-2 font-semibold">Wagering</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b"><td className="px-3 py-2">1e storting</td><td className="px-3 py-2">150% tot €750 + 50 FS</td><td className="px-3 py-2">€30</td><td className="px-3 py-2">x40</td></tr>
                <tr className="border-b"><td className="px-3 py-2">2e storting</td><td className="px-3 py-2">100% tot €1.000 + 75 FS</td><td className="px-3 py-2">€30</td><td className="px-3 py-2">x40</td></tr>
                <tr className="border-b"><td className="px-3 py-2">3e storting</td><td className="px-3 py-2">50% tot €1.500 + 100 FS</td><td className="px-3 py-2">€30</td><td className="px-3 py-2">x40</td></tr>
                <tr className="border-b"><td className="px-3 py-2">Sportsbook welkomst</td><td className="px-3 py-2">Freebet 50% tot €500</td><td className="px-3 py-2">€20</td><td className="px-3 py-2">x10</td></tr>
                <tr className="border-b"><td className="px-3 py-2">Cashback</td><td className="px-3 py-2">20% van verloren weddenschappen</td><td className="px-3 py-2">—</td><td className="px-3 py-2">—</td></tr>
                <tr><td className="px-3 py-2">Rakeback</td><td className="px-3 py-2">15% op elke geplaatste weddenschap</td><td className="px-3 py-2">—</td><td className="px-3 py-2">—</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Storting en uitbetaling</h2>
          <p>
            Betory ondersteunt iDEAL via grote Nederlandse banken (ABN AMRO, ING, Rabobank),
            bankoverschrijving, Visa, Mastercard, Revolut, N26 en een breed scala aan crypto-opties
            (BTC, ETH, USDT, BNB, XRP, DOGE, ADA, LTC, SOL en meer). De minimum storting is{" "}
            <strong>{casino.minDeposit}</strong>, met een maximum van €5.000 per transactie.
          </p>
          <p>
            Uitbetalingen verlopen razendsnel via crypto — meestal binnen enkele seconden tot
            maximaal 24 uur. Bankoverschrijvingen en kaartopnames duren 3–5 werkdagen. De
            uitbetaallimiet is €10.000 per dag en €50.000 per maand.
          </p>

          <h2>App en mobiel spelen</h2>
          <p>
            Betory biedt een mobiele app voor zowel Android als iOS, plus een volledig responsieve
            mobiele website. Je speelt overal waar je internet hebt — alle slots, live casino en
            sportsbook werken naadloos op kleinere schermen.
          </p>

          <h2>Klantenservice</h2>
          <p>
            De ondersteuning is 24/7 beschikbaar via live chat, e-mail (support@betory.com), Telegram
            en X (Twitter). De medewerkers reageren snel en lossen technische storingen vlot op.
          </p>

          <h2>Verantwoord gokken</h2>
          <p>
            Betory biedt zelfuitsluitings­tools, stortlimieten en sessielimieten. Omdat het casino
            geen KSA-vergunning heeft, is het niet aangesloten bij CRUKS. Sta je in CRUKS, speel hier
            dan niet — CRUKS bestaat om je te beschermen.
          </p>

          <h2>Voordelen</h2>
          <div className="not-prose">
            <div className="rounded-lg border border-success/20 bg-success/5 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-success">Voordelen</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {casino.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <h2>Conclusie — waarom Betory?</h2>
          <p>{casino.verdict}</p>
          <p>
            Voor Nederlandse spelers die bewust kiezen voor een buitenlands casino is Betory onze
            duidelijke #1: hoogste welkomstbonus, snelle uitbetalingen, breed spelaanbod en
            betrouwbare service. Klaar om te starten?
          </p>
        </section>

        {/* Second CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="gradient-cta cta-glow h-14 px-10 text-lg font-extrabold text-gold-foreground shadow-gold md:h-[56px] md:text-xl"
          >
            <a href={affiliate} target="_blank" rel="sponsored nofollow noopener">
              Speel nu bij Betory <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* FAQ + trust */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ
            items={[
              { q: "Is Betory legaal in Nederland?", a: "Betory heeft geen Nederlandse KSA-vergunning, maar wel een geldige Costa Ricaanse licentie (Nimbus Enterprises Limitada, reg. 3-102-903193) en een Anjouan-vergunning. Voor Nederlandse spelers is meedoen niet strafbaar; spelen gebeurt op eigen verantwoordelijkheid." },
              { q: "Hoe lang duurt een uitbetaling bij Betory?", a: "Crypto-uitbetalingen verlopen binnen seconden tot maximaal 24 uur. Bankoverschrijvingen en kaartopnames duren 3–5 werkdagen. De uitbetaallimiet is €10.000 per dag en €50.000 per maand." },
              { q: "Is er een Betory no deposit bonus?", a: "Op dit moment biedt Betory geen no-deposit bonus. De welkomstbonus van 300% tot €3.250 + 225 free spins activeer je vanaf je eerste storting van €30." },
              { q: "Welke betaalmethoden accepteert Betory?", a: "iDEAL via ABN AMRO, ING en Rabobank, bankoverschrijving, Visa, Mastercard, Revolut, N26, plus crypto's als BTC, ETH, USDT, BNB, XRP, DOGE, ADA, LTC en SOL." },
              { q: "Heeft Betory een mobiele app?", a: "Ja, Betory biedt apps voor zowel Android als iOS. De mobiele website is volledig responsief en biedt toegang tot alle slots, live casino en sportsbook." },
              { q: "Is Betory aangesloten op CRUKS?", a: "Nee. Betory heeft geen KSA-vergunning en is daarom niet aangesloten op CRUKS. Sta je in CRUKS, speel hier dan niet — CRUKS bestaat om je te beschermen." },
            ]}
          />
          <TrustNotice />
        </div>

        <p className="mt-12 text-center text-[11px] text-muted-foreground">
          18+ · Speel bewust · Voorwaarden van het casino zijn van toepassing
        </p>
      </div>
    </main>
  );
}
