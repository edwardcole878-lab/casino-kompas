import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/nieuwe-online-casinos")({
  head: () => ({
    meta: [
      { title: "Nieuwe Online Casino's Nederland 2026 — Recent Gelanceerd" },
      { name: "description", content: "Verse KSA-vergunningen en pas gelanceerde casino's. Nieuwe spelers, frisse bonussen — maar ook nieuwe risico's. Wij testen ze als eerste." },
      { property: "og:title", content: "Nieuwe Online Casino's 2026" },
      { property: "og:description", content: "De nieuwste online casino's met KSA-licentie in Nederland." },
    ],
  }),
  component: Page,
});

function Page() {
  const newer = [...casinos].sort((a, b) => b.established - a.established).slice(0, 6);
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/beste-online-casinos", label: "Casino's" }, { label: "Nieuwe casino's" }]}
      h1="Nieuwe online casino's in Nederland"
      intro={
        <>
          <p>
            Een nieuw casino voelt vaak frisser: modernere UI, agressievere welkomstbonus, soms innovatieve features die gevestigde merken nog niet hebben. Maar 'nieuw' brengt ook risico — minder track record op uitbetalingen, kleiner support-team, soms nog kinderziektes in de iDEAL-flow.
          </p>
          <p>
            Wij beoordelen nieuwe casino's daarom met <strong>extra strenge weging op uitbetaalbetrouwbaarheid</strong> en alleen na drie volledige uitbetaalrondes nemen we ze op in deze lijst.
          </p>
        </>
      }
      casinos={newer}
      rankingTitle="Nieuwste buitenlandse casino's"
      rankingDescription="Allemaal sinds 2022 gelanceerd, allemaal door ons getest."
      primaryCta="Bekijk Casino"
      faqs={[
        { q: "Is het slim om bij een nieuw casino te spelen?", a: "Het kan, maar wees voorzichtiger: stort minder, test eerst een uitbetaling, en gebruik depositlimieten." },
        { q: "Hebben nieuwe casino's altijd hogere bonussen?", a: "Vaak wel — om marktaandeel te winnen. Let echter op de wagering, daar verstoppen ze soms nadelen." },
        { q: "Hoe weet ik dat een nieuw casino een KSA-licentie heeft?", a: "Onderaan de website hoort de KSA-vergunning vermeld te staan met vergunningsnummer. We controleren dat handmatig per casino." },
        { q: "Wat is het risico van een te recent casino?", a: "Onbewezen support, mogelijk kleinere kasreserves bij grote winsten en nog niet gestabiliseerde processen." },
        { q: "Kan een nieuw casino al in jullie top 10?", a: "Ja, mits het minstens drie maanden uitbetalingen probleemloos heeft verwerkt en aan onze testcriteria voldoet." },
      ]}
      related={[
        { to: "/beste-online-casinos", label: "Top 10 algemeen" },
        { to: "/betrouwbare-online-casinos", label: "Betrouwbare casino's" },
        { to: "/welkomstbonus-casino", label: "Welkomstbonussen" },
        { to: "/ideal-casinos", label: "iDEAL casino's" },
        { to: "/blog", label: "Blog & gidsen" },
        { to: "/casino-bonussen", label: "Bonussen" },
      ]}
    />
  );
}
