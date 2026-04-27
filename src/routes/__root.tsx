import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { jsonLdString } from "@/lib/jsonld";

const SITE_URL = "https://buitenlandsecasino.com";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Deze pagina bestaat niet (meer). Ga terug naar de homepage.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Naar home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Buitenlandse Casino — Vergelijk NL Online Casino's" },
      { name: "description", content: "Onafhankelijk vergelijkingsplatform voor KSA-vergunde online casino's in Nederland. Bonussen, iDEAL, snelle uitbetalingen en eerlijke reviews." },
      { name: "robots", content: "index,follow" },
      { name: "language", content: "nl-NL" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Buitenlandse Casino" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f1530" },
      { property: "og:title", content: "Buitenlandse Casino — Vergelijk NL Online Casino's" },
      { name: "twitter:title", content: "Buitenlandse Casino — Vergelijk NL Online Casino's" },
      { property: "og:description", content: "Onafhankelijk vergelijkingsplatform voor KSA-vergunde online casino's in Nederland. Bonussen, iDEAL, snelle uitbetalingen en eerlijke reviews." },
      { name: "twitter:description", content: "Onafhankelijk vergelijkingsplatform voor KSA-vergunde online casino's in Nederland. Bonussen, iDEAL, snelle uitbetalingen en eerlijke reviews." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const canonical = SITE_URL + (pathname === "/" ? "" : pathname.replace(/\/$/, ""));
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Buitenlandse Casino",
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
      },
      {
        "@type": "WebSite",
        name: "Buitenlandse Casino",
        url: SITE_URL,
        inLanguage: "nl-NL",
      },
    ],
  };
  return (
    <>
      {/* React 19 hoists these to <head> on both SSR and client */}
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(orgJsonLd) }} />
      <Outlet />
    </>
  );
}
