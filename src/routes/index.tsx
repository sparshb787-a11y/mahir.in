import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import mahirHtmlRaw from "./mahir-body-v3.html?raw";
import "../mahir.css";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MAHIR Group | SEBI Registered Investment Advisory | Research-Led Advice & Market Intelligence" },
      { name: "description", content: "MAHIR Group is a SEBI-registered investment advisory (INA000022668) offering research-led stock recommendations and market intelligence through MAHIR Invest and MAHIR Screener." },
      { name: "keywords", content: "SEBI registered investment advisor, RIA India, stock advisory, investment advisory Pune, MAHIR Invest, MAHIR Screener, equity research, market intelligence" },
      { name: "author", content: "MAHIR Group Investment Advisers Private Limited" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MAHIR Group" },
      { property: "og:title", content: "MAHIR Group | SEBI Registered Investment Advisory" },
      { property: "og:description", content: "Research-led investment advisory and market intelligence, built quietly and built to last." },
      { property: "og:url", content: "https://mahir.in/" },
      { property: "og:image", content: "https://mahir.in/mahir-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MAHIR Group | SEBI Registered Investment Advisory" },
      { name: "twitter:description", content: "Research-led investment advisory and market intelligence." },
      { name: "twitter:image", content: "https://mahir.in/mahir-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://mahir.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" },
      { rel: "icon", href: "/circle-favicon.png", type: "image/png" }
    ],
    scripts: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js", defer: true },
      { src: "https://unpkg.com/lucide@latest", defer: true }
    ]
  }),
});

