import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import earthHeroImage from "../assets/earth-hero.jpg";
import mahirNewLogo from "../assets/mahir-new.png";

export const pageStyles = {
  root: {
    background: "#ffffff",
    color: "#0B1220",
    minHeight: "100vh",
    fontFamily: "Inter, system-ui, sans-serif",
  } as React.CSSProperties,
};

/**
 * Shared chrome CSS. Mirrored in public/mahir.html so the static homepage,
 * /team, /careers and /contact render the same floating navbar, CTAs and footer.
 */
const chromeCss = `
:root {
  --mahir-display: "Inter", system-ui, -apple-system, sans-serif;
  --mahir-body: "Inter", system-ui, -apple-system, sans-serif;
  --mahir-mono: "Inter", system-ui, -apple-system, sans-serif;
}

/* ============ Floating pill navbar ============ */
.mahir-floating-nav {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: min(calc(100% - 1.5rem), 68rem);
}
.mahir-floating-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  background: #000;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 999px;
  padding: .55rem .6rem .55rem 1.25rem;
  box-shadow: 0 10px 30px -12px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05) inset;
}
.mahir-floating-nav .nav-brand { display: inline-flex; align-items: center; gap: .6rem; color:#fff !important; text-decoration:none; }
.mahir-floating-nav .nav-logo-chip { display:inline-flex; align-items:center; justify-content:center; height:2.4rem; }
.mahir-floating-nav .nav-logo-chip img { height:100%; width:auto; object-fit:contain; }
.mahir-floating-nav nav { display:none; gap:1.6rem; align-items:center; }
@media (min-width: 1024px) { .mahir-floating-nav nav { display:flex; } }
.mahir-floating-nav .nav-link {
  font-family: var(--mahir-mono);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85) !important;
  text-decoration:none;
  position: relative;
  padding: .35rem 0;
  transition: color .2s ease;
}
.mahir-floating-nav .nav-link:hover,
.mahir-floating-nav .nav-link:active,
.mahir-floating-nav .nav-link:focus,
.mahir-floating-nav .nav-link.active { color:#fff !important; text-decoration: none !important; border: none !important; box-shadow: none !important; }
.mahir-floating-nav .nav-link::after { display: none !important; }

/* Fancy animated Contact (conic gradient border) */
.mahir-nav-contact-fancy {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  height: 2.5rem;
  padding: 1px;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}
.mahir-nav-contact-fancy .nc-ring {
  position: absolute;
  inset: -1000%;
  background: conic-gradient(from 90deg at 50% 50%, #7dd3fc 0%, #0B1E5B 50%, #7dd3fc 100%);
  animation: mahirNcSpin 2s linear infinite;
}
.mahir-nav-contact-fancy .nc-inner {
  position: relative;
  display: inline-flex; align-items: center; justify-content: center;
  width: 100%; height: 100%;
  padding: .25rem 1.5rem;
  border-radius: 999px;
  background: #050510;
  color: #fff !important;
  font-family: var(--mahir-mono);
  font-weight: 600;
  font-size: .68rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  backdrop-filter: blur(20px);
  transition: background .2s ease;
}
.mahir-nav-contact-fancy:hover .nc-inner { background: #14142b; }
@keyframes mahirNcSpin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .mahir-nav-contact-fancy .nc-ring { animation: none; } }

/* Hamburger + mobile drawer */
.mahir-nav-hamburger {
  display: inline-flex; align-items:center; justify-content:center;
  width: 2.5rem; height: 2.5rem; border-radius: 999px;
  background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.2);
  color:#fff; cursor:pointer; padding: 0;
}
@media (min-width: 1024px) { .mahir-nav-hamburger { display: none; } }
.mahir-nav-hamburger svg { width: 18px; height: 18px; }
.mahir-mobile-drawer {
  position: fixed; inset: 0; z-index: 99; background: rgba(0,0,0,0.92);
  backdrop-filter: blur(14px);
  display: flex; flex-direction: column; align-items:center; justify-content:center;
  gap: 1.75rem; padding: 4rem 1.5rem;
  opacity: 0; pointer-events: none; transition: opacity .25s ease;
}
.mahir-mobile-drawer.open { opacity: 1; pointer-events: auto; }
.mahir-mobile-drawer a {
  color:#fff !important; text-decoration:none;
  font-family: var(--mahir-mono); font-weight:600;
  font-size: .95rem; letter-spacing: .2em; text-transform: uppercase;
}
.mahir-mobile-drawer .mahir-nav-contact-fancy { height: 3rem; margin-top: 1rem; }
.mahir-mobile-drawer .mahir-nav-contact-fancy .nc-inner { font-size: .78rem; padding: .5rem 2rem; }
@media (min-width: 1024px) { .mahir-mobile-drawer { display: none !important; } }

body { padding-top: 0; }


/* ============ Fancy CTA button (light streaks + radial glow) ============ */
.mahir-cta-btn {
  position: relative;
  display: inline-flex; align-items: center; justify-content: center;
  cursor: pointer; border: none; text-decoration: none;
  background: #000; color: #fff !important;
  font-family: var(--mahir-mono);
  font-weight: 600; font-size: .72rem; letter-spacing: .18em;
  text-transform: uppercase;
  padding: .95rem 2rem;
  border-radius: 0;
  transition: transform .25s ease;
}
.mahir-cta-btn:hover { transform: translateY(-1px); }
.mahir-cta-btn::before,
.mahir-cta-btn::after,
.mahir-cta-btn > .mahir-cta-h,
.mahir-cta-btn > .mahir-cta-h2 {
  content: ""; position: absolute; pointer-events: none; z-index: 0;
}
.mahir-cta-btn::before { /* left vertical streak */
  left: -1px; top: 0; bottom: 0; width: 2px;
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0));
}
.mahir-cta-btn::after { /* right vertical streak */
  right: -1px; top: 0; bottom: 0; width: 2px;
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0));
}
.mahir-cta-btn > .mahir-cta-h { /* top horizontal streak */
  top: -1px; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0));
}
.mahir-cta-btn.mahir-cta-sm { padding: .6rem 1.3rem; font-size: .62rem; letter-spacing: .16em; border-radius: 999px; border: 1px solid rgba(255,255,255,0.22); background:#000; overflow: hidden; }
.mahir-cta-btn.mahir-cta-sm:hover { background:#111; border-color: rgba(255,255,255,0.4); }
.mahir-cta-btn.mahir-cta-sm::before, .mahir-cta-btn.mahir-cta-sm::after, .mahir-cta-btn.mahir-cta-sm > .mahir-cta-h, .mahir-cta-btn.mahir-cta-sm > .mahir-cta-h2, .mahir-cta-btn.mahir-cta-sm > .mahir-cta-glow { display: none; }
.mahir-nav-contact-desktop { display: none; }
@media (min-width: 1024px) { .mahir-nav-contact-desktop { display: inline-flex; } }
.mahir-nav-contact { animation: mahirContactPulse 3.4s ease-in-out infinite; }
.mahir-nav-contact .mahir-cta-label::after {
  content: ""; position: absolute; inset: -0.4rem -1.2rem;
  background: linear-gradient(115deg, transparent 0%, rgba(255,255,255,.55) 48%, transparent 100%);
  transform: translateX(-160%) skewX(-16deg); opacity: .75;
  animation: mahirContactSweep 2.8s ease-in-out infinite;
}
@keyframes mahirContactPulse { 0%, 100% { box-shadow: 0 0 0 rgba(255,255,255,0); } 50% { box-shadow: 0 0 24px rgba(125,211,252,.22); } }
@keyframes mahirContactSweep { 0%, 44% { transform: translateX(-160%) skewX(-16deg); } 72%, 100% { transform: translateX(160%) skewX(-16deg); } }
@media (prefers-reduced-motion: reduce) { .mahir-nav-contact, .mahir-nav-contact .mahir-cta-label::after { animation: none; } }
.mahir-cta-btn > .mahir-cta-h2 { /* bottom horizontal streak */
  bottom: -1px; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0));
}
.mahir-cta-btn > .mahir-cta-glow {
  position: absolute; inset: -24px; z-index: -1;
  background: radial-gradient(circle, rgba(56,189,248,0.35), transparent 60%);
  filter: blur(20px);
  opacity: 0; transition: opacity .3s ease;
}
.mahir-cta-btn:hover > .mahir-cta-glow { opacity: 1; }
.mahir-cta-btn > .mahir-cta-label { position: relative; z-index: 2; }

/* ============ Pre-footer CTA hero card (earth image) ============ */
.mahir-prefooter-band { background: #000; padding: 0; }
.mahir-prefooter {
  position: relative; z-index: 10;
  width: 100%; max-width: none; margin: 0; padding: 3rem 1rem;
  border-radius: 0;
  background-color: rgba(23,23,23,0.6);
  background-image:
    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)),
    url("${earthHeroImage}");
  background-size: cover;
  background-position: center;
  border: 0;
  overflow: hidden;
  min-height: 28rem;
}
@media (min-width: 640px) { .mahir-prefooter { padding: 4rem 1.5rem; } }
@media (min-width: 1024px) { .mahir-prefooter { padding: 5rem 2rem 10rem 2rem; min-height: 38rem; } }
.mahir-prefooter-grid {
  position: relative;
  display: grid; gap: 2rem;
  grid-template-columns: 1fr;
  align-items: start;
  padding-top: 1rem;
  max-width: 96rem; margin: 0 auto;
}
@media (min-width: 1024px) { .mahir-prefooter-grid { grid-template-columns: 7fr 5fr; gap: 2.5rem; } }
.mahir-prefooter h2 {
  font-family: var(--mahir-display);
  font-weight: 300;
  color: #f4f4f5 !important;
  letter-spacing: -0.02em;
  line-height: 1.05;
  font-size: 2.75rem;
  margin: 0;
}
@media (min-width: 640px) { .mahir-prefooter h2 { font-size: 3.6rem; } }
@media (min-width: 768px) { .mahir-prefooter h2 { font-size: 4.2rem; } }
.mahir-prefooter p { color: rgba(212,212,216,1) !important; font-size: .95rem; max-width: 42ch; margin: 0; }
.mahir-prefooter-mark {
  position: absolute; left: 1.25rem; bottom: 1rem;
  pointer-events: none; user-select: none;
  height: min(16vw, 208px);
  opacity: 0.5;
  filter: invert(82%) sepia(21%) saturate(1008%) hue-rotate(174deg) brightness(101%) contrast(102%);
}

/* ============ Testimonials tilted cards ============ */
.mahir-testi-wrap { position: relative; display:flex; justify-content:center; align-items:center; min-height: 450px; padding: 3rem 1rem; }
.mahir-testi-row { position:relative; display:flex; justify-content:center; align-items:center; flex-wrap: wrap; gap: 1rem; }
.mahir-testi-card {
  position: relative; width: 320px; height: 320px; margin: 0 -30px;
  background: linear-gradient(rgba(255,255,255,0.1), transparent);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 1rem;
  box-shadow: 0 25px 25px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display:flex; align-items:center; justify-content:center;
}
.mahir-testi-card.t1 { transform: rotate(-10deg); }
.mahir-testi-card.t2 { transform: rotate(-3deg); z-index: 2; }
.mahir-testi-card.t3 { transform: rotate(8deg); }
.mahir-testi-inner {
  position:absolute; inset: 1rem;
  background:#fff; color:#0B1220;
  border-radius: .75rem; box-shadow: 0 20px 40px -20px rgba(0,0,0,.4);
  padding: 1.25rem; overflow: hidden;
  display:flex; flex-direction:column; justify-content:space-between;
}
.mahir-testi-inner p { font-size: .82rem; line-height: 1.55; margin: 0; color:#0B1220; }
.mahir-testi-meta { display:flex; align-items:center; justify-content:space-between; border-top: 1px solid rgba(0,0,0,.08); padding-top: .75rem; }
.mahir-testi-name { font-size: .78rem; font-weight: 600; color:#0B1220; }
.mahir-testi-role { font-size: .7rem; color:#6b7280; }
@media (max-width: 700px) {
  .mahir-testi-row { flex-direction: column; }
  .mahir-testi-card { margin: -20px 0; }
}

/* ============ Footer ============ */
.mahir-footer { background: #fff; color: #fff; padding: 5rem 1rem 2rem; }
.mahir-footer * { color: inherit; }
.mahir-footer-inner { max-width: 80rem; margin: 0 auto; }
.mahir-footer-top { display:grid; gap: 3rem; padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.1); grid-template-columns: 1fr; }
@media (min-width: 768px) { .mahir-footer-top { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .mahir-footer-top { grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 2rem; } }
.mahir-footer h4 { font-size: .78rem !important; font-weight: 700 !important; letter-spacing: .18em; text-transform: uppercase; color:#fff !important; margin: 0 0 1rem; }
.mahir-footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .65rem; }
.mahir-footer ul a, .mahir-footer ul li { font-size: .85rem !important; color: rgba(255,255,255,0.55) !important; text-decoration: none; }
.mahir-footer ul a:hover { color:#fff !important; }
.mahir-footer-brand-copy { font-size: .9rem; line-height: 1.6; color: rgba(255,255,255,0.55) !important; margin: 1rem 0 1.5rem; max-width: 34ch; }
.mahir-footer-socials { display:flex; gap:.6rem; }
.mahir-footer-socials a {
  display:inline-flex; align-items:center; justify-content:center;
  width: 2.25rem; height: 2.25rem; border-radius: .6rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8) !important; transition: background .2s ease;
}
.mahir-footer-socials a:hover { background: rgba(255,255,255,0.12); color:#fff !important; }
.mahir-footer-bottom { display:flex; flex-direction:column; gap:1rem; padding-top: 2rem; align-items:center; justify-content:space-between; }
@media (min-width: 640px) { .mahir-footer-bottom { flex-direction: row; } }
.mahir-footer-bottom p { font-size: .8rem !important; color: rgba(255,255,255,0.4) !important; margin:0; }
.mahir-footer-bottom-links { display:flex; gap:1.5rem; }
.mahir-footer-bottom-links a { font-size: .8rem !important; color: rgba(255,255,255,0.4) !important; text-decoration: none; }
.mahir-footer-bottom-links a:hover { color:#fff !important; }
.mahir-footer-logo { display:inline-flex; align-items:center; height: 4rem; }
.mahir-footer-logo img { height: 100%; width: auto; filter: invert(1); }
.mahir-footer-legal { display:grid; gap:2rem; padding: 2.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); grid-template-columns: 1fr; }
@media (min-width: 900px) { .mahir-footer-legal { grid-template-columns: 2fr 1fr; gap: 3rem; } }
.mahir-footer-legal h4 { font-size: .78rem !important; font-weight:700 !important; letter-spacing:.18em; text-transform:uppercase; color:#fff !important; margin: 0 0 .9rem; }
.mahir-footer-legal p, .mahir-footer-legal li { font-size: .82rem !important; line-height: 1.65; color: rgba(255,255,255,0.6) !important; margin: 0 0 .7rem; }
.mahir-footer-legal strong { color: rgba(255,255,255,0.85) !important; font-weight: 600; }
.mahir-footer-legal .mahir-footer-disclaimer { font-size: .78rem !important; color: rgba(255,255,255,0.5) !important; font-style: italic; }
.mahir-footer-products { display:grid; gap:.85rem; }
.mahir-footer-products a { display:flex; align-items:center; justify-content:space-between; padding: .8rem 1rem; border:1px solid rgba(255,255,255,0.1); border-radius: .6rem; text-decoration:none; transition: background .2s ease, border-color .2s ease; }
.mahir-footer-products a:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.25); }
.mahir-footer-products span:first-child { font-size:.9rem; color:#fff !important; font-weight:500; }
.mahir-footer-products span:last-child { font-size:.78rem; color: rgba(255,255,255,0.5) !important; }
.mahir-footer-trusted { display:flex; flex-direction:column; gap:1rem; padding: 1.75rem 0 0; align-items:flex-start; }
.mahir-footer-trusted-label { font-size:.72rem !important; letter-spacing:.22em; text-transform:uppercase; color: rgba(255,255,255,0.55) !important; margin: 0; }
.mahir-footer-trusted img { height: 34px; width:auto; background: #fff; padding: 6px 10px; border-radius: 6px; }
.mahir-footer-address { padding: 1.5rem 0; font-size:.82rem !important; line-height:1.6; color: rgba(255,255,255,0.6) !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
.mahir-footer-address strong { color:#fff !important; font-weight:600; display:block; margin-bottom:.35rem; letter-spacing:.02em; }

/* ============ Fixed QR download widget ============ */
.mahir-qr-widget { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 95; display:flex; align-items:center; gap:1rem; padding:1rem 1.25rem 1rem 1rem; background:#000; color:#fff; border-radius: 0; box-shadow: 0 24px 46px -18px rgba(0,0,0,0.6); font-family: var(--mahir-mono); }
.mahir-qr-widget::before, .mahir-qr-widget::after, .mahir-qr-widget > .mahir-qr-h, .mahir-qr-widget > .mahir-qr-h2 { content:""; position:absolute; pointer-events:none; z-index:0; }
.mahir-qr-widget::before { left:-1px; top:0; bottom:0; width:2px; background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0)); }
.mahir-qr-widget::after { right:-1px; top:0; bottom:0; width:2px; background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0)); }
.mahir-qr-widget > .mahir-qr-h { top:-1px; left:0; right:0; height:2px; background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0)); }
.mahir-qr-widget > .mahir-qr-h2 { bottom:-1px; left:0; right:0; height:2px; background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.85) 50%, rgba(255,255,255,0)); }
.mahir-qr-widget .mahir-qr-code { width: 96px; height: 96px; border-radius: 4px; background:#fff; padding: 5px; flex-shrink:0; position:relative; z-index:2; }
.mahir-qr-widget .mahir-qr-code img, .mahir-qr-widget .mahir-qr-code svg { width:100%; height:100%; display:block; }
.mahir-qr-widget .mahir-qr-copy { display:flex; flex-direction:column; line-height:1.15; position:relative; z-index:2; }
.mahir-qr-widget .mahir-qr-eyebrow { font-size: .56rem; letter-spacing:.26em; text-transform:uppercase; color: rgba(255,255,255,0.55); font-weight:600; }
.mahir-qr-widget .mahir-qr-title { font-size: .98rem; font-weight:600; color:#fff; margin-top:.3rem; letter-spacing:-.005em; font-family: var(--mahir-display); max-width: 12ch; }
.mahir-qr-widget .mahir-qr-sub { font-size: .58rem; letter-spacing:.18em; text-transform:uppercase; color: rgba(125,211,252,0.95); margin-top:.5rem; font-weight:600; }
@media (max-width: 640px) { .mahir-qr-widget { right:.6rem; bottom:.6rem; padding:.7rem .8rem .7rem .7rem; gap:.7rem; } .mahir-qr-widget .mahir-qr-code { width:64px; height:64px; } .mahir-qr-widget .mahir-qr-title { font-size:.78rem; } }
`;

