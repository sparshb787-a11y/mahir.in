import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/disclaimer")({
  component: Disclaimer,
  head: () => ({
    meta: [
      { title: "Comprehensive Disclaimers | MAHIR Group" },
      { name: "description", content: "Regulatory and Investment Disclaimer for MAHIR Group Investment Advisers Private Limited." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/disclaimer" }],
  }),
});

function Disclaimer() {
  return (
    <div style={pageStyles.root} className="bg-white">
      <SiteHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1220] leading-[1.05] tracking-tight mb-4 font-serif">
          COMPREHENSIVE DISCLAIMERS
        </h1>
        <h2 className="text-xl md:text-2xl text-[#5b6067] mb-8 font-serif">
          MIA App & Web Platform — Important Legal Notices
        </h2>
        
        <div className="prose prose-lg max-w-none text-[#0B1220]">
          <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm">
            <p><strong>Version:</strong> 1.0 | <strong>Effective Date:</strong> June 01, 2026</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
              IMPORTANT NOTICE — PLEASE READ ALL DISCLAIMERS CAREFULLY
            </h3>
            <p className="text-amber-800">These Disclaimers form an integral part of your agreement with MAHIR Investment Advisers Private Limited. By accessing the MIA Platform or availing advisory services, you unconditionally accept all disclaimers set out herein.</p>
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-4">DISCLAIMER 1: SEBI REGISTRATION STATUS AND REGULATORY DISCLOSURE</h3>
          <p className="mb-4">MAHIR Investment Advisers Private Limited is registered as an Investment Adviser with the Securities and Exchange Board of India (SEBI) under the SEBI (Investment Advisers) Regulations, 2013.</p>
          
          <table className="min-w-full bg-white border border-gray-200 mb-6 text-sm">
            <tbody>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">SEBI Registration No.</td><td className="py-2 px-4">INA000022668</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">Registration Type</td><td className="py-2 px-4">Investment Adviser (Non-Individual) under SEBI (IA) Regulations, 2013</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">Registration Date</td><td className="py-2 px-4">June 01, 2026</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">Validity</td><td className="py-2 px-4">Perpetual (subject to compliance with SEBI Regulations)</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">Principal Officer</td><td className="py-2 px-4">Yash Mahavir Bedmuttha</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">Compliance Officer</td><td className="py-2 px-4">Bharat Makkar<br/>Email: compliance@mahiradvisers.com</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">Registered Office</td><td className="py-2 px-4">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold w-1/3">SEBI Regional Office</td><td className="py-2 px-4">SEBI Bhavan II, Plot No. C-7, 'G' Block, Bandra Kurla Complex, Bandra (East), Mumbai — 400051</td></tr>
              <tr><td className="py-2 px-4 font-semibold w-1/3">SEBI SCORES Portal</td><td className="py-2 px-4">https://scores.sebi.gov.in/ | Toll Free: 1800 266 7575</td></tr>
            </tbody>
          </table>
          <p className="mb-8 text-sm italic">SEBI registration does not in any manner guarantee the quality of advice, services, or the profitability of investments. Clients are advised to verify MIA's registration at www.sebi.gov.in before engaging services.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">DISCLAIMER 2: INVESTMENT RISK DISCLAIMER</h3>
          <p className="mb-4 font-semibold uppercase tracking-wider text-red-700">MUTUAL FUNDS AND SECURITIES INVESTMENTS ARE SUBJECT TO MARKET RISKS. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RETURNS. PLEASE READ ALL SCHEME-RELATED DOCUMENTS CAREFULLY BEFORE INVESTING.</p>
          <p className="mb-4">Investment in securities markets is subject to inherent market risk. The value of investments and income derived therefrom can go up as well as down, and investors may not recover the full principal amount invested. The specific risk types include:</p>
          <table className="min-w-full bg-white border border-gray-200 mb-6 text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left font-semibold">Risk Type</th>
                <th className="py-2 px-4 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="py-2 px-4 font-semibold">Market Risk</td><td className="py-2 px-4">Prices of securities fluctuate due to macroeconomic conditions, market sentiment, and factors beyond MIA's control.</td></tr>
              <tr className="border-b"><td className="py-2 px-4 font-semibold">Liquidity Risk</td><td className="py-2 px-4">Some investments may not be easily liquidated at fair market value, particularly in volatile or thin markets.</td></tr>
              <tr><td className="py-2 px-4 font-semibold">Concentration Risk</td><td className="py-2 px-4">Concentrated investment in any single security or sector may expose the portfolio to higher volatility.</td></tr>
            </tbody>
          </table>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

