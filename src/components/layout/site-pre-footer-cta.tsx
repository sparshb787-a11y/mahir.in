import { Link } from "@tanstack/react-router";

export function SitePreFooterCTA() {
  return (
    <div className="mahir-prefooter-band">
      <section className="mahir-prefooter">
        <div className="mahir-prefooter-grid">
          <div>
            <h2>Building Institutions That Serve People First.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p>
              Research-led investment advisory and market intelligence, built quietly and built to
              last. Let's talk about what you're building.
            </p>
            <div>
              <Link to="/contact" className="mahir-cta-btn">
                <span className="mahir-cta-h" />
                <span className="mahir-cta-h2" />
                <span className="mahir-cta-glow" />
                <span className="mahir-cta-label">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
