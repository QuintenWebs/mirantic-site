import { useState } from "react";
import { Check } from "lucide-react";
import { TIERS } from "@/content";
import { SectionHeading } from "./SectionHeading";
import { ButtonLink } from "./Button";

type Billing = "monthly" | "annual";

function priceFor(monthly: number, billing: Billing): number {
  // Annual = 2 months free → 10 months' cost spread over 12.
  return billing === "annual" ? Math.round((monthly * 10) / 12) : monthly;
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="border-t border-line bg-accent-soft/40 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple monthly plans"
          intro="Your site, hosting, and editor in one plan. No setup fees, no surprises."
          align="center"
        />

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-line bg-white p-1">
            {(["monthly", "annual"] as Billing[]).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors " +
                  (billing === b ? "bg-accent text-white" : "text-ink-soft hover:text-ink")
                }
              >
                {b === "monthly" ? "Monthly" : "Annual"}
                {b === "annual" && (
                  <span
                    className={
                      "ml-1.5 text-xs " +
                      (billing === "annual" ? "text-white/80" : "text-accent")
                    }
                  >
                    2 months free
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={
                "relative flex flex-col rounded-2xl bg-white p-7 transition-shadow " +
                (tier.highlight
                  ? "border-2 border-accent shadow-md"
                  : "border border-line shadow-sm")
              }
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{tier.blurb}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-ink">
                  €{priceFor(tier.monthly, billing)}
                </span>
                <span className="text-sm text-ink-faint">/month</span>
              </div>
              <p className="mt-1 h-4 text-xs text-ink-faint">
                {billing === "annual" ? `billed €${tier.monthly * 10}/year` : "billed monthly"}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-1">
                <ButtonLink
                  to="/contact"
                  variant={tier.highlight ? "primary" : "outline"}
                  className="w-full"
                >
                  Get started
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink to="/contact" variant="ghost" withArrow>
            Not sure which fits? Let's talk
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
