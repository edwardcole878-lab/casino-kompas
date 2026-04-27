import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/live-casino")({
  head: () => ({
    meta: [
      { title: "Live Casino Nederland 2026 — Spelen met Live Dealer" },
      { name: "description", content: "Live blackjack, roulette en gameshows met echte dealers. Inclusief Nederlandstalige tafels en Evolution-aanbod." },
      { property: "og:title", content: "Live Casino Nederland 2026 — Spelen met Live Dealer" },
      { property: "og:description", content: "Live blackjack, roulette en gameshows met echte dealers. Inclusief Nederlandstalige tafels en Evolution-aanbod." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Live casino — met echte dealer" }]}
      h1="Live casino — met echte dealer"
      intro={<><p>Live casino brengt de echte casino-ervaring naar je scherm: een professionele dealer, HD-stream, en de mogelijkheid om mee te chatten met andere spelers. Wij testen op streamkwaliteit, tafelaanbod en Nederlandstaligheid.</p></>}
      casinos={topCasinos}
      primaryCta="Bekijk Casino"
      faqs={[
        { q: "Is dit type casino veilig?", a: "Nee, deze casino's hebben géén Nederlandse KSA-vergunning en zijn niet aangesloten op Cruks. Ze opereren onder een offshore licentie (Anjouan, Curaçao of MGA). Speel verantwoord en stel zelf limieten in." },
        { q: "Wat is de minimale storting?", a: "Bij de meeste casino's hier €10, soms al vanaf €5." },
        { q: "Hoe lang duurt een uitbetaling gemiddeld?", a: "Tussen 30 minuten en 4 uur, afhankelijk van casino en betaalmethode." },
        { q: "Krijg ik Nederlandstalige support?", a: "Ja, alle buitenlandse casino's bieden Nederlandstalige klantenservice." },
        { q: "Mag ik meerdere accounts hebben?", a: "Eén account per persoon per casino — meerdere accounts zijn altijd verboden." },
      ]}
      related={[
        { to: "/beste-online-casinos", label: "Top 10 casino's" },
        { to: "/casino-bonussen", label: "Bonussen" },
        { to: "/ideal-casinos", label: "iDEAL casino's" },
        { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling" },
        { to: "/casino-spellen", label: "Casinospellen" },
        { to: "/blog", label: "Blog" },
      ]}
    />
  );
}
