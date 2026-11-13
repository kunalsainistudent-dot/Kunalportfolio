"use client";

import React from "react";

interface PulseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

/**
 * PulseCard: Feature card following Pulse design guidelines
 * - Card surface #0c0e14 (var(--color-card-surface))
 * - Hover lift 6px (transform: translateY(-6px))
 * - Border turns accent at 40% (var(--color-accent-border-40))
 * - Cursor-following glow with orange at 18% opacity (var(--color-accent-glow))
 * - Only transform and opacity animated
 */
export default function PulseCard({
  children,
  className = "",
  highlight = false,
  ...props
}: PulseCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`pulse-card group relative ${highlight ? "pulse-tier-featured" : ""} ${className}`}
      {...props}
    >
      <div className="pulse-card-glow" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
