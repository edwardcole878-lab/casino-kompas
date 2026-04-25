import type { Casino } from "@/data/casinos";
import { CasinoCard } from "./CasinoCard";

export function ComparisonTable({
  casinos,
  primaryCta = "Speel Nu",
  featureFirst = true,
}: {
  casinos: Casino[];
  primaryCta?: string;
  featureFirst?: boolean;
}) {
  return (
    <div className="space-y-4">
      {casinos.map((c, i) => (
        <CasinoCard key={c.slug} casino={c} cta={primaryCta} featured={featureFirst && i === 0} />
      ))}
    </div>
  );
}
