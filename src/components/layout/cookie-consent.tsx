import { useEffect, useState } from "react";
import cookieConsentCss from "../../styles/cookie-consent.css?url";

export function SiteCookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("mahirCookieChoice")) return;
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  const choose = (v: "accept" | "decline") => {
    try {
      localStorage.setItem("mahirCookieChoice", v);
    } catch {
      /* ignore */
    }
    setVisible(false);
    setTimeout(() => setDismissed(true), 600);
  };

  return (
    <aside
      className={`mahir-cookie${visible ? " show" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <h5>We value your privacy</h5>
      <p>
        We use cookies on our website to see how you interact with it. By accepting, you agree to
        our use of such cookies. <a href="#">Privacy Policy</a>
      </p>
      <div className="mahir-cookie-actions">
        <button type="button" className="mahir-cookie-decline" onClick={() => choose("decline")}>
          Decline
        </button>
        <button type="button" className="mahir-cookie-accept" onClick={() => choose("accept")}>
          Accept All
        </button>
      </div>
    </aside>
  );
}
