import wordmark from "@/assets/wordmark.png";

/**
 * Brand wordmark — "Buitenlandse Casino's".
 * Renders the generated PNG wordmark; condensed mode shrinks it for the sticky header.
 */
export function Logo({ condensed = false }: { condensed?: boolean }) {
  return (
    <img
      src={wordmark}
      alt="Buitenlandse Casino's"
      width={2064}
      height={512}
      decoding="async"
      fetchPriority="high"
      className={`${condensed ? "h-6" : "h-8 md:h-9"} w-auto select-none`}
    />
  );
}
