import { createFileRoute } from "@tanstack/react-router";
import { getCasino } from "@/data/casinos";
import { AFFILIATE_LINKS } from "@/data/affiliateLinks";

export const Route = createFileRoute("/go/$slug")({
  server: {
    handlers: {
      GET: ({ params }: { params: { slug: string } }) => {
        const direct = AFFILIATE_LINKS[params.slug];
        if (direct) {
          return new Response(null, {
            status: 302,
            headers: {
              Location: direct,
              "X-Robots-Tag": "noindex, nofollow",
              "Cache-Control": "no-store",
            },
          });
        }
        const casino = getCasino(params.slug);
        // Prefer the casino's affiliate URL. Fall back to the on-site review
        // when no affiliate link is set yet (placeholder "#" also falls back).
        const affiliate = casino?.affiliateUrl;
        const hasAffiliate = !!affiliate && affiliate !== "#";
        const target = hasAffiliate
          ? affiliate!
          : casino
            ? `/review/${casino.slug}`
            : "/";
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