export function SiteHeader({ injectCss = true }: { injectCss?: boolean } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    markMahirIntroSeen();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {injectCss && <style dangerouslySetInnerHTML={{ __html: chromeCss }} />}
      <header className="mahir-floating-nav">
        <div className="mahir-floating-nav-inner">
          <a href="/mahir.html" className="nav-brand" aria-label="MAHIR home" onClick={markMahirIntroSeen}>
            <span className="nav-logo-chip"><img src={mahirNewLogo} alt="MAHIR" /></span>
          </a>
          <nav>
            <a href="/mahir.html#process" className="nav-link" onClick={markMahirIntroSeen}>Approach</a>
            <a href="/mahir.html#range" className="nav-link" onClick={markMahirIntroSeen}>Products</a>
            <Link to="/about" className="nav-link" activeProps={{ className: "active" }}>About Us</Link>
            <Link to="/blog" className="nav-link" activeProps={{ className: "active" }}>Blog</Link>
            <Link to="/team" className="nav-link" activeProps={{ className: "active" }}>Team</Link>
            <Link to="/careers" className="nav-link" activeProps={{ className: "active" }}>Careers</Link>
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
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div className={`mahir-mobile-drawer${menuOpen ? " open" : ""}`} onClick={closeMenu}>
        <a href="/mahir.html#process" onClick={closeMenu}>Approach</a>
        <a href="/mahir.html#range" onClick={closeMenu}>Products</a>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/team" onClick={closeMenu}>Team</Link>
        <Link to="/careers" onClick={closeMenu}>Careers</Link>
        <Link to="/contact" className="mahir-nav-contact-fancy" onClick={closeMenu}>
          <span className="nc-ring" aria-hidden="true" />
          <span className="nc-inner">Contact</span>
        </Link>
      </div>
      <SiteQRWidget />
    </>
  );
}