function Index() {
  useEffect(() => {
    // Apply body classes
    const body = document.body;
    body.className = "hero-stage-ready selection:bg-white selection:text-black";

    let checkInterval: ReturnType<typeof setInterval>;
    let ctx: any;
    let timelineIo: IntersectionObserver | null = null;
    let started = false;
    let gsapCtx: any;
    let resizeHandler: any;
    let spinTween1: any;
    let spinTween2: any;

    function initGsap() {
      const { gsap, ScrollTrigger, lucide } = window as any;
      if (!gsap || !ScrollTrigger || !lucide) return false;

      // Timeline IntersectionObserver logic
      const container = document.getElementById("mahir-timeline");
      const progress = document.getElementById("mahir-tl-progress");
      const steps = container?.querySelectorAll(".mahir-tl-step");

      function resetTimeline() {
        started = false;
        if (progress) progress.style.height = "0%";
        if (steps) steps.forEach((s) => s.classList.remove("is-in"));
      }
      function playTimeline() {
        if (started) return;
        started = true;
        if (progress) setTimeout(() => { progress.style.height = "100%"; }, 200);
        if (steps) steps.forEach((s, i) => { setTimeout(() => s.classList.add("is-in"), 350 + i * 450); });
      }
      timelineIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) playTimeline();
            else if (e.boundingClientRect.top > 0) resetTimeline();
          });
        },
        { threshold: 0.15, rootMargin: "-80px 0px -40px 0px" }
      );
      if (container) timelineIo.observe(container);

    // GSAP context for easy revert and cleanup

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      gsapCtx = gsap.context(() => {
        // Run GSAP script inside context
    const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const ease = (t) => 1 - Math.pow(1 - clamp(t), 3);
    const mapRange = (p, a, b) => clamp((p - a) / (b - a));

    function triangular(p, a, b, c, d) {
      if (p < a || p > d) return 0;
      if (p >= b && p <= c) return 1;
      if (p < b) return ease((p - a) / (b - a));
      return 1 - ease((p - c) / (d - c));
    }

    function interpolateKeys(keys, p) {
      let left = keys[0];
      let right = keys[keys.length - 1];
      for (let i = 0; i < keys.length - 1; i++) {
        if (p >= keys[i].p && p <= keys[i + 1].p) {
          left = keys[i];
          right = keys[i + 1];
          break;
        }
      }
      const t = ease((p - left.p) / (right.p - left.p));
      const out = {};
      Object.keys(left).forEach((key) => {
        if (key !== "p") out[key] = lerp(left[key], right[key], t);
      });
      return out;
    }

    function makeSpokes(target, cx, cy, r, count, offset) {
      const group = document.getElementById(target);
      if (!group) return;
      for (let i = 0; i < count; i++) {
        const angle = ((Math.PI * 2) / count) * i + offset;
        const hubAngle = angle + (i % 2 === 0 ? 0.18 : -0.18);
        const x1 = cx + Math.cos(hubAngle) * 34;
        const y1 = cy + Math.sin(hubAngle) * 34;
        const x2 = cx + Math.cos(angle) * r;
        const y2 = cy + Math.sin(angle) * r;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke-linecap", "square");
        line.setAttribute("filter", "url(#bevel)");
        group.appendChild(line);
      }
    }

    // spokes removed
    // spokes removed

    const product = document.getElementById("productWrap");
    const heroStage = document.getElementById("stage");

    function heroUnitY(value) {
      const h = heroStage?.getBoundingClientRect().height || window.innerHeight;
      return `${(h * value) / 100}px`;
    }

    function heroUnitMin(value) {
      const rect = heroStage?.getBoundingClientRect();
      const base = rect ? Math.min(rect.width, rect.height) : Math.min(window.innerWidth, window.innerHeight);
      return `${(base * value) / 100}px`;
    }

    const darkLayer = document.getElementById("darkLayer");
    const lightLayer = document.getElementById("lightLayer");
    const heroNoise = document.querySelector("#stage .noise");
    const grid = document.getElementById("grid");
    const rearWheel = document.getElementById("rearWheel");
    const bikeFrame = document.getElementById("bikeFrame");
    const ribTech = document.getElementById("ribTech");
    const rail = document.getElementById("railProgress");
    const chapters = Array.from(document.querySelectorAll("[data-chapter]"));

    const states = [
      { el: document.getElementById("state0"), center: true, opacity: (p) => clamp(1 - mapRange(p, 0.10, 0.23)), mid: 0.11 },
      { el: document.getElementById("state1"), center: false, opacity: (p) => triangular(p, 0.17, 0.25, 0.33, 0.43), mid: 0.30 },
      { el: document.getElementById("state2"), center: false, opacity: (p) => triangular(p, 0.36, 0.43, 0.51, 0.59), mid: 0.48 },
      { el: document.getElementById("state3"), center: false, opacity: (p) => triangular(p, 0.55, 0.62, 0.72, 0.80), mid: 0.67 },
      { el: document.getElementById("state4"), center: false, opacity: (p) => mapRange(p, 0.75, 0.88), mid: 0.88 }
    ];

    const desktopKeys = [
      { p: 0.00, x: 0, y: 23, s: 0.82, z: 0, rx: 0, ry: 0, rear: 0, frame: 0, rib: 0 },
      { p: 0.18, x: 0, y: 20, s: 1.18, z: 5, rx: 0, ry: 0, rear: 0, frame: 0, rib: 0 },
      { p: 0.38, x: -35, y: 0, s: 1.55, z: -13, rx: 0, ry: 0, rear: 0, frame: 0, rib: 0 },
      { p: 0.55, x: -2, y: 8, s: 1.18, z: 86, rx: 0, ry: 68, rear: 0.22, frame: 0, rib: 0 },
      { p: 0.75, x: 33, y: -2, s: 1.23, z: -8, rx: 70, ry: 0, rear: 0.58, frame: 0, rib: 1 },
      { p: 1.00, x: 20, y: 0, s: 0.94, z: -8, rx: 0, ry: 0, rear: 1, frame: 1, rib: 0 }
    ];

    const mobileKeys = [
      { p: 0.00, x: 0, y: 25, s: 0.62, z: 0, rx: 0, ry: 0, rear: 0, frame: 0, rib: 0 },
      { p: 0.18, x: 0, y: 24, s: 0.78, z: 5, rx: 0, ry: 0, rear: 0, frame: 0, rib: 0 },
      { p: 0.38, x: -27, y: 4, s: 0.96, z: -13, rx: 0, ry: 0, rear: 0, frame: 0, rib: 0 },
      { p: 0.55, x: 1, y: 3, s: 0.82, z: 86, rx: 0, ry: 68, rear: 0.18, frame: 0, rib: 0 },
      { p: 0.75, x: 20, y: -16, s: 0.78, z: -8, rx: 70, ry: 0, rear: 0.56, frame: 0, rib: 1 },
      { p: 1.00, x: 8, y: -18, s: 0.70, z: -8, rx: 0, ry: 0, rear: 1, frame: 1, rib: 0 }
    ];

    function updateChapters(p) {
      let active = 0;
      if (p >= 0.36 && p < 0.55) active = 1;
      if (p >= 0.55 && p < 0.75) active = 2;
      if (p >= 0.75) active = 3;
      chapters.forEach((chapter, index) => {
        chapter.style.opacity = index === active ? 1 : 0.4;
        chapter.style.transform = index === active ? "translate3d(12px,0,0)" : "translate3d(0,0,0)";
      });
    }

    function updateStates(p) {
      states.forEach((state) => {
        const opacity = state.opacity(p);
        const yOffset = lerp(20, 0, ease(opacity));
        const scale = lerp(0.95, 1, ease(opacity));
        state.el.style.opacity = opacity;
        state.el.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
        state.el.style.transform = state.center
          ? `translate(-50%, ${yOffset}px) scale(${scale})`
          : `translate(0, ${yOffset}px) scale(${scale})`;
      });
    }

    ScrollTrigger.create({
      trigger: "#reveal",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        updateChapters(p);
        updateStates(p);
        rail.style.height = `${p * 100}%`;

        const keys = window.innerWidth > 767 ? desktopKeys : mobileKeys;
        const state = interpolateKeys(keys, p);

        product.style.transform = `translate3d(calc(-50% + ${state.x}vw), calc(-50% + ${heroUnitY(state.y)}), ${heroUnitMin(state.z)}) rotateX(${state.rx}deg) rotateY(${state.ry}deg) scale(${state.s})`;

        if (rearWheel) rearWheel.style.opacity = state.rear;
        if (bikeFrame) bikeFrame.style.opacity = state.frame;
        if (ribTech) ribTech.style.opacity = state.rib;

        if (grid) {
          grid.style.transform = `translate3d(0, ${heroUnitY(lerp(0, 8, p))}, 0) scale(${lerp(1, 1.08, p)})`;
          grid.style.opacity = lerp(0.3, 0.14, p);
        }
        if (heroNoise) {
          heroNoise.style.transform = `translate3d(0, ${heroUnitY(lerp(0, -5, p))}, 0)`;
          heroNoise.style.opacity = lerp(0.4, 0.16, p);
        }
        if (lightLayer) {
          lightLayer.style.transform = `scale(${lerp(1, 1.12, p)})`;
        }
        darkLayer.style.opacity = mapRange(p, 0.0, 0.15);
      }
    });

    gsap.utils.toArray(".reveal-up").forEach((item) => {
      gsap.to(item, {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 82%", toggleActions: "play none none reverse" }
      });
    });

    const specialImages = gsap.utils.toArray(".special-img");
    const specialRows = gsap.utils.toArray(".special-row");
    const specialNumber = document.getElementById("specialNumber");

    function setSpecial(index) {
      specialImages.forEach((img, i) => {
        gsap.to(img, { opacity: i === index ? 1 : 0, duration: 0.35, overwrite: true });
      });
      specialRows.forEach((row, i) => {
        gsap.to(row, { opacity: i === index ? 1 : 0.2, duration: 0.35, overwrite: true });
      });
      if (specialNumber) specialNumber.textContent = String(index + 1);
    }

    ScrollTrigger.create({
      trigger: "#specialPin",
      start: "top 12%",
      end: "+=800",
      scrub: true,
      pin: window.innerWidth >= 1024,
      onUpdate: self => {
        const index = Math.min(1, Math.floor(self.progress * 2));
        setSpecial(index);
      }
    });

    gsap.fromTo("#ctImage",
      { y: 90, scale: 0.94, opacity: 0.72 },
      { y: 0, scale: 1, opacity: 1, ease: "none",
        scrollTrigger: { trigger: "#engineeringPin", start: "top 70%", end: "center center", scrub: true } }
    );

    gsap.from(".label-chip", {
      y: 18, opacity: 0, stagger: 0.08, duration: 0.6, ease: "power3.out",
      scrollTrigger: { trigger: "#ctWrap", start: "top 62%", toggleActions: "play none none reverse" }
    });

    const galleryTrack = document.getElementById("galleryTrack");
    const galleryProgress = document.getElementById("galleryProgress");

    function galleryDistance() {
      return Math.max(0, galleryTrack.scrollWidth - window.innerWidth + 48);
    }

    let galleryTween;
    if (galleryTrack) {
      galleryTween = gsap.to(galleryTrack, {
        x: () => -galleryDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: "#galleryPin", start: "top 72px", end: () => `+=${galleryDistance()}`,
          scrub: true, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: self => { if (galleryProgress) galleryProgress.style.width = `${self.progress * 100}%`; }
        }
      });
    }

    gsap.fromTo("#systemImage",
      { scale: 1.12, y: 36 },
      { scale: 1, y: 0, ease: "none",
        scrollTrigger: { trigger: "#system", start: "top 80%", end: "bottom 30%", scrub: true } }
    );

    gsap.utils.toArray(".signature-card").forEach((card) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0.35, rotateX: 2.5, scale: 0.985 },
        { y: 0, opacity: 1, rotateX: 0, scale: 1, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 82%", end: "top 36%", scrub: true } }
      );
    });

    gsap.utils.toArray("#process article").forEach((row) => {
      gsap.fromTo(row,
        { opacity: 0.42, y: 24 },
        { opacity: 1, y: 0, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 84%", end: "top 48%", scrub: true } }
      );
    });

    const signalTrack = document.getElementById("signalTrack");
    if (signalTrack) {
      gsap.to(signalTrack, {
        x: () => -(signalTrack.scrollWidth - window.innerWidth) * 0.45,
        ease: "none",
        scrollTrigger: { trigger: signalTrack.closest("section"), start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true }
      });
    }

    const body = document.body;
    const header = document.querySelector("header");
    const headerBrand = header?.querySelector("a.nav-brand");
    const navLinks = gsap.utils.toArray("header nav a");
    const headerButton = header?.querySelector("a.skeuomorphic-btn");
    const heroIntroLines = gsap.utils.toArray("#state0 [data-line]");
    const frontWheel = document.getElementById("frontWheel");
    const frontSpokes = document.getElementById("spokesFront");
    const loadOverlay = document.getElementById("loadOverlay");
    const loaderPanel = document.getElementById("loaderPanel");
    const loaderMark = document.getElementById("loaderMark");
    const loaderMicro = document.getElementById("loaderMicro");
    const loaderCapsule = document.getElementById("loaderCapsule");

    gsap.set([header, headerBrand, headerButton, ...navLinks, ...chapters, ...heroIntroLines].filter(Boolean), { autoAlpha: 0, y: -12 });
    gsap.set(heroIntroLines, { yPercent: 115 });
    gsap.set(chapters, { x: -16 });
    gsap.set(product, { autoAlpha: 0, filter: "blur(9px)", scale: 0.96 });
    gsap.set("#grid", { autoAlpha: 0, scale: 1.06 });
    gsap.set("#stage .machined-border", { autoAlpha: 0, scale: 0.92 });

    gsap.set(loaderPanel, { width: "100vw", height: "0vh", backgroundColor: "#ffffff" });
    gsap.set(loaderMark, { autoAlpha: 0, scale: 0.84, y: 10 });
    gsap.set(loaderMicro, { autoAlpha: 0, y: 10 });
    gsap.set(loaderCapsule, { autoAlpha: 0, scaleX: 0.25 });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introSeen = (() => { try { return sessionStorage.getItem("mahirIntroSeen") === "1"; } catch (e) { return false; } })();

    function revealHeroInstantly() {
      gsap.set(loadOverlay, { autoAlpha: 0 });
      gsap.set([product, "#grid", "#stage .machined-border"], { autoAlpha: 1, filter: "blur(0px)", scale: 1 });
      gsap.set("#grid", { autoAlpha: 0.3, scale: 1 });
      gsap.set("#stage .machined-border", { autoAlpha: 0.1, scale: 1 });
      gsap.set([header, headerBrand, headerButton, ...navLinks, ...chapters, ...heroIntroLines].filter(Boolean), { autoAlpha: 1, y: 0, yPercent: 0, x: 0 });
      loadOverlay?.remove();
      body?.classList.remove("hero-stage-ready");
    }

    if (reduceMotion || introSeen) {
      revealHeroInstantly();
    } else {
      try { sessionStorage.setItem("mahirIntroSeen", "1"); } catch (e) {}
      const introTl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => ScrollTrigger.refresh() });

      introTl
        .to(loaderPanel, { height: "31vh", duration: 0.54, ease: "expo.inOut" }, 0.08)
        .to(loaderMark, { autoAlpha: 1, y: 0, scale: 0.9, duration: 0.6, ease: "power2.out" }, 0.28)
        .to(loaderPanel, { height: "100vh", duration: 0.58, ease: "expo.inOut" }, 0.58)
        .to(loaderMark, { scale: 2.1, duration: 1.9, ease: "power2.inOut" }, 0.7)
        .to(loaderPanel, { width: "60vmin", height: "60vmin", duration: 0.72, ease: "expo.inOut" }, 1.08)
        .to(loaderPanel, { backgroundColor: "rgba(255,255,255,0)", duration: 0.16, ease: "none" }, 1.58)
        .to(loaderMicro, { autoAlpha: 1, y: 0, duration: 0.36, ease: "power3.out" }, 1.72)
        .to(loaderMicro, { autoAlpha: 0, y: -6, duration: 0.26, ease: "power3.in" }, 2.08)
        .to(loaderMark, { scale: 2.6, autoAlpha: 0, duration: 0.42, ease: "power3.inOut" }, 2.3)
        .to(loaderCapsule, { autoAlpha: 1, scaleX: 1, duration: 0.26, ease: "power3.out" }, 2.54)
        .to(loaderCapsule, { autoAlpha: 0, scaleX: 0.45, duration: 0.28, ease: "power3.in" }, 2.8)
        .to(loadOverlay, { autoAlpha: 0, duration: 0.34, ease: "power2.out" }, 2.96)
        .to(product, { autoAlpha: 1, filter: "blur(0px)", scale: 1, duration: 0.82, ease: "power4.out" }, 2.78)
        .from(frontWheel || {}, { svgOrigin: "420 455", rotation: -16, scale: 0.9, duration: 1.18, ease: "power4.out" }, 2.8)
        .from(frontSpokes || {}, { svgOrigin: "420 455", rotation: -30, duration: 1.22, ease: "power4.out" }, 2.86)
        .to("#grid", { autoAlpha: 0.3, scale: 1, duration: 0.9, ease: "power3.out" }, 2.98)
        .to("#stage .machined-border", { autoAlpha: 0.1, scale: 1, duration: 0.9, ease: "power3.out" }, 3.04)
        .to(header, { y: 0, autoAlpha: 1, duration: 0.62, ease: "power3.out" }, 3.14)
        .to(headerBrand, { y: 0, autoAlpha: 1, duration: 0.52, ease: "power3.out" }, 3.2)
        .to(navLinks, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.46, ease: "power3.out" }, 3.26)
        .to(headerButton, { y: 0, autoAlpha: 1, duration: 0.46, ease: "power3.out" }, 3.32)
        .to(heroIntroLines, { y: 0, yPercent: 0, autoAlpha: 1, stagger: 0.08, duration: 0.78, ease: "power4.out" }, 3.34)
        .to(chapters, { x: 0, y: 0, autoAlpha: 1, stagger: 0.055, duration: 0.5, ease: "power3.out" }, 3.48)
        .call(() => { loadOverlay?.remove(); body?.classList.remove("hero-stage-ready"); });
    }

    /* Removed continuous yoyo float on state-lines, it was clipping descenders inside overflow-hidden wrappers. */

    gsap.utils.toArray(".special-img").forEach((img) => {
      gsap.fromTo(img,
        { scale: 1.12, yPercent: 6 },
        { scale: 1, yPercent: -6, ease: "none",
          scrollTrigger: { trigger: "#specialPin", start: "top bottom", end: "bottom top", scrub: true } }
      );
    });

    gsap.utils.toArray(".signature-card .abstract-panel").forEach((img) => {
      const card = img.closest(".signature-card");
      gsap.fromTo(img,
        { scale: 1.12, yPercent: 8 },
        { scale: 1, yPercent: -8, ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } }
      );
    });

    gsap.utils.toArray(".model-panel .abstract-panel").forEach((img) => {
      const panel = img.closest(".model-panel");
      gsap.fromTo(img,
        { scale: 1.14, xPercent: -4 },
        { scale: 1, xPercent: 4, ease: "none",
          scrollTrigger: { trigger: panel, start: "left right", end: "right left", scrub: true, containerAnimation: galleryTween || undefined } }
      );
    });

    gsap.utils.toArray(".label-chip").forEach((chip, index) => {
      gsap.fromTo(chip,
        { yPercent: 18 + index * 2 },
        { yPercent: -12 - index * 2, ease: "none",
          scrollTrigger: { trigger: "#engineeringPin", start: "top bottom", end: "bottom top", scrub: true } }
      );
    });

    gsap.fromTo("#contactBgText",
      { yPercent: 0, scale: 1 },
      { yPercent: -14, scale: 1.015, ease: "none",
        scrollTrigger: { trigger: "#contact", start: "top bottom", end: "bottom top", scrub: true } }
    );

    // Dark sections flip removed for light theme

    // Header invert trigger removed for light theme

    resizeHandler = () => { ScrollTrigger.refresh(); }; window.addEventListener("resize", resizeHandler);
      });
    }

    // Lucide icons setup
    if (lucide) {
      lucide.createIcons({ attrs: { "stroke-width": 2 } });
    }

    // Spin animation logic (Script 3)
    const spin = document.getElementById("phoneLogoSpin");
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (spin && gsap && isDesktop) {
      spinTween1 = gsap.to(spin, { rotation: 360, duration: 18, ease: "none", repeat: -1, transformOrigin: "50% 50%" });
      spinTween2 = gsap.to(spin, { scale: 1.06, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
    }
    
    return true;
  };

  if (!initGsap()) {
      checkInterval = setInterval(() => {
        if (initGsap()) clearInterval(checkInterval);
      }, 50);
    }

    // Cleanup
    return () => {
      if (checkInterval) clearInterval(checkInterval);
      body.className = "";
      if (timelineIo) {
        timelineIo.disconnect();
      }
      if (gsapCtx) {
        gsapCtx.revert();
      }
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      if (spinTween1) spinTween1.kill();
      if (spinTween2) spinTween2.kill();
    };
  }, []);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "MAHIR Group Investment Advisers Private Limited",
            "alternateName": "MAHIR Group",
            "url": "https://mahir.in/",
            "logo": "https://mahir.in/mahir-logo.png",
            "image": "https://mahir.in/mahir-logo.png",
            "description": "SEBI-registered investment advisory offering research-led stock recommendations and market intelligence.",
            "telephone": "+91",
            "email": "hello@mahir.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kasturi Market PL G/A-9/1 Shop 1, MIDC G Nr Moris SO, Chinchwad East",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411019",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://linkedin.com/company/mahirinvest",
              "https://instagram.com/mahirinvest",
              "https://x.com/mahirinvest",
              "https://facebook.com/mahirinvest"
            ],
            "identifier": {
              "@type": "PropertyValue",
              "name": "SEBI RIA Registration",
              "value": "INA000022668"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "MAHIR Group",
            "url": "https://mahir.in/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mahir.in/?q={search_term_string}",
              "name": "Search MAHIR Group",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: mahirHtmlRaw }} />
    </>
  );
}
// trigger vite rebuild
