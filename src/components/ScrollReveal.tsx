"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: 1 | 2 | 3 | 4 | 5 | 6;
  threshold?: number;
}

/**
 * ScrollReveal: IntersectionObserver scroll reveal
 * - Fade up 24px, 0.8s, 80ms stagger
 * - Animate only transform and opacity
 * - Respects prefers-reduced-motion by rendering final state immediately
 */
export default function ScrollReveal({
  children,
  className = "",
  stagger,
  threshold = 0.1,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const staggerClass = stagger ? `stagger-${stagger}` : "";

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isRevealed ? "is-revealed" : ""} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
}
