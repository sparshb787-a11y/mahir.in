import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, SitePreFooterCTA, pageStyles } from "../components/layout";
import { PageHero } from "../components/sections";
import teamCardCss from "../styles/team.css?url";
import sparshImage from "../assets/images/team/sparsh.png";
import yashImage from "../assets/images/team/yash-bedmuttha.jpg";
import sarbeshImage from "../assets/images/team/sarbesh.png";
import bharatImage from "../assets/images/team/bharat-new.png";
import ashwinImage from "../assets/images/team/ashwin-new-photo.png";
import arunRanaImage from "../assets/images/team/arun-rana.png";
import deepakImage from "../assets/images/team/deepak-developer.png";
import sushilImage from "../assets/images/team/sushil-pandit-new.jpg";
import mangeshImage from "../assets/images/team/mangesh.png";
import mohitImage from "../assets/images/team/mohit-kala.png";
import premImage from "../assets/images/team/prem-lama.png";
import yashGajareImage from "../assets/images/team/yash-gajare.png";
import chandrakantImage from "../assets/images/team/chandrakant-intern.png";
import awishkarImage from "../assets/images/team/awishkar-intern.png";
import shubhamImage from "../assets/images/team/shubham-intern.png";
import gunjanImage from "../assets/images/team/gunjan.png";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team | MAHIR Group" },
      {
        name: "description",
        content:
          "Meet the MAHIR Group team. A close-knit group of researchers, engineers and operators building financial systems people can trust.",
      },
      { property: "og:title", content: "Team | MAHIR Group" },
      {
        property: "og:description",
        content:
          "Meet the MAHIR Group team. A close-knit group of researchers, engineers and operators building financial systems people can trust.",
      },
      { property: "og:url", content: "https://mahir.in/team" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mahirinvest" },
      { name: "twitter:title", content: "Team | MAHIR Group" },
      {
        name: "twitter:description",
        content:
          "Meet the MAHIR Group team. A close-knit group of researchers, engineers and operators building financial systems people can trust.",
      },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/team" }],
  }),
});

type Person = { name: string; role?: string; photo?: string; thoughtProcess?: string };

const people: Person[] = [
  {
    name: "Yash Bedmuttha",
    role: "Director",
    photo: yashImage,
    thoughtProcess:
      "Building trust through radical transparency. Focused on aligning long-term vision with flawless execution.",
  },
  {
    name: "Bharat Makkar",
    role: "Investment Adviser",
    photo: bharatImage,
    thoughtProcess:
      "Uncovering hidden value through rigorous fundamental analysis. True wealth is built on patience and conviction.",
  },
  {
    name: "Sarbesh Singh",
    role: "Technical Analyst",
    photo: sarbeshImage,
    thoughtProcess:
      "Translating market noise into actionable signals. Patterns tell the true story long before the news does.",
  },
  {
    name: "Ashwin Patil",
    role: "Investment Analyst - Mutual Fund",
    photo: ashwinImage,
    thoughtProcess:
      "Filtering thousands of funds to find the few that consistently beat the market. Asset allocation is the ultimate alpha.",
  },
  {
    name: "Sparsh Bansal",
    role: "Product Manager",
    photo: sparshImage,
    thoughtProcess:
      "Bridging the gap between complex financial systems and intuitive user experiences. Empathy is my core metric.",
  },
  {
    name: "Arun Rana",
    role: "Tech Lead",
    photo: arunRanaImage,
    thoughtProcess:
      "Architecting scalable systems that handle high-velocity market data. Exceptional code quality is non-negotiable.",
  },
  {
    name: "Deepak Porwal",
    role: "Senior Software Developer",
    photo: deepakImage,
    thoughtProcess:
      "Writing clean, performant code that powers mission-critical financial applications. Every millisecond counts.",
  },
  {
    name: "Sushil Kumar Pandit",
    role: "Sr Full Stack Developer",
    photo: sushilImage,
    thoughtProcess:
      "Connecting robust backend architectures with seamless frontend interfaces. Building full-stack solutions for complex problems.",
  },
  {
    name: "Mohit Kale",
    role: "UI/UX Designer",
    photo: mohitImage,
    thoughtProcess:
      "Designing interfaces that make financial intelligence accessible and beautiful. Form must always follow function.",
  },
  {
    name: "Prem Lama",
    role: "UI/UX Designer",
    photo: premImage,
    thoughtProcess:
      "Crafting intuitive micro-interactions that delight users. The best design is the one you don't even have to think about.",
  },
  {
    name: "Yash Gajare",
    role: "Video Production",
    photo: yashGajareImage,
    thoughtProcess:
      "Distilling complex financial concepts into compelling visual narratives. Storytelling is the most powerful tool for education.",
  },
  {
    name: "Mangesh Gore",
    role: "Software Developer Intern",
    photo: mangeshImage,
    thoughtProcess:
      "Eager to learn, quick to adapt, and ready to write code that matters. Building the future of fintech.",
  },
  {
    name: "Chandrakant Mali",
    role: "Software Developer Intern",
    photo: chandrakantImage,
    thoughtProcess:
      "Translating academic knowledge into real-world software solutions. Every bug fixed is a lesson learned.",
  },
  {
    name: "Awishkar Kumbhar",
    role: "Software Developer Intern",
    photo: awishkarImage,
    thoughtProcess:
      "Passionate about modern web technologies and optimizing performance. Excited to contribute to a scalable architecture.",
  },
  {
    name: "Shubham Gavhane",
    role: "Software Developer Intern",
    photo: shubhamImage,
    thoughtProcess:
      "Focusing on clean code and reliable testing. Building a strong foundation for a career in software engineering.",
  },
  {
    name: "Gunjan Vishwakarma",
    role: "Software Developer Intern",
    photo: gunjanImage,
    thoughtProcess:
      "Bringing fresh perspectives to complex algorithmic challenges. Determined to build software that creates real impact.",
  },
];

