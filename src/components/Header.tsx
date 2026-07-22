import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/#menu", label: "Menu" },
  { href: "/#find-us", label: "Find the Truck" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-night/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/opa-logo.png"
            alt="OPA! Greek Food"
            width={40}
            height={46}
            priority
            className="h-auto w-10"
          />
          <span className="font-label text-lg font-semibold uppercase tracking-[0.2em] text-cream">
            Opa!{" "}
            <span className="hidden text-cream-dim sm:inline">Greek Food</span>
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden font-label text-sm uppercase tracking-widest text-cream-dim transition-colors hover:text-gold sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="rounded-full bg-gold px-5 py-2 font-label text-sm font-semibold uppercase tracking-widest text-night transition-colors hover:bg-gold-soft"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
