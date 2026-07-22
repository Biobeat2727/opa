import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

/**
 * The single source of truth for every "Order" button. Opens SpotOn online
 * ordering in a new tab so the OPA! site stays open behind it.
 *
 * SpotOn can't be reliably iframed (its WAF 403s embedded requests), so we
 * link out rather than embed. If SpotOn ever whitelists opafoodtruck.com for
 * framing, this is the one place to change.
 */
export function OrderLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={SITE.orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
