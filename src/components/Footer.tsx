import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/content";

export function Footer() {
  return (
    <footer className="bg-ink text-footer-text">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_auto_auto]">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="w-fit">
              <Logo variant="light" height={20} />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Custom websites for small businesses — built to last, easy to manage.
            </p>
            <p className="text-xs text-ink-faint">
              Based in the Netherlands
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-ink-faint">Pages</p>
            <nav className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-footer-text hover:text-footer-heading transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.1em] text-ink-faint">Get in touch</p>
            <div className="flex flex-col gap-2.5">
              <Link
                to="/contact"
                className="text-sm text-footer-text hover:text-footer-heading transition-colors duration-150"
              >
                Contact
              </Link>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-footer-text hover:text-footer-heading transition-colors duration-150"
              >
                Book a call
              </a>
              <a
                href={SITE.appUrl}
                className="text-sm text-footer-text hover:text-footer-heading transition-colors duration-150"
              >
                Log in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Mirantic</p>
          <p className="text-xs text-ink-faint">Web design · The Netherlands</p>
        </div>
      </div>
    </footer>
  );
}
