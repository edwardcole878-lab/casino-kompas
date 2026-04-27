import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/roulette-online")({
  head: () => ({
    meta: [
      { title: "Roulette Online Nederland — Europees, Frans & Live 2026" },
      { name: "description", content: "Speel Europese, Franse en live roulette bij Nederlandse casino's. Inclusief uitleg over inzettypes en odds." },
      { property: "og:title", content: "Roulette Online Nederland — Europees, Frans & Live 2026" },
      { property: "og:description", content: "Speel Europese, Franse en live roulette bij Nederlandse casino's. Inclusief uitleg over inzettypes en odds." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Roulette online" }]}
      h1="Roulette online"
      intro={<><p>Europese roulette heeft één nul, Amerikaanse twee — een verdubbeling van het house edge. Speel altijd Europees of Frans als je de keuze hebt. We tonen casino's met de beste roulette-variatie.</p></>}
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
