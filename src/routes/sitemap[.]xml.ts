// refresh
import { createFileRoute } from "@tanstack/react-router";
import { casinos } from "@/data/casinos";
import { posts } from "@/data/blog";
import { bonuses } from "@/data/bonuses";
import { slots } from "@/data/slots";
import { paymentTerms, providerTerms, licenceTerms, bonusTypeTerms } from "@/data/taxonomies";
import { authors } from "@/data/authors";

const SITE = "https://buitenlandsecasino.com";

const STATIC_PATHS = [
  "/",
  "/beste-online-casinos",
  "/betrouwbare-online-casinos",
  "/buitenlandse-casino",
  "/casinos-zonder-cruks",
  "/casinos-zonder-registratie",
  "/casinos-zonder-limiet",
  "/over-ons",
  "/casino-bonussen",
  "/bonussen",
  "/slots",
  "/betaalmethoden",
  "/providers",
  "/licenties",
  "/bonus-types",
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
          ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}`, lastmod: p.updatedAt, priority: "0.6" })),
          ...bonuses.map((b) => ({ loc: `${SITE}/bonus/${b.slug}`, lastmod: b.lastUpdated, priority: "0.7" })),
          ...slots.map((s) => ({ loc: `${SITE}/slot/${s.slug}`, lastmod: s.lastUpdated, priority: "0.6" })),
          ...Object.values(paymentTerms).map((t) => ({ loc: `${SITE}/betaalmethode/${t.slug}`, lastmod: today, priority: "0.7" })),
          ...Object.values(providerTerms).map((t) => ({ loc: `${SITE}/provider/${t.slug}`, lastmod: today, priority: "0.6" })),
          ...Object.values(licenceTerms).map((t) => ({ loc: `${SITE}/licentie/${t.slug}`, lastmod: today, priority: "0.6" })),
          ...Object.values(bonusTypeTerms).map((t) => ({ loc: `${SITE}/bonus-type/${t.slug}`, lastmod: today, priority: "0.7" })),
          ...Object.values(authors).map((a) => ({
            loc: `${SITE}/auteur/${a.slug}`,
            lastmod: today,
            priority: "0.5",
          })),
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