function markMahirIntroSeen() {
  try {
    sessionStorage.setItem("mahirIntroSeen", "1");
  } catch { /* ignore */ }
}

export function SiteQRWidget() {
  return (
    <aside className="mahir-qr-widget" aria-label="Download MAHIR Invest">
      <span className="mahir-qr-h" />
      <span className="mahir-qr-h2" />
      <div className="mahir-qr-code">
        <QRMark />
      </div>
      <div className="mahir-qr-copy">
        <span className="mahir-qr-eyebrow">Scan</span>
        <span className="mahir-qr-title">Download MAHIR Invest</span>
        <span className="mahir-qr-sub">iOS · Android</span>
      </div>
    </aside>
  );
}

function QRMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" width="100%" height="100%">
  
  <rect width="330" height="330" fill="#FFFFFF" rx="16" />
  
  
  
    <g fill="#0B1220">
      
      <rect x="20" y="20" width="70" height="70" rx="18" fill="#0B1220" />
      
      <rect x="30" y="30" width="50" height="50" rx="10" fill="#FFFFFF" />
      
      <rect x="40" y="40" width="30" height="30" rx="6" fill="#0B1220" />
    </g>
  

    <g fill="#0B1220">
      
      <rect x="240" y="20" width="70" height="70" rx="18" fill="#0B1220" />
      
      <rect x="250" y="30" width="50" height="50" rx="10" fill="#FFFFFF" />
      
      <rect x="260" y="40" width="30" height="30" rx="6" fill="#0B1220" />
    </g>
  

    <g fill="#0B1220">
      
      <rect x="20" y="240" width="70" height="70" rx="18" fill="#0B1220" />
      
      <rect x="30" y="250" width="50" height="50" rx="10" fill="#FFFFFF" />
      
      <rect x="40" y="260" width="30" height="30" rx="6" fill="#0B1220" />
    </g>
  
  
  
  <circle cx="125.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="25.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="35.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="35.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="35.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="45.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="45.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="45.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="45.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="45.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="45.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="55.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="65.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="65.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="65.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="65.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="65.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="65.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="75.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="75.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="75.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="75.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="75.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="75.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="85.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="95.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="95.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="95.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="95.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="95.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="105.0" r="4.3" fill="#0B1220" />
