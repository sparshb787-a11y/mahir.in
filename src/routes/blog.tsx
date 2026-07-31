import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";
import { blogs } from "../data/blogs";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog | MAHIR Group" },
      {
        name: "description",
        content:
          "Read our latest market research, what we think about investing, and thoughts on building better systems for investors.",
      },
      { property: "og:title", content: "Blog | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Read our latest market research, what we think about investing, and thoughts on building better systems for investors.",
      },
      { property: "og:url", content: "https://mahir.in/blog" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mahirinvest" },
      { name: "twitter:title", content: "Blog | MAHIR Group" },
      {
        name: "twitter:description",
        content:
          "Read our latest market research, what we think about investing, and thoughts on building better systems for investors.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/blog" }],
  }),
});

const blogCardCss = `
.mahir-blog-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 1.25rem;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease;
  text-decoration: none;
  color: inherit;
}
.mahir-blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
}
.mahir-blog-card-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.mahir-blog-card-meta {
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-bottom: .75rem;
}
.mahir-blog-card-date {
  font-size: .75rem;
  color: rgba(11,18,32,0.45);
  letter-spacing: .02em;
}
.mahir-blog-card-readtime {
  font-size: .6875rem;
  font-weight: 300;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(11,18,32,0.4);
  background: rgba(11,18,32,0.04);
  padding: .2rem .6rem;
  border-radius: 999px;
}
.mahir-blog-card-title {
  font-family: "Syne", system-ui, -apple-system, sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #000000;
  margin: 0 0 .5rem;
}
.mahir-blog-card-excerpt {
  font-size: .9rem;
  line-height: 1.65;
  color: rgba(11,18,32,0.55);
  margin: 0;
  flex: 1;
}
.mahir-blog-card-link {
  margin-top: 1.25rem;
  padding-top: 1rem;
  font-size: .8125rem;
  font-weight: 300;
  color: #000000;
  display: flex;
  align-items: center;
  gap: .35rem;
}
.mahir-blog-card:hover .mahir-blog-card-link { gap: .55rem; }
`;

function BlogPage() {
  const { location } = useRouterState();
  const isBlogListing = location.pathname === "/blog";

  if (!isBlogListing) {
    return <Outlet />;
  }

  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <style dangerouslySetInnerHTML={{ __html: blogCardCss }} />
      <main>
        <PageHero
          badge={{ tag: "Blogs", text: "Research & Thinking" }}
          title="Clarity"
          titleBreak="in Every Note."
          subtitle="We believe in transparency. Read our latest market research, what we think about investing, and thoughts on building better systems for investors."
        />


        <section className="overflow-hidden px-5 py-12 md:px-12">
          <div className="mx-auto max-w-[900px]">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to="/blog/$slug"
                  params={{ slug: blog.slug }}
                  className="mahir-blog-card"
                >
                  <div className="mahir-blog-card-body">
                    <div className="mahir-blog-card-meta">
                      <span className="mahir-blog-card-date">{blog.date}</span>
                      <span className="mahir-blog-card-readtime">{blog.readTime}</span>
                    </div>
                    <h2 className="mahir-blog-card-title">{blog.title}</h2>
                    <p className="mahir-blog-card-excerpt">{blog.excerpt}</p>
                    <div className="mahir-blog-card-link">Read Article →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-5 py-16 md:px-12">
          <div className="mx-auto max-w-[900px]">
            <div className="rounded-2xl bg-black/[0.03] px-7 py-6">
              <p className="text-[0.8125rem] leading-[1.7] text-black/45">
                <strong className="text-black/60">Disclaimer:</strong> The content above is for
                educational and informational purposes only. It does not constitute investment
                advice or a recommendation to buy or sell any securities. Please consult a
                SEBI-registered investment adviser before making investment decisions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
