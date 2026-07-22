import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-gold/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 sm:grid-cols-[auto_1fr_auto]">
          <Image
            src="/opa-logo.png"
            alt=""
            aria-hidden
            width={90}
            height={104}
            className="mx-auto h-auto w-[90px] sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <p className="font-label text-sm uppercase tracking-[0.35em] text-gold">
              Call ahead or order online
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-2 block font-display text-3xl uppercase text-cream transition-colors hover:text-gold sm:text-4xl"
            >
              {SITE.phone}
            </a>
            <p className="mt-2 text-cream-dim">{SITE.homeBase}</p>
          </div>
          <Link
            href="/order"
            className="mx-auto rounded-full bg-gold px-8 py-3.5 font-label text-base font-semibold uppercase tracking-widest text-night shadow-[0_8px_30px_-8px_rgba(255,201,7,0.5)] transition-colors hover:bg-gold-soft sm:mx-0"
          >
            Order Online
          </Link>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-center text-sm text-cream-dim">
            © {new Date().getFullYear()} {SITE.name} · Online ordering powered
            by SpotOn
          </p>
        </div>
      </div>
    </footer>
  );
}
