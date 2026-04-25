import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { Button } from "@/components/ui/button";
import { CasinoLogo } from "./CasinoLogo";
import { Rating } from "./Rating";
import { ArrowRight, Gift, Trophy } from "lucide-react";

export function TopThreePodium({ casinos }: { casinos: Casino[] }) {
  const top3 = casinos.slice(0, 3);
  const order = [1, 0, 2]; // visual: #2, #1, #3 podium effect on desktop
  return (
    <div className="grid gap-4 md:grid-cols-3 md:items-end">
      {order.map((idx, displayPos) => {
        const c = top3[idx];
        if (!c) return null;
        const isFirst = idx === 0;
        return (
          <article
            key={c.slug}
            style={{ order: displayPos }}
            className={`relative rounded-2xl border bg-card p-5 text-foreground shadow-card transition-all hover:shadow-elegant ${
              isFirst ? "md:scale-[1.04] ring-2 ring-gold shadow-gold bg-gradient-to-b from-card to-accent/40" : ""
            }`}
          >
            {isFirst && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full gradient-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
                <Trophy className="h-3 w-3" /> #1 Beste Keuze
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className={`grid h-9 w-9 place-items-center rounded-full border text-sm font-bold ${isFirst ? "bg-gold text-gold-foreground border-gold" : "bg-secondary text-muted-foreground"}`}>
                {c.rank}
              </span>
              <Rating value={c.rating} />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <CasinoLogo name={c.name} brandColor={c.brandColor} size="md" />
              <div>
                <div className="font-bold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.tagline}</div>
              </div>
            </div>
            <div className="mt-4 rounded-xl gradient-gold p-3 text-gold-foreground shadow-gold">
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 shrink-0" />
                <div className="text-sm font-extrabold leading-tight">{c.bonusHeadline}</div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-4 w-full bg-gold text-gold-foreground hover:bg-gold/90 font-extrabold shadow-gold">
              <a href={`/go/${c.slug}`} rel="sponsored nofollow">
                Speel Nu <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Link to="/review/$slug" params={{ slug: c.slug }} className="mt-2 block text-center text-xs font-medium text-muted-foreground hover:text-foreground">
              Lees review →
            </Link>
          </article>
        );
      })}
    </div>
  );
}