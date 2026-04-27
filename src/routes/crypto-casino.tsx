import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/crypto-casino")({
  head: () => ({
    meta: [
      { title: "Crypto Casino — Bitcoin & Crypto Casino's Nederland 2026" },
      { name: "description", content: "buitenlandse casino's die naast iDEAL ook Bitcoin, Ethereum of stablecoins accepteren. Snelle uitbetalingen en provably fair." },
      { property: "og:title", content: "Crypto Casino — Bitcoin & Crypto Casino's Nederland 2026" },
      { property: "og:description", content: "buitenlandse casino's die naast iDEAL ook Bitcoin, Ethereum of stablecoins accepteren. Snelle uitbetalingen en provably fair." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Crypto casino's met iDEAL" }]}
      h1="Crypto casino's met iDEAL"
      intro={<><p>De meeste KSA-casino's accepteren geen crypto, maar enkele pioniers doen het wél — en combineren het met iDEAL voor traditionele spelers. Crypto-uitbetalingen zijn vaak nóg sneller dan iDEAL, vooral in het weekend.</p></>}
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
