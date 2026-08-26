import { Logo } from "@/components/Logo";

/**
 * A still of the CMS editing this very site.
 *
 * Deliberately shows Mirantic's own landing page rather than a client's: a real
 * client site drags in its own brand and invites the question "is that what mine
 * will look like?". Using our own page keeps the demonstration about the
 * mechanic — click, type, publish — and means it never goes stale when a client
 * redesigns.
 *
 * Built rather than screenshotted for the same reason: it stays sharp at any
 * size and updates itself when the headline does. A screen recording can replace
 * the left pane later without touching the surrounding section.
 */
export function EditorDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0A101C] shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
        {/* ── The site being edited, on its own white ground ── */}
        <div className="bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[#E6E8EC] pb-4">
            <Logo height={16} />
            <div className="hidden gap-5 text-[11px] font-medium text-[#6B7280] sm:flex">
              <span>Work</span>
              <span>Services</span>
              <span>Pricing</span>
              <span>Contact</span>
            </div>
          </div>

          <div className="pt-8 sm:pt-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF]">
              Web design · The Netherlands
            </p>
            <p className="mt-3 font-display text-3xl font-light leading-[1.05] tracking-tighter text-[#0B1220] sm:text-4xl">
              Websites for
              <br />
              small business
            </p>

            {/* The field under edit: outlined the way the bridge highlights a
                selected element, so the still matches what you actually see. */}
            <div className="relative mt-9 inline-block max-w-md rounded-md ring-2 ring-brand-blue ring-offset-2">
              <p className="px-1 py-0.5 text-sm leading-relaxed text-[#4B5563]">
                Custom-built, fast, and yours to change.
              </p>
              <span className="absolute -top-[9px] left-2 -translate-y-full rounded bg-brand-blue px-1.5 py-0.5 text-[9px] font-medium text-white">
                Hero · Subtitle
              </span>
            </div>

            <div className="mt-6 flex gap-2">
              <span className="rounded-md bg-[#0B1220] px-3 py-1.5 text-[11px] font-medium text-white">
                Start a project
              </span>
              <span className="rounded-md border border-[#D1D5DB] px-3 py-1.5 text-[11px] font-medium text-[#374151]">
                See the editor
              </span>
            </div>
          </div>
        </div>

        {/* ── The editor panel ── */}
        <div className="flex flex-col gap-4 border-t border-line bg-[#0D1524] p-5 lg:border-l lg:border-t-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-ink">Mirantic</span>
            <span className="rounded-md bg-brand-blue px-2.5 py-1 text-[10px] font-medium text-white">
              Publish
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-4 w-7 shrink-0 items-center rounded-full bg-brand-blue px-0.5">
              <span className="ml-auto h-3 w-3 rounded-full bg-white" />
            </span>
            <div>
              <p className="text-xs font-medium text-ink">Edit mode</p>
              <p className="text-[11px] leading-snug text-ink-faint">
                Click anything on the page to edit it.
              </p>
            </div>
          </div>

          <div className="border-t border-line pt-3">
            <p className="text-xs font-medium text-ink">Hero · Subtitle</p>
            <p className="font-mono text-[10px] text-ink-faint">home.hero.subtitle</p>
          </div>

          <div>
            <p className="mb-1.5 text-[11px] font-medium text-ink-soft">Value</p>
            <div className="rounded-md border border-line bg-canvas p-2.5">
              <p className="text-[11px] leading-relaxed text-ink">
                Custom-built, fast, and yours to change.
                <span className="ml-px inline-block h-3 w-px translate-y-[2px] animate-pulse bg-brand-cyan" />
              </p>
            </div>
          </div>

          <span className="mt-auto rounded-md bg-brand-blue px-3 py-2 text-center text-[11px] font-medium text-white">
            Save change
          </span>
        </div>
      </div>
    </div>
  );
}
