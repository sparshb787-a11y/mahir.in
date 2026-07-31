import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products | MAHIR Group" },
      {
        name: "description",
        content:
          "Explore MAHIR Group products — SEBI-registered investment advisory through MAHIR Invest and market research tools through MAHIR Screener.",
      },
      { property: "og:title", content: "Products | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Research-backed investment advisory and market intelligence tools from MAHIR Group.",
      },
      { property: "og:url", content: "https://mahir.in/products" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Products | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Research-backed investment advisory and market intelligence tools.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/products" }],
  }),
});

function ProductsPage() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Products", text: "What we offer" }}
          title="Advisory"
          titleBreak="And Market Insights."
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
                      className="text-black/70"
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
                  href="https://mahirscreener.com"
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
                  href="https://www.mahirscreener.com"
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

        {/* Why Choose MAHIR */}
        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Why Choose MAHIR
              </h2>
              <p className="text-lg text-black/60 max-w-2xl mx-auto">
                We believe in doing things differently. Here's what sets us apart.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/60"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold text-black mb-3"
                  style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                >
                  SEBI Registered
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Fully compliant with SEBI regulations. Your investments are protected by strict
                  governance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/60"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold text-black mb-3"
                  style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                >
                  Research-Backed
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Every recommendation and screen is backed by thorough fundamental research.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/60"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold text-black mb-3"
                  style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                >
                  Client-First
                </h3>
                <p className="text-black/60 leading-relaxed">
                  Flat-fee model with zero commissions. We succeed only when you succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[900px]">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                How It Works
              </h2>
              <p className="text-lg text-black/60 max-w-2xl mx-auto">
                Getting started is simple. Here's how we work with you.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-black mb-2"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    Share Your Goals
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    Tell us about your financial goals, risk appetite, and investment horizon.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-black mb-2"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    Get Personalized Research
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    Our team analyzes your portfolio and provides research-backed recommendations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-black mb-2"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    Invest with Confidence
                  </h3>
                  <p className="text-black/60 leading-relaxed">
                    Execute with clarity knowing every decision is backed by thorough research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built by the Same Research Team */}
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
