import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | MAHIR Group" },
      { name: "description", content: "Privacy Policy for MAHIR Group Investment Advisers Private Limited." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/privacy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <div style={pageStyles.root} className="bg-white">
      <SiteHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1220] leading-[1.05] tracking-tight mb-4 font-serif">
          PRIVACY POLICY
        </h1>
        <h2 className="text-xl md:text-2xl text-[#5b6067] mb-8 font-serif">
          Compliant with: DPDP Act, 2023 & IT (SPDI) Rules, 2011
        </h2>
        
        <div className="prose prose-lg max-w-none text-[#0B1220]">
          <div className="bg-gray-50 p-6 rounded-lg mb-8 text-sm">
            <p><strong>Version:</strong> 1.0 | <strong>Effective Date:</strong> June 01, 2026</p>
            <p><strong>Data Fiduciary:</strong> MAHIR Investment Advisers Private Limited</p>
            <p><strong>CIN:</strong> U66190PN2025PTC244016</p>
            <p><strong>SEBI Reg. No.:</strong> INA000022668</p>
            <p><strong>Registered Office:</strong> PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
            <p><strong>Data Protection Officer (DPO):</strong> Bharat Makkar</p>
            <p><strong>Email:</strong> compliance@mahiradvisers.com</p>
            <p><strong>Phone No:</strong> +91 9084945151</p>
            <p><strong>Grievance Officer:</strong> Bharat Makkar | compliance@mahiradvisers.com</p>
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-4">1. ABOUT THIS PRIVACY POLICY</h3>
          <p className="mb-4">MAHIR Investment Advisers Private Limited ('MIA', 'we', 'us', 'our') is committed to protecting the privacy and personal data of its clients, prospective clients, and users of the MIA App and Website ('Platform').</p>
          <p className="mb-4 font-semibold">Legal Compliance Framework:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Digital Personal Data Protection Act, 2023 ('DPDP Act')</li>
            <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ('IT SPDI Rules')</li>
            <li>Information Technology Act, 2000;</li>
            <li>SEBI (Investment Advisers) Regulations, 2013 and applicable SEBI Circulars;</li>
            <li>Prevention of Money Laundering Act, 2002 and AML/KYC guidelines;</li>
            <li>All other applicable laws and regulations of India.</li>
          </ul>
          <p className="mb-4">This Policy describes how MIA collects, uses, processes, stores, shares, and protects your personal data, and sets out the rights available to you as a Data Principal under applicable law. This Policy forms part of the overall agreement between you and MIA and should be read alongside the Terms and Conditions and Client Agreement.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">2. PERSONAL DATA WE COLLECT</h3>
          <h4 className="text-xl font-semibold mt-6 mb-2">2.1 Categories of Personal Data</h4>
          <p className="mb-4">We collect the following categories of personal data from you directly and through your use of the Platform:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Identity Data:</strong> Full legal name, PAN card number, Aadhaar number (masked/tokenized as permitted), date of birth, photograph, and specimen signature.</li>
            <li><strong>Contact Data:</strong> Residential and correspondence address, email address, mobile number, and emergency contact details.</li>
            <li><strong>Financial Data:</strong> Gross annual income, net worth, bank account details (for fee payments), investment portfolio information, existing liabilities, tax status, and FATCA/CRS declarations.</li>
            <li><strong>KYC & AML Data:</strong> Documentary evidence for KYC compliance, source of funds and wealth, politically exposed person (PEP) status, and sanctions screening data.</li>
            <li><strong>Risk Profile Data:</strong> Risk tolerance questionnaire responses, investment objectives, investment horizon, prior investment experience, and financial goals.</li>
            <li><strong>Platform Usage Data:</strong> IP address, device identifiers, browser type and version, operating system, pages visited, session duration, click-stream data, and referral URLs.</li>
            <li><strong>Communication Data:</strong> Queries, complaints, call recordings (with consent), correspondence, and meeting notes.</li>
            <li><strong>Technical Data:</strong> App crash reports, error logs, and performance diagnostic metrics.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">2.2 Sensitive Personal Data or Information (SPDI)</h4>
          <p className="mb-4">The following categories constitute SPDI under the IT SPDI Rules, 2011 and are collected only with your explicit prior consent:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Financial information:</strong> Bank account numbers, credit card/debit card details (solely for fee payment), income details, and net worth information.</li>
            <li><strong>Biometric data:</strong> Where applicable and legally permitted (e.g., for eKYC purposes).</li>
            <li><strong>Aadhaar details:</strong> As permitted under the Aadhaar (Targeted Delivery) Act, 2016 and applicable guidelines.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">2.3 Data We Do Not Collect</h4>
          <p className="mb-4">MIA does not collect racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, health data (unless specifically relevant for insurance advisory, which MIA does not presently offer), genetic data, or sexual orientation data.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">3. PURPOSES AND LEGAL BASIS FOR PROCESSING</h3>
          <p className="mb-4">This section details how your data is used and the legal justification for each use.</p>
          <table className="min-w-full bg-white border border-gray-200 mb-6 text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left font-semibold">Purpose of Processing</th>
                <th className="py-2 px-4 text-left font-semibold">Data Categories Used</th>
                <th className="py-2 px-4 text-left font-semibold">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Client onboarding & KYC completion</td>
                <td className="py-2 px-4">Identity, Contact, KYC, Financial</td>
                <td className="py-2 px-4">Legal obligation (SEBI IA Reg., PMLA)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Providing personalized investment advice</td>
                <td className="py-2 px-4">Risk profile, Financial, Usage data</td>
                <td className="py-2 px-4">Contract performance</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">AML/CFT compliance & suspicious transaction reporting</td>
                <td className="py-2 px-4">KYC, Identity, Transaction data</td>
                <td className="py-2 px-4">Legal obligation (PMLA, SEBI)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Fee collection and billing</td>
                <td className="py-2 px-4">Contact, Financial, Bank data</td>
                <td className="py-2 px-4">Contract performance</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Platform improvement & analytics</td>
                <td className="py-2 px-4">Usage, Technical data</td>
                <td className="py-2 px-4">Legitimate interest / Consent</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Regulatory reporting to SEBI, AMFI, FIU-IND</td>
                <td className="py-2 px-4">Identity, KYC, Financial</td>
                <td className="py-2 px-4">Legal obligation</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Marketing communications (opt-in only)</td>
                <td className="py-2 px-4">Contact, Usage data</td>
                <td className="py-2 px-4">Consent</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Customer support & grievance redressal</td>
                <td className="py-2 px-4">Communication data</td>
                <td className="py-2 px-4">Contract performance / Consent</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Internal audit & compliance</td>
                <td className="py-2 px-4">All relevant categories</td>
                <td className="py-2 px-4">Legal obligation / Legitimate interest</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-semibold mt-10 mb-4">4. DATA SHARING AND DISCLOSURE</h3>
          <p className="mb-4">MIA does not sell, rent, or trade your personal data to any third party for commercial purposes. We may share your data strictly on a need-to-know basis with the following:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Regulatory Authorities:</strong> SEBI, AMFI, Stock Exchanges, Depositories (NSDL/CDSL), Registrar and Transfer Agents, and other financial market regulators as required by law.</li>
            <li><strong>Financial Intelligence Unit — India (FIU-IND):</strong> for AML/CFT reporting obligations under PMLA.</li>
            <li><strong>KYC Registration Agencies (KRAs) and Central KYC Registry (CKYCRR):</strong> for KYC verification and record maintenance.</li>
            <li><strong>Technology Service Providers:</strong> Cloud hosting partners, IT vendors, and software service providers who process data strictly on MIA's behalf and are bound by written data processing agreements with equivalent security standards.</li>
            <li><strong>Professional Advisers:</strong> Statutory auditors, legal counsel, and tax advisers, subject to appropriate confidentiality obligations.</li>
            <li><strong>Legal Mandates:</strong> Courts, Tribunals, or Law Enforcement Authorities pursuant to a valid court order, summons, or statutory requirement.</li>
          </ul>
          <p className="mb-4">All third-party data processors are contractually bound to maintain security standards not lower than those maintained by MIA. Cross-border data transfers, if any, shall comply with provisions of the DPDP Act, 2023, including adequate safeguards.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">5. DATA RETENTION PERIODS</h3>
          <p className="mb-4">Data retention is governed by the longest period required by law or regulation.</p>
          <table className="min-w-full bg-white border border-gray-200 mb-6 text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left font-semibold">Data Category</th>
                <th className="py-2 px-4 text-left font-semibold">Retention Period</th>
                <th className="py-2 px-4 text-left font-semibold">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">KYC and Client Agreement records</td>
                <td className="py-2 px-4">Minimum 5 years post relationship cessation</td>
                <td className="py-2 px-4">SEBI IA Regulation 19, PMLA Rule 10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Financial transaction records</td>
                <td className="py-2 px-4">Minimum 10 years</td>
                <td className="py-2 px-4">PMLA, 2002 — Section 12</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Correspondence and complaints records</td>
                <td className="py-2 px-4">Minimum 5 years</td>
                <td className="py-2 px-4">SEBI IA Regulations</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Platform usage logs</td>
                <td className="py-2 px-4">12 months (rolling)</td>
                <td className="py-2 px-4">IT Act, 2000 / Legitimate interest</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Marketing data and consent records</td>
                <td className="py-2 px-4">Until withdrawal of consent</td>
                <td className="py-2 px-4">DPDP Act, 2023</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Call recordings (where applicable)</td>
                <td className="py-2 px-4">90 days unless subject to a dispute</td>
                <td className="py-2 px-4">SEBI / Legitimate interest</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4">Upon expiry of the applicable retention period, personal data shall be securely deleted or irreversibly anonymized in accordance with applicable law. Records subject to ongoing legal/regulatory proceedings shall be retained until resolution.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">6. DATA SECURITY MEASURES</h3>
          <p className="mb-4">MIA implements comprehensive technical and organizational security measures in accordance with IT SPDI Rules, 2011 and DPDP Act, 2023 to protect your personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Encryption:</strong> All data in transit is encrypted using TLS 1.2 or higher. Data at rest is encrypted using AES-256 encryption.</li>
            <li><strong>Access Controls:</strong> Role-based access controls (RBAC) ensuring data access is strictly limited to authorized personnel on a need-to-know basis.</li>
            <li><strong>Authentication:</strong> Multi-factor authentication (MFA) mandatory for all personnel accessing client data and for Platform login.</li>
            <li><strong>Security Audits:</strong> Regular security audits, vulnerability assessments, and penetration testing by qualified third-party security professionals.</li>
            <li><strong>Incident Response:</strong> Documented incident response procedures for data breach detection, containment, and notification.</li>
            <li><strong>Data Breach Notification:</strong> In the event of a personal data breach, MIA will notify the Data Protection Board of India and affected clients within the timelines prescribed under the DPDP Act, 2023.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-10 mb-4">7. COOKIE POLICY</h3>
          <p className="mb-4">The MIA Platform uses cookies and similar tracking technologies (web beacons, pixels, local storage) to provide a seamless user experience. Categories:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Strictly Necessary Cookies:</strong> Essential for core Platform functionality including login sessions, security tokens, and fraud prevention. These cannot be disabled without impacting Platform functionality.</li>
            <li><strong>Analytics Cookies:</strong> Used to understand Platform usage patterns, page performance, and user behaviour collected only with your explicit consent.</li>
            <li><strong>Preference Cookies:</strong> Used to remember your Platform settings and preferences collected with consent.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant financial content and updates collected only with opt-in consent.</li>
          </ul>
          <p className="mb-4">You may manage cookie preferences at any time through your browser settings or the Platform's cookie consent manager. Disabling non-essential cookies will not affect your ability to receive core advisory services.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">8. YOUR RIGHTS AS DATA PRINCIPAL</h3>
          <p className="mb-4">Under the DPDP Act, 2023 and applicable law, you have the following rights with respect to your personal data:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Right to Access:</strong> Obtain summary of personal data processed and processing activities undertaken (Written request to DPO).</li>
            <li><strong>Right to Correction:</strong> Request correction, completion, or updating of inaccurate/incomplete personal data (Written request to DPO).</li>
            <li><strong>Right to Erasure:</strong> Request deletion of personal data, subject to legal retention obligations and regulatory requirements (Written request to DPO).</li>
            <li><strong>Right to Grievance Redressal:</strong> Raise grievances about personal data processing with the Data Protection Officer (Email to compliance@mahiradvisers.com).</li>
            <li><strong>Right to Nominate:</strong> Nominate an individual to exercise data rights on your behalf in case of death or incapacity (Written request to DPO).</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing not based on legal obligation, without affecting prior lawful processing (Written request or Platform settings).</li>
          </ul>
          <p className="mb-4">Processing Timeline: Requests to exercise rights will be responded to within the timeframe prescribed under the DPDP Act, 2023 (currently 30 days). MIA may require identity verification before processing requests. Some rights may be subject to exceptions where processing is required by law.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">9. CHILDREN'S PRIVACY</h3>
          <p className="mb-4">The MIA Platform and Services are intended exclusively for persons 18 years of age and above. MIA does not knowingly collect, process, or store personal data from minors under 18 years of age. If MIA becomes aware that personal data of a minor has been inadvertently collected, it shall promptly delete such data in accordance with the DPDP Act, 2023 and notify the parent or guardian.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">10. UPDATES TO THIS PRIVACY POLICY</h3>
          <p className="mb-4">MIA may update this Privacy Policy periodically to reflect changes in legal or regulatory requirements, business practices, data processing activities, or technological changes. Material updates will be communicated via the Platform's notification system and/or by email to registered clients at least 15 days prior to the update taking effect. The date of the latest revision is prominently displayed at the top of this Policy. Continued use of the Platform after notification of changes constitutes acceptance of the updated Policy.</p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">11. CONTACT, DPO, AND GRIEVANCE OFFICER</h3>
          <p className="mb-4">For privacy-related queries, concerns, or to exercise your data rights, please contact:</p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p><strong>Data Protection Officer:</strong> Bharat Makkar</p>
            <p><strong>Email:</strong> compliance@mahiradvisers.com</p>
            <p><strong>Phone:</strong> +91 9084945151</p>
            <p className="mt-4"><strong>Registered Address:</strong> PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
            <p><strong>Resolution Timeline:</strong> Within 30 days from date of receipt of complaint</p>
            <p><strong>Jurisdiction:</strong> Courts at Pune, Maharashtra, India. If your complaint or concern is not satisfactorily resolved by MIA's DPO, you may approach the Data Protection Board of India (once constituted and operational under the DPDP Act, 2023) or SEBI SCORES (scores.gov.in) for SEBI-related grievances.</p>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
