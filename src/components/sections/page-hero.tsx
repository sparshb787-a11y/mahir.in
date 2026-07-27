import pageHeroCss from "../../styles/page-hero.css?url";

export function PageHero({
  badge,
  title,
  titleBreak,
  subtitle,
  variant,
}: {
  badge?: { tag?: string; text: string };
  title: string;
  titleBreak?: string;
  subtitle?: string;
  variant?: "dark";
}) {
  return (
    <>
      <link rel="stylesheet" href={pageHeroCss} />
      <section className={`mahir-page-hero${variant === "dark" ? " mahir-page-hero--dark" : ""}`}>
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
