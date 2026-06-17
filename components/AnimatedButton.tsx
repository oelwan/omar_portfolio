"use client";

import { type ReactNode } from "react";

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary" | "accent";
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnimatedButton({
  href,
  children,
  variant = "default",
  external = false,
  className = "",
  style,
}: AnimatedButtonProps) {
  const variantClass =
    variant === "primary"
      ? "btn-code-primary"
      : variant === "accent"
        ? "btn-code-accent"
        : "";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`btn-code btn-animate ${variantClass} ${className}`}
      style={style}
    >
      <span className="btn-shimmer" aria-hidden="true" />
      {children}
    </a>
  );
}
