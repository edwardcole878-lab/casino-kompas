import type { Casino } from "@/data/casinos";
import { CasinoCard } from "./CasinoCard";

export function ComparisonTable({
  casinos,
  primaryCta = "Speel Nu",
}: {
  casinos: Casino[];
  primaryCta?: string;
}) {
  return (
    <div className="space-y-4">
      {casinos.map((c) => (
        <CasinoCard key={c.slug} casino={c} cta={primaryCta} />
      ))}
    </div>
  );
}
