import { createFileRoute } from "@tanstack/react-router";
import mahirNewLogo from "../assets/mahir-logo-white.svg";

export const Route = createFileRoute("/linktree")({
  component: Linktree,
  head: () => ({
    meta: [
      { title: "MAHIR Group | Links" },
      { name: "description", content: "Research-led investment advisory and market intelligence." },
    ],
    links: [{ rel: "canonical", href: "https://mahir.in/linktree" }],
  }),
});

const links = [
  {
    name: "MAHIR Invest",
    url: "https://mahirinvest.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    description: "Our core investment advisory platform"
  },
  {
    name: "MAHIR Screener",
    url: "https://mahirscreener.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    description: "Advanced market intelligence & data"
  },
  {
    name: "MAHIR Group Website",
    url: "https://mahir.in",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
    ),
    description: "Research-led investment advisory"
  }
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/mahirinvest",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    )
  },
  {
    name: "Twitter",
    url: "https://x.com/MahirInvest",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mahirinvest",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    )
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61591393817085",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    )
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Mahirinvest",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )
  }
];

function Linktree() {
  return (
    <div className="min-h-screen bg-[#0B1220] flex flex-col items-center justify-start pt-16 pb-20 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Background ambient light */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="h-20 flex items-center justify-center mb-4">
            <img 
              src={mahirNewLogo} 
              alt="MAHIR Group" 
              className="h-full object-contain opacity-90"
              style={{ filter: "invert(1) brightness(1.1)", mixBlendMode: "screen" }}
            />
          </div>
          <p className="text-sm font-medium tracking-wide" style={{ color: "white" }}>
            Research-led investment advisory & market intelligence.
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full space-y-4 mb-12">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-white/20 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-xl group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <h2 className="font-semibold text-base" style={{ color: "white" }}>{link.name}</h2>
                  <p className="text-xs mt-0.5 opacity-80" style={{ color: "white" }}>{link.description}</p>
                </div>
              </div>
              <div className="text-white/40 group-hover:text-white transition-colors mr-2 group-hover:translate-x-1 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-4">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-white/40 hover:text-white hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Registration Disclaimer for trust (Optional but good practice for RIA) */}
        <div className="mt-16 text-center text-xs font-medium" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
          <p>SEBI RIA Registration No: INA000022668</p>
        </div>
      </div>
    </div>
  );
}
