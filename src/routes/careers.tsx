import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteHeader, SiteFooter, SitePreFooterCTA, PageHero, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers | MAHIR Group Investment Advisory" },
      { name: "description", content: "Careers at MAHIR Group | join a research-led SEBI-registered investment advisory building financial systems that put people first. Roles in Pune." },
      { name: "keywords", content: "MAHIR Group Careers, jobs at MAHIR Group, investment advisory jobs Pune, finance jobs Pune" },
      { property: "og:title", content: "Careers | MAHIR Group" },
      { property: "og:description", content: "Join a research-led investment advisory building financial systems that put people first." },
      { property: "og:url", content: "https://mahir.in/careers" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers | MAHIR Group" },
      { name: "twitter:description", content: "Join a research-led investment advisory building financial systems that put people first." },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/careers" }],
  }),

});

const roles = [
  { title: "HR Intern", type: "Internship · Pune / Baner", desc: "Support hiring operations, candidate coordination, and onboarding for a small, deliberate team." },
  { title: "Compliance Intern", type: "Internship · Pune / Baner", desc: "Assist with SEBI reporting, record-keeping, and disclosure workflows across the advisory desk." },
  { title: "Marketing Manager", type: "Full-time · Pune / Baner", desc: "Drive awareness and engagement for MAHIR Group's products and services across digital and offline channels." },
  { title: "Senior Developer", type: "Full-time · Pune / Baner", desc: "Ship the surface where research becomes decision. TypeScript, TanStack, data-heavy interfaces." },
];

