import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/casino-bonussen")({
  head: () => ({
    meta: [
      { title: "Casino Bonussen 2026 — Beste Welkomstbonussen Nederland" },
      { name: "description", content: "Vergelijk casino bonussen voor Nederlandse spelers. Welkomstbonus, free spins, no deposit en cashback — inclusief uitleg over doorzetvereisten." },
      { property: "og:title", content: "Beste Casino Bonussen Nederland 2026" },
      { property: "og:description", content: "Welkomstbonussen, free spins en no deposit deals vergeleken." },
    ],
  }),
  component: Page,
});

function Page() {
  // Order by bonus emphasis
  const ordered = [...casinos].sort((a, b) => (a.angle === "best-bonus" ? -1 : b.angle === "best-bonus" ? 1 : 0));
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Casino bonussen" }]}
      h1="Casino bonussen — alle deals voor Nederlandse spelers"
      intro={
        <>
          <p>
            Een casinobonus is in essentie een marketingtool, maar voor de oplettende speler ook een echte voorsprong. Het verschil zit niet in <em>hoe groot</em> de bonus is, maar in <strong>hoe haalbaar</strong> de doorzetvereisten zijn. Een €1.000 bonus met 60x doorzet is in de praktijk minder waardevol dan een €100 bonus met 10x doorzet.
          </p>
          <p>
            Op deze pagina rangschikken we casino's op de werkelijke waarde van hun bonusaanbod — gecorrigeerd voor wagering, maximale inzet, geldigheidsduur en welke spellen meetellen. We beginnen met een overzicht en daarna verdiepen we per bonustype.
          </p>
        </>
      }
      casinos={ordered}
      rankingTitle="Beste bonussen — gerangschikt op netto-waarde"
      rankingDescription="Berekend als (bonusbedrag / wagering) × games-coverage — hoger is beter."
      primaryCta="Claim Bonus"
      faqs={[
        { q: "Wat is een doorzetvereiste (wagering) precies?", a: "Een vermenigvuldiger die aangeeft hoe vaak je het bonusbedrag moet inzetten voordat je winst kunt opnemen. Bij 30x wagering en €100 bonus moet je dus voor €3.000 inzetten. Lager is beter." },
        { q: "Tellen alle spellen even zwaar mee voor wagering?", a: "Nee. Slots tellen meestal 100%, blackjack vaak 5-10%, en live casino soms 0%. Lees altijd de bonusvoorwaarden voordat je begint." },
        { q: "Mag ik een bonus combineren met een andere bonus?", a: "Bij de meeste casino's nee — je hebt één actieve bonus per keer. Sommige operators staan een 'second deposit' bonus na de eerste toe; dat staat in de aanbieding vermeld." },
        { q: "Wat gebeurt er als de bonus afloopt voordat ik klaar ben?", a: "Bonusbedrag en eventuele winst uit de bonus vervallen. Geldigheidsduur varieert van 7 tot 30 dagen — kies een bonus die past bij hoe vaak je speelt." },
        { q: "Zijn no deposit bonussen écht gratis?", a: "Je hoeft niets te storten, maar er gelden wel doorzetvereisten en vaak een maximaal opneembedrag. Het is een proefronde, geen vrij geld." },
      ]}
      related={[
        { to: "/welkomstbonus-casino", label: "Welkomstbonus", description: "Eerste storting bonus" },
        { to: "/no-deposit-bonus", label: "No deposit bonus", description: "Spelen zonder storten" },
        { to: "/free-spins-casino", label: "Free spins", description: "Gratis spins op slots" },
        { to: "/beste-online-casinos", label: "Beste casino's", description: "Algemene top 10" },
        { to: "/snelle-uitbetaling-casino", label: "Snel uitbetalen", description: "Snelle cashout" },
        { to: "/blog", label: "Bonus-uitleg", description: "Tips & gidsen" },
      ]}
    />
  );
}
