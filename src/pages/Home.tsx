
import { WHAT_I_DO, STEPS, TIERS, PROJECTS } from "@/content";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkGrid } from "@/components/WorkGrid";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="container-page">
          {/* Anthropic-style split: headline left, descriptor right */}
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

      {/* ── What I do ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What I do" title="Thoughtful sites, built to last and easy to run" />
          <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2">
            {WHAT_I_DO.map((f, i) => (
              <div
                key={f.title}
                className={`py-8 pr-8 ${i % 2 === 0 ? "sm:border-r border-line" : ""} ${i < WHAT_I_DO.length - 2 ? "border-b border-line" : ""}`}
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

      {/* ── How it works ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From first call to a site you run yourself" />
          <ol className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-canvas p-8">
                <p className="text-3xl font-semibold tabular-nums text-ink/15 mb-5">{step.n}</p>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Pricing" title="Simple monthly plans" description="Your site, hosting, and editor in one plan. No setup fees, no surprises." />
          <div className="mt-14">
            <Pricing tiers={TIERS} />
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 mb-14">
            <SectionHeading eyebrow="Selected work" title="A few recent projects" />
            <ButtonLink to="/work" variant="ghost" size="md" withArrow className="shrink-0 mb-1">
              View all
            </ButtonLink>
          </div>
          <WorkGrid projects={PROJECTS.slice(0, 3)} />
        </div>
      </section>

      {/* ── About ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-5">About</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
              A small studio, run by one person who cares about the details.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-5 text-base leading-relaxed text-ink-soft">
            <p>
              I'm a web designer and developer based in the Netherlands. I study how brands communicate and translate that into websites that feel right for the people they're meant to reach.
            </p>
            <p>
              I have a background in space exploration, and I think about systems and structure the same way I think about design — from first principles. Strip a problem back to what actually matters, then build up from there.
            </p>
            <p>
              I work with a small number of clients at a time, so every project gets proper attention from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
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
        <label htmlFor="home-name" className="text-xs font-medium text-ink-soft">
          Name
        </label>
        <input
          id="home-name"
          type="text"
          placeholder="Your name"
          required
          className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="home-email" className="text-xs font-medium text-ink-soft">
          Email
        </label>
        <input
          id="home-email"
          type="email"
          placeholder="you@example.com"
          required
          className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="home-message" className="text-xs font-medium text-ink-soft">
          Message
        </label>
        <textarea
          id="home-message"
          rows={4}
          placeholder="Tell me a little about your business and what you're looking for."
          required
          className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="self-start inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-accent-fg hover:bg-ink/80 transition-colors duration-150"
      >
        Send message
      </button>
    </form>
  );
}
