import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/content";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

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

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-smooth " +
        (scrolled || open
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/0")
      }
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={SITE.appUrl}
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Log in
          </a>
          <ButtonLink to="/contact" size="md">
            Let's talk
          </ButtonLink>
        </div>

        <button
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-page flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line/70 py-3 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.appUrl} className="py-3 text-base font-medium text-ink-soft">
              Log in
            </a>
            <ButtonLink to="/contact" className="mt-3 w-full" size="lg">
              Let's talk
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
