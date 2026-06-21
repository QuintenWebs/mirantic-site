import { Link } from "react-router-dom";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  withArrow?: boolean;
}

interface ButtonLinkProps {
  to: string;
  size?: Size;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-4.5 py-2 text-sm",
  lg: "px-6 py-2.5 text-sm",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "rounded-full bg-ink text-accent-fg hover:bg-ink/80 transition-colors duration-150",
  outline:
    "rounded-full border border-line bg-transparent text-ink hover:bg-accent-soft transition-colors duration-150",
  ghost:
    "rounded-full bg-transparent text-ink-soft hover:text-ink hover:bg-accent-soft transition-colors duration-150",
};

export function Button({
  size = "md",
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 font-medium ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.5 6h7M6.5 3l3 3-3 3" />
        </svg>
      )}
    </button>
  );
}

export function ButtonLink({
  to,
  size = "md",
  variant = "primary",
  withArrow = false,
  className = "",
  children,
}: ButtonLinkProps) {
  const isExternal = to.startsWith("http");
  const classes = `inline-flex items-center gap-1.5 font-medium ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {withArrow && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" />
          </svg>
        )}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
      {withArrow && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2.5 6h7M6.5 3l3 3-3 3" />
        </svg>
      )}
    </Link>
  );
}
