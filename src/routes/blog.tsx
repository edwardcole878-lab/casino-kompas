import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Casino Blog Nederland — Tips, Strategie & Nieuws 2026" },
      { name: "description", content: "Artikelen over online casino's, bonustips, strategie voor blackjack en roulette, en het laatste KSA-nieuws voor Nederlandse spelers." },
      { property: "og:title", content: "Casino Blog Nederland 2026" },
      { property: "og:description", content: "Tips, strategie en nieuws over online casino's in Nederland." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <header className="mt-6 max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Buitenlandse Casino's Blog</h1>
          <p className="mt-3 text-lg text-muted-foreground">Achtergrondartikelen, strategiegidsen en nieuws over de Nederlandse online casinomarkt.</p>
          <div className="mt-3"><PageMeta /></div>
        </header>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-2xl border bg-card p-6 shadow-card transition-shadow hover:shadow-elegant"
            >
              <article>
                <h2 className="text-xl font-bold group-hover:text-gold">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 text-xs font-semibold text-gold">Lees verder →</div>
              </article>
            </Link>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border bg-secondary/40 p-6">
          <h2 className="text-xl font-bold">Onze meest gelezen pagina's</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            <li><Link to="/beste-online-casinos" className="text-trust hover:underline">Top 10 beste online casino's</Link></li>
            <li><Link to="/casino-bonussen" className="text-trust hover:underline">Casino bonussen vergeleken</Link></li>
            <li><Link to="/ideal-casinos" className="text-trust hover:underline">iDEAL casino's</Link></li>
            <li><Link to="/snelle-uitbetaling-casino" className="text-trust hover:underline">Snelle uitbetaling casino's</Link></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
