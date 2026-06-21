interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
