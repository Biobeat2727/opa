import Link from "next/link";
import { MENU } from "@/lib/site";

export function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
        The Menu
      </p>
      <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-5xl">
        Simple. Greek. Done right.
      </h2>

      <div className="mt-12 space-y-14">
        {MENU.map((section) => (
          <div key={section.heading}>
            <div className="flex items-baseline gap-4">
              <h3 className="font-display text-2xl uppercase text-gold sm:text-3xl">
                {section.heading}
              </h3>
              <div className="h-px flex-1 bg-coal-edge" aria-hidden />
            </div>
            {section.note && (
              <p className="mt-3 max-w-2xl text-cream-dim">{section.note}</p>
            )}
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-sm border border-coal-edge bg-coal p-5 transition-colors hover:border-gold/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-label text-lg font-semibold uppercase tracking-wide text-cream">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <span className="mt-1 shrink-0 rounded-sm bg-gold/15 px-2 py-0.5 font-label text-xs uppercase tracking-widest text-gold">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-cream-dim">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Link
          href="/order"
          className="rounded-sm bg-gold px-7 py-3.5 font-label text-base font-semibold uppercase tracking-widest text-night transition-colors hover:bg-gold-deep"
        >
          Order Online &amp; Skip the Line
        </Link>
        <p className="text-cream-dim">
          Current prices are on the ordering page.
        </p>
      </div>
    </section>
  );
}
