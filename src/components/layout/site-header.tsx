import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import mahirTrustLogo from "../../assets/images/logos/mahir-trust-leads.svg";

function markMahirIntroSeen() {
  try {
    sessionStorage.setItem("mahirIntroSeen", "1");
  } catch {
    /* ignore */
  }
}

export function SiteHeader({ injectCss = true }: { injectCss?: boolean } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    markMahirIntroSeen();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="mahir-floating-nav">
        <div className="mahir-floating-nav-inner">
          <a
            href="/mahir.html"
            className="nav-brand"
            aria-label="MAHIR home"
            onClick={markMahirIntroSeen}
          >
            <span className="nav-logo-chip">
              <img
                src={mahirTrustLogo}
                alt="MAHIR"
                style={{ filter: "none", opacity: 1, visibility: "visible", mixBlendMode: "normal" }}
              />
            </span>
          </a>
          <nav>
            <Link to="/products" className="nav-link" activeProps={{ className: "active" }}>
              Products
            </Link>
            <Link to="/approach" className="nav-link" activeProps={{ className: "active" }}>
              Approach
            </Link>
            <Link to="/about" className="nav-link" activeProps={{ className: "active" }}>
              About
            </Link>
            <Link to="/team" className="nav-link" activeProps={{ className: "active" }}>
              Team
            </Link>
            <Link to="/careers" className="nav-link" activeProps={{ className: "active" }}>
              Careers
            </Link>
            <Link to="/blog" className="nav-link" activeProps={{ className: "active" }}>
              Blog
            </Link>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <Link to="/contact" className="mahir-nav-contact-fancy mahir-nav-contact-desktop">
              <span className="nc-ring" aria-hidden="true" />
              <span className="nc-inner">Contact</span>
            </Link>
            <button
              type="button"
              className="mahir-nav-hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                width="18"
                height="18"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`mahir-mobile-drawer${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
      >
        <Link to="/products" onClick={closeMenu}>
          Products
        </Link>
        <Link to="/approach" onClick={closeMenu}>
          Approach
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/team" onClick={closeMenu}>
          Team
        </Link>
        <Link to="/careers" onClick={closeMenu}>
          Careers
        </Link>
        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>
        <Link to="/contact" className="mahir-nav-contact-fancy" onClick={closeMenu}>
          <span className="nc-ring" aria-hidden="true" />
          <span className="nc-inner">Contact</span>
        </Link>
      </div>
    </>
  );
}
