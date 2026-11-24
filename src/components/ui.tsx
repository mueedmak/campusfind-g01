import Link from "next/link";
import type { ReactNode } from "react";
interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}
export function ButtonLink({
  href,
  children,
  secondary = false,
}: ButtonLinkProps) {
  return (
    <Link className={secondary ? "button secondary" : "button"} href={href}>
      {children}
    </Link>
  );
}
interface PageHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}
export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <div className="page-heading text-left">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
interface StatusBadgeProps {
  status: "Lost" | "Found";
}
export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`badge ${status.toLowerCase()}`}>
      <span aria-hidden="true">●</span> {status}
    </span>
  );
}
interface EmptyStateProps {
  title: string;
  description: string;
}
export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="empty">
      <span aria-hidden="true">⌕</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
interface InfoCardProps {
  number: string;
  title: string;
  children: ReactNode;
}
export function InfoCard({ number, title, children }: InfoCardProps) {
  return (
    <article className="info-card">
      <span className="step">{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
