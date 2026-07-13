import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, PageHero, pageStyles } from "../components/site-chrome";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | MAHIR Group Investment Advisory" },
      { name: "description", content: "Learn about the MAHIR Group. We are a strictly SEBI registered investment advisory operating on a transparent flat fee model." },
      { name: "keywords", content: "About MAHIR Group, SEBI registered advisory, transparent fee model, investment thinking" },
      { property: "og:title", content: "About Us | MAHIR Group Investment Advisory" },
      { property: "og:description", content: "Learn about the MAHIR Group. We are a strictly SEBI registered investment advisory operating on a transparent flat fee model." },
      { property: "og:url", content: "https://mahir.in/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us | MAHIR Group" },
      { name: "twitter:description", content: "Learn about the MAHIR Group. SEBI registered investment advisory." },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://mahir.in/about" },
    ],
  }),
});

function AboutPage() {
  return (
    <div style={pageStyles.root} className="bg-white">
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "About Us", text: "Our Philosophy" }}
          title="Built Quietly."
          titleBreak="Built To Last."
          subtitle="A SEBI registered advisory group building trustworthy systems for how people invest, decide, and plan."
        />

        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-[#0B1220]">
          
          {/* Section 1: How We Started */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]">
              How We Started
            </h2>
            <div className="text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
              <p>
                MAHIR Group was born out of an observation: the financial services industry was built to sell, not to advise. We saw everyday investors being overwhelmed with noise, short term speculation, and commission driven products that prioritized the distributor's wealth over the investor's.
              </p>
              <p>
                We started with a clear purpose: to build a better alternative. We wanted a firm where our own original research is the only foundation. Unbiased advice replaces hidden agendas here. Our goal is to bring high quality investment thinking to everyday investors.
              </p>
            </div>
          </div>

          {/* Section 2: Core Value: Trust */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]">
              One Core Value:<br/>Trust
            </h2>
            <div className="text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
              <p>
                We are not running a race to hit a billion-dollar valuation. We are not interested in scaling aggressively at the cost of our integrity. 
              </p>
              <p className="font-medium text-[#0B1220]">
                We have exactly one core value: Trust. 
              </p>
              <p>
                We want to build a company where people trust us more than anything else. We deliberately choose craft and accountability over mindless growth, because trust is built over years of consistent, transparent communication, and lost in a single compromised decision.
              </p>
            </div>
          </div>

          {/* Section 3: Accessible, Unbiased Advice */}
          <div className="mb-24 pt-16 md:pt-24 border-t border-[#e2e4df]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0B1220] leading-[1.1] mb-16 max-w-4xl">
              SEBI Registered. Zero Commissions.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
              <div className="col-span-1 md:col-span-2 text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
                <p>
                  As a strictly SEBI registered investment advisory, we operate on a transparent <strong className="text-[#0B1220] font-medium">flat fee model</strong>. We do not take a single rupee in commissions from mutual funds, stock brokers, or insurance companies.
                </p>
                <p>
                  Quality advice should not be a luxury for the very rich. You get completely unbiased and well researched advice that serves only you.
                </p>
                
                <ul className="pt-6 space-y-4 text-base md:text-lg text-[#0B1220]">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B1220]"></span>
                    No hidden charges
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B1220]"></span>
                    No percentage-based fees on your capital
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B1220]"></span>
                    Completely unbiased research
                  </li>
                </ul>
              </div>
              
              <div className="md:border-l border-[#e2e4df] md:pl-12 pt-8 md:pt-0 border-t md:border-t-0">
                <p className="text-sm font-semibold text-[#5b6067] uppercase tracking-widest mb-6">Our Services Start At</p>
                <div className="text-6xl md:text-7xl font-semibold tracking-tighter text-[#0B1220] mb-8">
                  ₹499
                </div>
                
                <div className="space-y-6 text-[#5b6067]">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-[#0B1220] font-medium mb-1">Less than a pizza</p>
                      <p className="text-sm">A small price for quality advice</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-[#0B1220] font-medium mb-1">Cheaper than tickets</p>
                      <p className="text-sm">For a movie weekend</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Process & Craft */}
          <div className="mb-24 pt-16 border-t border-[#e2e4df] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-3xl font-semibold text-[#0B1220] mb-6">Process Over Noise</h3>
              <p className="text-lg md:text-xl text-[#5b6067] leading-relaxed">
                We ignore market hysteria and focus on fundamentals. Every recommendation is backed by documented research and rigorous screening, keeping your portfolio safe from short term market movements.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#0B1220] mb-6">Craft Over Scale</h3>
              <p className="text-lg md:text-xl text-[#5b6067] leading-relaxed">
                We deliberately choose to remain a close knit team. By focusing on craft and accountability rather than scaling aggressively, we maintain the quality of our research and the integrity of our advice.
              </p>
            </div>
          </div>

          {/* Section 5: Technology at our Core */}
          <div className="mb-24 pt-16 border-t border-[#e2e4df] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]">
              Technology at<br/>Our Core
            </h2>
            <div className="text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
              <p>
                We believe that the best investment advisory marries deep human intuition with cutting-edge technology. That is why we are not just analysts; we are builders.
              </p>
              <p>
                By developing in-house tools like <strong className="text-[#0B1220] font-medium">MAHIR Screener</strong>, we eliminate the friction in financial data analysis. Our software sifts through thousands of data points in milliseconds, empowering our research team to uncover hidden market opportunities that others simply cannot see.
              </p>
            </div>
          </div>

          {/* Section 6: Radical Transparency */}
          <div className="mb-24 pt-16 border-t border-[#e2e4df] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]">
              Radical<br/>Transparency
            </h2>
            <div className="text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
              <p>
                The financial industry thrives on complexity and opacity. We are here to break that mold. 
              </p>
              <p>
                When we make a recommendation, we show you the exact math, the fundamental logic, and the structural tailwinds behind it. When a thesis is proven wrong, we own it publicly. We believe that acknowledging failure is the ultimate stress test for credibility. 
              </p>
            </div>
          </div>

          {/* Section 7: Commitment to Education */}
          <div className="mb-24 pt-16 border-t border-[#e2e4df] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]">
              A Commitment<br/>to Education
            </h2>
            <div className="text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
              <p>
                We don't want you to follow our advice blindly. A true fiduciary does not just hand out stock tickers; they educate the client.
              </p>
              <p>
                Through our comprehensive blog, detailed research reports, and direct research access, we aim to elevate your financial literacy. We want you to understand the <strong className="text-[#0B1220] font-medium">why</strong> behind the <strong className="text-[#0B1220] font-medium">what</strong>, because an educated investor is a disciplined investor.
              </p>
            </div>
          </div>

          {/* Section 8: The Ultimate Goal */}
          <div className="border-t border-[#e2e4df] pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220]">
              The Ultimate Goal:<br/>Financial Independence
            </h2>
            <div className="text-lg md:text-xl text-[#5b6067] leading-relaxed space-y-6">
              <p>
                Our ultimate objective is simple: to make everybody financially independent. 
              </p>
              <p>
                We believe that with the right guidance, clear reasoning, and good risk management, financial freedom is achievable for everyone. Whether you use our tools like MAHIR Screener or connect with our research team, we are here to help you get there.
              </p>
            </div>
          </div>

        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}