<circle cx="25.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="65.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="75.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="115.0" r="4.3" fill="#0B1220" />
<circle cx="25.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="35.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="75.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="125.0" r="4.3" fill="#0B1220" />
<circle cx="25.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="135.0" r="4.3" fill="#0B1220" />
<circle cx="25.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="145.0" r="4.3" fill="#0B1220" />
<circle cx="35.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="75.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="155.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="65.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="165.0" r="4.3" fill="#0B1220" />
<circle cx="25.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="35.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="65.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="175.0" r="4.3" fill="#0B1220" />
<circle cx="35.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="65.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="75.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="185.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="65.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="75.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="195.0" r="4.3" fill="#0B1220" />
<circle cx="25.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="205.0" r="4.3" fill="#0B1220" />
<circle cx="95.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="215.0" r="4.3" fill="#0B1220" />
<circle cx="35.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="45.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="55.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="65.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="75.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="85.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="225.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="235.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="245.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="255.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="135.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="235.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="265.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="195.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="275.0" r="4.3" fill="#0B1220" />
<circle cx="105.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="125.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="285.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="305.0" cy="285.0" r="4.3" fill="#0B1220" />
<circle cx="145.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="155.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="165.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="265.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="275.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="295.0" r="4.3" fill="#0B1220" />
<circle cx="115.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="175.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="185.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="205.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="215.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="225.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="245.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="255.0" cy="305.0" r="4.3" fill="#0B1220" />
<circle cx="295.0" cy="305.0" r="4.3" fill="#0B1220" />
</svg>
  );
}


