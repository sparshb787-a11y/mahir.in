import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About MAHIR Group | Parent Company of MAHIR Invest & MAHIR Screener" },
      {
        name: "description",
        content:
          "MAHIR Group is the parent company behind MAHIR Invest (SEBI-registered RIA) and MAHIR Screener (market research tool). Learn our story, mission, and products.",
      },
      {
        name: "keywords",
        content:
          "MAHIR Group, MAHIR Invest, MAHIR Screener, SEBI registered RIA, investment advisory, stock screening, market research",
      },
      { property: "og:title", content: "About MAHIR Group | MAHIR Invest & MAHIR Screener" },
      {
        property: "og:description",
        content:
          "MAHIR Group is the parent company behind MAHIR Invest and MAHIR Screener. Research-led investment advisory and market intelligence.",
      },
      { property: "og:url", content: "https://mahir.in/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About MAHIR Group" },
      { name: "twitter:description", content: "Parent company of MAHIR Invest & MAHIR Screener." },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/about" }],
  }),
});

const milestones = [
  {
    step: "Step 01",
    title: "MAHIR Founded",
    desc: "MAHIR started in October 2025 with one belief. Advice should be clear, easy to explain, and truly in the client's interest.",
    date: "Oct 2025",
  },
  {
    step: "Step 02",
    title: "SEBI Registered Advisory",
    desc: "MAHIR Invest became a SEBI Registered Investment Adviser, giving our long-term approach the compliance and transparency clients deserve.",
    date: "Oct 2025",
  },
  {
    step: "Step 03",
    title: "MAHIR Invest Launched",
    desc: "On 15 May 2026, MAHIR Invest opened for clients, turning our research into clear, personal investment advice.",
    date: "May 15, 2026",
  },
  {
    step: "Step 04",
    title: "MAHIR Screener in Build",
    desc: "The same research logic is being shaped into a screening tool so investors can study markets on the MAHIR framework.",
    date: "2026",
  },
];

