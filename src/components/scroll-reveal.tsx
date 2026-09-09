import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Fades/slides sections up into view as the user scrolls, on every page —
 * mirrors the reveal effect already used on the homepage. Re-scans the DOM
 * on every route change since TanStack Router swaps content without a full
 * page reload.
 */
export function ScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = setTimeout(() => {
      const targets = document.querySelectorAll<HTMLElement>(
        "main > section:not([data-no-reveal]), main > div > section:not([data-no-reveal])"
      );
      if (!targets.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );

      const viewportH = window.innerHeight || 800;
      const bound: HTMLElement[] = [];
      const revealOnLoad: HTMLElement[] = [];

      targets.forEach((el, i) => {
        if (el.dataset.revealBound) return;
        el.dataset.revealBound = "1";
        el.classList.add("mahir-reveal");
        el.style.transitionDelay = (i % 4) * 0.08 + "s";

        // Anything already on/near screen (above-the-fold content) still
        // gets the fade-up-in play once on load — it just can't wait on a
        // scroll to trigger it, since it's already in view.
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportH * 1.1) {
          revealOnLoad.push(el);
          return;
        }
        io.observe(el);
        bound.push(el);
      });

      // Force the browser to paint the opacity:0 starting state before we
      // flip to visible, otherwise the two class changes get coalesced into
      // one paint and the transition never actually plays.
      if (revealOnLoad.length) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            revealOnLoad.forEach((el) => el.classList.add("is-visible"));
          });
        });
      }

      // Safety net: if IntersectionObserver never fires for some reason,
      // never leave content permanently invisible.
      setTimeout(() => {
        bound.forEach((el) => el.classList.add("is-visible"));
      }, 2500);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
