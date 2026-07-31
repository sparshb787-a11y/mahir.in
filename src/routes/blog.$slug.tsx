import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, pageStyles } from "../components/layout";
import { PageHero } from "@/components/sections";
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
      <main>
        <PageHero
          badge={{ tag: "Blog", text: "Research & Thinking" }}
          title={blog.title}
          subtitle={blog.excerpt}
        />
        <section className="px-5 md:px-12 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="w-1 h-1 rounded-full bg-black/20" />
              <span className="text-xs font-semibold uppercase tracking-widest text-black/40">
                {blog.readTime}
              </span>
            </div>

            <div
              className="mahir-blog-content max-w-none text-black"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </section>
      </main>
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
          font-weight: 300;
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
          font-weight: 300;
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
          font-weight: 300;
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