function AboutPage() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        {/* ===== Hero ===== */}
        <PageHero
          badge={{ tag: "About us", text: "Who We Are" }}
          title="Built for You"
          titleBreak="With Clarity."
          subtitle="MAHIR Group is the parent entity behind two powerful products — MAHIR Invest (SEBI-registered investment advisory) and MAHIR Screener (market research and screening platform). Together, we help investors think clearly, decide confidently, and build wealth sustainably."
        />

        <div className="px-5 md:px-12 mx-auto max-w-[1100px]">
          {/* ===== How We Started ===== */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/40 mb-3">
                How We Started
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-[-.03em] text-black"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Clarity Over Noise.
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-5">
              <p className="text-base leading-[1.8] text-black/55">
                MAHIR is built to help you invest with more clarity and less noise. Every research
                note, every screen, and every recommendation is designed to make your investment
                decisions better, simpler, and more confident.
              </p>
              <p className="text-base leading-[1.8] text-black/55">
                We do not chase trends or push products. Our advisory and screener start with one
                question: will this help the client build wealth over time? That question drives our
                stock research, risk framework, portfolio reviews, and the way we communicate every
                investment idea.
              </p>
              <p className="text-base leading-[1.8] text-black/55">
                What you read in our reports is backed by documented research. The strict risk
                checks, compliance reviews, and our refusal to recommend anything we would not own
                ourselves are what make the advice worth following. MAHIR is for investors who take
                the long term seriously and expect the same from their partner.
              </p>
            </div>
          </section>

          {/* ===== Key Moments / Timeline ===== */}
          <section className="py-16 md:py-20">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/40 mb-3">
                Our Story
              </p>
              <h3
                className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-[-.03em] text-black"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Key Moments
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-black/45">
                From a single idea in October 2025 to a company built with the same care.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line - visible on all screens */}
              <div
                className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full"
                style={{ background: "rgba(0,0,0,0.06)" }}
              />

              <div className="space-y-10 md:space-y-10">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col md:grid md:grid-cols-2 md:gap-16 items-start md:items-center"
                  >
                    {i % 2 === 0 ? (
                      <>
                        <div className="md:pr-2 md:text-right pl-10 md:pl-0">
                          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-black/35">
                            {m.step}
                          </span>
                          <h4
                            className="mt-2 text-lg font-semibold text-black"
                            style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                          >
                            {m.title}
                          </h4>
                          <p className="mt-2 text-sm leading-[1.7] text-black/50">{m.desc}</p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-black/40 md:justify-end">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{m.date}</span>
                          </div>
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div className="md:pl-2 pl-10 md:pl-0">
                          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-black/35">
                            {m.step}
                          </span>
                          <h4
                            className="mt-2 text-lg font-semibold text-black"
                            style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                          >
                            {m.title}
                          </h4>
                          <p className="mt-2 text-sm leading-[1.7] text-black/50">{m.desc}</p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-black/40">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{m.date}</span>
                          </div>
                        </div>
                      </>
                    )}
                    {/* Dot on timeline */}
                    <span className="absolute left-4 md:left-1/2 top-2 md:top-1/2 h-3.5 w-3.5 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-black/10 z-10" />
                    <span className="hidden md:block absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 z-10" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== Who is MAHIR ===== */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Who is MAHIR
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-black/70 leading-relaxed text-justify">
                MAHIR Group is the parent company that powers two distinct products serving the
                Indian investor. On one side, <strong className="text-black">MAHIR Invest</strong>{" "}
                is a SEBI-registered Investment Adviser (RIA) providing personalized investment
                recommendations grounded in deep fundamental research — no commissions, no
                conflicts, just honest advice. On the other,{" "}
                <strong className="text-black">MAHIR Screener</strong> is a market intelligence tool
                that puts powerful screening, data visualization, and research capabilities in the
                hands of every investor. We are a single team united by a shared mission: to make
                high-quality investment thinking accessible to everyone.
              </p>
            </div>
          </section>

          {/* ===== Why We Started ===== */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Why We Started
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-black/70 leading-relaxed text-justify">
                The financial services industry was built to sell — not to advise. Retail investors
                were drowning in noise, pushed toward commission-heavy products that served
                distributors better than they served the people buying them. At the same time,
                quality market research tools were either prohibitively expensive or locked behind
                institutional walls. We started MAHIR Group to solve both problems. With{" "}
                <strong className="text-black">MAHIR Invest</strong>, we built an advisory service
                where every recommendation is backed by documented research and zero hidden
                incentives. With <strong className="text-black">MAHIR Screener</strong>, we built a
                platform that democratizes access to the same caliber of data and analysis that
                professionals use. Both products share one DNA: clarity, honesty, and a stubborn
                commitment to evidence over hype.
              </p>
            </div>
          </section>

          {/* ===== Our Mission ===== */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Our Mission
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-black/70 leading-relaxed text-justify">
                To bring high-quality investment thinking to every Indian investor. Quality advice
                and powerful research tools should not be luxuries reserved for the ultra-wealthy.
                We believe that with the right guidance, clear data, and disciplined risk
                management, financial freedom is achievable for everyone — regardless of portfolio
                size.
              </p>
            </div>
          </section>

          {/* ===== Our Products ===== */}
          <section className="py-16 md:py-20">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Advisory and Market Insights.
              </h2>
              <p className="text-lg text-black/50 max-w-2xl mx-auto leading-relaxed">
                One research team. Every recommendation, screen, and report follows the same standard — is this clear, backed by research, and truly right for the client?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-3xl bg-[#f9fafb] border border-black/5 p-8 md:p-10 flex flex-col text-left">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    width="32"
                    height="32"
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
                  <h3
                    className="text-2xl font-semibold text-black"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    MAHIR Invest
                  </h3>
                </div>
                <p className="text-black/50 text-sm tracking-wider uppercase mb-4">
                  SEBI-Registered Investment Adviser
                </p>
                <p className="text-black/70 leading-relaxed mb-6">
                  A strictly SEBI-registered Investment Adviser (INA000022668) offering personalized
                  investment recommendations. Every idea is backed by deep fundamental research,
                  documented reasoning, and clear entry-target-stop levels. No commissions. No
                  conflicts. Just honest, data-driven advice.
                </p>
                <ul className="space-y-3 text-black/70 mt-auto">
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Personalized stock recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Research-backed with transparent reasoning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Flat-fee model, zero commissions</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-[#f9fafb] border border-black/5 p-8 md:p-10 flex flex-col text-left">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/70"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                  </svg>
                  <h3
                    className="text-2xl font-semibold text-black"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    MAHIR Screener
                  </h3>
                </div>
                <p className="text-black/50 text-sm tracking-wider uppercase mb-4">
                  Market Research & Screening Tool
                </p>
                <p className="text-black/70 leading-relaxed mb-6">
                  A powerful market research and stock screening platform built for the modern
                  investor. Screen stocks by financial metrics, visualize data, and uncover
                  opportunities with the same caliber of tools used by professional analysts.
                  Data-driven insights at your fingertips.
                </p>
                <ul className="space-y-3 text-black/70 mt-auto">
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Advanced stock screening by financial metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Data visualization and market intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Professional-grade tools for every investor</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== What Makes Us Different ===== */}
          <section className="py-16 md:py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-12"
              style={{ fontFamily: "Syne, system-ui, sans-serif" }}
            >
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              <div>
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
              <div>
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
              <div>
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
          </section>

          {/* ===== Built to Last ===== */}
          <section className="py-16 md:py-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
              style={{ fontFamily: "Syne, system-ui, sans-serif" }}
            >
              Built to Last
            </h2>
            <p className="text-lg text-black/60 mb-8 max-w-2xl mx-auto">
              MAHIR is for investors who take the long term seriously and expect the same from their
              partner.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-black/90 transition-colors"
            >
              Talk to Us
            </Link>
          </section>
        </div>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
