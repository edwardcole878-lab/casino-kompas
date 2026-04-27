import { createFileRoute } from "@tanstack/react-router";
import { TaxonomyHub } from "@/components/site/TaxonomyHub";
import { bonusTypeTerms, casinosByBonusType } from "@/data/taxonomies";
import { bonusesByType } from "@/data/bonuses";
import type { BonusType } from "@/data/casinos";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/bonus-types")({
  head: () => ({
    meta: [
      { title: "Casino Bonus Types | Welkomstbonus, Free Spins, No Deposit & meer" },
      { name: "description", content: "Welke bonus past bij jou? Vergelijk welkomstbonus, no-deposit, free spins, cashback, reload en VIP-programma's bij KSA-casino's." },
      { property: "og:title", content: "Casino Bonus Types Nederland 2026" },
      { property: "og:description", content: "Vergelijk alle types casino bonussen op één pagina." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BonusTypesHub,
});

function BonusTypesHub() {
  const items = (Object.entries(bonusTypeTerms) as [BonusType, typeof bonusTypeTerms[BonusType]][])
    .map(([type, term]) => ({
      term,
      to: `/bonus-type/${term.slug}`,
      count: bonusesByType(type).length || casinosByBonusType(type).length,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <TaxonomyHub
      title="Casino's per bonus type"
      kicker="Bonus Types"
      intro="Niet elke bonus is gelijk. Kies het type dat bij jouw speelstijl past — van laagdrempelige welkomstbonussen tot exclusieve VIP-cashback."
      items={items}
      pageUrl={`${SITE}/bonus-types`}
      countLabel="bonussen"
      faq={[
        { q: "Wat is het verschil tussen welkomstbonus en no-deposit?", a: "Een welkomstbonus vereist een eerste storting; een no-deposit krijg je gratis na registratie en verificatie." },
        { q: "Zijn free spins zonder wagering mogelijk?", a: "Ja, sommige casino's bieden 'free spins zonder wagering' — winsten zijn dan direct opneembaar." },
        { q: "Wat is reload bonus?", a: "Een match-bonus op opvolgende stortingen, vaak wekelijks aangeboden aan actieve spelers." },
      ]}
    />
  );
}