interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-5 w-5" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
      <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.4" />
      <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
    </svg>
  );
}
