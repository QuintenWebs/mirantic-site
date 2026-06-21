import { BUILD_TIERS, BUILD_ADDONS, TIERS, SITE } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-page">
          <div className="max-w-2xl reveal">
            <p className="eyebrow mb-5">Pricing</p>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              Clear pricing, no surprises.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft max-w-lg">
              Two types of pricing: a one-time build cost to get your site made, and an optional monthly plan for hosting, CMS access, and support.
            </p>
          </div>
        </div>
      </section>

      {/* One-time build */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="One-time cost"
            title="Build pricing"
            description="Pay once to get your site designed, built, and deployed. No recurring fee unless you want hosting and support."
          />
          <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
            {BUILD_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={[
                  "flex flex-col gap-6 p-8",
                  tier.highlight ? "bg-ink text-accent-fg" : "bg-canvas",
                ].join(" ")}
              >
                <div>
                  <p className={"text-xs font-medium uppercase tracking-[0.1em] mb-3 " + (tier.highlight ? "text-accent-fg/50" : "text-ink-faint")}>
                    {tier.name}
                  </p>
                  <p className={"text-4xl font-semibold tracking-[-0.03em] " + (tier.highlight ? "text-accent-fg" : "text-ink")}>
                    {tier.price}
                  </p>
                  {tier.priceNote && (
                    <p className={"text-xs mt-1 " + (tier.highlight ? "text-accent-fg/60" : "text-ink-faint")}>
                      {tier.priceNote}
                    </p>
                  )}
                  <p className={"mt-3 text-sm leading-relaxed " + (tier.highlight ? "text-accent-fg/80" : "text-ink-soft")}>
                    {tier.blurb}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className={"mt-0.5 shrink-0 " + (tier.highlight ? "text-accent-fg/60" : "text-ink-faint")} width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2.5 7l3 3 6-6" />
                      </svg>
                      <span className={tier.highlight ? "text-accent-fg/90" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150",
                      tier.highlight
                        ? "bg-accent-fg text-ink hover:bg-accent-fg/90"
                        : "bg-ink text-accent-fg hover:bg-ink/80",
                    ].join(" ")}
                  >
                    {tier.cta ?? "Book a call"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-16 border-t border-line pt-12">
            <p className="eyebrow mb-6">Add-ons</p>
            <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {BUILD_ADDONS.map((addon) => (
                <div key={addon.label} className="bg-canvas flex items-center justify-between gap-4 px-6 py-4">
                  <span className="text-sm text-ink-soft">{addon.label}</span>
                  <span className="text-sm font-medium text-ink tabular-nums">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Monthly"
            title="Hosting, CMS & support"
            description="Keep your site running, up to date, and easy to manage. Includes hosting, your editor, and ongoing support."
          />
          <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={[
                  "flex flex-col gap-6 p-8",
                  tier.highlight ? "bg-ink text-accent-fg" : "bg-canvas",
                ].join(" ")}
              >
                <div>
                  <p className={"text-xs font-medium uppercase tracking-[0.1em] mb-3 " + (tier.highlight ? "text-accent-fg/50" : "text-ink-faint")}>
                    {tier.name}
                  </p>
                  <p className={"text-4xl font-semibold tracking-[-0.03em] " + (tier.highlight ? "text-accent-fg" : "text-ink")}>
                    €{tier.monthly}
                    <span className={"text-base font-normal " + (tier.highlight ? "text-accent-fg/50" : "text-ink-faint")}>/mo</span>
                  </p>
                  <p className={"mt-3 text-sm leading-relaxed " + (tier.highlight ? "text-accent-fg/80" : "text-ink-soft")}>
                    {tier.blurb}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className={"mt-0.5 shrink-0 " + (tier.highlight ? "text-accent-fg/60" : "text-ink-faint")} width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2.5 7l3 3 6-6" />
                      </svg>
                      <span className={tier.highlight ? "text-accent-fg/90" : "text-ink-soft"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150",
                      tier.highlight
                        ? "bg-accent-fg text-ink hover:bg-accent-fg/90"
                        : "bg-ink text-accent-fg hover:bg-ink/80",
                    ].join(" ")}
                  >
                    Get started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
            Not sure which fits? Let's figure it out together.
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            A 20-minute call is usually enough to scope your project and give you a clear number.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/contact" size="lg" withArrow>Book a call</ButtonLink>
            <ButtonLink to="/services" size="lg" variant="outline">See how I work</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
