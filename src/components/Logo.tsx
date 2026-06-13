import { Link } from "react-router-dom";
import { SITE } from "@/content";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex items-center gap-2.5 text-ink"
      aria-label={`${SITE.name} home`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-accent text-sm font-bold text-white">
        M
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tightish">{SITE.name}</span>
    </Link>
  );
}
