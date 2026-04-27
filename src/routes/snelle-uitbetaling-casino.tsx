import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/snelle-uitbetaling-casino")({
  head: () => ({
    meta: [
      { title: "Snelle Uitbetaling Casino — Cashout Binnen 1 Uur 2026" },
      { name: "description", content: "Casino's met de snelste uitbetalingen voor Nederlandse spelers. Getest in het weekend, op kantooruren en 's avonds." },
      { property: "og:title", content: "Snelle Uitbetaling Casino — Cashout Binnen 1 Uur 2026" },
      { property: "og:description", content: "Casino's met de snelste uitbetalingen voor Nederlandse spelers. Getest in het weekend, op kantooruren en 's avonds." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Snelle uitbetaling casino's" }]}
      h1="Snelle uitbetaling casino's"
      intro={<><p>Snel je winst op je rekening is voor veel spelers het belangrijkste keuzecriterium. Wij hebben uitbetalingen van tientallen casino's gemeten — op verschillende momenten van de week — en presenteren hier de écht snelle.</p></>}
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
