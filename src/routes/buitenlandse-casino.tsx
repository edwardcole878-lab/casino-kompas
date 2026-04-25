import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Gift, ShieldCheck, Zap, Globe2, Star, Check } from "lucide-react";
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
        <div className="container mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <div className="text-sm font-bold tracking-tight text-muted-foreground">
            Buitenlands Casino
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm font-semibold shadow-soft hover:bg-secondary"
          >
            <Home className="h-4 w-4" /> Home
          </Link>
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

        {/* Short info section */}
        <section className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Waarom een buitenlands casino?</h2>
          <p className="mt-3 text-muted-foreground">
            Buitenlandse online casino's bieden vaak hogere bonussen, een breder spelaanbod en
            soepelere voorwaarden dan lokale aanbieders. Betory combineert een agressieve
            welkomstbonus met een moderne speelervaring — ideaal als je op zoek bent naar maximale
            speelwaarde voor je eerste storting.
          </p>

          <div className="mt-8">
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
        </section>
      </main>

      {/* Minimal footer — no internal links */}
      <footer className="mt-16 border-t bg-background/60">
        <div className="container mx-auto max-w-[1100px] px-6 py-6 text-center text-xs text-muted-foreground">
          18+ · Speel bewust · Voorwaarden van het casino zijn van toepassing.
          <div className="mt-2">
            <Link to="/" className="font-semibold text-foreground hover:underline">
              ← Terug naar home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}