import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageShell } from "../components/layout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | MAHIR Group" },
      {
        name: "description",
        content: "Privacy Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:title", content: "Privacy Policy | MAHIR Group" },
      {
        property: "og:description",
        content: "Privacy Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { property: "og:url", content: "https://mahir.in/privacy" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Privacy Policy for MAHIR Group Investment Advisers Private Limited.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/privacy" }],
  }),
});

function PrivacyPolicy() {
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
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Data Fiduciary
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
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Data Protection Officer
          </span>
          <p className="text-black mt-1">Bharat Makkar</p>
        </div>
        <div>
          <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
            Email
          </span>
          <p className="text-black mt-1">compliance@mahir.in</p>
        </div>
      </div>
    </div>
  );

  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="Compliant with: DPDP Act, 2023 & IT (SPDI) Rules, 2011"
      meta={meta}
    >
      <div className="space-y-10">
        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            1. About This Privacy Policy
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            MAHIR Investment Advisers Private Limited ('MIA', 'we', 'us', 'our') is committed to
            protecting the privacy and personal data of its clients, prospective clients, and users
            of the MIA App and Website ('Platform').
          </p>
          <p className="text-black/55 leading-[1.8] mb-4 font-semibold">Legal Compliance Framework:</p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>Digital Personal Data Protection Act, 2023 ('DPDP Act')</li>
            <li>
              Information Technology (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011 ('IT SPDI Rules')
            </li>
            <li>Information Technology Act, 2000</li>
            <li>SEBI (Investment Advisers) Regulations, 2013 and applicable SEBI Circulars</li>
            <li>Prevention of Money Laundering Act, 2002 and AML/KYC guidelines</li>
            <li>All other applicable laws and regulations of India</li>
          </ul>
          <p className="text-black/55 leading-[1.8] mt-4">
            This Policy describes how MIA collects, uses, processes, stores, shares, and protects
            your personal data, and sets out the rights available to you as a Data Principal under
            applicable law.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            2. Personal Data We Collect
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            We collect the following categories of personal data from you directly and through your
            use of the Platform:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              <strong className="text-black">Identity Data:</strong> Full legal name, PAN card number, Aadhaar number
              (masked/tokenized as permitted), date of birth, photograph, and specimen signature.
            </li>
            <li>
              <strong className="text-black">Contact Data:</strong> Residential and correspondence address, email address,
              mobile number, and emergency contact details.
            </li>
            <li>
              <strong className="text-black">Financial Data:</strong> Gross annual income, net worth, bank account details
              (for fee payments), investment portfolio information, existing liabilities, tax
              status, and FATCA/CRS declarations.
            </li>
            <li>
              <strong className="text-black">KYC & AML Data:</strong> Documentary evidence for KYC compliance, source of
              funds and wealth, politically exposed person (PEP) status, and sanctions screening
              data.
            </li>
            <li>
              <strong className="text-black">Risk Profile Data:</strong> Risk tolerance questionnaire responses, investment
              objectives, investment horizon, prior investment experience, and financial goals.
            </li>
            <li>
              <strong className="text-black">Platform Usage Data:</strong> IP address, device identifiers, browser type and
              version, operating system, pages visited, session duration, click-stream data, and
              referral URLs.
            </li>
            <li>
              <strong className="text-black">Communication Data:</strong> Queries, complaints, call recordings (with
              consent), correspondence, and meeting notes.
            </li>
            <li>
              <strong className="text-black">Technical Data:</strong> App crash reports, error logs, and performance
              diagnostic metrics.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            3. Purposes and Legal Basis for Processing
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            This section details how your data is used and the legal justification for each use.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-black/5 text-sm">
              <thead>
                <tr className="border-b border-black/5 bg-black/[0.02]">
                  <th className="py-3 px-4 text-left font-semibold text-black">Purpose of Processing</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Data Categories Used</th>
                  <th className="py-3 px-4 text-left font-semibold text-black">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Client onboarding & KYC completion", "Identity, Contact, KYC, Financial", "Legal obligation (SEBI IA Reg., PMLA)"],
                  ["Providing personalized investment advice", "Risk profile, Financial, Usage data", "Contract performance"],
                  ["AML/CFT compliance & suspicious transaction reporting", "KYC, Identity, Transaction data", "Legal obligation (PMLA, SEBI)"],
                  ["Fee collection and billing", "Contact, Financial, Bank data", "Contract performance"],
                  ["Platform improvement & analytics", "Usage, Technical data", "Legitimate interest / Consent"],
                  ["Regulatory reporting to SEBI, AMFI, FIU-IND", "Identity, KYC, Financial", "Legal obligation"],
                  ["Marketing communications (opt-in only)", "Contact, Usage data", "Consent"],
                  ["Customer support & grievance redressal", "Communication data", "Contract performance / Consent"],
                  ["Internal audit & compliance", "All relevant categories", "Legal obligation / Legitimate interest"],
                ].map(([purpose, data, basis], i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0">
                    <td className="py-3 px-4 text-black/70">{purpose}</td>
                    <td className="py-3 px-4 text-black/70">{data}</td>
                    <td className="py-3 px-4 text-black/70">{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            4. Data Sharing and Disclosure
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            MIA does not sell, rent, or trade your personal data to any third party for commercial
            purposes. We may share your data strictly on a need-to-know basis with the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              <strong className="text-black">Regulatory Authorities:</strong> SEBI, AMFI, Stock Exchanges, Depositories
              (NSDL/CDSL), Registrar and Transfer Agents, and other financial market regulators as
              required by law.
            </li>
            <li>
              <strong className="text-black">Financial Intelligence Unit — India (FIU-IND):</strong> for AML/CFT reporting
              obligations under PMLA.
            </li>
            <li>
              <strong className="text-black">KYC Registration Agencies (KRAs) and Central KYC Registry (CKYCRR):</strong>{" "}
              for KYC verification and record maintenance.
            </li>
            <li>
              <strong className="text-black">Technology Service Providers:</strong> Cloud hosting partners, IT vendors, and
              software service providers who process data strictly on MIA's behalf and are bound by
              written data processing agreements with equivalent security standards.
            </li>
            <li>
              <strong className="text-black">Professional Advisers:</strong> Statutory auditors, legal counsel, and tax
              advisers, subject to appropriate confidentiality obligations.
            </li>
            <li>
              <strong className="text-black">Legal Mandates:</strong> Courts, Tribunals, or Law Enforcement Authorities
              pursuant to a valid court order, summons, or statutory requirement.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            5. Data Security Measures
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            MIA implements comprehensive technical and organizational security measures in
            accordance with IT SPDI Rules, 2011 and DPDP Act, 2023 to protect your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              <strong className="text-black">Encryption:</strong> All data in transit is encrypted using TLS 1.2 or higher.
              Data at rest is encrypted using AES-256 encryption.
            </li>
            <li>
              <strong className="text-black">Access Controls:</strong> Role-based access controls (RBAC) ensuring data
              access is strictly limited to authorized personnel on a need-to-know basis.
            </li>
            <li>
              <strong className="text-black">Authentication:</strong> Multi-factor authentication (MFA) mandatory for all
              personnel accessing client data and for Platform login.
            </li>
            <li>
              <strong className="text-black">Security Audits:</strong> Regular security audits, vulnerability assessments,
              and penetration testing by qualified third-party security professionals.
            </li>
            <li>
              <strong className="text-black">Incident Response:</strong> Documented incident response procedures for data
              breach detection, containment, and notification.
            </li>
            <li>
              <strong className="text-black">Data Breach Notification:</strong> In the event of a personal data breach, MIA
              will notify the Data Protection Board of India and affected clients within the
              timelines prescribed under the DPDP Act, 2023.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            6. Your Rights as Data Principal
          </h3>
          <p className="text-black/55 leading-[1.8] mb-4">
            Under the DPDP Act, 2023 and applicable law, you have the following rights with respect
            to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-black/55">
            <li>
              <strong className="text-black">Right to Access:</strong> Obtain summary of personal data processed and
              processing activities undertaken (Written request to DPO).
            </li>
            <li>
              <strong className="text-black">Right to Correction:</strong> Request correction, completion, or updating of
              inaccurate/incomplete personal data (Written request to DPO).
            </li>
            <li>
              <strong className="text-black">Right to Erasure:</strong> Request deletion of personal data, subject to legal
              retention obligations and regulatory requirements (Written request to DPO).
            </li>
            <li>
              <strong className="text-black">Right to Grievance Redressal:</strong> Raise grievances about personal data
              processing with the Data Protection Officer (Email to compliance@mahir.in).
            </li>
            <li>
              <strong className="text-black">Right to Nominate:</strong> Nominate an individual to exercise data rights on
              your behalf in case of death or incapacity (Written request to DPO).
            </li>
            <li>
              <strong className="text-black">Right to Withdraw Consent:</strong> Withdraw consent for processing not based
              on legal obligation, without affecting prior lawful processing (Written request or
              Platform settings).
            </li>
          </ul>
          <p className="text-black/55 leading-[1.8] mt-4">
            Processing Timeline: Requests to exercise rights will be responded to within the
            timeframe prescribed under the DPDP Act, 2023 (currently 30 days). MIA may require
            identity verification before processing requests.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold tracking-tight text-black mb-4" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            7. Contact, DPO, and Grievance Officer
          </h3>
          <p className="text-black/55 leading-[1.8] mb-6">
            For privacy-related queries, concerns, or to exercise your data rights, please contact:
          </p>
          <div className="border border-black/5 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <span className="text-black/40 text-xs font-semibold uppercase tracking-widest">
                  Data Protection Officer
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
                  Registered Address
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
                  Jurisdiction
                </span>
                <p className="text-black mt-1">
                  Courts at Pune, Maharashtra, India. If your complaint or concern is not
                  satisfactorily resolved by MIA's DPO, you may approach the Data Protection Board
                  of India or SEBI SCORES (scores.gov.in) for SEBI-related grievances.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalPageShell>
  );
}
