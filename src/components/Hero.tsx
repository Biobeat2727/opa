import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:py-24">
        <div>
          <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
            {SITE.homeBase} · Food Truck
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            Authentic
            <br />
            Gyros<span className="text-gold">.</span>
          </h1>
          <p className="mt-4 font-label text-xl uppercase tracking-[0.2em] text-gold sm:text-2xl">
            Fresh · Made to Order
          </p>
          <p className="mt-6 max-w-md text-lg text-cream-dim">
            Warm pita, slow-seasoned meats, hand-cut vegetables and real feta —
            wrapped up and handed to you out the truck window.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/order"
              className="rounded-sm bg-gold px-7 py-3.5 font-label text-base font-semibold uppercase tracking-widest text-night transition-colors hover:bg-gold-deep"
            >
              Order Online
            </Link>
            <Link
              href="/#menu"
              className="rounded-sm border border-gold/50 px-7 py-3.5 font-label text-base uppercase tracking-widest text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              See the Menu
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm">
          <Image
            src="/opa-logo.png"
            alt="OPA! Greek Food olive tree logo"
            width={862}
            height={1000}
            priority
            className="h-auto w-full drop-shadow-[0_0_60px_rgba(255,201,7,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
