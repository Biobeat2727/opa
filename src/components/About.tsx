import { ABOUT_PHOTO } from "@/lib/site";
import { FadeUp } from "./motion";
import { PhotoSlot } from "./PhotoPlaceholder";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <FadeUp>
          <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
            Real Greek street food
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-tight text-cream sm:text-5xl">
            A taste of Greece,
            <br />
            parked in <span className="text-gold">North Idaho</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream-dim">
            No shortcuts and no freezer bags — just gyros the way they&apos;re
            made on the streets of Athens. Meats seasoned and stacked by hand,
            tzatziki made from scratch, and pita warmed to order for every
            single wrap.
          </p>
          <p className="mt-4 max-w-xl text-lg text-cream-dim">
            Follow the truck around the Sandpoint area, or have us roll up to
            your next event.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <PhotoSlot
            src={ABOUT_PHOTO.image}
            alt={ABOUT_PHOTO.alt}
            kind={ABOUT_PHOTO.kind}
            sizes="(max-width: 1024px) 100vw, 480px"
            className="aspect-[4/3] rounded-3xl surface"
          />
        </FadeUp>
      </div>
    </section>
  );
}
