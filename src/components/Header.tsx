import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV, SITE } from "@/content";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth " +
        (scrolled || open
          ? "border-b border-line bg-canvas/95 backdrop-blur-md"
          : "bg-canvas/80 backdrop-blur-sm")
      }
    >
      <div className="container-page flex h-14 items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Mirantic home" className="flex items-center gap-2 shrink-0">
          <Logo className="h-5 w-5 text-ink" />
          <span className="text-sm font-semibold tracking-tight text-ink">Mirantic</span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "px-3.5 py-1.5 text-sm rounded-full transition-colors duration-150 " +
                (isActive ? "text-ink font-medium" : "text-ink-soft hover:text-ink")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.appUrl}
            className="text-sm text-ink-soft hover:text-ink transition-colors duration-150"
          >
            Log in
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-accent-fg hover:bg-ink/80 transition-colors duration-150"
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="-mr-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-soft hover:text-ink md:hidden transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 4.5h12M2 8h12M2 11.5h12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-canvas/98 backdrop-blur-md md:hidden">
          <nav className="container-page flex flex-col py-4 gap-0.5">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  "px-3 py-2.5 text-sm rounded-lg transition-colors " +
                  (isActive
                    ? "text-ink font-medium bg-accent-soft"
                    : "text-ink-soft hover:text-ink hover:bg-accent-soft")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-line flex flex-col gap-2">
              <a
                href={SITE.appUrl}
                className="px-3 py-2.5 text-sm text-ink-soft hover:text-ink transition-colors"
              >
                Log in
              </a>
              <Link
                to="/contact"
                className="flex justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-accent-fg hover:bg-ink/80 transition-colors"
              >
                Let's talk
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
