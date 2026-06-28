/**
 * Mirantic logo component.
 *
 * variant="dark"  → primary wordmark (dark navy text, blue star) — use on light backgrounds
 * variant="light" → reversed wordmark (off-white text, cyan star) — use on dark backgrounds
 * variant="mark"  → star icon only — use for small/icon contexts
 */
interface LogoProps {
  variant?: "dark" | "light" | "mark";
  /** Height in px — width scales automatically. */
  height?: number;
  className?: string;
}

// Exact wordmark bounding box within the 924×540 PNG (measured with Pillow):
// x: 125 → 498  (w: 373)   y: 115 → 196  (h: 81)
const MARK = { x: 125, y: 115, w: 373, h: 81, imgW: 924, imgH: 540 };

export function Logo({ variant = "dark", height = 24, className = "" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 200 200"
        width={height}
        height={height}
        aria-hidden="true"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20 Q113 87 180 100 Q113 113 100 180 Q87 113 20 100 Q87 87 100 20 Z"
          fill="#1e7fc2"
        />
      </svg>
    );
  }

  const src = variant === "light" ? "/brand/logo-reversed.png" : "/brand/logo-primary.png";
  const scale = height / MARK.h;
  const displayW = Math.round(MARK.w * scale);

  return (
    <span
      className={"inline-block overflow-hidden shrink-0 " + className}
      style={{ width: displayW, height }}
      aria-label="Mirantic"
      role="img"
    >
      <img
        src={src}
        alt="Mirantic"
        style={{
          width: MARK.imgW * scale,
          height: MARK.imgH * scale,
          marginLeft: -(MARK.x * scale),
          marginTop: -(MARK.y * scale),
          maxWidth: "none",
          display: "block",
        }}
        draggable={false}
      />
    </span>
  );
}
