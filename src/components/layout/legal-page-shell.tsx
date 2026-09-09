import { SiteHeader, SiteFooter } from "./index";
import { PageHero } from "@/components/sections";

export function LegalPageShell({
  title,
  subtitle,
  meta,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Legal", text: title }}
          title={title}
          subtitle={subtitle}
        />
        <section className="px-5 md:px-12 py-16 md:py-20">
          <div className="max-w-4xl mx-auto rounded-3xl bg-white p-6 md:p-12">
            {meta && <div className="mb-10">{meta}</div>}
            <div className="space-y-0">{children}</div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
