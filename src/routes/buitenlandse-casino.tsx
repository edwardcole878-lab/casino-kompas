import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Gift,
  ShieldCheck,
  Zap,
  Globe2,
  Star,
  Check,
  Gamepad2,
  Dices,
  Coins,
  Smartphone,
  Headphones,
  Wallet,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import betoryLogo from "@/assets/betory-logo.png";

export const Route = createFileRoute("/buitenlandse-casino")({
  head: () => ({
    meta: [
      { title: "Buitenlands Casino — Betory Review & Bonus 2026" },
      {
        name: "description",
        content:
          "Betory buitenlands online casino — krijg 300% tot €3.250 + 225 free spins welkomstbonus. Lees onze korte review en claim direct je bonus.",
      },
      { property: "og:title", content: "Betory — Buitenlands Casino Bonus 300% tot €3.250 + 225 FS" },
      {
        property: "og:description",
        content: "Buitenlands online casino met een welkomstbonus van 300% tot €3.250 + 225 free spins.",
      },
    ],
  }),
  component: BuitenlandseCasinoPage,
});

const AFFILIATE_URL = "https://betorytrackers.com/dzqshr42m";

function BuitenlandseCasinoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/40">
      {/* Minimal top bar — Home only, no nav */}
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex max-w-[1100px] items-center justify-center px-6 py-4">
          <div className="text-sm font-bold tracking-tight text-muted-foreground">
            Buitenlands Casino
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-[1100px] px-6 py-10 md:py-16">
        {/* Hero */}
        <section className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft">
            <Globe2 className="h-3.5 w-3.5 text-trust" /> Buitenlands online casino
          </div>
          <h1 className="mx-auto max-w-3xl text-[32px] font-extrabold leading-[1.15] tracking-tight md:text-[44px]">
            Betory — Buitenlands Casino met een topbonus
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Op zoek naar een buitenlands online casino met een echt grote welkomstbonus? Betory biedt een
            van de hoogste bonussen op de markt: <strong className="text-foreground">300% tot €3.250 + 225 free spins</strong>.
          </p>
        </section>

        {/* Casino card */}
        <section className="mt-10">
          <article className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-card p-6 shadow-glow-gold md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
              {/* Logo */}
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-2xl border bg-[#0f1530] p-4 shadow-card">
                  <img
                    src={betoryLogo}
                    alt="Betory casino logo"
                    width={240}
                    height={240}
                    className="h-44 w-44 object-contain md:h-56 md:w-56"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                    <Star className="h-3 w-3" /> Aanbevolen
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-trust/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-trust">
                    <Globe2 className="h-3 w-3" /> Internationaal
                  </span>
                </div>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Betory</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Modern buitenlands online casino met een breed spelaanbod en hoge welkomstbonus.
                </p>

                {/* Bonus box */}
                <div className="mt-5 relative overflow-hidden rounded-2xl gradient-bonus border-2 border-gold/40 p-5">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gold/25 blur-2xl" />
                  <div className="relative flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                      <Gift className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">
                        Welkomstbonus
                      </div>
                      <div className="text-2xl font-black leading-tight text-foreground md:text-3xl">
                        300% tot €3.250
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground/80">
                        + 225 Free Spins
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  {[
                    "Tot €3.250 bonusgeld",
                    "225 free spins inbegrepen",
                    "Snelle registratie",
                    "Groot spelaanbod",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15">
                        <Check className="h-3.5 w-3.5 text-success" />
                      </span>
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 gradient-cta cta-glow rounded-xl px-8 text-lg font-extrabold text-gold-foreground shadow-gold"
                  >
                    <a
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                    >
                      Claim Bonus <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <div className="text-xs leading-snug text-muted-foreground">
                    <div className="font-semibold text-success">✓ Direct registreren</div>
                    <div>18+ · Voorwaarden gelden · Speel bewust</div>
                  </div>
                </div>

                {/* Trust row */}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-trust" /> Buitenlandse licentie
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-success" /> Snelle uitbetalingen
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5" /> Wereldwijd beschikbaar
                  </span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ============ FULL REVIEW ============ */}

        {/* Score banner */}
        <section className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-card md:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="grid h-20 w-20 place-items-center rounded-2xl gradient-gold text-gold-foreground shadow-gold">
                  <div className="text-center leading-none">
                    <div className="text-2xl font-black">10</div>
                    <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider opacity-80">/ 10</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <h2 className="mt-1 text-xl font-extrabold md:text-2xl">Betory Casino Review 2026</h2>
                  <p className="text-sm text-muted-foreground">
                    Modern crypto casino met groot spelaanbod
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-success">Kort oordeel</div>
                <div className="mt-1 max-w-[260px] text-sm font-semibold">
                  Sterk crypto casino met uitstekende UX en veel speelopties
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Over Betory */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-trust/10 text-trust">
                <Globe2 className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Over Betory Casino</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Betory Casino is een innovatief online gokplatform dat volledig is gericht op
              cryptocurrency. Spelers kunnen eenvoudig registreren en direct beginnen met spelen
              zonder ingewikkelde processen. Het casino richt zich op snelheid, toegankelijkheid,
              moderne technologie en internationale spelers — en groeit daardoor snel binnen de
              crypto-casino markt.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Zap, label: "Snelheid" },
                { icon: Sparkles, label: "Toegankelijkheid" },
                { icon: TrendingUp, label: "Moderne tech" },
                { icon: Globe2, label: "Internationaal" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-xl border bg-secondary/40 px-3.5 py-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-card text-trust shadow-soft">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spelaanbod */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Spelaanbod — uitgebreid en modern
            </h2>
          </div>
          <p className="mt-3 text-muted-foreground">
            Het spelaanbod van Betory Casino is indrukwekkend en zeer divers — van klassieke slots
            tot live tafels en innovatieve crypto-spellen.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* Slots */}
            <div className="rounded-2xl border bg-card p-6 shadow-soft hover-lift">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold">
                <Dices className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold">🎰 Slots</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Duizenden slots van top providers. Van klassiekers tot moderne video slots met bonusfeatures.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {["Pragmatic Play", "NetEnt", "Betsoft", "BGaming"].map((p) => (
                  <li key={p} className="flex items-center gap-2 font-medium">
                    <Check className="h-3.5 w-3.5 text-success" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Live casino */}
            <div className="rounded-2xl border bg-card p-6 shadow-soft hover-lift">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <Star className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold">🃏 Live Casino</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Stabiele streams en een realistische casino-ervaring met echte dealers.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {["Live roulette", "Live blackjack", "Live baccarat", "Game shows"].map((p) => (
                  <li key={p} className="flex items-center gap-2 font-medium">
                    <Check className="h-3.5 w-3.5 text-success" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra */}
            <div className="rounded-2xl border bg-card p-6 shadow-soft hover-lift">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-trust/10 text-trust">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold">🎲 Extra Games</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Het aanbod blijft altijd dynamisch en vernieuwend dankzij innovatieve titels.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {["Crash games", "Instant win games", "Crypto-gebaseerde spellen"].map((p) => (
                  <li key={p} className="flex items-center gap-2 font-medium">
                    <Check className="h-3.5 w-3.5 text-success" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bonussen */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 gradient-bonus p-6 shadow-glow-gold md:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                  <Gift className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  Bonussen & Welcome Package
                </h2>
              </div>
              <p className="mt-3 text-foreground/80">
                Betory Casino biedt aantrekkelijke promoties voor nieuwe spelers.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  "Tot 100% bonus op eerste storting",
                  "Extra free spins",
                  "Reload bonussen voor actieve spelers",
                ].map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2.5 rounded-xl border border-gold/30 bg-card/80 p-4 backdrop-blur"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full gradient-gold text-gold-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold">{b}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/70">
                👉 Gecombineerd kan dit oplopen tot een aantrekkelijk welcome package over meerdere stortingen.
              </p>
            </div>
          </div>
        </section>

        {/* Inline CTA #1 */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 gradient-bonus p-5 shadow-glow-gold md:p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/25 blur-3xl" />
            <div className="relative flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                  <Gift className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">
                    Welkomstbonus actief
                  </div>
                  <div className="text-lg font-black md:text-xl">300% tot €3.250 + 225 Free Spins</div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="h-12 gradient-cta cta-glow rounded-xl px-6 font-extrabold text-gold-foreground shadow-gold"
              >
                <a href={AFFILIATE_URL} target="_blank" rel="sponsored nofollow noopener">
                  Claim Bonus <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stortingen & uitbetalingen */}
        <section className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success">
                <Wallet className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-extrabold">💰 Stortingen</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Betory ondersteunt snelle en moderne crypto betaalmethoden.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Bitcoin (BTC)",
                "Ethereum (ETH)",
                "USDT en andere crypto",
                "Snelle verwerking",
                "Lage kosten",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 font-medium">
                  <Check className="h-3.5 w-3.5 text-success" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-trust/10 text-trust">
                <Coins className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-extrabold">💸 Uitbetalingen</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Uitbetalingen verlopen via crypto en zijn technisch zeer snel mogelijk.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Lage minimum opname",
                "Snelle blockchain transacties",
                "Flexibele wallets",
                "Wereldwijd toegankelijk",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 font-medium">
                  <Check className="h-3.5 w-3.5 text-success" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Veiligheid + UX + Support row */}
        <section className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-trust/10 text-trust">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-lg font-extrabold">⚖️ Veiligheid & licentie</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Betory opereert als internationaal crypto casino met offshore licentie. Geen
              Nederlandse KSA-vergunning, wel een internationale operatiestructuur gericht op
              crypto gaming.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold">
              <Smartphone className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-lg font-extrabold">📱 Gebruikservaring</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {[
                "Snelle laadtijden",
                "Mobiel geoptimaliseerd",
                "Intuïtieve navigatie",
                "Strak dark-mode design",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 font-medium">
                  <Check className="h-3.5 w-3.5 text-success" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success">
              <Headphones className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-lg font-extrabold">📞 Klantenservice</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {["Live chat beschikbaar", "E-mail support", "Basis FAQ sectie"].map((b) => (
                <li key={b} className="flex items-center gap-2 font-medium">
                  <Check className="h-3.5 w-3.5 text-success" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Inline CTA #2 */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-card md:p-7">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-trust/15 text-trust">
                  <Zap className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-base font-extrabold md:text-lg">
                    Klaar om te starten bij Betory?
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Snelle registratie · Crypto stortingen · Direct spelen
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="h-12 gradient-cta cta-glow rounded-xl px-6 font-extrabold text-gold-foreground shadow-gold"
              >
                <a href={AFFILIATE_URL} target="_blank" rel="sponsored nofollow noopener">
                  Speel bij Betory <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Voordelen */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border-2 border-success/30 bg-success/5 p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-success text-success-foreground">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-extrabold text-success">👍 Voordelen</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2">
              {[
                "Groot spelaanbod",
                "Moderne interface",
                "Snelle crypto transacties",
                "Innovatieve game selectie",
                "Lage instapdrempel",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Eindconclusie + final CTA */}
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-card p-8 shadow-glow-gold md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" /> Eindconclusie
              </div>
              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                Een modern crypto casino met sterke UX en groot spelaanbod
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Betory Casino blinkt vooral uit in <strong className="text-foreground">gebruiksvriendelijkheid</strong>,{" "}
                <strong className="text-foreground">spelaanbod</strong> en een{" "}
                <strong className="text-foreground">snelle crypto ervaring</strong>. Voor spelers
                die actief zijn in crypto gaming is Betory een aantrekkelijke keuze binnen het
                internationale casino landschap.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-14 gradient-cta cta-glow rounded-xl px-10 text-lg font-extrabold text-gold-foreground shadow-gold"
                >
                  <a href={AFFILIATE_URL} target="_blank" rel="sponsored nofollow noopener">
                    Claim 300% tot €3.250 + 225 FS <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <div className="text-xs text-muted-foreground">
                  18+ · Voorwaarden gelden · Speel bewust
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer — no internal links */}
      <footer className="mt-16 border-t bg-background/60">
        <div className="container mx-auto max-w-[1100px] px-6 py-6 text-center text-xs text-muted-foreground">
          18+ · Speel bewust · Voorwaarden van het casino zijn van toepassing.
        </div>
      </footer>
    </div>
  );
}