export function PageHero({
  badge,
  title,
  titleBreak,
  subtitle,
}: {
  badge?: { tag?: string; text: string };
  title: string;
  titleBreak?: string;
  subtitle?: string;
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageHeroCss }} />
      <section className="mahir-page-hero">
        <div className="mahir-page-hero-bg" aria-hidden="true" />
        <div className="mahir-page-hero-inner">
          {badge && (
            <div className="mahir-page-hero-badge">
              {badge.tag && <span className="mahir-page-hero-badge-tag">{badge.tag}</span>}
              <span className="mahir-page-hero-badge-text">{badge.text}</span>
            </div>
          )}
          <h1 className="mahir-page-hero-title">
            <span className="mahir-page-hero-title-main">{title}</span>
            {titleBreak && (
              <>
                <br className="mahir-page-hero-br" />
                <span className="mahir-page-hero-title-accent">{titleBreak}</span>
              </>
            )}
          </h1>
          {subtitle && <p className="mahir-page-hero-sub">{subtitle}</p>}
        </div>
      </section>
    </>
  );
}

const pageHeroCss = `
.mahir-page-hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 40%, #12213f 0%, #080d1c 44%, #000000 100%);
  color: #fff;
  padding: 7.5rem 1.5rem 5rem;
}
@media (min-width: 768px) { .mahir-page-hero { padding: 8.5rem 1.5rem 6rem; } }
.mahir-page-hero-bg {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 8.333vw 8.333vw;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 45%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 45%, transparent 100%);
}
.mahir-page-hero::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(60% 55% at 50% 0%, rgba(56,189,248,0.22), transparent 70%),
    radial-gradient(45% 50% at 80% 90%, rgba(125,211,252,0.12), transparent 70%),
    radial-gradient(50% 60% at 10% 90%, rgba(20,38,92,0.45), transparent 70%);
}
@media (max-width: 767px) { .mahir-page-hero-bg { background-size: 28vw 28vw; } }
.mahir-page-hero-inner {
  position: relative; z-index: 1;
  max-width: 52rem; margin: 0 auto; text-align: center;
}
.mahir-page-hero-badge {
  display: inline-flex; align-items: center; gap: .6rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  padding: .4rem .7rem .4rem .4rem;
  backdrop-filter: blur(8px);
  margin-bottom: 1.4rem;
}
.mahir-page-hero-badge-tag {
  display: inline-flex; align-items: center;
  background: rgba(255,255,255,0.92); color: #0B1220;
  border-radius: 999px;
  padding: .15rem .65rem;
  font-size: .7rem; font-weight: 600;
}
.mahir-page-hero-badge-text {
  font-size: .82rem; font-weight: 500; color: rgba(255,255,255,0.9);
}
.mahir-page-hero-title {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 0.95;
  font-size: clamp(2.25rem, 5.4vw, 3.25rem);
  margin: 0;
}
.mahir-page-hero-title-main, .mahir-page-hero-title-accent { display: inline; }
.mahir-page-hero-title-accent {
  font-family: inherit;
  font-weight: 600;
  font-style: normal;
  color: rgba(255,255,255,0.72);
}
.mahir-page-hero-br { display: none; }
@media (min-width: 640px) { .mahir-page-hero-br { display: inline; } }
.mahir-page-hero-sub {
  margin: 1.5rem auto 0;
  max-width: 40rem;
  color: rgba(255,255,255,0.75);
  font-size: 1rem;
  line-height: 1.65;
}
`;

