import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/no-deposit-bonus")({
  head: () => ({
    meta: [
      { title: "No Deposit Bonus Casino — Spelen Zonder Storten 2026" },
      { name: "description", content: "Casino's die je een bonus geven zónder dat je hoeft te storten. Eerlijk overzicht inclusief de kleine lettertjes." },
      { property: "og:title", content: "No Deposit Bonus Casino's Nederland" },
      { property: "og:description", content: "Spelen zonder storten — wat krijg je écht?" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/casino-bonussen", label: "Bonussen" }, { label: "No deposit bonus" }]}
      h1="No deposit bonus — spelen zonder eigen geld"
      intro={
        <>
          <p>
            Een no deposit bonus is letterlijk gratis bonusgeld dat je krijgt bij het aanmaken van een account, zonder dat je iets hoeft te storten. Mooi op papier, maar minder mooi in praktijk: vrijwel altijd geldt een lage maximale uitbetaling (€50–€100) en een hogere wagering dan bij reguliere bonussen.
          </p>
          <p>
            We screenen no deposit bonussen vooral op <strong>realistische uitbetaalbaarheid</strong>: hoe groot is de kans dat je daadwerkelijk geld op je rekening krijgt? Op die manier filteren we de echt waardevolle aanbiedingen uit de marketing-stunts.
          </p>
        </>
      }
      casinos={casinos.filter((c) => c.bonusHeadline.toLowerCase().includes("zonder") || c.angle === "low-wagering" || c.angle === "ideal-experience").slice(0, 5)}
      rankingTitle="Beste no deposit aanbiedingen"
      primaryCta="Claim Bonus"
      faqs={[
        { q: "Is no deposit bonus echt gratis?", a: "Je hoeft inderdaad niets te storten, maar je moet meestal wel je identiteit verifiëren voor uitbetaling." },
        { q: "Hoeveel kan ik maximaal uitbetalen?", a: "Bij no deposit bonussen meestal €50-€100, ongeacht hoeveel je theoretisch wint." },
        { q: "Waarom zijn de wagering-eisen hoger?", a: "Omdat het casino geen storting van je heeft en risico op misbruik wil beperken." },
        { q: "Mag ik meerdere no deposit bonussen claimen?", a: "Per casino slechts één keer. Bij verschillende casino's mag het, mits je geen meerdere accounts bij hetzelfde casino opent." },
        { q: "Wat is verschil tussen no deposit bonus en gratis demo?", a: "Bij demo speel je met fake credits zonder kans op echte winst. No deposit bonus geeft echte (zij het beperkte) winstkans." },
      ]}
      related={[
        { to: "/welkomstbonus-casino", label: "Welkomstbonus" },
        { to: "/free-spins-casino", label: "Free spins" },
        { to: "/casino-bonussen", label: "Alle bonussen" },
        { to: "/beste-online-casinos", label: "Top 10 casino's" },
        { to: "/ideal-casinos", label: "iDEAL casino's" },
        { to: "/blog", label: "Blog" },
      ]}
    />
  );
}
