import { createFileRoute } from "@tanstack/react-router";
import { getCasino } from "@/data/casinos";

export const Route = createFileRoute("/go/$slug")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const casino = getCasino(params.slug);
        // Fallback target: on-site review (or homepage if unknown).
        // When real affiliate URLs are added to the casino data, switch to that field.
        const target = casino ? `/review/${casino.slug}` : "/";
        return new Response(null, {
          status: 302,
          headers: {
            Location: target,
            "X-Robots-Tag": "noindex, nofollow",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
