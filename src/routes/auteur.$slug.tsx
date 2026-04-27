import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageMeta } from "@/components/site/PageMeta";
import { CasinoLogo } from "@/components/site/CasinoLogo";
import { Rating } from "@/components/site/Rating";
import { authors, getAuthor, authorJsonLd } from "@/data/authors";
import { casinos } from "@/data/casinos";
import { jsonLdString } from "@/lib/jsonld";
import { UserCircle2, Mail, Linkedin } from "lucide-react";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/auteur/$slug")({
  loader: ({ params }) => {
    const author = getAuthor(params.slug);
    if (!author) throw notFound();
    return { author };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.author;
    if (!a) return { meta: [{ title: "Auteur niet gevonden" }] };
    return {
      meta: [
        { title: `${a.name} — Auteur bij Buitenlandse Casino's` },
        { name: "description", content: a.bio },
        { property: "og:title", content: `${a.name} — Auteur` },
        { property: "og:description", content: a.bio },
        { property: "og:type", content: "profile" },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Auteur niet gevonden</h1>
        <Link to="/over-ons" className="mt-4 inline-block text-trust underline">Naar Over ons</Link>
      </div>
    </Layout>
  ),
  component: AuthorPage,
});

function AuthorPage() {
  const { author } = Route.useLoaderData();
  // For now, all reviews are written by the default author (Mark). Show all 10.
  const reviews = casinos;
  const ld = {
    "@context": "https://schema.org",
    ...authorJsonLd(author),
  };
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(ld) }} />
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ to: "/over-ons", label: "Over ons" }, { label: author.name }]} />

        <header className="mt-6 grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
          <span className="grid h-32 w-32 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/30 to-trust/20 text-foreground shadow-card">
            <UserCircle2 className="h-20 w-20" />
          </span>
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{author.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{author.role}</p>
            <div className="mt-3"><PageMeta /></div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {author.email && (
                <a href={`mailto:${author.email}`} className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-2 font-semibold hover:bg-accent">
                  <Mail className="h-4 w-4" /> {author.email}
                </a>
              )}
              {author.linkedin && (
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-2 font-semibold hover:bg-accent">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </header>

        <article className="prose prose-neutral mt-10 max-w-none">
          <h2 className="text-2xl font-bold">Over {author.name.split(" ")[0]}</h2>
          <p className="text-muted-foreground leading-relaxed">{author.bio}</p>
          <p className="text-muted-foreground leading-relaxed">
            {author.name} startte zijn werk als reviewer in 2018, in de aanloop naar de regulering van de Nederlandse online gokmarkt. Sindsdien heeft hij meer dan vijftig casino-platforms persoonlijk getest — eerst KSA-vergunde aanbieders, sinds 2023 ook offshore platforms onder licenties uit Anjouan, Curaçao en Malta die Nederlandse spelers accepteren.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Zijn redactionele filosofie is helder: een casino is alleen aan te bevelen als je er met eigen geld kunt storten, met eigen geld kunt spelen, en met eigen geld kunt opnemen — zonder verrassingen, zonder vertraging, en zonder kleine letters die opeens groot worden. Hij gelooft dat offshore casino's een legitieme keuze zijn voor de geïnformeerde Nederlandse speler, mits de operator transparant is over licentiehouder, klachtenroute en eigendomsstructuur. Spelers die in CRUKS staan adviseert hij expliciet om weg te blijven bij offshore aanbieders — CRUKS bestaat niet voor niets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Naast reviews schrijft hij over verantwoord spelen, betaalmethoden (in het bijzonder iDEAL en crypto-checkout) en de praktische gevolgen van bonusvoorwaarden. Hij is bereikbaar via e-mail voor lezersvragen en correcties.
          </p>
        </article>

        <section className="mt-12">
          <h2 className="text-2xl font-bold md:text-3xl">Recente reviews door {author.name.split(" ")[0]}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {reviews.map((c) => (
              <Link
                key={c.slug}
                to="/review/$slug"
                params={{ slug: c.slug }}
                className="group flex items-center gap-3 rounded-xl border bg-card p-4 shadow-soft hover:shadow-card"
              >
                {c.logoUrl ? (
                  <img src={c.logoUrl} alt={`${c.name} logo`} width={40} height={40} loading="lazy" decoding="async" className="h-10 w-10 shrink-0 rounded-lg bg-white object-contain p-0.5" />
                ) : (
                  <CasinoLogo name={c.name} brandColor={c.brandColor} size="sm" />
                )}
                <div className="min-w-0">
                  <div className="font-bold group-hover:text-gold">{c.name}</div>
                  <div className="mt-0.5 flex items-center gap-2"><Rating value={c.rating} /></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Force build of all author slugs
export const _allAuthors = Object.keys(authors);
