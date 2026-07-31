import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "../components/layout";

export const Route = createFileRoute("/cancellation")({
  component: CancellationPolicy,
  head: () => ({
    meta: [
      { title: "Cancellation Policy | MAHIR Group" },
      {
        name: "description",
        content: "Cancellation Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:title", content: "Cancellation Policy | MAHIR Group" },
      {
        property: "og:description",
        content: "Cancellation Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:url", content: "https://mahir.in/cancellation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cancellation Policy | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Cancellation Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/cancellation" }],
  }),
});

function CancellationPolicy() {
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
      title="Cancellation Policy"
      subtitle="Advisory Engagement Cancellation & Cooling-Off Framework"
      meta={meta}
    >
      <div className="space-y-10">
        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            1. Introduction
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            This Cancellation Policy ('Policy') governs the terms under which clients of MAHIR
            Investment Advisers Private Limited ('MIA (MAHIR Invest)', 'Company', 'we', 'us', 'our')
            may cancel their advisory engagement. This Policy is issued in compliance with the SEBI
            (Investment Advisers) Regulations, 2013 ('IA Regulations'), applicable SEBI Circulars,
            the Consumer Protection Act, 2019, and the Information Technology Act, 2000.
          </p>
          <p className="text-black/55 leading-[1.8]">
            This Policy shall be read in conjunction with the Refund Policy, Terms and Conditions,
            Client Agreement, Privacy Policy, and SEBI Disclosures, all of which are incorporated
            herein by reference and form an integral part of this Agreement.
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
            3. Right to Cancel
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            Clients can cancel their subscription at any time during the subscription period by
            providing a written request to compliance@mahir.in or through the Platform
            settings.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            4. Cancellation by MIA (MAHIR Invest)
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            MIA reserves the right to cancel or terminate the advisory engagement
            with a Client under the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              Non-compliance by the Client with KYC/AML requirements or provision of
              false/misleading information.
            </li>
            <li>
              Non-payment of advisory fees within the stipulated due date after reasonable
              reminders.
            </li>
            <li>
              Client's conduct that is in violation of Applicable Laws or poses a regulatory risk to
              MIA.
            </li>
            <li>
              Regulatory direction or order from SEBI or any competent authority requiring cessation
              of services.
            </li>
            <li>Any event of force majeure making continued advisory engagement impracticable.</li>
          </ul>
          <p className="text-black/55 leading-[1.8] mt-4">
            In the event of cancellation by MIA, the Client shall be given at least
            30 (thirty) days' prior written notice (except in cases of regulatory directives or
            fraud), and a pro-rata refund of any unused prepaid fees shall be processed in
            accordance with the Refund Policy.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            5. Amendments to This Policy
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
            6. Contact Information
          </h3>
          <p className="text-black/55 leading-[1.8] mb-6">
            For cancellation requests or any questions regarding this Policy, please contact:
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
                  If your cancellation grievance is not resolved within 30 days, you may escalate it
                  to SEBI SCORES (scores.gov.in) or approach the competent courts at Pune,
                  Maharashtra, India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalPageShell>
  );
}
