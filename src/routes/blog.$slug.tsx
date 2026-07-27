import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { blogs } from "../data/blogs";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { blog } = loaderData;
    return {
      meta: [
        { title: `${blog.title} | MAHIR Group Blog` },
        { name: "description", content: blog.excerpt },
        { property: "og:title", content: `${blog.title} | MAHIR Group` },
        { property: "og:description", content: blog.excerpt },
        { property: "og:url", content: `https://mahir.in/blog/${blog.slug}` },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: blog.date },
        { property: "article:author", content: "MAHIR Group" },
        { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: blog.title },
        { name: "twitter:description", content: blog.excerpt },
        { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
      ],
      links: [{ rel: "canonical", href: `https://mahir.in/blog/${blog.slug}` }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { blog } = Route.useLoaderData();

  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-4xl mx-auto w-full">
        <div className="mb-12 md:mb-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-black bg-black/5 px-3 py-1.5 rounded-full border border-black/10">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-black/40">
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-black leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "Syne, system-ui, sans-serif" }}>
            {blog.title}
          </h1>

          <p className="text-xl md:text-2xl text-black/50 leading-relaxed">{blog.excerpt}</p>
        </div>

        <div className="border-t border-black/5 pt-12 md:pt-16">
          <div
            className="mahir-blog-content max-w-none text-black"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
      <style>{`
        .mahir-blog-content p {
          margin-bottom: 1.75rem;
          line-height: 1.8;
          font-size: 1.25rem;
          color: rgba(0,0,0,0.75);
        }
        @media (min-width: 768px) {
          .mahir-blog-content p { font-size: 1.375rem; }
        }
        .mahir-blog-content h2 {
          font-size: 1.875rem;
          font-weight: 600;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          color: #000;
          letter-spacing: -0.01em;
          font-family: "Syne", system-ui, sans-serif;
        }
        @media (min-width: 768px) {
          .mahir-blog-content h2 { font-size: 2.25rem; }
        }
        .mahir-blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #000;
          font-family: "Syne", system-ui, sans-serif;
        }
        .mahir-blog-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
        }
        .mahir-blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          font-size: 1.25rem;
          color: rgba(0,0,0,0.75);
        }
        @media (min-width: 768px) {
          .mahir-blog-content li { font-size: 1.375rem; }
        }
        .mahir-blog-content strong {
          font-weight: 600;
          color: #000;
        }
        .mahir-blog-content a {
          color: #000;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
