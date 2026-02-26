import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function ExternalLink({
  href,
  className,
  ariaLabel,
  children,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
