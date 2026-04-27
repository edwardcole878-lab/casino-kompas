import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/paypal-casino")({
  head: () => ({
    meta: [
      { title: "PayPal Casino — Online Casino's met PayPal Nederland" },
      { name: "description", content: "Casino's die PayPal accepteren — een handig alternatief voor wie niet via iDEAL wil storten. Veiligheid en snelheid vergeleken." },
      { property: "og:title", content: "PayPal Casino — Online Casino's met PayPal Nederland" },
      { property: "og:description", content: "Casino's die PayPal accepteren — een handig alternatief voor wie niet via iDEAL wil storten. Veiligheid en snelheid vergeleken." },
    ],
  }),
  component: Page,
});

function Page() {
  const list = casinos.filter((c) => c.payments.includes("PayPal")).length > 0 ? casinos.filter((c) => c.payments.includes("PayPal")) : casinos.slice(0, 4);
  return (
    <CategoryPage
      breadcrumbs={[{ label: "PayPal casino's" }]}
      h1="PayPal casino's"
      intro={<><p>PayPal is in Nederland minder dominant dan iDEAL, maar voor wie al een PayPal-saldo heeft een snelle en veilige optie. Slechts een handvol casino's biedt het aan.</p></>}
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
