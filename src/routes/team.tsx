import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, PageHero, pageStyles } from "../components/site-chrome";
import sparshImage from "../assets/sparsh.png";
import yashImage from "../assets/yash-team.png";
import sarbeshImage from "../assets/sabershnew.png";
import bharatImage from "../assets/bharatnew.png";
import ashwinImage from "../assets/ashwin-new-photo.png";
import arunRanaImage from "../assets/arun rana .png";
import deepakImage from "../assets/deepak software develeoper.png";
import sushilImage from "../assets/sushil kumar pandit new.jpg";
import mangeshImage from "../assets/mangesh.png";
import mohitImage from "../assets/mohit kala.png";
import premImage from "../assets/prem lama .png";
import yashGajareImage from "../assets/yash gajare.png";

// Interns
import chandrakantImage from "../assets/Chandrakant_intern.png";
import awishkarImage from "../assets/awishkar intern .png";
import shubhamImage from "../assets/shubham intenr.png";
import gunjanImage from "../assets/gunjan.png";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team | MAHIR Group Investment Advisory" },
      { name: "description", content: "Meet the MAHIR Group team | SEBI-registered advisors, researchers, and engineers building trustworthy financial systems in Pune, India." },
      { name: "keywords", content: "MAHIR Group Team, SEBI registered advisors Pune, MAHIR Group founders, Yash Mahavir Bedmuttha" },
      { property: "og:title", content: "Team | MAHIR Group Investment Advisory" },
      { property: "og:description", content: "Meet the MAHIR Group team | SEBI-registered advisors, researchers, and engineers." },
      { property: "og:url", content: "https://mahir.in/team" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Team | MAHIR Group" },
      { name: "twitter:description", content: "Meet the MAHIR Group team | SEBI-registered advisors, researchers, and engineers." },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/team" }],
  }),

});

type Person = { name: string; role?: string; photo?: string; thoughtProcess?: string };

const people: Person[] = [
  { name: "Yash Bedmuttha", role: "Director", photo: yashImage, thoughtProcess: "Building trust through radical transparency. Focused on aligning long-term vision with flawless execution." },
  { name: "Bharat Makkar", role: "Investment Adviser", photo: bharatImage, thoughtProcess: "Uncovering hidden value through rigorous fundamental analysis. True wealth is built on patience and conviction." },
  { name: "Sarbesh Singh", role: "Technical Analyst", photo: sarbeshImage, thoughtProcess: "Translating market noise into actionable signals. Patterns tell the true story long before the news does." },
  { name: "Ashwin", role: "Investment Analyst - Mutual Fund", photo: ashwinImage, thoughtProcess: "Filtering thousands of funds to find the few that consistently beat the market. Asset allocation is the ultimate alpha." },
  { name: "Sparsh Bansal", role: "Product Manager", photo: sparshImage, thoughtProcess: "Bridging the gap between complex financial systems and intuitive user experiences. Empathy is my core metric." },
  { name: "Arun Rana", role: "Tech Lead", photo: arunRanaImage, thoughtProcess: "Architecting scalable systems that handle high-velocity market data. Exceptional code quality is non-negotiable." },
  { name: "Deepak", role: "Senior Software Developer", photo: deepakImage, thoughtProcess: "Writing clean, performant code that powers mission-critical financial applications. Every millisecond counts." },
  { name: "Sushil Kumar Pandit", role: "Sr Full Stack Developer", photo: sushilImage, thoughtProcess: "Connecting robust backend architectures with seamless frontend interfaces. Building full-stack solutions for complex problems." },
  { name: "Mohit Kale", role: "UI/UX Designer", photo: mohitImage, thoughtProcess: "Designing interfaces that make financial intelligence accessible and beautiful. Form must always follow function." },
  { name: "Prem Lama", role: "UI/UX Designer", photo: premImage, thoughtProcess: "Crafting intuitive micro-interactions that delight users. The best design is the one you don't even have to think about." },
  { name: "Janvi Aswani", role: "HR Intern", photo: "/janvi.jpg", thoughtProcess: "Building a workplace where people thrive. Passionate about creating processes that put people first." },
  { name: "Yash Gajare", role: "Video Production", photo: yashGajareImage, thoughtProcess: "Distilling complex financial concepts into compelling visual narratives. Storytelling is the most powerful tool for education." },
  { name: "Mangesh", role: "Software Developer Intern", photo: mangeshImage, thoughtProcess: "Eager to learn, quick to adapt, and ready to write code that matters. Building the future of fintech." },
  { name: "Chandrakant", role: "Software Developer Intern", photo: chandrakantImage, thoughtProcess: "Translating academic knowledge into real-world software solutions. Every bug fixed is a lesson learned." },
  { name: "Awishkar", role: "Software Developer Intern", photo: awishkarImage, thoughtProcess: "Passionate about modern web technologies and optimizing performance. Excited to contribute to a scalable architecture." },
  { name: "Shubham", role: "Software Developer Intern", photo: shubhamImage, thoughtProcess: "Focusing on clean code and reliable testing. Building a strong foundation for a career in software engineering." },
  { name: "Gunjan", role: "Software Developer Intern", photo: gunjanImage, thoughtProcess: "Bringing fresh perspectives to complex algorithmic challenges. Determined to build software that creates real impact." },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

function TeamPage() {
  return (
    <div style={pageStyles.root}>
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Team", text: `${people.length} people, one mission` }}
          title="Small On Purpose."
          titleBreak="Deliberate By Design."
          subtitle="A close-knit team of researchers, engineers and operators building financial systems that people can actually trust | with process over noise, and craft over scale."
        />


        <section style={{ padding: "1rem 1.5rem 5rem", maxWidth: "78rem", margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {people.map((p) => (
              <article key={p.name} style={{ background: "#ffffff", border: "1px solid #e4e7ee", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ width: "100%", aspectRatio: "4 / 5", background: "#f4f5f1", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderBottom: "1px solid #e4e7ee" }}>
                  {p.photo ? (
                    <img
                      src={p.photo}
                      alt={p.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: p.name === "Sarbesh Singh" ? "center 60%" : "center center",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "3rem", fontWeight: 500, color: "#14265C", letterSpacing: ".04em" }}>{initials(p.name)}</span>
                  )}
                </div>
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flexGrow: 1, gap: ".5rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#0B1220", letterSpacing: "-.01em" }}>{p.name}</h3>
                    {p.role && (
                      <p style={{ fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#0B1220", fontWeight: 500, marginTop: "0.25rem" }}>{p.role}</p>
                    )}
                  </div>
                  {p.thoughtProcess && (
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "#5b6067", marginTop: "0.5rem", fontStyle: "italic" }}>
                      "{p.thoughtProcess}"
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
