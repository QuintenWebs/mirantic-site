import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content";

/** A simple, premium project tile. Uses a tonal gradient placeholder rather
 * than stock photography, per the brand direction. */
function Thumb({ name }: { name: string }) {
  // Deterministic hue offset from the name so tiles differ subtly.
  const seed = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = 205 + (seed % 30); // stay within a calm slate-blue band
  return (
    <div
      className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-line"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 30% 96%), hsl(${hue} 28% 90%))`,
      }}
    >
      <span className="text-2xl font-semibold tracking-tight text-ink/70">{name}</span>
    </div>
  );
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => {
        const Wrapper = p.url && p.url !== "#" ? "a" : "div";
        return (
          <Wrapper
            key={p.name}
            {...(Wrapper === "a"
              ? { href: p.url, target: "_blank", rel: "noreferrer" }
              : {})}
            className="group block"
          >
            <Thumb name={p.name} />
            <div className="mt-4">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-semibold text-ink">{p.name}</h3>
                {p.url && p.url !== "#" && (
                  <ArrowUpRight className="h-4 w-4 text-ink-faint transition-colors group-hover:text-accent" />
                )}
                {p.placeholder && (
                  <span className="ml-1 rounded-full bg-ink/[0.04] px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-ink-faint">
                    Placeholder
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-ink-faint">{p.client}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
