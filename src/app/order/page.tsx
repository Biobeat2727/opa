import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Online — OPA! Greek Food",
  description:
    "Order gyros, falafel and more from the OPA! Greek Food truck. Skip the line — order ahead for pickup.",
};

export default function OrderPage() {
  return (
    <div className="flex h-dvh flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-coal-edge bg-night px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/opa-logo.png"
            alt="OPA! Greek Food"
            width={40}
            height={46}
            priority
            className="h-auto w-10"
          />
          <span className="font-label text-sm uppercase tracking-widest text-cream-dim transition-colors hover:text-gold">
            ← Back to site
          </span>
        </Link>
        <a
          href={SITE.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-sm uppercase tracking-widest text-cream-dim underline underline-offset-4 transition-colors hover:text-gold"
        >
          Trouble ordering? Open in a new tab
        </a>
      </header>
      <iframe
        src={SITE.orderUrl}
        title="OPA! Greek Food online ordering"
        className="w-full flex-1 border-0 bg-night"
        allow="payment"
      />
    </div>
  );
}
