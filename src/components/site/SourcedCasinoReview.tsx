import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "./Layout";
import type { ListingCasino } from "@/data/listing";

export function SourcedCasinoReview({ casino: c }: { casino: ListingCasino }) {
  const source = c.source;
  if (!source) return null;
  return (
    <Layout>
      <section className="bg-nl-hero">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-6 px-4 py-8">
          <div className="flex h-24 w-40 items-center justify-center rounded-lg bg-card p-2">
            <img src={c.logo} alt={`${c.name} logo`} className="max-h-full max-w-full object-contain" />
          </div>
          <div>
            <h1 className="font-heading text-4xl uppercase text-primary-foreground">{c.name} Review 2026</h1>
            <a href={source.ratingUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-primary-foreground underline">{source.ratingName}: {c.rating.toFixed(1)} / 5</a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-8 text-nl-ink">
        <Link to="/beste-online-casinos" className="text-sm text-nl-blue underline">Alle casino&apos;s</Link>
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl uppercase text-nl-blue">Welkomstbonus</h2>
            <p className="mt-3 font-heading text-4xl text-nl-orange">{c.bonus}</p>
            <p className="mt-2 font-semibold">+ {c.freeSpins}</p>
            <Button asChild size="lg" className="mt-5 w-full bg-nl-orange text-primary-foreground hover:bg-nl-orange/90">
              <a href={`/go/${c.slug}`} target="_blank" rel="nofollow sponsored noopener">Speel nu <ArrowRight size={18} /></a>
            </Button>
          </div>
          <dl className="grid gap-4 text-sm">
            <div><dt className="text-muted-foreground">Minimumstorting voor de bonus</dt><dd className="mt-1 font-semibold">{c.minDeposit}</dd></div>
            <div><dt className="text-muted-foreground">Inzeteis volgens de bron</dt><dd className="mt-1 font-semibold">{source.wagering}</dd></div>
            <div><dt className="text-muted-foreground">Gepubliceerde uitbetalingstermijn</dt><dd className="mt-1 font-semibold">{c.payoutSpeed}</dd></div>
            <div><dt className="text-muted-foreground">Licentie-informatie</dt><dd className="mt-1 font-semibold">{c.license}</dd></div>
          </dl>
        </section>
        <section className="mt-10 max-w-3xl">
          <h2 className="font-heading text-2xl uppercase text-nl-blue">Het aanbod van {c.name}</h2>
          <ul className="mt-4 space-y-3">{c.pros.map((pro) => <li key={pro} className="flex items-start gap-2"><Check size={18} className="shrink-0 text-nl-orange" />{pro}</li>)}</ul>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {c.slug === "nixbet"
              ? "Turbico vermeldt een welkomstpakket van 200% tot €1.000 en 150 free spins. In de uitgewerkte voorwaarden staat het pakket verdeeld over drie stortingen: 75% tot €200 en 50 spins, 50% tot €300 en 30 spins, en 75% tot €500 en 70 spins. De bonusstorting bedraagt minimaal €25; de inzeteis is 40x en de geldigheid is zeven dagen. Controleer het actuele aanbod bij NixBet voordat je stort, omdat de samenvatting en de detailvoorwaarden in de bron verschillen."
              : "LCB vermeldt 150% tot €750 bij de eerste storting, 100% tot €1.000 bij de tweede storting en 50% tot €1.500 bij de derde storting. Voor deze aanbiedingen vermeldt de bron minimaal €30 per storting, een inzeteis van 40x de bonus en een geldigheid van zeven dagen. Bij de eerste storting worden geen welkomstspins genoemd."}
          </p>
        </section>
        <section className="mt-8 max-w-3xl">
          <h2 className="font-heading text-2xl uppercase text-nl-blue">Betalen en opnemen</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {c.slug === "nixbet"
              ? "Turbico noemt kaartbetalingen, bankoverschrijving en verschillende cryptovaluta. De bron vermeldt dat opnames tot 72 uur kunnen duren, met een minimale opname van €40. Dit is geen bevestiging van uitbetaling binnen 60 minuten."
              : "LCB beschrijft Betory als een crypto-aanbieder. Voor opnames vermeldt de bron maximaal 24 uur voor KYC, maximaal twee werkdagen wachttijd en een verwerkingstijd tot zeven werkdagen of langer indien nodig. Dit is geen bevestiging van uitbetaling binnen 60 minuten."}
          </p>
        </section>
        <section className="mt-8 max-w-3xl">
          <h2 className="font-heading text-2xl uppercase text-nl-blue">Bronnen en voorwaarden</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Deze gegevens zijn afkomstig van gepubliceerde vergelijkingswebsites, niet van een eigen speeltest. Bonusvoorwaarden en beschikbaarheid kunnen veranderen; de actuele voorwaarden bij {c.name} zijn leidend.</p>
          <a href={source.url} target="_blank" rel="noopener noreferrer" className="mt-3 block text-nl-blue underline">Bonus en casinogegevens: {source.name}</a>
          <a href={source.ratingUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-nl-blue underline">Beoordeling: {source.ratingName}</a>
        </section>
      </div>
    </Layout>
  );
}