import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () => ({
    meta: [
      { title: "Our Approach | MAHIR Group" },
      {
        name: "description",
        content:
          "Learn how MAHIR Group approaches investment research, risk management, and client advisory with discipline and transparency.",
      },
      { property: "og:title", content: "Our Approach | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Research-first, client-first. How MAHIR Group approaches investment advisory and market research.",
      },
      { property: "og:url", content: "https://mahir.in/approach" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Approach | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Research-first, client-first. How MAHIR Group approaches investment advisory.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/approach" }],
  }),
});

const steps = [
  {
    title: "Research First",
    desc: "Every idea begins with fundamental research. We study the business, the balance sheet, the management, and the industry before we study the price. Documented research is the foundation of every recommendation.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Risk Checked",
    desc: "Position size, risk levels, and time horizon are checked against the client's profile — not the market's mood. We never recommend more risk than a client's situation warrants.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Client Fit First",
    desc: "We check if an idea fits the client first. If it doesn't fit, we don't recommend it — no matter how good the idea looks. Suitability is non-negotiable.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Transparent Reasoning",
    desc: "Every buy, hold, and exit call comes with a written 'why'. The reasoning is clear today and clear years later. Documented theses, not whispered tips.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "SEBI Compliant",
    desc: "Every recommendation is sent under our SEBI-registered RIA framework, with clear disclosures included from the start. Regulatory compliance is built into the process, not bolted on.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Long-Term Focus",
    desc: "We track results, review our calls, and stay responsible long after a recommendation is made. Compounding rewards patience, and so do we.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

function ApproachPage() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Approach", text: "How we work" }}
          title="Research Led"
          titleBreak="Client Focused"
          subtitle="Every recommendation, screen, and report follows one standard: is this clear to explain, backed by research, and truly right for the client?"
        />

        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[900px]">
            <div className="space-y-6">
              <p className="text-lg leading-[1.8] text-black/60">
                MAHIR is built to help you invest with more clarity and less noise. Every research
                note, every screen, and every recommendation is designed to make your investment
                decisions better, simpler, and more confident.
              </p>
              <p className="text-lg leading-[1.8] text-black/60">
                We do not chase trends or push products. Our advisory and screener start with one
                question: will this help the client build wealth over time? That question drives our
                stock research, risk framework, portfolio reviews, and the way we communicate every
                investment idea.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-20 md:px-12" style={{ background: "#f9fafb" }}>
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
                style={{ fontFamily: "Syne, system-ui, sans-serif" }}
              >
                Our Process
              </h2>
              <p className="text-lg text-black/60 max-w-2xl mx-auto">
                A disciplined, research-first framework that ensures every recommendation is clear,
                documented, and truly right for the client.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-black/5 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-4 text-black/60">{s.icon}</div>
                  <h3
                    className="text-xl font-semibold text-black mb-3"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed text-[0.95rem]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[900px] text-center">
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
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
