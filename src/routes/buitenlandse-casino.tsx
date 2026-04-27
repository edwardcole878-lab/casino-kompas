import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
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
    <CategoryPage
      breadcrumbs={[{ label: "Buitenlandse casino's" }]}
      h1="Buitenlandse online casino's voor Nederlandse spelers"
      intro={
        <>
          <p>
            Sinds de Nederlandse markt in 2021 reguleerde, kiezen veel spelers er bewust voor om bij <strong>buitenlandse online casino's</strong> te spelen — voor hogere bonussen, ruimer spelaanbod, snellere uitbetalingen of crypto-opties die op de KSA-markt niet beschikbaar zijn. Deze pagina vergelijkt uitsluitend casino's met een offshore-licentie (Anjouan, Curaçao, MGA) die Nederlandse spelers accepteren.
          </p>
          <p>
            <strong>Belangrijk:</strong> deze casino's hebben geen KSA-vergunning en zijn niet aangesloten op CRUKS. Wij zijn geen vervanger voor KSA-vergunde aanbieders en raden spelers die in CRUKS staan af om hier te spelen — CRUKS bestaat niet voor niets. Voor iedereen die bewust kiest voor een offshore casino, zijn dit de aanbieders die onze test overleefden.
          </p>
        </>
      }
      casinos={topCasinos}
      rankingTitle="Onze top 10 buitenlandse casino's"
      rankingDescription="Geordend op gewogen score: bonus (25%), uitbetaling (25%), support (20%), spelaanbod (20%), transparantie (10%)."
      primaryCta="Speel Nu"
      faqs={[
        { q: "Wat is een buitenlands online casino?", a: "Een online casino dat onder een buitenlandse licentie opereert (bijv. Anjouan, Curaçao of Malta) in plaats van een Nederlandse KSA-vergunning. Deze casino's accepteren Nederlandse spelers maar vallen buiten het Nederlandse toezicht." },
        { q: "Is spelen bij een buitenlands casino legaal in Nederland?", a: "Voor de speler in Nederland is het niet strafbaar. De aanbieder mag zonder KSA-vergunning echter geen Nederlandse spelers actief werven. Spelen gebeurt op eigen verantwoordelijkheid." },
        { q: "Wat is het verschil met een KSA-casino?", a: "KSA-casino's zijn onderworpen aan strikte Nederlandse regels (Cruks, stortlimieten, kansspelbelasting). Buitenlandse casino's hanteren hun eigen regime — vaak hogere bonussen en snellere uitbetalingen, maar minder spelersbescherming." },
        { q: "Wat als ik in CRUKS sta?", a: "Speel dan niet bij deze casino's. CRUKS bestaat om je te beschermen — buitenlandse casino's vallen buiten het register, maar dat is geen reden de bescherming te omzeilen." },
        { q: "Hoe verifieer ik dat een buitenlands casino betrouwbaar is?", a: "Controleer licentiehouder, eigenaar, klachtenroute, betaalmethoden en uitbetaaltrack-record. Onze reviews testen elk van deze punten." },
      ]}
      related={[
        { to: "/casinos-zonder-cruks", label: "Casino's zonder Cruks" },
        { to: "/casinos-zonder-registratie", label: "Casino's zonder registratie" },
        { to: "/casinos-zonder-limiet", label: "Casino's zonder limiet" },
        { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling" },
        { to: "/crypto-casino", label: "Crypto casino's" },
        { to: "/redactiebeleid", label: "Onze testmethode" },
      ]}
    />
  );
}
