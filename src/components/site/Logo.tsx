/**
 * Brand wordmark — "Buitenlandse Casino's" in the site heading face.
 */
export function Logo({ condensed = false }: { condensed?: boolean }) {
  return (
    <span
      className={`select-none font-heading uppercase leading-none tracking-wide text-white ${
        condensed ? "text-xl" : "text-2xl md:text-3xl"
      }`}
    >
      Buitenlandse <span className="text-nl-orange">Casino&apos;s</span>
    </span>
  );
}
