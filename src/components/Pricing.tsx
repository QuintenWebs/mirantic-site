import { useState } from "react";
import { Link } from "react-router-dom";
import { Tier } from "@/content";

interface PricingProps {
  tiers: Tier[];
}

export function Pricing({ tiers }: PricingProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="mb-10 flex items-center gap-3">
        <button
          onClick={() => setAnnual(false)}
          className={`text-sm transition-colors ${!annual ? "text-ink font-medium" : "text-ink-faint hover:text-ink-soft"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual((v) => !v)}
          className="relative h-6 w-10 rounded-full bg-line transition-colors focus:outline-none focus:ring-2 focus:ring-ink/20"
          role="switch"
          aria-checked={annual}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-ink transition-transform duration-200 ${annual ? "translate-x-4" : "translate-x-0"}`}
          />
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`text-sm transition-colors ${annual ? "text-ink font-medium" : "text-ink-faint hover:text-ink-soft"}`}
        >
          Annual
          <span className="ml-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-ink-soft">
            2 months free
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
        {tiers.map((tier) => {
          const price = annual ? Math.round(tier.monthly * 10) : tier.monthly;
          return (
            <div
              key={tier.name}
              className={`relative flex flex-col bg-canvas p-8 ${tier.highlight ? "ring-1 ring-ink" : ""}`}
            >
              {tier.highlight && (
                <p className="absolute top-4 right-4 text-xs font-medium text-ink-soft bg-accent-soft rounded-full px-2.5 py-1">
                  Most popular
                </p>
              )}
              <div className="mb-8">
                <h3 className="text-base font-semibold text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{tier.blurb}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-ink">€{price}</span>
                  <span className="text-sm text-ink-faint">/{annual ? "mo" : "month"}</span>
                </div>
                {annual && (
                  <p className="mt-1 text-xs text-ink-faint">billed annually</p>
                )}
                {!annual && (
                  <p className="mt-1 text-xs text-ink-faint">billed monthly</p>
                )}
              </div>
              <ul className="mb-10 flex flex-col gap-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <svg className="mt-0.5 shrink-0 text-ink" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 7l3.5 3.5L12 3.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150 ${
                  tier.highlight
                    ? "bg-ink text-accent-fg hover:bg-ink/80"
                    : "border border-line bg-transparent text-ink hover:bg-accent-soft"
                }`}
              >
                Get started
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link to="/contact" className="text-sm text-ink-soft hover:text-ink transition-colors">
          Not sure which fits? Let's talk →
        </Link>
      </div>
    </div>
  );
}
