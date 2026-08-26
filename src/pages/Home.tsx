import { ButtonLink } from "@/components/Button";
import { EditorDemo } from "@/components/EditorDemo";
import { SectionHeading } from "@/components/SectionHeading";
import { HOME, STEPS, WHAT_I_DO, PROJECTS } from "@/content";

/**
 * Home.
 *
 * Ordered as an argument rather than a brochure: what this is, proof it exists,
 * the one thing nobody else offers, then how it works and what it costs. Every
 * section carries evidence — live sites, the real editor — instead of adjectives.
 */
export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="container-page">
          <div className="reveal max-w-4xl">
            <p className="eyebrow mb-6" data-cms-field="home.hero.eyebrow">
              {HOME.hero.eyebrow}
            </p>
            <h1 className="font-display text-[clamp(3rem,9vw,6.5rem)] font-light leading-[1.0] tracking-tighter text-ink">
              <span data-cms-field="home.hero.titleLine1">{HOME.hero.titleLine1}</span>
              <br />
              <span data-cms-field="home.hero.titleLine2">{HOME.hero.titleLine2}</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
              data-cms-field="home.hero.body"
            >
              {HOME.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink to="/contact" size="lg" withArrow>
                <span data-cms-field="home.hero.primaryCta">{HOME.hero.primaryCta}</span>
              </ButtonLink>
              <ButtonLink to="/#editor" size="lg" variant="outline">
                <span data-cms-field="home.hero.secondaryCta">{HOME.hero.secondaryCta}</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof: real sites, running now ── */}
      <section className="border-t border-line py-14">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="eyebrow" data-cms-field="home.proof.label">
              {HOME.proof.label}
            </p>
            <p
              className="max-w-md text-sm text-ink-soft sm:text-right"
              data-cms-field="home.proof.note"
            >
              {HOME.proof.note}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-canvas p-7 transition-colors duration-200 hover:bg-accent-soft"
              >
                <p
                  className="text-xs text-ink-faint"
                  data-cms-field={`projects[${i}].client`}
                >
                  {project.client}
                </p>
                <h3
                  className="mt-2 font-display text-2xl font-light tracking-tightish text-ink"
                  data-cms-field={`projects[${i}].name`}
                >
                  {project.name}
                </h3>
                <p
                  className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft"
                  data-cms-field={`projects[${i}].description`}
                >
                  {project.description}
                </p>
                <span className="mt-5 inline-block text-xs font-medium text-ink-faint transition-colors group-hover:text-ink">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── The editor: the one thing nobody else your size offers ── */}
      <section id="editor" className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5" data-cms-field="home.editor.eyebrow">
              {HOME.editor.eyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.08] tracking-tighter text-ink"
              data-cms-field="home.editor.title"
            >
              {HOME.editor.title}
            </h2>
            <p
              className="mt-5 text-base leading-relaxed text-ink-soft"
              data-cms-field="home.editor.body"
            >
              {HOME.editor.body}
            </p>
          </div>

          <div className="mt-12">
            <EditorDemo />
            <p
              className="mt-4 text-xs text-ink-faint"
              data-cms-field="home.editor.caption"
            >
              {HOME.editor.caption}
            </p>
          </div>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What I do" title="Built properly, then handed over" />
          <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {WHAT_I_DO.map((f, i) => (
              <div key={f.title} className="bg-canvas p-8">
                <p className="mb-3 text-xs tabular-nums text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-base font-semibold leading-snug text-ink"
                  data-cms-field={`whatIDo[${i}].title`}
                >
                  {f.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-ink-soft"
                  data-cms-field={`whatIDo[${i}].body`}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works — a real sequence, so the numbering earns itself ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From first call to a site you run yourself" />
          <ol className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.n} className="bg-canvas p-8">
                <p className="mb-5 font-display text-3xl font-light tabular-nums text-ink-faint">
                  {step.n}
                </p>
                <h3
                  className="text-base font-semibold text-ink"
                  data-cms-field={`steps[${i}].title`}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-ink-soft"
                  data-cms-field={`steps[${i}].body`}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Objections: small buyers ask these and nobody answers them ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5" data-cms-field="home.objections.eyebrow">
                {HOME.objections.eyebrow}
              </p>
              <h2
                className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-light leading-[1.1] tracking-tighter text-ink"
                data-cms-field="home.objections.title"
              >
                {HOME.objections.title}
              </h2>
            </div>
            <dl className="divide-y divide-line border-t border-line">
              {HOME.objections.items.map((item, i) => (
                <div key={item.q} className="py-6">
                  <dt
                    className="text-base font-semibold text-ink"
                    data-cms-field={`home.objections.items[${i}].q`}
                  >
                    {item.q}
                  </dt>
                  <dd
                    className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft"
                    data-cms-field={`home.objections.items[${i}].a`}
                  >
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5" data-cms-field="home.contact.eyebrow">
              {HOME.contact.eyebrow}
            </p>
            <h2
              className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-light leading-[1.1] tracking-tighter text-ink"
              data-cms-field="home.contact.title"
            >
              {HOME.contact.title}
            </h2>
            <p
              className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft"
              data-cms-field="home.contact.body"
            >
              {HOME.contact.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact" size="lg" withArrow>
                Get in touch
              </ButtonLink>
              <ButtonLink to="/pricing" size="lg" variant="outline">
                See pricing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
