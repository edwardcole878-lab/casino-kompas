import { createFileRoute } from "@tanstack/react-router";
import { casinos } from "@/data/casinos";

const SITE = "https://buitenlandsecasino.com";

const STATIC_PATHS = [
  "/",
  "/beste-online-casinos",
  "/betrouwbare-online-casinos",
  "/buitenlandse-casino",
  "/casino-bonussen",
  "/welkomstbonus-casino",
  "/no-deposit-bonus",
  "/free-spins-casino",
  "/casino-spellen",
  "/online-slots",
  "/live-casino",
  "/blackjack-online",
  "/roulette-online",
  "/ideal-casinos",
  "/paypal-casino",
  "/crypto-casino",
  "/snelle-uitbetaling-casino",
  "/mobiele-casinos",
  "/nieuwe-online-casinos",
  "/blog",
  "/redactiebeleid",
  "/verantwoord-spelen",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          ...STATIC_PATHS.map((p) => ({ loc: SITE + p, lastmod: today, priority: p === "/" ? "1.0" : "0.8" })),
          ...casinos.map((c) => ({ loc: `${SITE}/review/${c.slug}`, lastmod: c.lastTested || today, priority: "0.7" })),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
