import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/ideal-casinos")({
  head: () => ({
    meta: [
      { title: "iDEAL Casino's — Online Casino's met iDEAL Stortingen 2026" },
      { name: "description", content: "Alle Nederlandse online casino's die iDEAL accepteren. Snelle stortingen, vertrouwde betaalmethode en directe verwerking." },
      { property: "og:title", content: "Beste iDEAL Casino's Nederland 2026" },
      { property: "og:description", content: "Casino's met snelle iDEAL stortingen en uitbetalingen voor NL-spelers." },
    ],
  }),
  component: Page,
});

function Page() {
  const ideal = casinos.filter((c) => c.payments.includes("iDEAL"));
  return (
    <CategoryPage
      breadcrumbs={[{ label: "iDEAL casino's" }]}
      h1="iDEAL casino's — direct, veilig en typisch Nederlands"
      intro={
        <>
          <p>
            iDEAL is voor Nederlandse spelers vrijwel altijd de eerste keuze — en met goede reden. Een iDEAL-storting is direct geboekt, kost niets, en verloopt via je eigen bank waardoor je geen extra accountgegevens bij het casino hoeft achter te laten. Dat is een fundamenteel ander veiligheidsniveau dan een creditcard.
          </p>
          <p>
            Wat veel mensen niet weten: niet alle KSA-vergunde casino's bieden iDEAL <em>even goed</em> aan. Sommige hebben een 1-tap flow, andere vereisen 6 stappen. Op deze pagina vergelijken we de iDEAL-implementatie zelf, niet alleen de aanwezigheid ervan.
          </p>
        </>
      }
      casinos={ideal}
      rankingTitle="Casino's met de beste iDEAL-ervaring"
      rankingDescription="Getest op stortingsflow, uitbetalingssnelheid en absentie van extra verificatiestappen."
      primaryCta="Stort met iDEAL"
      faqs={[
        { q: "Kan ik ook met iDEAL geld opnemen?", a: "Bij de meeste KSA-casino's ja — uitbetaling gaat dan via Trustly of vergelijkbare partner direct naar je bankrekening." },
        { q: "Zijn er kosten verbonden aan iDEAL stortingen?", a: "Vrijwel altijd niet. Het casino draagt de transactiekosten. Controleer wel de algemene voorwaarden voor zeer kleine bedragen." },
        { q: "Is iDEAL veiliger dan een creditcard?", a: "Voor casino-stortingen meestal wel: je kaartgegevens komen niet bij het casino terecht en de transactie wordt door je eigen bank geautoriseerd." },
        { q: "Wat is de minimale iDEAL-storting?", a: "Bij de meeste casino's €10, bij iDEAL Prime al vanaf €5. Hogere minima boven €20 worden zeldzaam en zijn wat ons betreft een minpunt." },
        { q: "Werkt iDEAL ook in de mobiele casino-app?", a: "Ja — bij goede apps opent iDEAL je banking-app direct via deeplink. Dit is de snelste flow." },
      ]}
      related={[
        { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling", description: "Cashout < 1 uur" },
        { to: "/beste-online-casinos", label: "Beste casino's", description: "Algemene top 10" },
        { to: "/mobiele-casinos", label: "Mobiele casino's", description: "Spelen op je telefoon" },
        { to: "/paypal-casino", label: "PayPal casino's", description: "Alternatieve betaalmethode" },
        { to: "/crypto-casino", label: "Crypto casino's", description: "Bitcoin & altcoins" },
        { to: "/welkomstbonus-casino", label: "Welkomstbonus", description: "Bonussen overzicht" },
      ]}
    />
  );
}
