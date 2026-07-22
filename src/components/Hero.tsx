"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SITE, HERO_PHOTOS } from "@/lib/site";
import { PhotoSlot } from "./PhotoPlaceholder";

const EASE = [0.21, 0.61, 0.35, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-12 text-center sm:px-6 sm:pt-16">
        <motion.div {...rise(0)}>
          <Image
            src="/opa-logo.png"
            alt="OPA! Greek Food olive tree logo"
            width={862}
            height={1000}
            priority
            className="h-auto w-32 drop-shadow-[0_0_50px_rgba(255,201,7,0.25)] sm:w-40"
          />
        </motion.div>

        <motion.p
          {...rise(0.1)}
          className="mt-6 font-label text-sm uppercase tracking-[0.35em] text-gold"
        >
          {SITE.homeBase} · Food Truck
        </motion.p>

        <motion.h1
          {...rise(0.18)}
          className="mt-3 font-display text-5xl uppercase leading-[0.95] text-cream sm:text-7xl lg:text-8xl"
        >
          Authentic Gyros<span className="text-gold">.</span>
          <br />
          <span className="text-gold">Fresh. Made to order.</span>
        </motion.h1>

        <motion.p
          {...rise(0.26)}
          className="mt-6 max-w-xl text-lg text-cream-dim"
        >
          Warm pita, slow-seasoned meats, hand-cut vegetables and real feta —
          wrapped up and handed to you out the truck window.
        </motion.p>

        <motion.div
          {...rise(0.34)}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/order"
            className="rounded-full bg-gold px-8 py-3.5 font-label text-base font-semibold uppercase tracking-widest text-night shadow-[0_8px_30px_-8px_rgba(255,201,7,0.5)] transition-colors hover:bg-gold-soft"
          >
            Order Online
          </Link>
          <Link
            href="/#menu"
            className="rounded-full border border-gold/40 px-8 py-3.5 font-label text-base uppercase tracking-widest text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            See the Menu
          </Link>
        </motion.div>
      </div>

      {/* Fanned photo cards — the hero's photo slots */}
      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 items-end gap-4 px-4 pb-10 sm:gap-6 sm:px-6">
        {HERO_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.alt}
            initial={{
              opacity: 0,
              y: reduce ? 0 : 40,
              rotate: reduce ? 0 : 0,
            }}
            animate={{ opacity: 1, y: 0, rotate: [-4, 0, 4][i] }}
            transition={{ duration: 0.7, delay: 0.45 + i * 0.12, ease: EASE }}
            whileHover={reduce ? undefined : { y: -10, rotate: 0 }}
            className={i === 1 ? "z-10" : "mb-[-8px]"}
          >
            <PhotoSlot
              alt={photo.alt}
              kind={photo.kind}
              src={photo.image}
              sizes="(max-width: 640px) 33vw, 300px"
              className="aspect-[4/5] rounded-2xl surface"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
