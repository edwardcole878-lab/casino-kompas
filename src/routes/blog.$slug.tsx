import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { getPost, posts } from "@/data/blog";
import { jsonLdString } from "@/lib/jsonld";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Artikel niet gevonden" }] };
    const title = `${p.title} | Buitenlandse Casino Blog`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: p.publishedAt },
        { property: "article:modified_time", content: p.updatedAt },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Artikel niet gevonden</h1>
        <p className="mt-3 text-muted-foreground">
          Bekijk al onze artikelen op de <Link to="/blog" className="text-trust hover:underline">blog</Link>.
        </p>
      </div>
    </Layout>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: "Buitenlandse Casino" },
    publisher: { "@type": "Organization", name: "Buitenlandse Casino" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://buitenlandsecasino.com/blog/${post.slug}`,
    },
  };
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(articleJsonLd) }} />
      <article className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ to: "/blog", label: "Blog" }, { label: post.title }]} />
        <header className="mt-6">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
            <PageMeta />
            <span>· {post.readingTime} leestijd</span>
          </div>
        </header>

        <div className="prose prose-neutral mt-8 max-w-none leading-relaxed text-foreground/90">
          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="mt-8 text-2xl font-bold">{block.text}</h2>;
            if (block.type === "ul") return (
              <ul key={i} className="mt-4 list-disc space-y-1 pl-6 text-foreground/80">
                {block.items?.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
            return <p key={i} className="mt-4 text-foreground/80">{block.text}</p>;
          })}
        </div>

        <aside className="mt-12 rounded-2xl border bg-secondary/40 p-6">
          <h2 className="text-xl font-bold">Lees ook</h2>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to="/blog/$slug" params={{ slug: r.slug }} className="text-trust hover:underline">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </Layout>
  );
}
