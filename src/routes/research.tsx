import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Lightbulb,
} from "lucide-react";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: "Research & Insights – MAHIR Group" },
      {
        name: "description",
        content:
          "Stay informed with MAHIR Group's research insights, market analysis, and investment perspectives.",
      },
      { property: "og:title", content: "Research & Insights – MAHIR Group" },
      {
        property: "og:description",
        content:
          "Stay informed with MAHIR Group's research insights, market analysis, and investment perspectives.",
      },
      { property: "og:url", content: "https://mahir.in/research" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mahirinvest" },
      { name: "twitter:title", content: "Research & Insights – MAHIR Group" },
      {
        name: "twitter:description",
        content:
          "Stay informed with MAHIR Group's research insights, market analysis, and investment perspectives.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/research" }],
  }),
});

const cardStyle =
  "rounded-3xl p-7 bg-white/5 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.05)]";
const iconBoxStyle = "mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05]";
const iconProps = { size: 20, className: "text-white/60" };

const insights = [
  {
    category: "Market Analysis",
    title: "Understanding Market Cycles",
    desc: "Markets move in cycles. Learn how to identify where we are in the cycle and position your portfolio accordingly.",
    icon: <BarChart3 {...iconProps} />,
    date: "Read",
  },
  {
    category: "Investing Basics",
    title: "The Power of Compounding",
    desc: "Why starting early and staying invested matters more than timing the market. A deep dive into compound growth.",
    icon: <TrendingUp {...iconProps} />,
    date: "Read",
  },
  {
    category: "Risk Management",
    title: "Why Stop-Losses Matter",
    desc: "Every investment has a downside. Understanding position sizing and stop-loss discipline is key to long-term wealth.",
    icon: <AlertTriangle {...iconProps} />,
    date: "Read",
  },
  {
    category: "Research Methodology",
    title: "How We Evaluate Companies",
    desc: "Our framework for analyzing management quality, financial health, and competitive positioning.",
    icon: <FileText {...iconProps} />,
    date: "Read",
  },
  {
    category: "Investor Psychology",
    title: "Avoiding Common Mistakes",
    desc: "From overtrading to anchoring biases — the behavioral traps that cost investors money and how to avoid them.",
    icon: <Lightbulb {...iconProps} />,
    date: "Read",
  },
  {
    category: "Portfolio Strategy",
    title: "Building a Balanced Portfolio",
    desc: "How to think about asset allocation, diversification, and portfolio construction for long-term goals.",
    icon: <ShieldCheck {...iconProps} />,
    date: "Read",
  },
];

function ResearchPage() {
  return (
    <div style={{ ...pageStyles.root, background: "#0a0a0a", color: "#ffffff" }}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Research", text: "Market Insights" }}
          title="Research Led."
          titleBreak="Client Focused. "
          subtitle="Every recommendation, screen, and report follows one standard: will this help the client build wealth over time? Stay informed with our research insights, market analysis, and investment perspectives."
        />
        {/* Insight Cards */}
        <section className="overflow-hidden px-5 py-12 md:px-12">
          <div className="mx-auto max-w-[900px]">
            <div className="grid gap-5 sm:grid-cols-2">
              {insights.map((item) => (
                <div key={item.title} className={cardStyle + " flex flex-col"}>
                  <div className={iconBoxStyle}>{item.icon}</div>
                  <div className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/40">
                    {item.category}
                  </div>
                  <h3 className="mb-2 text-[1rem] font-medium text-white">{item.title}</h3>
                  <p className="text-[0.875rem] leading-[1.7] text-white/55 flex-1">{item.desc}</p>
                  <div className="mt-4 pt-4 border-t border-black/[0.06]">
                    <span className="text-[0.8125rem] font-medium text-white/70 cursor-pointer hover:text-white transition-colors">
                      {item.date} →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="overflow-hidden px-5 py-16 md:px-12">
          <div className="mx-auto max-w-[900px]">
            <div className="rounded-2xl bg-black/[0.03] px-7 py-6">
              <p className="text-[0.8125rem] leading-[1.7] text-white/45">
                <strong className="text-white/60">Note:</strong> The content above is for
                educational and informational purposes only. It does not constitute investment
                advice or a recommendation to buy or sell any securities. Please consult a
                SEBI-registered investment adviser before making investment decisions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="overflow-hidden px-5 py-12 md:px-12">
          <div className="mx-auto max-w-[700px] text-center rounded-3xl px-8 py-16 md:px-16 bg-white/5 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h2 className="text-[1.75rem] font-normal text-white">Have Questions?</h2>
            <p className="mx-auto mt-4 max-w-md text-[0.9375rem] leading-relaxed text-white/55">
              Our team is here to help you understand markets and make better investment decisions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-block rounded-full bg-black px-8 py-3.5 text-[0.875rem] font-medium text-white transition-all hover:bg-black/80"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
