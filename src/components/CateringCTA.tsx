import { SITE } from "@/lib/site";
import { FadeUp } from "./motion";

export function CateringCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
      <FadeUp>
        <div className="surface relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_-80px,rgba(255,201,7,0.16),transparent)]"
          />
          <div className="relative">
            <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
              Catering &amp; Events
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-5xl">
              Bring the truck to <span className="text-gold">your event</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream-dim">
              Weddings, work lunches, birthdays, game days — we&apos;ll park,
              cook, and feed your crowd fresh off the grill.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-label text-base font-semibold uppercase tracking-widest text-night shadow-[0_8px_30px_-8px_rgba(255,201,7,0.5)] transition-colors hover:bg-gold-soft"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
