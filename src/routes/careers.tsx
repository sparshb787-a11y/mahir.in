import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers | MAHIR Group" },
      {
        name: "description",
        content:
          "Careers at MAHIR Group | join a research-based SEBI-registered RIA building financial systems that put people first.",
      },
      {
        name: "keywords",
        content:
          "MAHIR Group Careers, jobs at MAHIR Group, investment advisory jobs Pune, finance jobs Pune",
      },
      { property: "og:title", content: "Careers | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Join a research-based investment advisory building financial systems that put people first.",
      },
      { property: "og:url", content: "https://mahir.in/careers" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers | MAHIR Group" },
      {
        name: "twitter:description",
        content:
          "Join a research-based investment advisory building financial systems that put people first.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/careers" }],
  }),
});

const perks = [
  {
    title: "Flexible Timings",
    desc: "Work when you are most productive. We trust our team to manage their own schedules.",
  },
  {
    title: "Learning Budget",
    desc: "Annual budget for courses, conferences, books, and skill development of your choice.",
  },
  {
    title: "Remote Friendly",
    desc: "Hybrid work model with the flexibility to work from anywhere in India.",
  },
  {
    title: "Performance Bonuses",
    desc: "Competitive compensation with performance-linked bonus structure.",
  },
  {
    title: "Small Team, Big Impact",
    desc: "Your work directly shapes the product. No hiding behind layers of hierarchy.",
  },
  { title: "Health Benefits", desc: "Comprehensive health coverage for you and your family." },
];

function CareersPage() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Careers", text: "Open roles · Pune / Baner" }}
          title="Join"
          titleBreak="Our Mission."
          subtitle="We hire slowly and stay for a long time. If you care about original research, clean systems and building financial products people can trust — we'd love to hear from you."
        />

        {/* No Openings Card */}
        <section className="px-5 md:px-12 py-16 md:py-20 max-w-[1100px] mx-auto text-center">
          <div className="rounded-3xl bg-white border border-black/[0.06] p-8 md:p-12 shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-black/[0.04] flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black/40"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
            </div>
            <h2
              className="text-2xl font-semibold text-black mb-3"
              style={{ fontFamily: "Syne, system-ui, sans-serif" }}
            >
              No Openings Right Now
            </h2>
            <p className="text-black/60 text-lg max-w-lg mx-auto">
              We are not actively hiring at the moment. We grow deliberately and only when the
              timing is right.
            </p>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="px-5 md:px-12 py-16 md:py-20">
          <div className="mx-auto max-w-[1100px]">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8 text-center"
              style={{ fontFamily: "Syne, system-ui, sans-serif" }}
            >
              Perks & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {perks.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-black/5 bg-white p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/[0.04] flex items-center justify-center mb-5">
                    {i === 0 && (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/50"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/50"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/50"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/50"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )}
                    {i === 4 && (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/50"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}
                    {i === 5 && (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black/50"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    )}
                  </div>
                  <h3
                    className="text-xl font-semibold text-black mb-3"
                    style={{ fontFamily: "Syne, system-ui, sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed text-[0.95rem]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom text */}
        <section className="px-5 py-16 md:py-20 md:px-12 text-center">
          <div className="mx-auto max-w-[900px]">
            <p className="text-lg text-black/60 mb-4">
              Don't see your role? We're always open to hearing from exceptional people. Send us an
              email.
            </p>
            <a
              href="mailto:careers@mahir.in"
              className="text-black font-semibold underline underline-offset-4 hover:text-black/70 transition-colors"
            >
              careers@mahir.in
            </a>
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
