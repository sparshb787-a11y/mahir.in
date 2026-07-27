import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | MAHIR Group" },
      {
        name: "description",
        content:
          "Contact MAHIR Group | SEBI-registered investment advisers based in Pune. Reach us for advisory, partnerships, or MAHIR Screener platform questions.",
      },
      {
        name: "keywords",
        content:
          "Contact MAHIR Group, MAHIR Group Pune, SEBI registered advisory contact, investment advisory Pune",
      },
      { property: "og:title", content: "Contact | MAHIR Group" },
      {
        property: "og:description",
        content: "Reach MAHIR Group for advisory, partnerships, or platform questions.",
      },
      { property: "og:url", content: "https://mahir.in/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | MAHIR Group" },
      {
        name: "twitter:description",
        content: "Reach MAHIR Group for advisory, partnerships, or platform questions.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
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

  const infoCardStyle: React.CSSProperties = {
    background: "rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.06)",
    borderRadius: "1.5rem",
    padding: "1.5rem",
  };

  const infoLabelStyle: React.CSSProperties = {
    fontSize: ".75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: ".18em",
    color: "rgba(0,0,0,0.5)",
    marginBottom: ".25rem",
  };

  const infoValueStyle: React.CSSProperties = {
    fontSize: ".95rem",
    color: "#000",
    lineHeight: 1.5,
  };

  const labelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  };

  const labelTextStyle: React.CSSProperties = {
    fontSize: ".75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: ".15em",
    color: "rgba(0,0,0,0.7)",
  };

  const inputStyle: React.CSSProperties = {
    borderRadius: ".55rem",
    border: "1px solid rgba(0,0,0,0.15)",
    background: "rgba(0,0,0,0.03)",
    padding: ".8rem 1rem",
    fontSize: ".9rem",
    color: "#000",
    outline: "none",
    fontFamily: "Syne, system-ui, sans-serif",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Contact", text: "We usually reply within a day" }}
          title="Get In Touch."

          subtitle="We'd love to hear from you. Tell us about your goals, your horizon and your risk appetite. Our team reads every message."
        />

        <section className="px-5 md:px-12 py-16 md:py-20 mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info cards on left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} className="order-2 lg:order-1">
              <div style={infoCardStyle}>
                <p style={infoLabelStyle}>Email</p>
                <p style={infoValueStyle}>contact@mahir.in</p>
              </div>
              <div style={infoCardStyle}>
                <p style={infoLabelStyle}>Office</p>
                <p style={infoValueStyle}>
                  301 &amp; 302, 3rd Floor, Quick Office, Raichandani 45 Street, 112, Main Road,
                  opposite D-Mart, Baner, Pune, Maharashtra 411045
                </p>
              </div>
              <div style={infoCardStyle}>
                <p style={infoLabelStyle}>Registration</p>
                <p style={infoValueStyle}>SEBI Registered RIA — INA000022668</p>
              </div>
            </div>

            {/* Form on right */}
            <div className="order-1 lg:order-2">
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "grid",
                  gap: "1rem",
                }}
              >
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Name</span>
                  <input
                    required
                    maxLength={80}
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </label>
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Email</span>
                  <input
                    required
                    maxLength={120}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    style={inputStyle}
                  />
                </label>
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Phone</span>
                  <input
                    required
                    maxLength={20}
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    style={inputStyle}
                  />
                </label>
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Message</span>
                  <textarea
                    required
                    maxLength={1000}
                    name="message"
                    rows={4}
                    placeholder="Tell us about your goals, horizon and risk appetite."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  {ok && (
                    <p style={{ color: "#000", fontSize: ".9rem", margin: 0 }}>
                      Thank you. We'll be in touch shortly.
                    </p>
                  )}
                  <button type="submit" className="mahir-cta-btn" style={{ marginLeft: "auto" }}>
                    <span className="mahir-cta-h" />
                    <span className="mahir-cta-h2" />
                    <span className="mahir-cta-glow" />
                    <span className="mahir-cta-label">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Working Hours - at bottom without box */}
        <section className="px-5 md:px-12 py-16 md:py-20 mx-auto max-w-[1100px]">
          <div className="text-center">
            <p style={infoLabelStyle}>Working Hours</p>
            <p style={{ fontSize: ".95rem", color: "#000", lineHeight: 1.6, marginTop: ".5rem" }}>
              Monday — Saturday: 10:00 AM to 6:00 PM IST
            </p>
            <p style={{ fontSize: ".85rem", color: "rgba(0,0,0,0.5)", marginTop: ".25rem" }}>
              Sunday &amp; Public Holidays: Closed
            </p>
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
