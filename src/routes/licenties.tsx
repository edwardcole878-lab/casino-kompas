import { createFileRoute } from "@tanstack/react-router";
import { TaxonomyHub } from "@/components/site/TaxonomyHub";
import { licenceTerms, casinosByLicence } from "@/data/taxonomies";
import type { Licence } from "@/data/casinos";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/licenties")({
  head: () => ({
    meta: [
      { title: "Casino Licenties Uitgelegd | KSA, MGA, Curaçao, UKGC" },
      { name: "description", content: "Welke licentie biedt de beste bescherming? Vergelijk KSA, MGA, Curaçao, UKGC en Gibraltar — en zie welke casino's onder welke autoriteit vallen." },
      { property: "og:title", content: "Casino Licenties Vergelijken 2026" },
      { property: "og:description", content: "Alles over KSA, MGA, Curaçao en andere casino-licenties." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LicentiesHub,
});

function LicentiesHub() {
  const items = (Object.entries(licenceTerms) as [Licence, typeof licenceTerms[Licence]][])
    .map(([licence, term]) => ({
      term,
      to: `/licentie/${term.slug}`,
      count: casinosByLicence(licence).length,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <TaxonomyHub
      title="Casino's per licentie"
      kicker="Licenties & Toezicht"
      intro="De licentie van een casino bepaalt jouw rechten als speler. KSA biedt de strengste consumentenbescherming in Nederland — andere autoriteiten verschillen sterk in handhaving."
      items={items}
      pageUrl={`${SITE}/licenties`}
      countLabel="casino's"
      faq={[
        { q: "Welke licentie is de beste?", a: "Voor Nederlandse spelers is KSA wettelijk vereist en biedt de sterkste bescherming. MGA en UKGC zijn ook zeer betrouwbaar; Curaçao is de minst strikt." },
        { q: "Mag ik bij een casino zonder KSA-licentie spelen?", a: "Het is aan jouzelf, maar je geniet géén Nederlandse consumentenbescherming en geschillen kun je niet bij KSA voorleggen." },
        { q: "Hoe controleer ik een licentie?", a: "Check het registratienummer in de footer van de casino-site bij het officiële register van de autoriteit (kansspelautoriteit.nl voor KSA)." },
      ]}
    />
  );
}