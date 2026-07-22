import Link from "next/link";
import { type LocationPost, formatDateRange } from "@/lib/locations";

/** Scrolling gold marquee announcing where the truck is right now. */
export function LocationStrip({ post }: { post?: LocationPost }) {
  const message = post
    ? `Now serving: ${post.title} · ${formatDateRange(post)}${post.hours ? ` · ${post.hours}` : ""}`
    : "Find out where the truck is parked";

  const segment = (
    <span className="mx-6 inline-flex items-center gap-6 font-label text-sm font-semibold uppercase tracking-widest">
      <span>{message}</span>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </span>
  );

  return (
    <Link
      href="/#find-us"
      aria-label={`${message} — see details`}
      className="block overflow-hidden bg-gold py-3 text-night transition-colors hover:bg-gold-soft"
    >
      <div className="marquee-track flex w-max whitespace-nowrap" aria-hidden>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>{segment}</span>
        ))}
      </div>
      <span className="sr-only">{message}</span>
    </Link>
  );
}
