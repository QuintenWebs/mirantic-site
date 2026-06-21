import { SITE } from "@/content";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <p className="eyebrow mb-5">Contact</p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
              Let's talk about your site.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
              Tell me a bit about your business and what you need. I reply within a day — or book a call and we'll talk it through.
            </p>
            <div className="mt-6">
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink-soft transition-colors"
              >
                Book a call directly
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.5fr]">
            {/* Left: info */}
            <div>
              <h2 className="text-lg font-semibold text-ink">Send a message</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Use the form or reach out directly. I'm a one-person studio, so you'll always hear from me personally.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm text-ink-soft">
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase tracking-[0.1em] mb-1">Response time</p>
                  <p>Within one business day</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-faint uppercase tracking-[0.1em] mb-1">Based in</p>
                  <p>The Netherlands</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! I'll be in touch within a day.");
              }}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-ink-soft">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-ink-soft">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me a little about your business and what you're looking for."
                  required
                  className="rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20 transition resize-none"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-accent-fg hover:bg-ink/80 transition-colors duration-150"
                >
                  Send message
                </button>
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft hover:text-ink transition-colors"
                >
                  Prefer a call?
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
