import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, SitePreFooterCTA, PageHero, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | MAHIR Group Investment Advisory" },
      { name: "description", content: "Contact MAHIR Group | SEBI-registered investment advisers based in Pune. Reach us for advisory, partnerships, or MAHIR Screener platform questions." },
      { name: "keywords", content: "Contact MAHIR Group, MAHIR Group Pune, SEBI registered advisory contact, investment advisory Pune" },
      { property: "og:title", content: "Contact | MAHIR Group" },
      { property: "og:description", content: "Reach MAHIR Group for advisory, partnerships, or platform questions." },
      { property: "og:url", content: "https://mahir.in/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | MAHIR Group" },
      { name: "twitter:description", content: "Reach MAHIR Group for advisory, partnerships, or platform questions." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/contact" }],
  }),

});

function ContactPage() {
  const [ok, setOk] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(true);
    (e.currentTarget as HTMLFormElement).reset();
  }

  const labelStyle: React.CSSProperties = {
    display: "flex", flexDirection: "column", gap: ".5rem",
  };
  const labelText: React.CSSProperties = {
    fontSize: ".62rem", fontWeight: 600, textTransform: "uppercase",
    letterSpacing: ".2em", color: "#0B1220",
  };
  const inputStyle: React.CSSProperties = {
    borderRadius: ".55rem", border: "1px solid #dcded9",
    background: "#fff", padding: ".8rem 1rem",
    fontSize: ".9rem", color: "#111", outline: "none",
    fontFamily: "Inter, system-ui, sans-serif", width: "100%", boxSizing: "border-box"
  };

  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Contact", text: "We usually reply within a day" }}
          title="Let's Talk."
          titleBreak="Experience MAHIR Group."
          subtitle="Tell us about your goals, your horizon and your risk appetite. Our team reads every message and gets back within one business day."
        />
        <section style={{ maxWidth: "60rem", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>


          <form
            onSubmit={handleSubmit}
            style={{
              margin: "3rem auto 0", maxWidth: "40rem", textAlign: "left",
              display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <label style={labelStyle}>
              <span style={labelText}>Name</span>
              <input required maxLength={80} name="name" type="text" placeholder="Your full name" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              <span style={labelText}>Email</span>
              <input required maxLength={120} name="email" type="email" placeholder="you@example.com" style={inputStyle} />
            </label>
            <label style={{ ...labelStyle, gridColumn: "1 / -1" }}>
              <span style={labelText}>Mobile Number</span>
              <input required maxLength={20} name="mobile" type="tel" placeholder="+91" style={inputStyle} />
            </label>
            <label style={{ ...labelStyle, gridColumn: "1 / -1" }}>
              <span style={labelText}>Interest</span>
              <select name="interest" style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%23111%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.2rem", paddingRight: "3rem" }} defaultValue="MAHIR Invest | Advisory">
                <option>MAHIR Invest | Advisory</option>
                <option>MAHIR Screener | Market intelligence</option>
                <option>Partnership | Institutional</option>
                <option>Careers</option>
              </select>
            </label>
            <label style={{ ...labelStyle, gridColumn: "1 / -1" }}>
              <span style={labelText}>Message</span>
              <textarea required maxLength={1000} name="message" rows={4} placeholder="Tell us about your goals, horizon and risk appetite." style={{ ...inputStyle, resize: "vertical" }} />
            </label>
            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
              {ok && <p style={{ color: "#0B1220", fontSize: ".9rem", margin: 0 }}>Thank you. We'll be in touch shortly.</p>}
              <button type="submit" className="mahir-cta-btn" style={{ marginLeft: "auto" }}>
                <span className="mahir-cta-h" />
                <span className="mahir-cta-h2" />
                <span className="mahir-cta-glow" />
                <span className="mahir-cta-label">Send Message</span>
              </button>
            </div>
          </form>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
