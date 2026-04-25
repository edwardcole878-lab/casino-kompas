/**
 * Brand mark — minimal "B/C" wordmark.
 */
export function Logo({ condensed = false }: { condensed?: boolean }) {
  return (
    <span
      className={`font-extrabold tracking-tight ${condensed ? "text-lg" : "text-xl"}`}
    >
      B<span className="text-gold">/</span>C
    </span>
  );
}