function emailFor(name: string) {
  const first = name.split(/\s+/)[0]?.toLowerCase() ?? "hello";
  return `${first}@mahir.in`;
}

function TeamPage() {
  return (
    <div style={pageStyles.root}>
      <link rel="stylesheet" href={teamCardCss} />
      <SiteHeader />
      <main>
        <PageHero
          badge={{ tag: "Team", text: "Leadership & Talent" }}
          title="People Behind"
          titleBreak="the Vision."


          subtitle="A close-knit team of researchers, engineers and operators building financial systems that people can actually trust — with process over noise, and craft over scale."
        />

        <section className="px-5 py-16 md:py-20 md:px-12">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {people.map((p) => (
                <article key={p.name} className="mahir-team-card-light">
                  <div className="mahir-team-card-light-img">
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} loading="lazy" />
                    ) : (
                      <span
                        style={{
                          fontSize: "3rem",
                          fontWeight: 500,
                          color: "rgba(0,0,0,0.2)",
                          letterSpacing: ".04em",
                        }}
                      >
                        {p.name
                          .split(/\s+/)
                          .slice(0, 2)
                          .map((n) => n[0]?.toUpperCase() ?? "")
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div className="mahir-team-card-light-body">
                    <h3 className="mahir-team-card-light-name">{p.name}</h3>
                    {p.role && <p className="mahir-team-card-light-role">{p.role}</p>}
                    {p.thoughtProcess && (
                      <p className="mahir-team-card-light-quote">"{p.thoughtProcess}"</p>
                    )}
                    <div className="mahir-team-card-light-links">
                      <a href={`mailto:${emailFor(p.name)}`} aria-label={`Email ${p.name}`}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-20 md:px-12 text-center">
          <div className="mx-auto max-w-[900px]">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4"
              style={{ fontFamily: "Syne, system-ui, sans-serif" }}
            >
              Building Institutions That Serve People First.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-[1.6] text-black/50">
              Research-led investment advisory and market intelligence, built quietly and built to
              last.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border-none cursor-pointer no-underline transition-opacity hover:opacity-90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SitePreFooterCTA />
      <SiteFooter />
    </div>
  );
}
