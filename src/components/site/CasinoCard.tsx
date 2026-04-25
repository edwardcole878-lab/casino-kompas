import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { CasinoBadge } from "./Badge";
import { Rating } from "./Rating";
import { PaymentIcons } from "./PaymentIcons";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function CasinoCard({
  casino,
  cta = "Speel Nu",
  secondaryCta = "Lees review",
}: {
  casino: Casino;
  cta?: string;
  secondaryCta?: string;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border bg-card p-5 shadow-card transition-shadow hover:shadow-elegant md:p-6 ${
        casino.highlight ? "ring-2 ring-gold shadow-gold" : ""
      }`}
    >
      {casino.highlight && (
        <div className="absolute -right-10 top-5 rotate-45 gradient-gold px-12 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
          #1
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex items-center gap-4">
          <span className="hidden h-10 w-10 items-center justify-center rounded-full border bg-secondary text-base font-bold text-muted-foreground md:flex">
            {casino.rank}
          </span>
          <CasinoLogo name={casino.name} brandColor={casino.brandColor} size="lg" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold md:text-xl">{casino.name}</h3>
            <Rating value={casino.rating} />
            {casino.badges?.map((b) => <CasinoBadge key={b} variant={b} />)}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{casino.tagline}</p>

          <div className="mt-3 inline-flex items-center rounded-lg gradient-gold px-3 py-1.5 text-sm font-bold text-gold-foreground shadow-gold">
            🎁 {casino.bonusHeadline}
          </div>

          <ul className="mt-3 grid gap-1.5 text-sm md:grid-cols-2">
            {casino.benefits.map((b) => (
              <li key={b} className="flex items-start gap-1.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <PaymentIcons methods={casino.payments} />
          </div>
        </div>
        <div className="flex flex-row gap-2 md:flex-col md:items-stretch md:gap-2 md:min-w-[160px]">
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-gold">
            <a href={`/go/${casino.slug}`} rel="sponsored nofollow">
              {cta} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/review/$slug" params={{ slug: casino.slug }}>{secondaryCta}</Link>
          </Button>
          <p className="hidden text-center text-[10px] text-muted-foreground md:block">18+ | Voorwaarden gelden</p>
        </div>
      </div>
    </article>
  );
}
