import { createFileRoute } from "@tanstack/react-router";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { FAQ } from "@/components/site/FAQ";
import { TrustNotice } from "@/components/site/TrustNotice";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/buitenlandse-casino")({
  head: () => ({
    meta: [
      { title: "Buitenlandse Online Casino's voor Nederlandse Spelers — 2026 | Buitenlandse Casino's" },
      { name: "description", content: "Onze geteste top 10 buitenlandse online casino's (Anjouan, Curaçao, MGA) die Nederlandse spelers accepteren. Hogere bonussen, snelle uitbetalingen, crypto-opties." },
      { property: "og:title", content: "Buitenlandse Online Casino's voor NL Spelers — Top 10 van 2026" },
      { property: "og:description", content: "10 geteste offshore casino's voor Nederland — bonus, uitbetaling en transparantie vergeleken." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Buitenlandse online casino's voor Nederlandse spelers
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Onze geteste top 10 <strong className="text-foreground">buitenlandse online casino's</strong> (Anjouan, Curaçao, MGA) die Nederlandse spelers accepteren — hogere bonussen, snellere uitbetalingen en crypto-opties die op de KSA-markt niet beschikbaar zijn. Geen KSA-vergunning, geen CRUKS-aansluiting: speel bewust en alleen als je niet in CRUKS staat.
          </p>
        </header>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold md:text-3xl">Onze top 10 buitenlandse casino's</h2>
            <p className="mt-1 text-muted-foreground">
              Geordend op gewogen score: bonus (25%), uitbetaling (25%), support (20%), spelaanbod (20%), transparantie (10%).
            </p>
          </div>
          <ComparisonTable casinos={topCasinos} primaryCta="Speel Nu" />
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ
            items={[
              { q: "Wat is een buitenlands online casino?", a: "Een online casino dat onder een buitenlandse licentie opereert (bijv. Anjouan, Curaçao of Malta) in plaats van een Nederlandse KSA-vergunning. Deze casino's accepteren Nederlandse spelers maar vallen buiten het Nederlandse toezicht." },
              { q: "Is spelen bij een buitenlands casino legaal in Nederland?", a: "Voor de speler in Nederland is het niet strafbaar. De aanbieder mag zonder KSA-vergunning echter geen Nederlandse spelers actief werven. Spelen gebeurt op eigen verantwoordelijkheid." },
              { q: "Wat is het verschil met een KSA-casino?", a: "KSA-casino's zijn onderworpen aan strikte Nederlandse regels (Cruks, stortlimieten, kansspelbelasting). Buitenlandse casino's hanteren hun eigen regime — vaak hogere bonussen en snellere uitbetalingen, maar minder spelersbescherming." },
              { q: "Wat als ik in CRUKS sta?", a: "Speel dan niet bij deze casino's. CRUKS bestaat om je te beschermen — buitenlandse casino's vallen buiten het register, maar dat is geen reden de bescherming te omzeilen." },
              { q: "Hoe verifieer ik dat een buitenlands casino betrouwbaar is?", a: "Controleer licentiehouder, eigenaar, klachtenroute, betaalmethoden en uitbetaaltrack-record. Onze reviews testen elk van deze punten." },
            ]}
          />
          <TrustNotice />
        </div>
      </div>
    </main>
  );
}
