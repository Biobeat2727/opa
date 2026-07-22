import {
  type LocationPost,
  currentPost,
  upcomingPosts,
  formatDateRange,
  directionsUrl,
  mapEmbedUrl,
} from "@/lib/locations";
import { FadeUp } from "./motion";

export function FindTheTruck({
  posts,
  isSample,
}: {
  posts: LocationPost[];
  isSample: boolean;
}) {
  const current = currentPost(posts);
  const upcoming = upcomingPosts(posts);
  const mapAddress = current?.address ?? upcoming[0]?.address;

  return (
    <section id="find-us" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeUp>
        <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
          Find the Truck
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase text-cream sm:text-6xl">
          Where we&apos;re <span className="text-gold">parked</span>
        </h2>
        {isSample && (
          <p className="mt-3 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold">
            Sample data — connect Sanity to manage real location posts.
          </p>
        )}
      </FadeUp>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <FadeUp className="space-y-6">
          {current ? (
            <article className="surface rounded-3xl border-gold/30 p-7">
              <p className="font-label text-xs uppercase tracking-[0.3em] text-gold">
                Here now
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase text-cream">
                {current.title}
              </h3>
              <p className="mt-2 text-cream-dim">{current.address}</p>
              <p className="mt-1 font-label uppercase tracking-wide text-cream">
                {formatDateRange(current)}
                {current.hours && ` · ${current.hours}`}
              </p>
              {current.note && (
                <p className="mt-3 text-cream-dim">{current.note}</p>
              )}
              <a
                href={directionsUrl(current.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 font-label text-sm font-semibold uppercase tracking-widest text-night transition-colors hover:bg-gold-soft"
              >
                Get Directions
              </a>
            </article>
          ) : (
            <article className="surface rounded-3xl p-7">
              <h3 className="font-display text-2xl uppercase text-cream">
                The truck is resting
              </h3>
              <p className="mt-2 text-cream-dim">
                No spot posted right now — check back soon, or call us at the
                number below.
              </p>
            </article>
          )}

          {upcoming.length > 0 && (
            <div>
              <h3 className="font-label text-sm uppercase tracking-[0.3em] text-cream-dim">
                Coming up
              </h3>
              <ul className="mt-3 space-y-3">
                {upcoming.map((post) => (
                  <li key={post._id} className="surface rounded-2xl p-4">
                    <p className="font-label uppercase tracking-wide text-cream">
                      {post.title}
                    </p>
                    <p className="text-sm text-cream-dim">
                      {formatDateRange(post)}
                      {post.hours && ` · ${post.hours}`} — {post.address}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </FadeUp>

        {mapAddress && (
          <FadeUp delay={0.15} className="overflow-hidden rounded-3xl surface p-2">
            <iframe
              src={mapEmbedUrl(mapAddress)}
              title={`Map showing ${mapAddress}`}
              className="h-80 w-full rounded-2xl lg:h-full lg:min-h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </FadeUp>
        )}
      </div>
    </section>
  );
}
