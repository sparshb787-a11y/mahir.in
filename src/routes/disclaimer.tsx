import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "../components/layout";

export const Route = createFileRoute("/disclaimer")({
  component: Disclaimer,
  head: () => ({
    meta: [
      { title: "Comprehensive Disclaimers | MAHIR Group" },
      {
        name: "description",
        content:
          "Regulatory and Investment Disclaimer for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:title", content: "Comprehensive Disclaimers | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Regulatory and Investment Disclaimer for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:url", content: "https://mahir.in/disclaimer" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Comprehensive Disclaimers | MAHIR Group" },
      {
        name: "twitter:description",
        content:
          "Regulatory and Investment Disclaimer for MAHIR Group Investment Advisers Private Limited.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/disclaimer" }],
  }),
});

function Disclaimer() {
  const meta = (
    <div className="border border-black/5 rounded-2xl p-6 md:p-8 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Version
          </span>
          <p className="text-black mt-1">1.0</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Effective Date
          </span>
          <p className="text-black mt-1">June 01, 2026</p>
        </div>
      </div>
    </div>
  );

  return (
    <LegalPageShell
      title="Comprehensive Disclaimers"
      subtitle="MIA App & Web Platform — Important Legal Notices"
      meta={meta}
    >
      <div className="space-y-10">
        <section className="border border-amber-200 bg-amber-50/50 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-700 mt-0.5 shrink-0"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
                Important Notice — Please Read All Disclaimers Carefully
              </h3>
              <p className="text-amber-800 leading-[1.8]">
                These Disclaimers form an integral part of your agreement with MAHIR Investment
                Advisers Private Limited. By accessing the MIA Platform or availing advisory services,
                you unconditionally accept all disclaimers set out herein.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            Disclaimer 1: SEBI Registration Status and Regulatory Disclosure
          </h3>
          <p className="text-black/55 leading-[1.8] mb-6">
            MAHIR Investment Advisers Private Limited is registered as an Investment Adviser with
            the Securities and Exchange Board of India (SEBI) under the SEBI (Investment Advisers)
            Regulations, 2013.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-black/5 text-sm">
              <tbody>
                {[
                  ["SEBI Registration No.", "INA000022668"],
                  ["Registration Type", "Investment Adviser (Non-Individual) under SEBI (IA) Regulations, 2013"],
                  ["Registration Date", "June 01, 2026"],
                  ["Validity", "Perpetual (subject to compliance with SEBI Regulations)"],
                  ["Principal Officer", "Yash Mahavir Bedmuttha"],
                  ["Compliance Officer", "Bharat Makkar\nEmail: compliance@mahir.in"],
                  ["Registered Office", "PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra"],
                  ["SEBI Regional Office", "SEBI Bhavan II, Plot No. C-7, 'G' Block, Bandra Kurla Complex, Bandra (East), Mumbai — 400051"],
                  ["SEBI SCORES Portal", "https://scores.sebi.gov.in/ | Toll Free: 1800 266 7575"],
                ].map(([label, value], i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0">
                    <td className="py-3 px-4 font-semibold text-black w-1/3">{label}</td>
                    <td className="py-3 px-4 text-black/70 whitespace-pre-line">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-black/55 leading-[1.8] mt-4 text-sm">
            SEBI registration does not in any manner guarantee the quality of advice, services, or
            the profitability of investments. Clients are advised to verify MIA's registration at
            www.sebi.gov.in before engaging services.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            Disclaimer 2: Investment Risk Disclaimer
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4 font-semibold uppercase tracking-wider text-red-700">
            Mutual funds and securities investments are subject to market risks. Past performance is
            not indicative of future returns. Please read all scheme-related documents carefully
            before investing.
          </p>
          <p className="text-black/55 leading-[1.8] mb-4">
            Investment in securities markets is subject to inherent market risk. The value of
            investments and income derived therefrom can go up as well as down, and investors may
            not recover the full principal amount invested.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-black/5 text-sm">
              <thead>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <th className="py-3 px-4 text-left font-semibold text-black">Risk Type</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Market Risk", "Prices of securities fluctuate due to macroeconomic conditions, market sentiment, and factors beyond MIA's control."],
                  ["Liquidity Risk", "Some investments may not be easily liquidated at fair market value, particularly in volatile or thin markets."],
                  ["Concentration Risk", "Concentrated investment in any single security or sector may expose the portfolio to higher volatility."],
                ].map(([type, desc], i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0">
                    <td className="py-3 px-4 font-semibold text-black">{type}</td>
                    <td className="py-3 px-4 text-black/70">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </LegalPageShell>
  );
}
