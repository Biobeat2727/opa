import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  getLocationPosts,
  currentPost,
  formatDateRange,
} from "@/lib/locations";

export const metadata: Metadata = {
  title: "Order Online — OPA! Greek Food",
  description:
    "Order gyros, falafel and more from the OPA! Greek Food truck. Skip the line — order ahead for pickup.",
};

export const revalidate = 60;

/**
 * Branded hand-off to SpotOn online ordering.
 *
 * We deliberately do NOT iframe the SpotOn menu: its CloudFront/WAF blocks
 * embedded (and heavily-hit) requests with a raw 403, and a cross-origin
 * frame is opaque to us so we can't detect that failure to fall back. Linking
 * out is SpotOn's supported integration and is 100% reliable.
 *
 * If SpotOn ever whitelists opafoodtruck.com for embedding (or provides an
 * official embed widget), we can restore an inline iframe here.
 */
export default async function OrderPage() {
  const { posts } = await getLocationPosts();
  const current = currentPost(posts);

  return (
    <div className="bg-ambient grain relative flex min-h-dvh flex-col">
      <header className="flex h-16 shrink-0 items-center border-b border-gold/10 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-label text-sm uppercase tracking-widest text-cream-dim transition-colors hover:text-gold"
        >
          <Image
            src="/opa-logo.png"
            alt="OPA! Greek Food"
            width={40}
            height={46}
            priority
            className="h-auto w-10"
          />
          ← Back to site
        </Link>
      </header>

      <main className="relative flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-md text-center">
          <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
            Order Online
          </p>
          <h1 className="mt-3 font-display text-4xl uppercase text-cream sm:text-5xl">
            Order ahead,
            <br />
            <span className="text-gold">skip the line</span>
          </h1>

          {current ? (
            <div className="surface mt-8 rounded-2xl p-5 text-left">
              <p className="font-label text-xs uppercase tracking-[0.3em] text-gold">
                Pickup location
              </p>
              <p className="mt-2 font-label text-lg uppercase tracking-wide text-cream">
                {current.title}
              </p>
              <p className="text-sm text-cream-dim">{current.address}</p>
              <p className="mt-1 text-sm text-cream-dim">
                {formatDateRange(current)}
                {current.hours && ` · ${current.hours}`}
              </p>
            </div>
          ) : (
            <p className="mt-8 text-cream-dim">
              Order for pickup from the OPA! truck.
            </p>
          )}

          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-label text-base font-semibold uppercase tracking-widest text-night shadow-[0_8px_30px_-8px_rgba(255,201,7,0.5)] transition-colors hover:bg-gold-soft"
          >
            Open Ordering Menu
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-cream-dim">
            Opens our secure SpotOn ordering page in a new tab — this site stays
            open here.
          </p>

          <p className="mt-8 text-sm text-cream-dim">
            Prefer to call?{" "}
            <a
              href={SITE.phoneHref}
              className="text-gold underline underline-offset-4 transition-colors hover:text-gold-soft"
            >
              {SITE.phone}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
