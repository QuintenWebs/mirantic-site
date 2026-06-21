import { SERVICE_STAGES } from "@/content";
import { ButtonLink } from "@/components/Button";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="container-page">
          <div className="reveal max-w-2xl">
            <p className="eyebrow mb-5">Services</p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
              How I work with you, start to finish.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              Every site follows the same careful process — from understanding your brand to handing you the keys and supporting you afterwards.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <ol className="divide-y divide-line">
            {SERVICE_STAGES.map((stage, i) => (
              <li key={stage.title} className="grid gap-6 py-10 sm:grid-cols-[3rem_1fr_2fr] sm:gap-12 sm:py-12">
                <p className="text-2xl font-semibold tabular-nums text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-base font-semibold text-ink sm:text-lg">{stage.title}</h2>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">Ready to start?</h2>
            <p className="mt-2 text-base text-ink-soft">
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
