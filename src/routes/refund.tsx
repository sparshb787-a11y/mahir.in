import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "../components/layout";

export const Route = createFileRoute("/refund")({
  component: RefundPolicy,
  head: () => ({
    meta: [
      { title: "Refund Policy | MAHIR Group" },
      {
        name: "description",
        content: "Refund Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:title", content: "Refund Policy | MAHIR Group" },
      {
        property: "og:description",
        content: "Refund Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:url", content: "https://mahir.in/refund" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Refund Policy | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Refund Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/refund" }],
  }),
});

function RefundPolicy() {
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
            Registered Office
          </span>
          <p className="text-black mt-1">
            PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <LegalPageShell
      title="Refund Policy"
      subtitle="Advisory Fee Refund Framework"
      meta={meta}
    >
      <div className="space-y-10">
        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            1. Introduction
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            This Refund Policy ('Policy') governs the terms under which clients of MAHIR Investment
            Advisers Private Limited ('MIA (MAHIR Invest)', 'Company', 'we', 'us', 'our') may
            request a refund of advisory fees paid. This Policy is issued in compliance with the
            SEBI (Investment Advisers) Regulations, 2013 ('IA Regulations'), applicable SEBI
            Circulars, the Consumer Protection Act, 2019, and the Information Technology Act, 2000.
          </p>
          <p className="text-black/55 leading-[1.8]">
            This Policy shall be read in conjunction with the Cancellation Policy, Terms and
            Conditions, Client Agreement, Privacy Policy, and SEBI Disclosures, all of which are
            incorporated herein by reference and form an integral part of this Agreement.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            2. Definitions
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            In this Policy, the following expressions shall have the meanings assigned to them
            below:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              <strong className="text-black">"Advisory Fee"</strong> means the fee charged by MIA for rendering investment
              advisory services, whether on a fixed fee basis or as a percentage of Assets Under
              Advice (AUA), as agreed upon in the Client Agreement.
            </li>
            <li>
              <strong className="text-black">"Subscription Plan"</strong> means any periodic (monthly, quarterly,
              semi-annual, or annual) advisory service plan offered by MIA through the Platform.
            </li>
            <li>
              <strong className="text-black">"Cooling-Off Period"</strong> means the initial period following the execution
              of the Client Agreement during which the Client may terminate the engagement without
              penalty, as prescribed under SEBI IA Regulations.
            </li>
            <li>
              <strong className="text-black">"Client Agreement"</strong> means the formal agreement executed between MIA
              and the Client as mandated under SEBI IA Regulations, 2013.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            3. Refund Policy
          </h3>
          <p className="text-black/55 leading-[1.8] mb-6">
            This section details the refund eligibility, computation methodology, and processing
            timelines.
          </p>

          <h4 className="text-xl font-semibold tracking-tight text-black mb-3">
            3.1 Refund Eligibility
          </h4>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-black/5 text-sm">
              <thead>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <th className="py-3 px-4 text-left font-semibold text-black">Scenario</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Refund Entitlement</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Processing Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cooling-off period cancellation (within 7 days)", "Full refund (100%)", "Within 15 business days"],
                  ["Cancellation before advisory services are rendered", "Full refund (100%) less applicable payment gateway charges", "Within 15 business days"],
                  ["Cancellation after partial advisory services rendered", "Pro-rata refund for the unexpired period", "Within 21 business days"],
                  ["Cancellation after full advisory services rendered", "No refund applicable", "N/A"],
                  ["Cancellation due to Client's regulatory non-compliance", "No refund applicable", "N/A"],
                ].map(([scenario, entitlement, timeline], i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0">
                    <td className="py-3 px-4 text-black/70">{scenario}</td>
                    <td className="py-3 px-4 text-black/70">{entitlement}</td>
                    <td className="py-3 px-4 text-black/70">{timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="text-xl font-semibold tracking-tight text-black mb-3">
            3.2 Pro-Rata Refund Computation
          </h4>
          <p className="text-black/55 leading-[1.8] mb-4">
            Where a pro-rata refund is applicable, the refund amount shall be calculated as follows:
          </p>
          <div className="border border-black/5 rounded-2xl p-6 md:p-8 mb-6 bg-black/[0.01]">
            <p className="text-black/70 text-sm leading-[1.8] font-mono text-center">
              Refund = Total Fee Paid − (Daily Fee Rate × Number of Days Services Were Availed)
              <br />
              <br />
              Where Daily Fee Rate = Total Fee Paid ÷ Total Number of Days in the Subscription Period
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              The date of cancellation request shall be considered as the last day of service for
              refund computation purposes.
            </li>
            <li>
              Any applicable taxes (GST) paid shall be refunded proportionally along with the
              advisory fee refund.
            </li>
            <li>
              Payment gateway charges and transaction processing fees, if any, shall be
              non-refundable.
            </li>
          </ul>

          <h4 className="text-xl font-semibold tracking-tight text-black mb-3 mt-6">
            3.3 Mode of Refund
          </h4>
          <p className="text-black/55 leading-[1.8]">
            Refunds will be processed back to the original payment method (bank account, UPI, or
            card) from which the payment was originally made.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            4. Amendments to This Policy
          </h3>
          <p className="text-black/55 leading-[1.8]">
            MIA reserves the right to amend, modify, or update this Policy at any
            time. All amendments shall be published on the Platform and communicated to registered
            Clients via email at least 15 (fifteen) days prior to the update taking effect.
            Continued use of the Platform after publication of amendments constitutes your
            irrevocable acceptance of the amended Policy.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            5. Contact Information
          </h3>
          <p className="text-black/55 leading-[1.8] mb-6">
            For refund queries, cancellation requests, or any questions regarding this Policy,
            please contact:
          </p>
          <div className="border border-black/5 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
                  Compliance Officer
                </span>
                <p className="text-black mt-1">Bharat Makkar</p>
              </div>
              <div>
                <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
                  Email
                </span>
                <p className="text-black mt-1">compliance@mahir.in</p>
              </div>
              <div>
                <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
                  Phone
                </span>
                <p className="text-black mt-1">+91 9084945151</p>
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
                  Resolution Timeline
                </span>
                <p className="text-black mt-1">Within 30 days from date of receipt of complaint</p>
              </div>
              <div>
                <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
                  Grievance Escalation
                </span>
                <p className="text-black mt-1">
                  If your refund or cancellation grievance is not resolved within 30 days, you may
                  escalate it to SEBI SCORES (scores.gov.in) or approach the competent courts at
                  Pune, Maharashtra, India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalPageShell>
  );
}
