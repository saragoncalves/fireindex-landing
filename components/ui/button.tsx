import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const styles = `button button--${variant} ${className}`;
  if (external) return <a className={styles} href={href} target="_blank" rel="noreferrer">{children}</a>;
  return <Link className={styles} href={href}>{children}</Link>;
}