export function SitePreFooterCTA() {
  return (
    <div className="mahir-prefooter-band">
      <section className="mahir-prefooter">
        <img aria-hidden="true" src="/mahir-wordmark.jpg" alt="" className="mahir-prefooter-mark" />
        <div className="mahir-prefooter-grid">
          <div>
            <h2>Building Institutions That Serve People First.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p>Research-led investment advisory and market intelligence, built quietly and built to last. Let's talk about what you're building.</p>
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

export function SiteFooter() {
  return (
    <footer className="mahir-footer">
      <div className="mahir-footer-inner">
        <div className="mahir-footer-top">
          <div className="mahir-footer-brand">
            <span className="mahir-footer-logo"><img src={mahirNewLogo} alt="MAHIR" /></span>
            <p className="mahir-footer-brand-copy">
              Research-led investment advisory and market intelligence. Built quietly. Built to last.
            </p>
            <div className="mahir-footer-socials">
              <a href="https://www.linkedin.com/company/mahirinvest" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869C24 5.989 15.078 6.276 12.982 10.155V8z"/></svg>
              </a>
              <a href="https://x.com/MahirInvest" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.9 4.9 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.92 4.92 0 0 0 4.6 3.42A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.417 0-.22-.005-.437-.014-.653A10.243 10.243 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591393817085" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.235 2.686.235v2.972h-1.514c-1.49 0-1.955.93-1.955 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/mahirinvest" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@Mahirinvest" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="https://mahirinvest.com" target="_blank" rel="noopener noreferrer">MAHIR Invest</a></li>
              <li><a href="https://mahirscreener.com" target="_blank" rel="noopener noreferrer">MAHIR Screener</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><a href="/mahir.html#process">Approach</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="/mahir.html#faq">FAQs</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/cancellation">Cancellation Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mahir-footer-address">
          <strong>Registered office</strong>
          301 &amp; 302, 3rd Floor, Quick Office, Raichandani 45 Street, 112, Main Road, opposite D-Mart, Baner, Pune, Maharashtra 411045
        </div>

        <div className="mahir-footer-legal">
          <div>
            <h4>Regulatory Disclosures</h4>
            <p>MAHIR Investment Advisers Private Limited- Investment Advisory Unit (Separately Identifiable Unit)</p>
            <p>SEBI RIA Registration No: INA000022668</p>
            <p><strong>Advisory office address:</strong> Kasturi Market PL G/A-9/1 SHOP 1, MIDC G NR MORIS SO, Chinchwad East, Pune, Pune City, Maharashtra, India, 411019.</p>
            <p><strong>Corresponding SEBI local office:</strong> Securities and Exchange Board of India, SEBI Bhavan II, Plot No: C7, "G" Block, Bandra Kurla Complex, Bandra (East), Mumbai, 400051.</p>
            <p><strong>Principal Officer:</strong> Yash Mahavir Bedmuttha &nbsp;·&nbsp; <a href="mailto:admin@mahiradvisers.com" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "underline" }}>admin@mahiradvisers.com</a> &nbsp;·&nbsp; +91-9084945151.</p>
            <p className="mahir-footer-disclaimer">Disclaimer: Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, enlistment of IA with the Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.</p>
          </div>
          <div>
            <h4>Our Products</h4>
            <div className="mahir-footer-products">
              <a href="https://mahirinvest.com" target="_blank" rel="noopener noreferrer"><span>MAHIR Invest</span><span>mahirinvest.com →</span></a>
              <a href="https://mahirscreener.com" target="_blank" rel="noopener noreferrer"><span>MAHIR Screener</span><span>mahirscreener.com →</span></a>
            </div>
            <div className="mahir-footer-trusted">
              <p className="mahir-footer-trusted-label">Trusted by</p>
              <img src="/startup-india.png" alt="Startup India" style={{ height: "48px", width: "auto", background: "#fff", padding: "8px 14px", borderRadius: "8px", display: "block" }} />
            </div>
          </div>
        </div>

        <div className="mahir-footer-bottom">
          <p>© {new Date().getFullYear()} MAHIR Group | All Rights Reserved. Website owned and managed by MAHIR Group.</p>
          <div className="mahir-footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/cancellation">Cancellation Policy</Link>
            <Link to="/refund">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteCookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("mahirCookieChoice")) return;
    } catch { /* ignore */ }
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  const choose = (v: "accept" | "decline") => {
    try { localStorage.setItem("mahirCookieChoice", v); } catch { /* ignore */ }
    setVisible(false);
    setTimeout(() => setDismissed(true), 600);
  };

  const css = `
.mahir-cookie { position: fixed; left: 1.25rem; bottom: 1.25rem; z-index: 120; width: min(24rem, calc(100vw - 2rem)); background: #ffffff; color: #0B1220; border: 1px solid #e6e7e3; border-radius: 14px; box-shadow: 0 24px 60px -18px rgba(11,18,32,0.28), 0 2px 6px rgba(11,18,32,0.06); padding: 1.25rem 1.25rem 1.1rem; font-family: "Inter", system-ui, sans-serif; transform: translateY(140%); transition: transform .55s cubic-bezier(.2,.7,.2,1); pointer-events: none; visibility: hidden; }
.mahir-cookie.show { transform: translateY(0); pointer-events: auto; visibility: visible; }
.mahir-cookie h5 { margin: 0 0 .45rem; font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; color: #0B1220; opacity: 1 !important; }
.mahir-cookie p { margin: 0 0 1rem; font-size: .82rem; line-height: 1.55; color: #0B1220; opacity: 1 !important; }
.mahir-cookie p a { color: #0B1220; text-decoration: underline; text-underline-offset: 2px; font-weight: 500; }
.mahir-cookie-actions { display: flex; gap: .55rem; align-items: center; }
.mahir-cookie-actions button { flex: 1; border: none; cursor: pointer; font-family: inherit; font-size: .74rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; padding: .78rem .9rem; border-radius: 999px; transition: background .2s ease, color .2s ease; opacity: 1 !important; }
.mahir-cookie-accept { background: #FAFAF9; color: #ffffff !important; }
.mahir-cookie-accept:hover { background: #1a2438; }
.mahir-cookie-decline { background: transparent; color: #0B1220 !important; border: 1px solid #d9dad4 !important; }
.mahir-cookie-decline:hover { background: #f4f5f1; }
@media (max-width: 640px) { .mahir-cookie { left: .75rem; right: .75rem; bottom: .75rem; width: auto; } }
`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <aside
        className={`mahir-cookie${visible ? " show" : ""}`}
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent"
      >
        <h5>We value your privacy</h5>
        <p>
          We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies.{" "}
          <a href="#">Privacy Policy</a>
        </p>
        <div className="mahir-cookie-actions">
          <button type="button" className="mahir-cookie-decline" onClick={() => choose("decline")}>Decline</button>
          <button type="button" className="mahir-cookie-accept" onClick={() => choose("accept")}>Accept All</button>
        </div>
      </aside>
    </>
  );
}
