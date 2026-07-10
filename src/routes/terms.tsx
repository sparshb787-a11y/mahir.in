import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/terms")({
  component: TermsAndConditions,
  head: () => ({
    meta: [
      { title: "Terms and Conditions | MAHIR Group" },
      { name: "description", content: "Terms and Conditions for MAHIR Group Investment Advisers Private Limited." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/terms" }],
  }),
});

function TermsAndConditions() {
  return (
    <div style={pageStyles.root} className="bg-white">
      <SiteHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1220] leading-[1.05] tracking-tight mb-4 font-serif">
          TERMS &amp; CONDITIONS
        </h1>
        <h2 className="text-xl md:text-2xl text-[#5b6067] mb-8 font-serif">
          User Agreement — MAHIR Investment Advisers (MIA) App & Web Platform
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

          <h3 className="text-2xl font-semibold mt-10 mb-4">1. INTRODUCTION AND ACCEPTANCE OF TERMS</h3>
          <p className="mb-4">These Terms and Conditions ('Terms', 'Agreement') constitute a legally binding contract between you ('Client', 'User', 'you') and MAHIR Investment Advisers Private Limited ('MIA', 'Company', 'we', 'us', 'our'), a company incorporated under the Companies Act, 2013 and registered as an Investment Adviser with the Securities and Exchange Board of India ('SEBI') under the SEBI (Investment Advisers) Regulations, 2013 ('IA Regulations').</p>
          <p className="mb-4">By accessing, downloading, installing, or using the MIA mobile application ('App') or website ('Platform'), or availing any services offered thereon, you agree to be bound by these Terms in their entirety. If you do not agree with any part of these Terms, please immediately discontinue use of the Platform and Services.</p>
          <p className="mb-4">These Terms shall be read in conjunction with the Privacy Policy, Disclaimers, SEBI Disclosures, and the Investor Charter, all of which are incorporated herein by reference and form an integral part of this Agreement.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">2. DEFINITIONS</h3>
          <p className="mb-4">In these Terms, the following expressions shall have the meanings assigned to them below:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>"Services"</strong> means investment advisory services, portfolio guidance, financial planning content, risk profiling, educational resources, and any other offerings provided by MIA through the Platform.</li>
            <li><strong>"Platform"</strong> collectively means the MIA mobile application and website (www.mahiradvisers.com) and all associated digital interfaces.</li>
            <li><strong>"Client Agreement"</strong> means the separate formal agreement executed between MIA and each Client as mandated under SEBI IA Regulations, 2013.</li>
            <li><strong>"KYC"</strong> means Know Your Customer documentation and verification as required under applicable SEBI, PMLA, and RBI guidelines.</li>
            <li><strong>"AUA"</strong> means Assets Under Advice the aggregate value of the client's investment portfolio for which MIA provides advisory services.</li>
            <li><strong>"Investment Advice"</strong> means advice relating to investing in, purchasing, selling, or otherwise dealing in securities or investment products, or advice on investment portfolio, as defined under SEBI IA Regulations.</li>
            <li><strong>"Principal Officer"</strong> means Yash Mahavir Bedmuttha, the key management person designated and registered with SEBI for MIA.</li>
            <li><strong>"Applicable Laws"</strong> means the SEBI Act, 1992; SEBI (IA) Regulations, 2013; SEBI Circulars; Prevention of Money Laundering Act, 2002; Information Technology Act, 2000; Digital Personal Data Protection Act, 2023; and all other applicable laws, rules, and regulations of India in force from time to time.</li>
            <li><strong>"SEBI"</strong> means the Securities and Exchange Board of India constituted under the SEBI Act, 1992.</li>
            <li><strong>"PMLA"</strong> means the Prevention of Money Laundering Act, 2002 and the rules framed thereunder.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">3. ELIGIBILITY CRITERIA</h3>
          <p className="mb-4">To use the Platform and avail MIA's Services, you must satisfy all of the following conditions:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Be a natural person of at least 18 years of age possessing legal capacity to enter into binding contracts, or a body corporate, LLP, partnership firm, HUF, AOP, or trust duly authorized under its constitutional documents.</li>
            <li>Not be a person barred or prohibited from receiving investment advisory services under any court order, regulatory direction, or applicable law.</li>
            <li>Complete full KYC verification as mandated by SEBI and PMLA guidelines before availing investment advisory services.</li>
            <li>Provide accurate, complete, and up-to-date information including income details, net worth, investment horizon, risk tolerance, and financial goals.</li>
            <li>Reside and be domiciled in India. Non-resident clients are subject to additional regulatory requirements and must notify MIA of their NRI/OCI/PIO status at onboarding.</li>
            <li>Not be a Politically Exposed Person (PEP) or a close associate of a PEP unless MIA expressly agrees to onboard you after conducting Enhanced Due Diligence.</li>
          </ul>
          <p className="mb-4 text-sm italic">Disclaimer: MIA reserves the right to decline or terminate services to any person at its sole discretion and without assigning reasons, subject to applicable regulatory guidelines.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">4. NATURE AND SCOPE OF SERVICES</h3>
          <h4 className="text-xl font-semibold mt-6 mb-2">4.1 Investment Advisory Services</h4>
          <p className="mb-4">MIA provides personalized investment advisory services as a SEBI-registered Investment Adviser. All advice is based on your risk profile, financial situation, investment objectives, investment horizon, and other relevant parameters disclosed by you. MIA does not exercise discretionary management over client portfolios; all final investment decisions rest with the client.</p>

          <h4 className="text-xl font-semibold mt-6 mb-2">4.2 Services Offered</h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Personal investment planning and goal-based financial advisory.</li>
            <li>Portfolio review, monitoring, and rebalancing recommendations.</li>
            <li>Asset allocation guidance across equity, debt, mutual funds, ETFs, and other SEBI-regulated securities.</li>
            <li>Research-based investment recommendations with written rationale.</li>
            <li>Comprehensive financial planning including retirement planning, wealth creation, and goal-based planning.</li>
            <li>Risk profiling and suitability assessment.</li>
            <li>Financial planning tools, portfolio trackers, and calculators on the Platform.</li>
            <li>Investor education content on financial markets, products, and regulatory matters.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">4.3 Services NOT Offered</h4>
          <p className="mb-4">MIA does NOT offer the following services, and nothing on the Platform shall be construed as:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Portfolio Management Services (PMS) requiring a separate SEBI registration.</li>
            <li>Stock broking, trading, or order execution services.</li>
            <li>Research Analyst services (unless separately registered with SEBI).</li>
            <li>Insurance advisory, distribution, or brokerage services.</li>
            <li>Commodity trading advisory or futures/options advisory.</li>
            <li>Guaranteed returns products or capital protection schemes.</li>
            <li>Any service outside the scope of SEBI (IA) Regulations, 2013.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">5. CLIENT ONBOARDING AND KYC REQUIREMENTS</h3>
          <p className="mb-4">In strict accordance with SEBI (IA) Regulations, 2013 and PMLA, 2002, the following onboarding procedure applies:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Full KYC Mandate:</strong> All clients must complete full KYC verification before receiving any investment advisory services from MIA.</li>
            <li><strong>Required Documents:</strong> PAN card, Aadhaar card (for address/identity proof), recent passport-size photograph, active bank account details (cancelled cheque), income proof (latest ITR, Form 16, or salary slip), and net worth certificate where applicable.</li>
            <li><strong>Risk Assessment:</strong> MIA shall conduct a comprehensive Risk Profiling of each client covering risk tolerance, investment horizon, financial goals, and existing investments prior to providing investment advice.</li>
            <li><strong>Client Agreement:</strong> Each client shall execute a formal Client Agreement as mandated by SEBI before commencement of any advisory services. The Client Agreement shall specify fee structure, scope of services, and rights and obligations of both parties.</li>
            <li><strong>Updates:</strong> Any material change in the client's financial situation, employment, risk appetite, or investment objectives must be promptly communicated to MIA in writing or via the Platform.</li>
            <li><strong>Compliance Cycles:</strong> MIA shall conduct periodic re-KYC, risk profile reassessment, and portfolio reviews in accordance with SEBI guidelines and the Client Agreement.</li>
          </ul>
          <p className="mb-4 text-sm italic">Note: Clients who fail to complete KYC or provide requisite documents shall not be eligible to receive advisory services until compliance is achieved.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">6. FEE STRUCTURE AND PAYMENT TERMS</h3>
          <h4 className="text-xl font-semibold mt-6 mb-2">6.1 Fee Structure</h4>
          <p className="mb-4">MIA charges fees for investment advisory services in strict compliance with SEBI (IA) Regulations, 2013. Advisory fees shall not exceed the limits prescribed by SEBI from time to time:</p>
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left font-semibold">Fee Mode</th>
                <th className="py-2 px-4 text-left font-semibold">Description</th>
                <th className="py-2 px-4 text-left font-semibold">SEBI Maximum Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Fixed Fee</td>
                <td className="py-2 px-4">Predetermined flat fee per annum per client/family</td>
                <td className="py-2 px-4">INR 1,25,000/- per annum per family</td>
              </tr>
              <tr>
                <td className="py-2 px-4">AUA-Based Fee</td>
                <td className="py-2 px-4">Percentage of Assets Under Advice per annum</td>
                <td className="py-2 px-4">2.5% per annum of AUA</td>
              </tr>
            </tbody>
          </table>

          <h4 className="text-xl font-semibold mt-6 mb-2">6.2 Payment Terms</h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>All fees are payable as per the schedule specified in the individual Client Agreement.</li>
            <li>All payments must be made by NEFT/RTGS/UPI/online transfer directly to MIA's registered and disclosed bank account. Cash payments are strictly not accepted.</li>
            <li>GST at the applicable rate and all other statutory taxes shall be charged over and above the advisory fee.</li>
            <li>Fee receipts and GST invoices shall be issued for all payments within 7 working days.</li>
            <li>MIA does not accept any commission, trail fee, referral fee, or any other remuneration from product manufacturers, fund houses, or any third party in connection with advice given to clients.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">6.3 Refund Policy</h4>
          <p className="mb-4">Advisory fees once paid are non-refundable, except in the following circumstances: (a) service failure directly and solely attributable to MIA and established after due inquiry; (b) as required under applicable law or SEBI directives. All fee disputes must be raised with the Compliance Officer within 30 calendar days of the relevant invoice date.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">7. CLIENT OBLIGATIONS AND REPRESENTATIONS</h3>
          <p className="mb-4">As a Client of MIA, you represent, warrant, and unconditionally agree that:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>All information provided during onboarding, KYC, risk profiling, and thereafter is truthful, accurate, complete, and not misleading.</li>
            <li>You will promptly notify MIA in writing of any material change in your financial circumstances, employment, risk appetite, or investment goals.</li>
            <li>You understand and accept that investment advice is based entirely on information provided by you, and inaccurate or incomplete information may result in unsuitable advice for which MIA bears no liability.</li>
            <li>You shall not use the Platform or Services for any unlawful purpose including money laundering, tax evasion, fraud, market manipulation, or circumvention of regulatory requirements.</li>
            <li>You shall not attempt to reverse engineer, decompile, disassemble, or compromise any software or security component of the Platform.</li>
            <li>Your login credentials, OTP, password, and account access are personal and non-transferable. You shall be solely responsible for all activities conducted through your account.</li>
            <li>You shall maintain the confidentiality of all investment advice, research, and communications received from MIA and shall not share, publish, or distribute such content without MIA's prior written consent.</li>
            <li>You acknowledge that investment in securities markets involves market risk and you are capable of bearing such risk based on your disclosed financial profile.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">8. INTELLECTUAL PROPERTY RIGHTS</h3>
          <p className="mb-4">All content on the Platform including but not limited to text, graphics, logos, icons, images, software code, research reports, financial models, algorithms, and educational contentis the exclusive intellectual property of MIA or its licensors and is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian intellectual property laws.</p>
          <p className="mb-4">You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for your personal investment advisory and financial planning purposes. You shall not reproduce, modify, distribute, publicly display, sublicense, or create derivative works from any content without the prior written consent of MIA.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">9. DISCLAIMER OF LIABILITY</h3>
          <p className="mb-4">To the fullest extent permitted by applicable law, MIA, its directors, officers, employees, and agents shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Any investment losses arising from advice provided in good faith based on information furnished by the client.</li>
            <li>Market risks, systemic risks, geopolitical risks, regulatory changes, or force majeure events.</li>
            <li>Decisions made by the client contrary to, or independent of, advice given by MIA.</li>
            <li>Interruption, unavailability, errors, or data loss arising from Platform downtime or technical failures.</li>
            <li>Third-party services, websites, financial products, or platforms accessible through or linked from our Platform.</li>
            <li>Tax consequences of investment decisions.</li>
          </ul>
          <p className="mb-4 font-semibold">Limitation: MIA's total aggregate liability under or in connection with these Terms, if any, shall not exceed the advisory fees actually paid by you to MIA in the six months immediately preceding the event giving rise to the claim.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">10. GRIEVANCE REDRESSAL MECHANISM</h3>
          <p className="mb-4">In accordance with SEBI IA Regulations and SEBI Circular on investor grievance redressal:</p>
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left font-semibold">Level</th>
                <th className="py-2 px-4 text-left font-semibold">Authority</th>
                <th className="py-2 px-4 text-left font-semibold">Contact & TAT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Level 1</td>
                <td className="py-2 px-4">Compliance Officer</td>
                <td className="py-2 px-4">compliance@mahiradvisers.com | +91 9084945151<br/>TAT: 30 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Level 2</td>
                <td className="py-2 px-4">Principal Officer</td>
                <td className="py-2 px-4">admin@mahiradvisers.com | +91 9084945151<br/>TAT: 15 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Level 3</td>
                <td className="py-2 px-4">SEBI SCORES Portal</td>
                <td className="py-2 px-4">scores.gov.in | 1800 266 7575</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Level 4</td>
                <td className="py-2 px-4">SEBI ODR Platform</td>
                <td className="py-2 px-4">smartodr.in</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Level 5</td>
                <td className="py-2 px-4">SEBI Ombudsman / Court</td>
                <td className="py-2 px-4">As per applicable law</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-semibold mt-10 mb-4">11. ANTI-MONEY LAUNDERING COMPLIANCE</h3>
          <p className="mb-4">MIA is committed to full compliance with PMLA, 2002 and SEBI's AML/CFT guidelines. MIA maintains robust Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) procedures for high-risk clients and transactions.</p>
          <p className="mb-4"><strong>Regulatory Mandate:</strong> MIA may report suspicious transactions to the Financial Intelligence Unit India (FIU-IND) and may be required by law to share client information with regulatory or law enforcement authorities without prior notice.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">12. GOVERNING LAW AND JURISDICTION</h3>
          <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of courts located in Pune, Maharashtra, subject to arbitration provisions contained in the individual Client Agreement. Disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996 as specified in the Client Agreement.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">13. AMENDMENTS TO TERMS</h3>
          <p className="mb-4">MIA reserves the right to amend, modify, or update these Terms at any time with or without prior notice. All amendments shall be published on the Platform. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Terms. If you do not agree with amended Terms, you must terminate your engagement with MIA by providing 30 days written notice to compliance@mahiradvisers.com.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">14. MISCELLANEOUS PROVISIONS</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Severability:</strong> If any provision of these Terms is found to be invalid, void, or unenforceable by a competent court, such provision shall be deemed severed and the remaining provisions shall continue in full force and effect.</li>
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, Disclaimers, Client Agreement, and SEBI Disclosures, constitute the entire agreement between you and MIA, superseding all prior agreements, representations, and understandings.</li>
            <li><strong>Waiver:</strong> Failure by MIA to enforce any provision of these Terms on one occasion shall not constitute a waiver of that provision or any right on any subsequent occasion.</li>
            <li><strong>Assignment:</strong> You may not assign, transfer, or sub-license your rights or obligations under these Terms without MIA's prior written consent. MIA may assign its rights to a successor entity following regulatory approvals.</li>
            <li><strong>Force Majeure:</strong> MIA shall not be liable for failure or delay in performance due to circumstances beyond its reasonable control including acts of God, pandemic, war, regulatory action, or internet failure.</li>
          </ul>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

