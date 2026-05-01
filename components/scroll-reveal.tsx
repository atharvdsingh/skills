"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — tiny client component that observes elements with
 * .reveal / .reveal-scale / .reveal-left classes and adds .revealed
 * when they enter the viewport. This is the ONLY client component
 * in the entire portfolio, keeping the page pure static.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-scale, .reveal-left"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
