import { SERVICE_STAGES } from "@/content";
import { ButtonLink } from "@/components/Button";

export default function Services() {
  return (
    <>
      <section className="container-page pt-16 pb-12 sm:pt-20">
        <div className="reveal max-w-3xl">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl">
            How a project works, start to finish
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Every site follows the same careful process — from understanding your brand to
            handing you the keys and supporting you afterwards.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <div className="container-page">
          <ol className="space-y-12 sm:space-y-16">
            {SERVICE_STAGES.map((stage, i) => (
              <li
                key={stage.title}
                className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <div className="text-3xl font-semibold tabular-nums text-accent/30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="max-w-2xl border-t border-line pt-4 sm:border-0 sm:pt-0">
                  <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                    {stage.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-accent-soft/40 py-16 sm:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to start?</h2>
            <p className="mt-2 text-lg text-ink-soft">
              Book a discovery call or send a message — no commitment.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/#pricing" variant="outline" size="lg">
              See pricing
            </ButtonLink>
            <ButtonLink to="/contact" size="lg" withArrow>
              Let's talk
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
