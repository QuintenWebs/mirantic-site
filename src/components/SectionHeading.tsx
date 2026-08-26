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
      <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-light leading-[1.1] tracking-tighter text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
