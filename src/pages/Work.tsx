import { PROJECTS } from "@/content";
import { WorkGrid } from "@/components/WorkGrid";
import { ButtonLink } from "@/components/Button";

export default function Work() {
  return (
    <>
      <section className="container-page pt-16 pb-12 sm:pt-20">
        <div className="reveal max-w-3xl">
          <p className="eyebrow mb-4">Work</p>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Sites built for small businesses
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            A selection of recent projects. Each one is custom-built and handed over with an
            editor the owner manages themselves.
          </p>
          <p className="mt-3 text-sm text-ink-faint">
            Projects shown are placeholders while the portfolio is being finalised.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page">
          <WorkGrid projects={PROJECTS} />
        </div>
      </section>

      <section className="border-t border-line bg-accent-soft/40 py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Want something like this?</h2>
          <p className="mx-auto mt-2 max-w-md text-lg text-ink-soft">
            Let's talk about what your business needs.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink to="/contact" size="lg" withArrow>
              Let's talk
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
