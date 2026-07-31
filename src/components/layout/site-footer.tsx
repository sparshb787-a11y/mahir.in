import { Link } from "@tanstack/react-router";
import mahirNewLogo from "../../assets/images/logos/mahir-trust-leads.svg";

export function SiteFooter() {
  return (
    <footer className="mahir-footer">
      <div className="footer-line" />

      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="mahir-footer-logo">
              <img src={mahirNewLogo} alt="MAHIR" className="mahir-logo" style={{ filter: "invert(1)", opacity: 1, visibility: "visible", mixBlendMode: "normal" }} />
            </span>
            <p className="brand-description">
              Research-led investment advisory and market intelligence. Built quietly. Built to
              last.
            </p>
            <div className="mahir-footer-socials">
              <a
                href="https://www.linkedin.com/company/mahirinvest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869C24 5.989 15.078 6.276 12.982 10.155V8z" />
                </svg>
              </a>
              <a
                href="https://x.com/MahirInvest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.9 4.916 0 0 1-2.229-.616v.062a4.918 4.916 0 0 0 3.946 4.827 4.902 4.918 0 0 1-2.224.084 4.92 4.916 0 0 0 4.6 3.42A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.417 0-.22-.005-.437-.014-.653A10.243 10.243 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591393817085"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.235 2.686.235v2.972h-1.514c-1.49 0-1.955.93-1.955 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Mahirinvest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-column-title">Company</div>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-column-title">Legal</div>
            <ul className="footer-links">
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/cancellation">Cancellation Policy</Link>
              </li>
              <li>
                <Link to="/refund">Refund Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column office-column">
            <div className="footer-column-title">Registered Office</div>
            <p className="office-address">
              301 &amp; 302, 3rd Floor, Quick Office, Raichandani 45 Street, 112, Main Road,
              opposite D-Mart, Baner, Pune, Maharashtra 411045
            </p>
            <div className="trusted-block">
              <div className="trusted-title">Trusted By</div>
              <img
                src="/startup-india.png"
                alt="Startup India"
                className="startup-logo"
              />
            </div>
          </div>
        </div>

        <div className="footer-statement">
          <h2 className="statement">Building Institutions That Serve People First.</h2>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} MAHIR Group | All Rights Reserved.
          </p>
          <p className="managed-by">
            Website owned and managed by <span>MAHIR Group.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
