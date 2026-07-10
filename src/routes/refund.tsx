import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/refund")({
  component: RefundPolicy,
  head: () => ({
    meta: [
      { title: "Refund Policy | MAHIR Group" },
      { name: "description", content: "Refund Policy for MAHIR Group Investment Advisers Private Limited." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/refund" }],
  }),
});

function RefundPolicy() {
  return (
    <div style={pageStyles.root} className="bg-white">
      <SiteHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1220] leading-[1.05] tracking-tight mb-4 font-serif">
          REFUND POLICY
        </h1>
        <h2 className="text-xl md:text-2xl text-[#5b6067] mb-8 font-serif">
          Advisory Fee Refund Framework
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
          <p className="mb-4">This Refund Policy ('Policy') governs the terms under which clients of MAHIR Investment Advisers Private Limited ('MIA (MAHIR Invest)', 'Company', 'we', 'us', 'our') may request a refund of advisory fees paid. This Policy is issued in compliance with the SEBI (Investment Advisers) Regulations, 2013 ('IA Regulations'), applicable SEBI Circulars, the Consumer Protection Act, 2019, and the Information Technology Act, 2000.</p>
          <p className="mb-4">This Policy shall be read in conjunction with the Cancellation Policy, Terms and Conditions, Client Agreement, Privacy Policy, and SEBI Disclosures, all of which are incorporated herein by reference and form an integral part of this Agreement.</p>

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

          <h3 className="text-2xl font-semibold mt-10 mb-4">3. REFUND POLICY</h3>
          <p className="mb-4">This section details the refund eligibility, computation methodology, and processing timelines.</p>

          <h4 className="text-xl font-semibold mt-6 mb-2">3.1 Refund Eligibility</h4>
          <table className="min-w-full bg-white border border-gray-200 mb-6 text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left font-semibold">Scenario</th>
                <th className="py-2 px-4 text-left font-semibold">Refund Entitlement</th>
                <th className="py-2 px-4 text-left font-semibold">Processing Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Cooling-off period cancellation (within 7 days)</td>
                <td className="py-2 px-4">Full refund (100%)</td>
                <td className="py-2 px-4">Within 15 business days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Cancellation before advisory services are rendered</td>
                <td className="py-2 px-4">Full refund (100%) less applicable payment gateway charges</td>
                <td className="py-2 px-4">Within 15 business days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Cancellation after partial advisory services rendered</td>
                <td className="py-2 px-4">Pro-rata refund for the unexpired period</td>
                <td className="py-2 px-4">Within 21 business days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Cancellation after full advisory services rendered</td>
                <td className="py-2 px-4">No refund applicable</td>
                <td className="py-2 px-4">N/A</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Cancellation due to Client's regulatory non-compliance</td>
                <td className="py-2 px-4">No refund applicable</td>
                <td className="py-2 px-4">N/A</td>
              </tr>
            </tbody>
          </table>

          <h4 className="text-xl font-semibold mt-6 mb-2">3.2 Pro-Rata Refund Computation</h4>
          <p className="mb-4">Where a pro-rata refund is applicable, the refund amount shall be calculated as follows:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm font-mono text-center">
            Refund = Total Fee Paid − (Daily Fee Rate × Number of Days Services Were Availed)<br/><br/>
            Where Daily Fee Rate = Total Fee Paid ÷ Total Number of Days in the Subscription Period
          </div>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>The date of cancellation request shall be considered as the last day of service for refund computation purposes.</li>
            <li>Any applicable taxes (GST) paid shall be refunded proportionally along with the advisory fee refund.</li>
            <li>Payment gateway charges and transaction processing fees, if any, shall be non-refundable.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">3.3 Mode of Refund</h4>
          <p className="mb-4">Refunds will be processed back to the original payment method (bank account, UPI, or card) from which the payment was originally made.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">4. AMENDMENTS TO THIS POLICY</h3>
          <p className="mb-4">MIA (MAHIR Invest) reserves the right to amend, modify, or update this Policy at any time. All amendments shall be published on the Platform and communicated to registered Clients via email at least 15 (fifteen) days prior to the update taking effect. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Policy. If you do not agree with the amended Policy, you must terminate your engagement with MIA (MAHIR Invest) by providing 30 days written notice to compliance@mahiradvisers.com.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">5. CONTACT INFORMATION</h3>
          <p className="mb-4">For refund queries, cancellation requests, or any questions regarding this Policy, please contact:</p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p><strong>Compliance Officer:</strong> Bharat Makkar</p>
            <p><strong>Email:</strong> compliance@mahiradvisers.com</p>
            <p><strong>Phone:</strong> +91 9084945151</p>
            <p className="mt-4"><strong>Registered Office:</strong> MAHIR Investment Advisers Private Limited</p>
            <p>PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
            <p className="mt-4"><strong>Resolution Timeline:</strong> Within 30 days from date of receipt of complaint</p>
            <p><strong>Grievance Escalation:</strong> If your refund or cancellation grievance is not resolved within 30 days, you may escalate it to SEBI SCORES (scores.gov.in) or approach the competent courts at Pune, Maharashtra, India.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
