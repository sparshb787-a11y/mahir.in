import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/cancellation")({
  component: CancellationPolicy,
  head: () => ({
    meta: [
      { title: "Cancellation Policy | MAHIR Group" },
      { name: "description", content: "Cancellation Policy for MAHIR Group Investment Advisers Private Limited." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/cancellation" }],
  }),
});

function CancellationPolicy() {
  return (
    <div style={pageStyles.root} className="bg-white">
      <SiteHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1220] leading-[1.05] tracking-tight mb-4 font-serif">
          CANCELLATION POLICY
        </h1>
        <h2 className="text-xl md:text-2xl text-[#5b6067] mb-8 font-serif">
          Advisory Engagement Cancellation & Cooling-Off Framework
        </h2>
        
        <div className="prose prose-lg max-w-none text-[#0B1220]">
          <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm">
            <p><strong>Company Name:</strong> MAHIR Investment Advisers Private Limited</p>
            <p><strong>CIN:</strong> U66190PN2025PTC244016</p>
            <p><strong>SEBI Reg. No.:</strong> INA000022668</p>
            <p><strong>SEBI Reg. Type:</strong> Investment Adviser (Non-Individual)</p>
            <p><strong>Registration Validity:</strong> June 01, 2026 — Perpetual</p>
            <p><strong>Registered Office:</strong> PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
            <p><strong>Website:</strong> www.mahiradvisers.com</p>
            <p><strong>Principal Officer:</strong> Yash Mahavir Bedmuttha (Phone No.: +91 9084945151)</p>
            <p><strong>Compliance Officer:</strong> Bharat Makkar (Phone No.: +91 9084945151)</p>
            <p><strong>Version:</strong> 1.0 | <strong>Effective Date:</strong> June 01, 2026</p>
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-4">1. INTRODUCTION</h3>
          <p className="mb-4">This Cancellation Policy ('Policy') governs the terms under which clients of MAHIR Investment Advisers Private Limited ('MIA (MAHIR Invest)', 'Company', 'we', 'us', 'our') may cancel their advisory engagement. This Policy is issued in compliance with the SEBI (Investment Advisers) Regulations, 2013 ('IA Regulations'), applicable SEBI Circulars, the Consumer Protection Act, 2019, and the Information Technology Act, 2000.</p>
          <p className="mb-4">This Policy shall be read in conjunction with the Refund Policy, Terms and Conditions, Client Agreement, Privacy Policy, and SEBI Disclosures, all of which are incorporated herein by reference and form an integral part of this Agreement.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">2. DEFINITIONS</h3>
          <p className="mb-4">In this Policy, the following expressions shall have the meanings assigned to them below:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>"Advisory Fee"</strong> means the fee charged by MIA (MAHIR Invest) for rendering investment advisory services, whether on a fixed fee basis or as a percentage of Assets Under Advice (AUA), as agreed upon in the Client Agreement.</li>
            <li><strong>"Subscription Plan"</strong> means any periodic (monthly, quarterly, semi-annual, or annual) advisory service plan offered by MIA (MAHIR Invest) through the Platform.</li>
            <li><strong>"Cooling-Off Period"</strong> means the initial period following the execution of the Client Agreement during which the Client may terminate the engagement without penalty, as prescribed under SEBI IA Regulations.</li>
            <li><strong>"Client Agreement"</strong> means the formal agreement executed between MIA (MAHIR Invest) and the Client as mandated under SEBI IA Regulations, 2013.</li>
            <li><strong>"Platform"</strong> collectively means the MIA (MAHIR Invest) mobile application and website (www.mahiradvisers.com) and all associated digital interfaces.</li>
            <li><strong>"Services"</strong> means investment advisory services, portfolio guidance, financial planning content, risk profiling, and any other offerings provided by MIA (MAHIR Invest) through the Platform.</li>
            <li><strong>"Applicable Laws"</strong> means the SEBI Act, 1992; SEBI (IA) Regulations, 2013; SEBI Circulars; Consumer Protection Act, 2019; Information Technology Act, 2000; and all other applicable laws, rules, and regulations of India in force from time to time.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">3. RIGHT TO CANCEL</h3>
          <p className="mb-4">Clients can cancel their subscription at any time during the subscription period by providing a written request to compliance@mahiradvisers.com or through the Platform settings.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">4. CANCELLATION BY MIA (MAHIR Invest)</h3>
          <p className="mb-4">MIA (MAHIR Invest) reserves the right to cancel or terminate the advisory engagement with a Client under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Non-compliance by the Client with KYC/AML requirements or provision of false/misleading information.</li>
            <li>Non-payment of advisory fees within the stipulated due date after reasonable reminders.</li>
            <li>Client's conduct that is in violation of Applicable Laws or poses a regulatory risk to MIA (MAHIR Invest).</li>
            <li>Regulatory direction or order from SEBI or any competent authority requiring cessation of services.</li>
            <li>Any event of force majeure making continued advisory engagement impracticable.</li>
          </ul>
          <p className="mb-4">In the event of cancellation by MIA (MAHIR Invest), the Client shall be given at least 30 (thirty) days' prior written notice (except in cases of regulatory directives or fraud), and a pro-rata refund of any unused prepaid fees shall be processed in accordance with the Refund Policy.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">5. AMENDMENTS TO THIS POLICY</h3>
          <p className="mb-4">MIA (MAHIR Invest) reserves the right to amend, modify, or update this Policy at any time. All amendments shall be published on the Platform and communicated to registered Clients via email at least 15 (fifteen) days prior to the update taking effect. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Policy. If you do not agree with the amended Policy, you must terminate your engagement with MIA (MAHIR Invest) by providing 30 days written notice to compliance@mahiradvisers.com.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">6. CONTACT INFORMATION</h3>
          <p className="mb-4">For cancellation requests or any questions regarding this Policy, please contact:</p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p><strong>Compliance Officer:</strong> Bharat Makkar</p>
            <p><strong>Email:</strong> compliance@mahiradvisers.com</p>
            <p><strong>Phone:</strong> +91 9084945151</p>
            <p className="mt-4"><strong>Registered Office:</strong> MAHIR Investment Advisers Private Limited</p>
            <p>PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
            <p className="mt-4"><strong>Resolution Timeline:</strong> Within 30 days from date of receipt of complaint</p>
            <p><strong>Grievance Escalation:</strong> If your cancellation grievance is not resolved within 30 days, you may escalate it to SEBI SCORES (scores.gov.in) or approach the competent courts at Pune, Maharashtra, India.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
