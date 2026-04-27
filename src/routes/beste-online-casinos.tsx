import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/beste-online-casinos")({
  head: () => ({
    meta: [
      { title: "Beste Online Casino's Nederland 2026 — Top 10 Vergelijking" },
      { name: "description", content: "Onze redactie heeft buitenlandse casino's getest. Ontdek welke het beste presteren op bonus, uitbetaling, support en spelaanbod." },
      { property: "og:title", content: "Beste Online Casino's Nederland 2026" },
      { property: "og:description", content: "Top 10 Nederlandse online casino's uitgebreid getest en vergeleken." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Beste online casino's" }]}
      h1="Beste online casino's van Nederland"
      intro={
        <>
          <p>
            Wat maakt een online casino daadwerkelijk goed? Niet de grootste bonusbanner of het opvallendste reclamespotje — maar de optelsom van eerlijke voorwaarden, een vlotte iDEAL-stortingsflow, snelle uitbetalingen en menselijke support die in het Nederlands antwoordt. Op deze pagina vind je onze redactionele top 10 op basis van precies die criteria.
          </p>
          <p>
            We onderscheiden ons van veel andere vergelijkers door een <strong>vaste testmethodiek</strong>: identieke storting van €50, identieke speelsessies, identieke uitbetalingsverzoeken op exact dezelfde momenten. Daardoor zijn de verschillen die je hieronder ziet, daadwerkelijk vergelijkbaar.
          </p>
        </>
      }
      casinos={casinos}
      rankingTitle="Top 10 — onze ranking"
      rankingDescription="Geordend op gewogen score: bonus (25%), uitbetaling (25%), support (20%), spelaanbod (20%), trust (10%)."
      primaryCta="Speel Nu"
      faqs={[
        { q: "Hoe kies ik het beste casino voor mij persoonlijk?", a: "Bepaal eerst wat je belangrijkst vindt: hoge bonus, snelle uitbetaling, mobiele app of live casino. Onze top 10 differentieert per categorie zodat je per voorkeur de beste keuze ziet." },
        { q: "Worden deze rankings periodiek herzien?", a: "Ja — elk kwartaal hertesten we de top 15 en herrangschikken we waar nodig. Een casino dat zes maanden geleden #2 was, kan nu lager staan als de uitbetaalsnelheid is afgenomen." },
        { q: "Krijgen jullie commissie van deze casino's?", a: "Ja, we ontvangen een vergoeding wanneer een speler via onze link een account opent. Dit beïnvloedt onze ranking niet — zie ons redactiebeleid voor de scheiding tussen commercie en redactie." },
        { q: "Kan ik bij meerdere casino's tegelijk een bonus claimen?", a: "Ja, buitenlandse casino's zijn los van elkaar. Wel verstandig: stel per casino een depositlimiet in via je accountinstellingen." },
        { q: "Wat als ik een klacht heb over een casino?", a: "Stap 1 is altijd de support van het casino zelf. Komen jullie er niet uit, dan kun je terecht bij de Kansspelautoriteit of een onafhankelijke geschillencommissie." },
      ]}
      related={[
        { to: "/casino-bonussen", label: "Casino bonussen", description: "Bonussen vergeleken" },
        { to: "/ideal-casinos", label: "iDEAL casino's", description: "Stort met iDEAL" },
        { to: "/snelle-uitbetaling-casino", label: "Snelle uitbetaling", description: "< 1 uur op je rekening" },
        { to: "/betrouwbare-online-casinos", label: "Betrouwbare casino's", description: "Trust-criteria" },
        { to: "/mobiele-casinos", label: "Mobiele casino's", description: "Spelen op je telefoon" },
        { to: "/casino-spellen", label: "Casinospellen", description: "Slots, live & meer" },
      ]}
    />
  );
}
