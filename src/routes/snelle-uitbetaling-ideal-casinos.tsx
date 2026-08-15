import { createFileRoute } from "@tanstack/react-router";
import { Shield, Zap, Clock, CreditCard, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import trustpilotLogo from "@/assets/trustpilot.webp.asset.json";
import { CasinoListing, listingCasinos as casinos } from "@/components/site/CasinoListing";

const PAGE_TITLE = "Buitenlandse Casino's Snelle Uitbetaling 2026 — Top 9";
const PAGE_DESC =
  "Ontdek buitenlandse online casino's met de snelste uitbetalingen voor Nederlandse spelers. Vergelijk directe opnames, bonussen en betaalmethoden. Geüpdatet voor 2026.";

export const Route = createFileRoute("/snelle-uitbetaling-ideal-casinos")({
  head: () => {
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Beste buitenlandse casino's met snelle uitbetaling 2026",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: casinos.length,
      itemListElement: casinos.map((c) => ({
        "@type": "ListItem",
        position: c.rank,
        name: c.name,
        url: `https://buitenlandsecasino.com/go/${c.slug}`,
        description: `${c.bonus} + ${c.freeSpins}. Uitbetaling ${c.payoutSpeed}. Min. storting ${c.minDeposit}.`,
      })),
    };
    return {
      meta: [
        { title: PAGE_TITLE },
        { name: "description", content: PAGE_DESC },
        { property: "og:title", content: PAGE_TITLE },
        { property: "og:description", content: PAGE_DESC },
        { name: "twitter:title", content: PAGE_TITLE },
        { name: "twitter:description", content: PAGE_DESC },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(itemList) },
      ],
    };
  },
  component: LandingPage,
});


function AffiliateLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-nl-sand font-body text-nl-ink">
      <div className="h-1.5 w-full bg-nl-flag" aria-hidden />

      {/* HERO */}
      <section className="bg-nl-hero">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:py-9">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-sm bg-white px-3 py-1.5">
              <img src={trustpilotLogo.url} alt="Trustpilot" className="h-5 w-auto sm:h-6" />
            </span>
          </div>
          <h1 className="mx-auto mt-2 max-w-3xl text-center font-heading text-2xl uppercase leading-[0.95] tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl lg:mx-0 lg:text-left">
            Snelst Uitbetalende <span className="text-nl-orange">iDEAL Casino&apos;s</span> van 2026
          </h1>
          <p className="mx-auto mt-2 hidden max-w-2xl text-center text-sm text-white/70 sm:mt-3 sm:block sm:text-base lg:mx-0 lg:text-left">
            Ontvang je winst binnen minuten. Wij testen en rangschikken de snelste buitenlandse online casino&apos;s
            voor Nederlandse spelers — één duidelijke lijst, van 1 tot 6.
          </p>
          <p className="mt-2 text-center text-sm text-white/70 sm:hidden">
            Winst binnen minuten — getest voor Nederlandse spelers.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="Voordelen" className="border-b border-nl-blue/10 bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-1.5 px-4 py-2.5 sm:gap-x-6 sm:gap-y-3 sm:py-4 sm:grid-cols-4">
          {[
            { icon: Zap, label: "Directe uitbetaling" },
            { icon: Clock, label: "Onder 60 minuten" },
            { icon: CreditCard, label: "iDEAL & crypto" },
            { icon: Shield, label: "Verifieerd getest" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <Icon size={14} className="shrink-0 text-nl-orange" />
              <span className="truncate text-[10px] font-semibold uppercase tracking-wide text-nl-blue sm:text-xs sm:tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LISTING */}
      <section id="top6" aria-label="Top 9 buitenlandse casino's met snelle uitbetaling" className="mx-auto max-w-5xl scroll-mt-16 px-4 py-5 sm:py-10">
        <h2 className="font-heading text-2xl uppercase leading-none tracking-wide text-nl-blue sm:text-5xl">
          Top 9 buitenlandse casino&apos;s met snelle uitbetaling
        </h2>
        <p className="mt-2 hidden max-w-2xl text-sm text-muted-foreground sm:block">
          De zes beste buitenlandse online casino&apos;s voor Nederlandse spelers, gerangschikt op uitbetalingssnelheid,
          betrouwbaarheid en welkomstbonus.
        </p>

        <div className="mt-4 sm:mt-6">
          <CasinoListing />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-nl-ink text-white/70">
        <div className="h-1.5 w-full bg-nl-flag" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs">
          <p>© 2026 Buitenlandse Casino&apos;s — Alle rechten voorbehouden.</p>
        </div>
      </footer>


      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-nl-blue/15 bg-card/95 p-3 backdrop-blur md:hidden">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-md bg-nl-orange font-heading text-xl uppercase tracking-widest text-white shadow-orange hover:bg-nl-orange/90"
        >
          <AffiliateLink href={`/go/${casinos[0].slug}`} ariaLabel={`Speel nu bij ${casinos[0].name}`}>
            <Trophy size={18} className="mr-2" /> #1 {casinos[0].name} · Speel nu
          </AffiliateLink>
        </Button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
