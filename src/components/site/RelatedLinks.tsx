import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function RelatedLinks({
  title = "Verder lezen",
  links,
}: {
  title?: string;
  links: { to: string; label: string; description?: string }[];
}) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-card md:p-8">
      <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group flex flex-col rounded-xl border bg-secondary/40 p-4 transition-colors hover:border-gold hover:bg-accent"
          >
            <span className="font-semibold">{l.label}</span>
            {l.description && <span className="mt-1 text-sm text-muted-foreground">{l.description}</span>}
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
              Bekijk <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
