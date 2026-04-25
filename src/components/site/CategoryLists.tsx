import { Link } from "@tanstack/react-router";

export type CategoryItem = { to: string; label: string };
export type CategoryGroup = { title?: string; items: CategoryItem[] };

/**
 * Simple stacked category lists (one item per row, divided by hairlines).
 * Renders one or two groups side-by-side on desktop, stacked on mobile.
 */
export function CategoryLists({ groups }: { groups: CategoryGroup[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((g, gi) => (
        <div key={gi}>
          {g.title && (
            <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {g.title}
            </h3>
          )}
          <ul className="divide-y rounded-2xl border bg-card shadow-card">
            {g.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="block px-5 py-4 text-base font-semibold transition-colors hover:bg-accent md:text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}