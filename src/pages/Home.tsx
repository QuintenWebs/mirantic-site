import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { WHAT_I_DO, STEPS, PROJECTS, SITE } from "@/content";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkGrid } from "@/components/WorkGrid";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="container-page pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="reveal max-w-3xl">
          <p className="eyebrow mb-4">Web design · {SITE.location}</p>
          <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-[3.5rem]">
            Websites that truly represent who you are — and that you can manage yourself.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I design and build fast, custom websites for small businesses, then hand you a
            simple editor so updating your content never means waiting on a developer.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink to="/#contact" size="lg" withArrow>
              Let's talk
            </ButtonLink>
            <ButtonLink to="/work" size="lg" variant="outline">
              See my work
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── What I do ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What I do"
            title="Thoughtful sites, built to last and easy to run"
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {WHAT_I_DO.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-t border-line bg-accent-soft/40 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to a site you run yourself"
            align="center"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <span className="text-sm font-semibold text-accent">{step.n}</span>
                <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Pricing ── */}
      <Pricing />

      {/* ── Work ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Selected work" title="A few recent projects" />
            <Link
              to="/work"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:underline sm:inline-flex"
            >
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12">
            <WorkGrid projects={PROJECTS.slice(0, 3)} />
          </div>
          <div className="mt-10 sm:hidden">
            <ButtonLink to="/work" variant="outline" className="w-full" withArrow>
              View all work
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="About" title="A small studio, run by one person who cares about the details" />
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              I'm a web designer and developer based in {SITE.location}. I study how brands
              communicate and translate that into websites that feel right for the people
              they're meant to reach.
            </p>
            <p>
              I have a background in space exploration, and I think about systems and structure
              the same way I think about design — from first principles. Strip a problem back to
              what actually matters, then build up from there.
            </p>
            <p>
              I work with a small number of clients at a time, so every project gets proper
              attention from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="border-t border-line bg-accent-soft/40 py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your site"
            intro="Tell me a bit about your business and what you need. I reply within a day — or book a call and we'll talk it through."
          />
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
