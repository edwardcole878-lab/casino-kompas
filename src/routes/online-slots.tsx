import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/online-slots")({
  head: () => ({
    meta: [
      { title: "Online Slots Nederland — Beste Slot Casino's 2026" },
      { name: "description", content: "Casino's met de grootste slot-bibliotheken: NetEnt, Pragmatic Play, Play'n GO, Hacksaw en meer. Megaways, jackpots en klassieke slots." },
      { property: "og:title", content: "Online Slots Nederland — Beste Slot Casino's 2026" },
      { property: "og:description", content: "Casino's met de grootste slot-bibliotheken: NetEnt, Pragmatic Play, Play'n GO, Hacksaw en meer. Megaways, jackpots en klassieke slots." },
    ],
  }),
  component: Page,
});

function Page() {
  const list = casinos.sort((a, b) => b.games.slots - a.games.slots).slice(0, 6);
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Online slots — beste slot casino's" }]}
      h1="Online slots — beste slot casino's"
      intro={<><p>Slots zijn met afstand de populairste casinospellen in Nederland. Wat een goed slots-casino kenmerkt is niet alleen aantal, maar variëteit van providers, aanwezigheid van demo-modus en kwaliteit van zoekfilters.</p></>}
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
