import Link from "next/link";
import { MENU } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem, HoverLift } from "./motion";
import { PhotoSlot } from "./PhotoPlaceholder";

const TAG_STYLES: Record<string, string> = {
  vegetarian: "bg-olive/15 text-olive",
  side: "bg-gold/15 text-gold",
  sweet: "bg-flame/15 text-flame",
};

export function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeUp>
        <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
          The Menu
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-6xl">
          Simple. Greek.
          <span className="text-gold"> Done right.</span>
        </h2>
      </FadeUp>

      <div className="mt-12 space-y-16">
        {MENU.map((section) => (
          <div key={section.heading}>
            <FadeUp>
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-2xl uppercase text-gold sm:text-3xl">
                  {section.heading}
                </h3>
                <div className="h-px flex-1 bg-gold/15" aria-hidden />
              </div>
              {section.note && (
                <p className="mt-3 max-w-2xl text-cream-dim">{section.note}</p>
              )}
            </FadeUp>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <StaggerItem key={item.name}>
                  <HoverLift className="group h-full">
                    <article className="surface flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 group-hover:shadow-[0_16px_48px_-16px_rgba(255,201,7,0.25)]">
                      <PhotoSlot
                        src={item.image}
                        alt={item.name}
                        kind={item.kind}
                        className="aspect-[4/3] w-full [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-105"
                      />
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-label text-lg font-semibold uppercase tracking-wide text-cream">
                            {item.name}
                          </h4>
                          {item.tag && (
                            <span
                              className={`mt-1 shrink-0 rounded-full px-2.5 py-0.5 font-label text-xs uppercase tracking-widest ${TAG_STYLES[item.tag] ?? "bg-gold/15 text-gold"}`}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-cream-dim">{item.description}</p>
                      </div>
                    </article>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>

      <FadeUp className="mt-14">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/order"
            className="rounded-full bg-gold px-8 py-3.5 font-label text-base font-semibold uppercase tracking-widest text-night shadow-[0_8px_30px_-8px_rgba(255,201,7,0.5)] transition-colors hover:bg-gold-soft"
          >
            Order Online &amp; Skip the Line
          </Link>
          <p className="text-cream-dim">Current prices are on the ordering page.</p>
        </div>
      </FadeUp>
    </section>
  );
}