function CareersPage() {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function closeModal() {
    setOpenRole(null);
    setSubmitted(false);
    setResumeName(null);
    setResumeError(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setResumeError(null);
    if (!file) { setResumeName(null); return; }
    const okType = /\.(pdf|docx?|rtf)$/i.test(file.name);
    if (!okType) {
      setResumeError("Please upload a PDF, DOC, DOCX, or RTF file.");
      setResumeName(null);
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File is larger than 5 MB.");
      setResumeName(null);
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    setResumeName(file.name);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!resumeName) {
      setResumeError("A resume is required.");
      return;
    }
    // Local, no-backend acknowledgement so the user sees confirmation.
    setSubmitted(true);
  }


  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Hiring", text: `${roles.length} open roles · Pune / Baner` }}
          title="Come Build With Restraint."
          titleBreak="Not With Noise."
          subtitle="We hire slowly and stay for a long time. If you care about original research, clean systems and building financial products people can trust | we'd love to hear from you."
        />


        <section style={{ padding: "1.5rem 1.5rem 5rem", maxWidth: "78rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {roles.map((r) => (
            <article key={r.title} style={{ background: "#ffffff", border: "1px solid #e4e7ee", borderRadius: 14, padding: "1.6rem 1.75rem", display: "flex", flexDirection: "column", gap: ".6rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "#0B1220", letterSpacing: "-.02em" }}>{r.title}</h3>
                <p style={{ fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#0B1220", fontWeight: 500 }}>{r.type}</p>
              </div>
              <p style={{ color: "#0B1220", lineHeight: 1.6 }}>{r.desc}</p>
              <button
                type="button"
                onClick={() => { setOpenRole(r.title); setSubmitted(false); }}
                style={{ marginTop: ".4rem", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: ".5rem", background: "#0B1220", color: "#ffffff", padding: ".7rem 1.1rem", borderRadius: 999, fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 500, border: 0, cursor: "pointer" }}
              >
                Apply Now →
              </button>
            </article>
          ))}
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />

      {openRole && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
          style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(11,18,32,0.6)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "2rem 1rem", overflowY: "auto" }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#ffffff", width: "100%", maxWidth: "42rem", borderRadius: 16, padding: "1.75rem 1.75rem 1.5rem", boxShadow: "0 24px 60px rgba(0,0,0,0.25)", margin: "auto" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: ".68rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 500 }}>Apply for</p>
                <h2 style={{ marginTop: ".35rem", fontSize: "1.3rem", fontWeight: 500, color: "#0B1220", letterSpacing: "-.02em" }}>{openRole}</h2>
                <p style={{ marginTop: ".2rem", fontSize: ".8rem", color: "#0B1220" }}>Pune / Baner</p>
              </div>
              <button onClick={closeModal} aria-label="Close" style={{ background: "transparent", border: 0, cursor: "pointer", fontSize: "1.5rem", color: "#0B1220", lineHeight: 1 }}>×</button>
            </div>

            {submitted ? (
              <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "#f4f5f1", borderRadius: 12, color: "#0B1220" }}>
                <p style={{ fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#14265C", fontWeight: 500 }}>Submitted</p>
                <p style={{ marginTop: ".5rem", lineHeight: 1.6 }}>Thanks for applying to <strong>{openRole}</strong>. Our team will review your application and reach out shortly.</p>
                <button onClick={closeModal} style={{ marginTop: "1rem", background: "#0B1220", color: "#ffffff", padding: ".65rem 1.1rem", borderRadius: 999, fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 500, border: 0, cursor: "pointer" }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: "1.25rem", display: "grid", gap: ".85rem" }}>
                <div style={{ display: "grid", gap: ".85rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                  <label style={{ display: "grid", gap: ".35rem" }}>
                    <span style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 600 }}>Full name</span>
                    <input required maxLength={80} name="name" style={inputStyle} placeholder="Your full name" />
                  </label>
                  <label style={{ display: "grid", gap: ".35rem" }}>
                    <span style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 600 }}>Email</span>
                    <input required type="email" maxLength={120} name="email" style={inputStyle} placeholder="you@example.com" />
                  </label>
                  <label style={{ display: "grid", gap: ".35rem" }}>
                    <span style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 600 }}>Phone</span>
                    <input required maxLength={20} name="phone" style={inputStyle} placeholder="+91 " />
                  </label>
                  <label style={{ display: "grid", gap: ".35rem" }}>
                    <span style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 600 }}>LinkedIn or portfolio</span>
                    <input maxLength={200} name="link" style={inputStyle} placeholder="https://" />
                  </label>
                </div>
                <label style={{ display: "grid", gap: ".35rem" }}>
                  <span style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 600 }}>Why this role</span>
                  <textarea required maxLength={1000} name="message" rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="A few lines about your background and why MAHIR Group." />
                </label>
                <div style={{ display: "grid", gap: ".35rem" }}>
                  <span style={{ fontSize: ".62rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#0B1220", fontWeight: 600 }}>Resume <span style={{ color: "#b34747" }}>*</span></span>
                  <label style={{ display: "flex", alignItems: "center", gap: ".8rem", border: "1px dashed #cfd2cd", borderRadius: 10, padding: ".85rem 1rem", cursor: "pointer", background: "#fafaf7" }}>
                    <input
                      ref={fileRef}
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFile}
                      style={{ display: "none" }}
                    />
                    <span style={{ background: "#0B1220", color: "#ffffff", padding: ".5rem .85rem", borderRadius: 999, fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 600 }}>
                      {resumeName ? "Change file" : "Choose file"}
                    </span>
                    <span style={{ fontSize: ".85rem", color: resumeName ? "#0B1220" : "#0B1220", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {resumeName ?? "PDF, DOC, DOCX or RTF · up to 5 MB"}
                    </span>
                  </label>
                  {resumeError && <span style={{ fontSize: ".78rem", color: "#b34747" }}>{resumeError}</span>}
                </div>
                <button type="submit" style={{ marginTop: ".25rem", background: "#0B1220", color: "#ffffff", padding: ".8rem 1.2rem", borderRadius: 999, fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 500, border: 0, cursor: "pointer", justifySelf: "start" }}>Submit application</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid #dcded9",
  borderRadius: 10,
  padding: ".7rem .85rem",
  fontSize: ".92rem",
  color: "#0B1220",
  background: "#ffffff",
  outline: "none",
  fontFamily: "inherit",
  width: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
