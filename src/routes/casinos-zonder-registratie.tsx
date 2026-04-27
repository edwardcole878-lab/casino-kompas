import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/casinos-zonder-registratie")({
  head: () => ({
    meta: [
      { title: "Casino's zonder registratie — Buitenlandse Casino's 2026 | Buitenlandse Casino's" },
      { name: "description", content: "Wat zijn casino's zonder registratie? Hoe werkt Pay-N-Play en welke buitenlandse aanbieders bieden iets vergelijkbaars voor Nederlandse spelers?" },
      { property: "og:title", content: "Casino's zonder registratie — 2026" },
      { property: "og:description", content: "Wat zijn casino's zonder registratie? Hoe werkt Pay-N-Play en welke buitenlandse aanbieders bieden iets vergelijkbaars voor Nederlandse spelers?" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/buitenlandse-casino", label: "Buitenlandse casino's" }, { label: "Casino's zonder registratie" }]}
      h1="Casino's zonder registratie — Pay-N-Play uitgelegd"
      intro={
        <>
          <p>"Casino's zonder registratie" — vaak ook Pay-N-Play genoemd — laten je storten en spelen zonder uitgebreid accountformulier. Identificatie loopt via je bank (in NL doorgaans Trustly). Volledig anoniem spelen mag echter niet bij elke licentiehouder, en de meeste casino's vragen alsnog KYC bij uitbetaling.</p>
          <p>Op deze pagina vind je <strong>buitenlandse online casino's</strong> met een snelle, vereenvoudigde registratie. Geen 20-veld formulier, wel — uiteindelijk — verificatie van je identiteit voor uitbetaling. Dat is geen bug, dat is anti-witwasregelgeving.</p>
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
