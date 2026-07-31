import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "../components/layout";

export const Route = createFileRoute("/terms")({
  component: TermsAndConditions,
  head: () => ({
    meta: [
      { title: "Terms and Conditions | MAHIR Group" },
      {
        name: "description",
        content: "Terms and Conditions for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:title", content: "Terms and Conditions | MAHIR Group" },
      {
        property: "og:description",
        content: "Terms and Conditions for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:url", content: "https://mahir.in/terms" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms and Conditions | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Terms and Conditions for MAHIR Group Investment Advisers Private Limited.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/terms" }],
  }),
});

function TermsAndConditions() {
  const meta = (
    <div className="border border-black/5 rounded-2xl p-6 md:p-8 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Company Name
          </span>
          <p className="text-black mt-1">MAHIR Investment Advisers Private Limited</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            CIN
          </span>
          <p className="text-black mt-1">U66190PN2025PTC244016</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            SEBI Reg. No.
          </span>
          <p className="text-black mt-1">INA000022668</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            SEBI Reg. Type
          </span>
          <p className="text-black mt-1">Investment Adviser (Non-Individual)</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Registration Validity
          </span>
          <p className="text-black mt-1">June 01, 2026 — Perpetual</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Registered Office
          </span>
          <p className="text-black mt-1">
            PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra
          </p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Principal Officer
          </span>
          <p className="text-black mt-1">Yash Mahavir Bedmuttha (Phone No.: +91 9084945151)</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Compliance Officer
          </span>
          <p className="text-black mt-1">Bharat Makkar (Phone No.: +91 9084945151)</p>
        </div>
      </div>
    </div>
  );

  return (
    <LegalPageShell
      title="Terms & Conditions"
      subtitle="User Agreement — MAHIR Investment Advisers (MIA) App & Web Platform"
      meta={meta}
    >
      <div className="space-y-10">
        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            1. Introduction and Acceptance of Terms
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            These Terms and Conditions ('Terms', 'Agreement') constitute a legally binding contract
            between you ('Client', 'User', 'you') and MAHIR Investment Advisers Private Limited
            ('MIA', 'Company', 'we', 'us', 'our'), a company incorporated under the Companies Act,
            2013 and registered as an Investment Adviser with the Securities and Exchange Board of
            India ('SEBI') under the SEBI (Investment Advisers) Regulations, 2013 ('IA
            Regulations').
          </p>
          <p className="text-black/55 leading-[1.8]">
            By accessing, downloading, installing, or using the MIA mobile application ('App') or
            website ('Platform'), or availing any services offered thereon, you agree to be bound by
            these Terms in their entirety.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            2. Definitions
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            In these Terms, the following expressions shall have the meanings assigned to them
            below:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              <strong className="text-black">"Services"</strong> means investment advisory services, portfolio guidance,
              financial planning content, risk profiling, educational resources, and any other
              offerings provided by MIA through the Platform.
            </li>
            <li>
              <strong className="text-black">"Platform"</strong> collectively means the MIA mobile application and website
              (www.mahir.in) and all associated digital interfaces.
            </li>
            <li>
              <strong className="text-black">"Client Agreement"</strong> means the separate formal agreement executed
              between MIA and each Client as mandated under SEBI IA Regulations, 2013.
            </li>
            <li>
              <strong className="text-black">"KYC"</strong> means Know Your Customer documentation and verification as
              required under applicable SEBI, PMLA, and RBI guidelines.
            </li>
            <li>
              <strong className="text-black">"AUA"</strong> means Assets Under Advice the aggregate value of the client's
              investment portfolio for which MIA provides advisory services.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            3. Eligibility Criteria
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            To use the Platform and avail MIA's Services, you must satisfy all of the following
            conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              Be a natural person of at least 18 years of age possessing legal capacity to enter
              into binding contracts, or a body corporate, LLP, partnership firm, HUF, AOP, or trust
              duly authorized under its constitutional documents.
            </li>
            <li>
              Not be a person barred or prohibited from receiving investment advisory services under
              any court order, regulatory direction, or applicable law.
            </li>
            <li>
              Complete full KYC verification as mandated by SEBI and PMLA guidelines before availing
              investment advisory services.
            </li>
            <li>
              Provide accurate, complete, and up-to-date information including income details, net
              worth, investment horizon, risk tolerance, and financial goals.
            </li>
            <li>
              Reside and be domiciled in India. Non-resident clients are subject to additional
              regulatory requirements and must notify MIA of their NRI/OCI/PIO status at onboarding.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            4. Nature and Scope of Services
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            MIA provides personalized investment advisory services as a SEBI-registered Investment
            Adviser. All advice is based on your risk profile, financial situation, investment
            objectives, investment horizon, and other relevant parameters disclosed by you.
          </p>
          <h4 className="text-xl font-semibold tracking-tight text-black mb-3 mt-6">
            4.1 Investment Advisory Services
          </h4>
          <p className="text-black/55 leading-[1.8] mb-4">
            MIA does not exercise discretionary management over client portfolios; all final
            investment decisions rest with the client.
          </p>
          <h4 className="text-xl font-semibold tracking-tight text-black mb-3 mt-6">
            4.2 Services NOT Offered
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>Portfolio Management Services (PMS) requiring a separate SEBI registration</li>
            <li>Stock broking, trading, or order execution services</li>
            <li>Insurance advisory, distribution, or brokerage services</li>
            <li>Commodity trading advisory or futures/options advisory</li>
            <li>Guaranteed returns products or capital protection schemes</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            5. Fee Structure and Payment Terms
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            MIA charges fees for investment advisory services in strict compliance with SEBI (IA)
            Regulations, 2013.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-black/5 text-sm">
              <thead>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <th className="py-3 px-4 text-left font-semibold text-black">Fee Mode</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Description</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">SEBI Maximum Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5">
                  <td className="py-3 px-4 text-black/70">Fixed Fee</td>
                  <td className="py-3 px-4 text-black/70">Predetermined flat fee per annum per client/family</td>
                  <td className="py-3 px-4 text-black/70">INR 1,25,000/- per annum per family</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-3 px-4 text-black/70">AUA-Based Fee</td>
                  <td className="py-3 px-4 text-black/70">Percentage of Assets Under Advice per annum</td>
                  <td className="py-3 px-4 text-black/70">2.5% per annum of AUA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-black/55 leading-[1.8] mt-4">
            All fees are payable as per the schedule specified in the individual Client Agreement.
            GST at the applicable rate and all other statutory taxes shall be charged over and
            above the advisory fee.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            6. Client Obligations and Representations
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            As a Client of MIA, you represent, warrant, and unconditionally agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              All information provided during onboarding, KYC, risk profiling, and thereafter is
              truthful, accurate, complete, and not misleading.
            </li>
            <li>
              You will promptly notify MIA in writing of any material change in your financial
              circumstances, employment, risk appetite, or investment goals.
            </li>
            <li>
              You understand and accept that investment advice is based entirely on information
              provided by you, and inaccurate or incomplete information may result in unsuitable
              advice for which MIA bears no liability.
            </li>
            <li>
              You shall not use the Platform or Services for any unlawful purpose including money
              laundering, tax evasion, fraud, market manipulation, or circumvention of regulatory
              requirements.
            </li>
            <li>
              Your login credentials, OTP, password, and account access are personal and
              non-transferable. You shall be solely responsible for all activities conducted through
              your account.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            7. Grievance Redressal Mechanism
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            In accordance with SEBI IA Regulations and SEBI Circular on investor grievance
            redressal:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-black/5 text-sm">
              <thead>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <th className="py-3 px-4 text-left font-semibold text-black">Level</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Authority</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Contact & TAT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Level 1", "Compliance Officer", "compliance@mahir.in | +91 9084945151\nTAT: 30 days"],
                  ["Level 2", "Principal Officer", "admin@mahir.in | +91 9084945151\nTAT: 15 days"],
                  ["Level 3", "SEBI SCORES Portal", "scores.gov.in | 1800 266 7575"],
                  ["Level 4", "SEBI ODR Platform", "smartodr.in"],
                  ["Level 5", "SEBI Ombudsman / Court", "As per applicable law"],
                ].map(([level, authority, contact], i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0">
                    <td className="py-3 px-4 text-black/70">{level}</td>
                    <td className="py-3 px-4 text-black/70">{authority}</td>
                    <td className="py-3 px-4 text-black/70 whitespace-pre-line">{contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            8. Governing Law and Jurisdiction
          </h3>
          <p className="text-black/55 leading-[1.8]">
            These Terms shall be governed by and construed in accordance with the laws of India. Any
            disputes arising under or in connection with these Terms shall be subject to the
            exclusive jurisdiction of courts located in Pune, Maharashtra, subject to arbitration
            provisions contained in the individual Client Agreement.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            9. Amendments to Terms
          </h3>
          <p className="text-black/55 leading-[1.8]">
            MIA reserves the right to amend, modify, or update these Terms at any time with or
            without prior notice. All amendments shall be published on the Platform. Continued use
            of the Platform after publication of amendments constitutes your irrevocable acceptance
            of the amended Terms.
          </p>
        </section>
      </div>
    </LegalPageShell>
  );
}
