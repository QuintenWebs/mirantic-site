import { Link } from "react-router-dom";
import { NAV, SITE } from "@/content";
import { Logo } from "./Logo";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-ink-faint">
          © {year} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
