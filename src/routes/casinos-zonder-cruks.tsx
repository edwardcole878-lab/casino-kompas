import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/casinos-zonder-cruks")({
  head: () => ({
    meta: [
      { title: "Casino's zonder Cruks — Buitenlandse Casino's 2026 | Buitenlandse Casino's" },
      { name: "description", content: "Buitenlandse online casino's zonder Cruks-koppeling. Lees waarom dit bestaat, voor wie het wel/niet geschikt is, en welke aanbieders Nederlandse spelers accepteren." },
      { property: "og:title", content: "Casino's zonder Cruks — 2026" },
      { property: "og:description", content: "Buitenlandse online casino's zonder Cruks-koppeling. Lees waarom dit bestaat, voor wie het wel/niet geschikt is, en welke aanbieders Nederlandse spelers accepteren." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/buitenlandse-casino", label: "Buitenlandse casino's" }, { label: "Casino's zonder Cruks" }]}
      h1="Casino's zonder Cruks — buitenlandse alternatieven 2026"
      intro={
        <>
          <p>Casino's met een Nederlandse KSA-vergunning zijn verplicht aangesloten op CRUKS — het centraal register uitsluiting kansspelen. Buitenlandse online casino's vallen buiten dit register en bieden daarmee een alternatief voor spelers die niet in CRUKS staan, maar wel meer keuze, hogere bonussen of crypto-betaling zoeken.</p>
          <p><strong>Belangrijk:</strong> sta je in CRUKS, dan is dit register er niet voor niets. Speel dan niet bij deze casino's. Voor iedereen die bewust kiest voor een offshore platform, vergelijken we hieronder de aanbieders die wij hebben getest.</p>
        </>
      }
      casinos={casinos}
      rankingTitle="Onze ranking"
      rankingDescription="Geordend op gewogen score: bonus, uitbetaling, support, spelaanbod en transparantie."
      primaryCta="Speel Nu"
      faqs={[
        { q: "Is dit legaal in Nederland?", a: "Het spelen bij een buitenlands casino is voor de speler in Nederland niet strafbaar. De aanbieder mag zonder KSA-vergunning echter geen Nederlandse spelers actief werven. Spelen gebeurt op eigen verantwoordelijkheid." },
        { q: "Wat als ik in CRUKS sta?", a: "Speel dan niet bij deze casino's. CRUKS bestaat om je te beschermen — buitenlandse casino's vallen buiten dat register, maar dat is geen reden om de bescherming te omzeilen." },
        { q: "Hoe weet ik of een casino betrouwbaar is?", a: "Kijk naar licentiehouder, eigenaar, klachtenroute, betaalmethoden en uitbetaaltrack-record. Onze reviews testen elk van deze punten." },
      ]}
      related={[
        { to: "/buitenlandse-casino", label: "Alle buitenlandse casino's" },
        { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling" },
        { to: "/crypto-casino", label: "Crypto casino's" },
        { to: "/redactiebeleid", label: "Onze testmethode" },
      ]}
    />
  );
}
