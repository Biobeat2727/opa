/** Greek key divider — the brand's signature rule between sections. */
export function Meander({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden
      className={`meander mx-auto w-full max-w-6xl ${dark ? "meander-dark" : "opacity-60"}`}
    />
  );
}
