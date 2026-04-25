import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/welkomstbonus-casino")({
  head: () => ({
    meta: [
      { title: "Welkomstbonus Casino — Beste Eerste Storting Bonussen 2026" },
      { name: "description", content: "De grootste én eerlijkste welkomstbonussen voor Nederlandse spelers. Match deposits, free spins en lage doorzetvereisten." },
      { property: "og:title", content: "Beste Casino Welkomstbonus 2026" },
      { property: "og:description", content: "Welkomstbonussen vergeleken op netto-waarde en wagering." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/casino-bonussen", label: "Bonussen" }, { label: "Welkomstbonus" }]}
      h1="Welkomstbonus casino — wat is écht de moeite waard?"
      intro={
        <>
          <p>
            De welkomstbonus is je eenmalige kans om met meer geld te spelen dan je gestort hebt. Maar de marketing eromheen is misleidend: '€2.000 bonus!' klinkt mooi, totdat je merkt dat het verspreid is over je eerste vijf stortingen, met een wagering van 50x op het totaal.
          </p>
          <p>
            Wij rangschikken welkomstbonussen op <strong>directe waarde van de eerste storting</strong>, niet op het opgeklopte totaalbedrag. Dat geeft een veel realistischer beeld.
          </p>
        </>
      }
      casinos={casinos.filter((c) => ["best-bonus", "low-wagering", "ideal-experience"].includes(c.angle))}
      rankingTitle="Beste welkomstbonussen op eerste storting"
      primaryCta="Claim Bonus"
      faqs={[
        { q: "Wat is een 100% welkomstbonus?", a: "Het casino verdubbelt je eerste storting tot een maximumbedrag. Stort je €100 bij 100% tot €500, dan speel je met €200." },
        { q: "Wat zijn redelijke doorzetvereisten?", a: "Onder 30x is goed, onder 20x is uitzonderlijk. Boven 40x wordt het in de praktijk lastig om winst over te houden." },
        { q: "Mag ik mijn storting direct opnemen na de bonus?", a: "Vaak ja, maar dan vervalt het bonusbedrag. Wil je de bonus benutten, speel dan eerst de wagering uit." },
        { q: "Werkt de welkomstbonus op live casino?", a: "Slechts soms — vaak zijn slots de enige categorie die 100% meetellen. Lees de bonusvoorwaarden vooraf." },
        { q: "Kan ik de welkomstbonus annuleren?", a: "Bij de meeste casino's ja, voordat je de wagering hebt voltooid. Je verliest dan wel het bonusbedrag." },
      ]}
      related={[
        { to: "/casino-bonussen", label: "Alle bonussen" },
        { to: "/no-deposit-bonus", label: "No deposit bonus" },
        { to: "/free-spins-casino", label: "Free spins" },
        { to: "/beste-online-casinos", label: "Top 10 casino's" },
        { to: "/ideal-casinos", label: "iDEAL casino's" },
        { to: "/snelle-uitbetaling-casino", label: "Snel uitbetalen" },
      ]}
    />
  );
}
