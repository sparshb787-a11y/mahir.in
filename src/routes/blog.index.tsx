import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, PageHero, pageStyles } from "../components/site-chrome";
import { blogs } from "../data/blogs";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog | MAHIR Group Investment Advisory" },
      { name: "description", content: "Read our latest thoughts, market intelligence, and research-led insights." },
      { name: "keywords", content: "MAHIR Group Blog, investment blog, finance articles, market research" },
      { property: "og:title", content: "Blog | MAHIR Group" },
      { property: "og:description", content: "Read our latest thoughts, market intelligence, and research-led insights." },
      { property: "og:url", content: "https://mahir.in/blog" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog | MAHIR Group" },
      { name: "twitter:description", content: "Read our latest thoughts, market intelligence, and research-led insights." },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/blog" }],
  }),
});

function BlogIndex() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Insights", text: "Research & Thinking" }}
          title="Clear Thinking."
          titleBreak="Documented."
          subtitle="We believe in transparency. Read our latest market research, investment philosophy, and thoughts on building better financial systems."
        />

        <section style={{ padding: "1.5rem 1.5rem 6rem", maxWidth: "78rem", margin: "0 auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blog/${blog.slug}`}
                className="group flex flex-col bg-white border border-[#e4e7ee] rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0B1220]">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="w-1 h-1 rounded-full bg-[#dcded9]"></span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#5b6067]">{blog.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-[#0B1220] leading-[1.2] mb-3 group-hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-[#5b6067] leading-relaxed mb-8 flex-1">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0B1220] mt-auto">
                  Read Article 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
