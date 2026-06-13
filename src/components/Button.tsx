import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-[#3f6093] shadow-sm hover:shadow",
  outline: "border border-line text-ink hover:border-ink/30 hover:bg-ink/[0.02]",
  ghost: "text-ink-soft hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}

function content(children: ReactNode, withArrow?: boolean) {
  return (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );
}

/** Internal route link styled as a button. */
export function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  withArrow,
  className = "",
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {content(children, withArrow)}
    </Link>
  );
}

/** External / absolute link styled as a button. */
export function ButtonAnchor({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow,
  className = "",
  newTab,
}: CommonProps & { href: string; newTab?: boolean }) {
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content(children, withArrow)}
    </a>
  );
}

/** Real button (form submit / onClick). */
export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow,
  className = "",
  type = "button",
  disabled,
  onClick,
}: CommonProps & {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50`}
    >
      {content(children, withArrow)}
    </button>
  );
}
