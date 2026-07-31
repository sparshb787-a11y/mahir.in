import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import homeHtml from "../static/mahir-home.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(homeHtml, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
  component: HomePage,
});

function HomePage() {
  return null;
}
