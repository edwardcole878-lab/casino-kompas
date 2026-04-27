import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/site.webmanifest")({
  server: {
    handlers: {
      GET: () => {
        const manifest = {
          name: "Buitenlandse Casino's",
          short_name: "Buitenlandse Casino's",
          start_url: "/",
          display: "standalone",
          background_color: "#0f1530",
          theme_color: "#0f1530",
          icons: [
            { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
          ],
        };
        return new Response(JSON.stringify(manifest), {
          headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
        });
      },
    },
  },
});
