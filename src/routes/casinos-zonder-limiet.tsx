import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/casinos-zonder-limiet")({
  head: () => ({
    meta: [
      { title: "Casino's zonder limiet — Buitenlandse Casino's 2026 | Buitenlandse Casino's" },
      { name: "description", content: "Sinds 2024 vragen KSA-vergunde casino's verplicht een stortlimiet vooraf. Buitenlandse casino's hanteren een ander regime. Lees wat dit betekent." },
      { property: "og:title", content: "Casino's zonder limiet — 2026" },
      { property: "og:description", content: "Sinds 2024 vragen KSA-vergunde casino's verplicht een stortlimiet vooraf. Buitenlandse casino's hanteren een ander regime. Lees wat dit betekent." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/buitenlandse-casino", label: "Buitenlandse casino's" }, { label: "Casino's zonder limiet" }]}
      h1="Casino's zonder verplichte stortlimiet — wat betekent dat?"
      intro={
        <>
          <p>In Nederland zijn KSA-vergunde casino's verplicht om bij elke speler een stortlimiet vast te stellen voordat er gespeeld kan worden — een maatregel om problematisch gokken te voorkomen. Buitenlandse online casino's hanteren dit Nederlandse regime niet.</p>
          <p>Dat klinkt aantrekkelijk, maar het betekent ook dat <strong>de verantwoordelijkheid bij jou ligt</strong>. Wij raden iedereen aan zelf een budget te bepalen voordat je begint, en gebruik te maken van de zelfuitsluitingstools die de meeste serieuze offshore casino's wel bieden. Sta je in CRUKS? Speel dan niet bij deze casino's.</p>
        </>
      }
      casinos={topCasinos}
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
