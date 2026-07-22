import Link from "next/link";
import {
  type LocationPost,
  formatDateRange,
} from "@/lib/locations";

/** Gold banner under the hero announcing where the truck is right now. */
export function LocationStrip({ post }: { post?: LocationPost }) {
  return (
    <Link
      href="/#find-us"
      className="block bg-gold text-night transition-colors hover:bg-gold-deep"
    >
      <div className="meander meander-dark opacity-40" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-3 text-center font-label uppercase tracking-widest sm:px-6">
        {post ? (
          <>
            <span className="font-semibold">📍 Now serving: {post.title}</span>
            <span aria-hidden>·</span>
            <span>{formatDateRange(post)}</span>
            {post.hours && (
              <>
                <span aria-hidden>·</span>
                <span>{post.hours}</span>
              </>
            )}
          </>
        ) : (
          <span className="font-semibold">
            📍 Find out where the truck is parked
          </span>
        )}
        <span className="underline underline-offset-4">Details</span>
      </div>
      <div className="meander meander-dark opacity-40" aria-hidden />
    </Link>
  );
}
