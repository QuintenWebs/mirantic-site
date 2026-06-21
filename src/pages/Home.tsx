import { useState } from "react";
import { WHAT_I_DO, STEPS } from "@/content";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="reveal max-w-3xl">
              <p className="eyebrow mb-5">Web design · The Netherlands</p>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
                Websites that truly<br className="hidden sm:block" /> represent who you are.
              </h1>
            </div>
            <div className="reveal max-w-sm md:pb-2" style={{ animationDelay: "0.1s" }}>
              <p className="text-base leading-relaxed text-ink-soft">
                I design and build fast, custom websites for small businesses — then hand you a simple editor so updating your content never means waiting on a developer.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink to="/contact" size="lg" withArrow>
                  Let's talk
                </ButtonLink>
                <ButtonLink to="/work" size="lg" variant="outline">
                  See my work
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What I do" title="Thoughtful sites, built to last and easy to run" />
          <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2">
            {WHAT_I_DO.map((f, i) => (
              <div
                key={f.title}
                className={[
                  "py-8 pr-8",
                  i % 2 === 0 ? "sm:border-r border-line" : "",
                  i < WHAT_I_DO.length - 2 ? "border-b border-line" : "",
                ].join(" ")}
              >
                <p className="text-xs font-medium text-ink-faint tabular-nums mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base font-semibold text-ink leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + CMS + Site examples — all in one block */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From first call to a site you run yourself" />

          {/* Steps */}
          <ol className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-canvas p-8">
                <p className="text-3xl font-semibold tabular-nums text-ink/15 mb-5">{step.n}</p>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>

          {/* CMS placeholder */}
          <div className="mt-16 border-t border-line pt-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow mb-4">Your editor</p>
                <h2 className="text-2xl font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-3xl">
                  Update your site yourself — no developer needed.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  Every site comes with a clean, simple editor. Click what you want to change, type, publish. No complicated dashboards, no waiting on me for a text change.
                </p>
                <p className="mt-3 text-sm text-ink-faint">CMS demo coming soon.</p>
              </div>
              {/* CMS placeholder — replace with GIF */}
              <div className="overflow-hidden rounded-xl border border-line bg-accent-soft aspect-video flex items-center justify-center">
                <p className="text-sm text-ink-faint">CMS screenshot / GIF</p>
              </div>
            </div>
          </div>

          {/* Site examples */}
          <div className="mt-16 border-t border-line pt-16">
            <p className="eyebrow mb-6">Recent work</p>
            <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
              <SiteExample
                label="New site"
                title="ULP Invest"
                description="A new site built from scratch for a Dutch microfinance foundation."
                url="https://www.ulpinvest.com/investors"
                heroImg="/assets/screenshots/ulpinvest-hero.webp"
                scrollImg="/assets/screenshots/ulpinvest-scroll.webp"
              />
              <SiteExample
                label="Rebuilt & improved"
                title="Ubuntu Leadership Program"
                description="A full redesign and rebuild of an existing site — faster, cleaner, and easier to manage."
                url="https://ubuntu-lead-82ai2dtb.manus.space/"
                heroImg="/assets/screenshots/ulp-new-hero.webp"
                scrollImg="/assets/screenshots/ulp-new-scroll.webp"
                beforeHeroImg="/assets/screenshots/ulp-old-hero.webp"
                beforeScrollImg="/assets/screenshots/ulp-old-scroll.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="eyebrow mb-5">Contact</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                Let's talk about your site.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-sm">
                Tell me a bit about your business and what you need. I reply within a day.
              </p>
              <div className="mt-8">
                <a
                  href="https://calendly.com/mirantic/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft transition-colors"
                >
                  Or book a call directly
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                  </svg>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

interface SiteExampleProps {
  label: string;
  title: string;
  description: string;
  url: string;
  heroImg: string;
  scrollImg: string;
  beforeHeroImg?: string;
  beforeScrollImg?: string;
}

function SiteExample({ label, title, description, url, heroImg, scrollImg, beforeHeroImg, beforeScrollImg }: SiteExampleProps) {
  const hasBeforeAfter = !!beforeHeroImg;
  const [showBefore, setShowBefore] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeHero = hasBeforeAfter && showBefore ? beforeHeroImg! : heroImg;
  const activeScroll = hasBeforeAfter && showBefore ? beforeScrollImg! : scrollImg;

  return (
    <div className="bg-canvas p-8 flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full border border-line px-2.5 py-1 text-xs text-ink-faint mb-3">
            {label}
          </span>
          <h3 className="text-base font-semibold text-ink">{title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{description}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-ink-faint hover:text-ink transition-colors mt-1"
        >
          Visit
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2 2h6v6M8 2 2 8" />
          </svg>
        </a>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-line bg-accent-soft">
        <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <div className="relative overflow-hidden" style={{ height: "240px" }}>
          <img
            src={scrolled ? activeScroll : activeHero}
            alt={title + " screenshot"}
            className="w-full object-cover object-top transition-all duration-500"
            style={{ height: "100%" }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScrolled(false)}
            className={"text-xs font-medium transition-colors " + (!scrolled ? "text-ink" : "text-ink-faint hover:text-ink-soft")}
          >
            Top
          </button>
          <span className="text-ink-faint text-xs">/</span>
          <button
            onClick={() => setScrolled(true)}
            className={"text-xs font-medium transition-colors " + (scrolled ? "text-ink" : "text-ink-faint hover:text-ink-soft")}
          >
            Scrolled
          </button>
        </div>
        {hasBeforeAfter && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowBefore(false)}
              className={"text-xs font-medium transition-colors " + (!showBefore ? "text-ink" : "text-ink-faint hover:text-ink-soft")}
            >
              After
            </button>
            <span className="text-ink-faint text-xs">/</span>
            <button
              onClick={() => setShowBefore(true)}
              className={"text-xs font-medium transition-colors " + (showBefore ? "text-ink" : "text-ink-faint hover:text-ink-soft")}
            >
              Before
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent! I'll be in touch within a day.");
      }}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="home-name" className="text-xs font-medium text-ink-soft">Name</label>
        <input id="home-name" type="text" placeholder="Your name" required
          className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="home-email" className="text-xs font-medium text-ink-soft">Email</label>
        <input id="home-email" type="email" placeholder="you@example.com" required
          className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="home-message" className="text-xs font-medium text-ink-soft">Message</label>
        <textarea id="home-message" rows={4} placeholder="Tell me a little about your business and what you're looking for." required
          className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition resize-none" />
      </div>
      <button type="submit"
        className="self-start inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-accent-fg hover:bg-ink/80 transition-colors duration-150">
        Send message
      </button>
    </form>
  );
}
