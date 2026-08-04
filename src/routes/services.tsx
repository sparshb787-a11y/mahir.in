import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services | MAHIR Group" },
      {
        name: "description",
        content:
          "Explore MAHIR Group services — SEBI-registered investment advisory through MAHIR Invest and market research tools through MAHIR Screener.",
      },
      { property: "og:title", content: "Our Services | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Research-backed investment advisory and market intelligence tools from MAHIR Group.",
      },
      { property: "og:url", content: "https://mahir.in/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Services | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Research-backed investment advisory and market intelligence tools.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/services" }],
  }),
});

function ServicesPage() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Services", text: "What we offer" }}
          title="Advisory And"
          titleBreak="Market Insights."
          subtitle="Two products. One research team. Every recommendation, screen, and report follows the same standard of clarity, research, and client fit."
        />

        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden border border-black/5 bg-white flex flex-col">
              <div className="p-8 md:p-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl font-semibold text-black"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    MAHIR Invest
                  </h2>
                </div>
                <p className="text-black/50 text-sm tracking-wider uppercase mb-4">
                  SEBI-Registered Investment Adviser
                </p>
                <p className="text-black/60 leading-relaxed mb-6">
                  SEBI-registered investment advisory service delivering personalized
                  research-backed recommendations across stocks, mutual funds, and ETFs. Every
                  recommendation is documented, risk-checked, and aligned with your financial goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Personalized portfolio reviews
                  </li>
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Research-backed with transparent reasoning
                  </li>
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Flat-fee model, zero commissions
                  </li>
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    SEBI Registered RIA (INA000022668)
                  </li>
                </ul>
                <a
                  href="https://www.mahirinvest.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
                >
                  Visit MAHIR Invest{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-black/5 bg-white flex flex-col">
              <div className="p-8 md:p-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl font-semibold text-black"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    MAHIR Screener
                  </h2>
                </div>
                <p className="text-black/50 text-sm tracking-wider uppercase mb-4">
                  Market Research & Screening Tool
                </p>
                <p className="text-black/60 leading-relaxed mb-6">
                  A powerful market research tool for filtering, comparing, and shortlisting stocks
                  using the same fundamental framework that powers our advisory desk. Research-grade
                  screening made accessible.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Multi-criteria stock filtering
                  </li>
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Fundamental data &amp; financial ratios
                  </li>
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Visual comparison tools
                  </li>
                  <li className="flex items-start gap-3 text-sm text-black/60">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Export &amp; share screens
                  </li>
                </ul>
                <a
                  href="https://www.mahrscreener.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
                >
                  Visit MAHIR Screener{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[900px] text-center">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
              style={{ fontFamily: "Syne, system-ui, sans-serif" }}
            >
              Built by the Same Research Team
            </h2>
            <p className="text-lg text-black/60 mb-8 max-w-2xl mx-auto">
              Whether you choose MAHIR Invest for personalized advisory or MAHIR Screener for DIY
              research, every product is backed by the same disciplined research process.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-black/90 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
