import Image from "next/image";

export type PhotoKind = "wrap" | "plate" | "salad" | "fries" | "sweet" | "truck";

const ICONS: Record<PhotoKind, React.ReactNode> = {
  wrap: (
    // pita cone
    <path d="M20 12 L44 12 L34 52 L30 52 Z M20 12 Q32 22 44 12" />
  ),
  plate: (
    <>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="11" />
    </>
  ),
  salad: (
    <>
      <path d="M12 30 H52 A20 20 0 0 1 32 50 A20 20 0 0 1 12 30 Z" />
      <path d="M22 30 Q26 20 34 18 M32 30 Q36 22 44 22" />
    </>
  ),
  fries: (
    <>
      <path d="M20 28 L24 52 H40 L44 28 Z" />
      <path d="M26 28 V16 M32 28 V13 M38 28 V16" />
    </>
  ),
  sweet: (
    <>
      <rect x="16" y="22" width="32" height="20" rx="2" />
      <path d="M16 32 H48 M27 22 L37 42 M37 22 L27 42" />
    </>
  ),
  truck: (
    <>
      <path d="M10 40 V22 H40 V40 M40 28 H50 L54 34 V40 H40" />
      <circle cx="19" cy="44" r="4" />
      <circle cx="45" cy="44" r="4" />
    </>
  ),
};

const TINTS: Record<PhotoKind, string> = {
  wrap: "from-[#2a2110] via-coal to-[#1c1508]",
  plate: "from-[#2c1d0f] via-coal to-[#1c1508]",
  salad: "from-[#232610] via-coal to-[#1c1508]",
  fries: "from-[#2a2110] via-[#241a0c] to-[#1c1508]",
  sweet: "from-[#2c180e] via-coal to-[#1c1508]",
  truck: "from-[#2a2110] via-coal to-[#1c1508]",
};

/**
 * Food photo slot. Renders the real photo when `src` is set; otherwise a
 * styled gold line-art tile, so empty slots still look intentional.
 * To add a photo: drop the file in public/ and pass its path as `src`.
 */
export function PhotoSlot({
  src,
  alt,
  kind,
  className = "",
  sizes,
}: {
  src?: string;
  alt: string;
  kind: PhotoKind;
  className?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(max-width: 640px) 100vw, 33vw"}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${TINTS[kind]} ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-1/2 max-h-24 w-auto text-gold/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {ICONS[kind]}
      </svg>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(400px_200px_at_50%_-40px,rgba(255,201,7,0.1),transparent)]"
      />
    </div>
  );
}
