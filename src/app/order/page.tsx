import { redirect } from "next/navigation";
import { SITE } from "@/lib/site";

/**
 * The Order buttons link straight to SpotOn (see OrderLink). This route only
 * exists as a safety net so an old bookmark or typed /order still reaches
 * ordering instead of 404ing.
 */
export default function OrderPage() {
  redirect(SITE.orderUrl);
}
