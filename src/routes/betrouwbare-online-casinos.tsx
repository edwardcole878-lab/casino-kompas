import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/betrouwbare-online-casinos")({
  head: () => ({
    meta: [
      { title: "Betrouwbare Online Casino's Nederland — Veilig Spelen 2026" },
      { name: "description", content: "Veiligheid eerst: alle casino's met KSA-licentie, bewezen uitbetalingen, klachtenroute en duidelijke spelersbescherming." },
      { property: "og:title", content: "Betrouwbare Online Casino's Nederland" },
      { property: "og:description", content: "Casino's geselecteerd op licentie, veiligheid en spelersbescherming." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/beste-online-casinos", label: "Casino's" }, { label: "Betrouwbare casino's" }]}
      h1="Betrouwbare online casino's — trust komt vóór bonus"
      intro={
        <>
          <p>
            Voor sommige spelers is een hoge bonus interessant. Voor anderen telt vooral één ding: de zekerheid dat hun geld er morgen nog is en dat ze problemen aan een betrouwbaar adres kunnen melden. Deze pagina is voor die tweede groep.
          </p>
          <p>
            Onze trust-criteria zijn strikt: <strong>volledige KSA-licentie, minstens drie jaar operationeel, geen openstaande KSA-handhavingen, transparante eigendomsstructuur en aantoonbare Cruks-naleving</strong>. Casino's die op één punt zakken, halen deze lijst niet.
          </p>
        </>
      }
      casinos={topCasinos}
      rankingTitle="Casino's met de hoogste trust-score"
      rankingDescription="Beoordeeld op licentie, transparantie, klachtafhandeling en Cruks-implementatie."
      primaryCta="Bekijk Casino"
      faqs={[
        { q: "Wat maakt een casino 'betrouwbaar'?", a: "KSA-licentie is de basis, maar daarbovenop kijken we naar uitbetaalhistorie, klachtenafhandeling, transparantie van eigenaarschap en compliance." },
        { q: "Hoe controleer ik zelf de licentie van een casino?", a: "De Kansspelautoriteit publiceert een openbaar register van vergunninghouders op kansspelautoriteit.nl. Vergelijk de naam exact." },
        { q: "Wat is een 'AGOG' of 'AGCC' licentie?", a: "Buitenlandse licenties die in Nederland sinds oktober 2021 niet meer geldig zijn. Speel uitsluitend bij buitenlandse casino's." },
        { q: "Wat als een casino niet uitbetaalt?", a: "Stap 1: officiële klacht bij de support. Stap 2: melding bij de KSA. Stap 3: geschillencommissie of juridisch advies." },
        { q: "Is een hoog rating-cijfer hetzelfde als betrouwbaar?", a: "Niet noodzakelijk. Onze rating weegt veel factoren — voor pure trust-vergelijking gebruik je beter deze pagina dan de algemene top 10." },
      ]}
      related={[
        { to: "/beste-online-casinos", label: "Top 10 algemeen" },
        { to: "/verantwoord-spelen", label: "Verantwoord spelen" },
        { to: "/redactiebeleid", label: "Onze testmethode" },
        { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling" },
        { to: "/ideal-casinos", label: "iDEAL casino's" },
        { to: "/blog", label: "Blog" },
      ]}
    />
  );
}
