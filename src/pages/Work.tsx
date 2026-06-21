import { PROJECTS } from "@/content";
import { WorkGrid } from "@/components/WorkGrid";
import { ButtonLink } from "@/components/Button";

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <p className="eyebrow mb-5">Work</p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
              Sites built for small businesses.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              A selection of recent projects. Each one is custom-built and handed over with an editor the owner manages themselves.
            </p>
            <p className="mt-3 text-sm text-ink-faint">
              Projects shown are placeholders while the portfolio is being finalised.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <WorkGrid projects={PROJECTS} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
            Want something like this?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-ink-soft">
            Let's talk about what your business needs.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/contact" size="lg" withArrow>
              Let's talk
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
