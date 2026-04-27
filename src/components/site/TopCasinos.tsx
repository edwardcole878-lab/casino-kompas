import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CasinoLogo } from "./CasinoLogo";
import { Rating } from "./Rating";
import { Button } from "@/components/ui/button";
import { casinos, type PaymentMethod, type Provider, type Licence, type BonusType } from "@/data/casinos";

/**
 * Mercury-style "shortcode" — drop into any page or blog post:
 *   <TopCasinos count={5} />
 *   <TopCasinos count={3} payment="iDEAL" />
 *   <TopCasinos count={5} bonusType="welkomstbonus" title="Beste welkomstbonussen" />
 */
export function TopCasinos({
  count = 5,
  payment,
  provider,
  licence,
  bonusType,
  title,
}: {
  count?: number;
  payment?: PaymentMethod;
  provider?: Provider;
  licence?: Licence;
  bonusType?: BonusType;
  title?: string;
}) {
  let list = casinos;
  if (payment) list = list.filter((c) => c.payments.includes(payment));
  if (provider) list = list.filter((c) => c.providers?.includes(provider));
  if (licence) list = list.filter((c) => c.licences?.includes(licence));
  if (bonusType) list = list.filter((c) => c.bonusTypes?.includes(bonusType));
  const top = list.sort((a, b) => a.rank - b.rank).slice(0, count);

  return (
    <div className="my-8 rounded-2xl border bg-card p-5 shadow-soft">
      {title && <h3 className="mb-4 text-lg font-extrabold">{title}</h3>}
      <ol className="space-y-3">
        {top.map((c, i) => (
          <li key={c.slug} className="flex items-center gap-3 rounded-xl border bg-background/40 p-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold">
              {i + 1}
            </span>
            <CasinoLogo name={c.name} brandColor={c.brandColor} size="sm" />
            <div className="min-w-0 flex-1">
              <Link to="/review/$slug" params={{ slug: c.slug }}
                className="block truncate font-bold hover:text-gold">{c.name}</Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Rating value={c.rating} showText={false} />
                <span className="truncate">· {c.bonusHeadline}</span>
              </div>
            </div>
            <Button asChild size="sm" className="shrink-0 bg-gold text-gold-foreground hover:bg-gold/90 font-bold">
              <a href={`/go/${c.slug}`} rel="sponsored nofollow">Speel <ArrowRight className="h-3 w-3" /></a>
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
}