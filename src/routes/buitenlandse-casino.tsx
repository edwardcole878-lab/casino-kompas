import { createFileRoute, redirect } from "@tanstack/react-router";

// Old slug kept alive: permanently redirect to the new URL.
export const Route = createFileRoute("/buitenlandse-casino")({
  beforeLoad: () => {
    throw redirect({ to: "/snelle-uitbetaling-ideal-casinos" });
  },
  component: () => null,
});
