import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { topCasinos } from "@/data/casinos";

export const Route = createFileRoute("/casino-spellen")({
  head: () => ({
    meta: [
      { title: "Online Casinospellen 2026 — Slots, Live, Blackjack en Roulette" },
      { name: "description", content: "Welk casino heeft de beste slots? Waar speel je live blackjack met Nederlandse dealer? Compleet overzicht van casino-spellen per categorie." },
      { property: "og:title", content: "Beste Casinospellen — Vergelijking 2026" },
      { property: "og:description", content: "Alles over slots, live casino, blackjack en roulette bij Nederlandse online casino's." },
    ],
  }),
  component: Page,
});

function Page() {
  // sort by total games
  return (
    <CategoryPage
      breadcrumbs={[{ label: "Casinospellen" }]}
      h1="Online casinospellen — wat speel je waar?"
      intro={
        <>
          <p>
            De ene speler komt voor 4.000 slots, de ander wil exact één Nederlandstalige live blackjack-tafel waar hij elke avond aan kan zitten. Beide zijn legitieme voorkeuren, en ze leiden tot heel verschillende casino-aanbevelingen.
          </p>
          <p>
            Op deze hub-pagina splitsen we casino's uit per spelcategorie: <strong>slots</strong>, <strong>live casino</strong>, <strong>blackjack</strong> en <strong>roulette</strong>. Per categorie hebben we een eigen verdiepingspagina met de top-aanbevelingen — gebruik de gerelateerde links onderaan.
          </p>
        </>
      }
      casinos={topCasinos}
      rankingTitle="Casino's met grootste totale spelaanbod"
      rankingDescription="Optelsom van slots, live tafels en table games."
      primaryCta="Bekijk Casino"
      faqs={[
        { q: "Hoeveel slots heeft een 'goed' casino tegenwoordig?", a: "Boven de 1.000 slots is gangbaar; topcasino's zitten op 1.500-2.000+. Maar variëteit van providers (NetEnt, Pragmatic, Play'n GO, Hacksaw) is belangrijker dan absolute aantallen." },
        { q: "Kan ik live casino spelen met een Nederlandse dealer?", a: "Ja — bij Live Arena en enkele anderen. Dat is een typisch NL-marktproduct; in andere landen veelal ondergesneeuwd door Engelstalige tafels." },
        { q: "Wat is de RTP van casinospellen?", a: "RTP (Return To Player) is het theoretische uitkeringspercentage over miljoenen spins. Slots zitten meestal tussen 92-97%. Hogere RTP is op de lange termijn gunstiger voor de speler." },
        { q: "Mag ik gratis demo-modus spelen?", a: "Bij de meeste KSA-casino's ja, voor slots. Voor live casino en sommige tafelspellen niet, omdat dealers ingehuurd moeten worden." },
        { q: "Welke spellen tellen voor wagering?", a: "Slots tellen meestal 100%, tafelspellen 5-20%, live casino vaak 10% of niets. Check altijd de bonusvoorwaarden." },
      ]}
      related={[
        { to: "/online-slots", label: "Online slots", description: "Beste slot-casino's" },
        { to: "/live-casino", label: "Live casino", description: "Met live dealer" },
        { to: "/blackjack-online", label: "Blackjack online", description: "Strategie & casino's" },
        { to: "/roulette-online", label: "Roulette online", description: "Europees & live" },
        { to: "/beste-online-casinos", label: "Top 10 casino's", description: "Algemeen" },
        { to: "/casino-bonussen", label: "Bonussen", description: "Per casino" },
      ]}
    />
  );
}
