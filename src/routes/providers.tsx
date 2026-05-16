import { createFileRoute } from "@tanstack/react-router";
import { TaxonomyHub } from "@/components/site/TaxonomyHub";
import { providerTerms, casinosByProvider } from "@/data/taxonomies";
import { slotsByProvider } from "@/data/slots";
import type { Provider } from "@/data/casinos";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/providers")({
  head: () => ({
    meta: [
      { title: "Casino Software Providers | NetEnt, Pragmatic & meer" },
      { name: "description", content: "Ontdek welke casino's de spellen aanbieden van NetEnt, Pragmatic Play, Evolution, Play'n GO, Hacksaw, Nolimit City en andere top providers." },
      { property: "og:title", content: "Casino Game Providers Nederland 2026" },
      { property: "og:description", content: "Vind casino's per software provider: NetEnt, Pragmatic, Evolution en meer." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProvidersHub,
});

function ProvidersHub() {
  const items = (Object.entries(providerTerms) as [Provider, typeof providerTerms[Provider]][])
    .map(([provider, term]) => ({
      term,
      to: `/provider/${term.slug}`,
      count: casinosByProvider(provider).length,
      slotCount: slotsByProvider(provider).length,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <TaxonomyHub
      title="Casino's per software provider"
      kicker="Game Providers"
      intro="Elke provider heeft een eigen signatuur — van de hoge volatiliteit van Nolimit City tot de cluster-pays van Pragmatic Play. Kies je favoriet en speel bij de beste KSA-casino's."
      items={items}
      pageUrl={`${SITE}/providers`}
      countLabel="casino's"
      faq={[
        { q: "Wat is de beste casino software provider?", a: "Er is geen 'beste' — NetEnt en Pragmatic Play hebben het breedste aanbod, terwijl Nolimit City en Hacksaw bekend staan om hoge max-wins." },
        { q: "Welke provider heeft de hoogste RTP?", a: "Gemiddeld zit Push Gaming en Play'n GO rond 96.5%+, maar individuele slots variëren sterk. Check altijd de RTP per slot." },
        { q: "Zijn alle providers KSA-gecertificeerd?", a: "Alleen providers met een KSA-certificering mogen spellen leveren aan Nederlandse casino's. De grote namen voldoen daar allemaal aan." },
      ]}
    />
  );
}