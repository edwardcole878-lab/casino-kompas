import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/blackjack-online")({
  head: () => ({
    meta: [
      { title: "Blackjack Online Nederland — Beste Casino's & Tips 2026" },
      { name: "description", content: "Waar speel je het beste blackjack online in Nederland? Live tafels, side bets en strategie-uitleg." },
      { property: "og:title", content: "Blackjack Online Nederland — Beste Casino's & Tips 2026" },
      { property: "og:description", content: "Waar speel je het beste blackjack online in Nederland? Live tafels, side bets en strategie-uitleg." },
    ],
  }),
  component: Page,
});

function Page() {
  const list = casinos.filter((c) => c.games.table > 40).slice(0, 5);
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Blackjack online" }]}
      h1="Blackjack online"
      intro={<><p>Blackjack heeft het laagste house edge van alle casinospellen — mits je optimale strategie speelt. Op deze pagina vergelijken we casino's specifiek op hun blackjack-aanbod, niet op de algemene casino-criteria.</p></>}
      casinos={list}
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
