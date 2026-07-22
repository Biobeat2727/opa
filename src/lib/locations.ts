import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";

export type LocationPost = {
  _id: string;
  title: string;
  address: string;
  startDate: string;
  endDate?: string;
  hours?: string;
  note?: string;
};

const LOCATION_QUERY = groq`*[_type == "locationPost"] | order(startDate desc)[0...6]{
  _id, title, address, startDate, endDate, hours, note
}`;

function isoDate(daysFromToday: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  return d.toISOString().slice(0, 10);
}

/** Shown until Sanity is connected, so the design is reviewable with real-shaped data. */
const SAMPLE_POSTS: LocationPost[] = [
  {
    _id: "sample-current",
    title: "Bonner Mall parking lot",
    address: "775 Bonner Mall Way, Ponderay, ID 83852",
    startDate: isoDate(-2),
    endDate: isoDate(4),
    hours: "11am – 7pm",
    note: "Parked by the north entrance. Come say opa!",
  },
  {
    _id: "sample-past",
    title: "Farmin Park, Sandpoint",
    address: "300 N 4th Ave, Sandpoint, ID 83864",
    startDate: isoDate(-9),
    endDate: isoDate(-3),
    hours: "11am – 6pm",
  },
];

export async function getLocationPosts(): Promise<{
  posts: LocationPost[];
  isSample: boolean;
}> {
  if (!isSanityConfigured) {
    return { posts: SAMPLE_POSTS, isSample: true };
  }
  try {
    const posts = await client.fetch<LocationPost[]>(LOCATION_QUERY);
    return { posts, isSample: false };
  } catch (error) {
    console.error("Failed to fetch location posts from Sanity:", error);
    return { posts: [], isSample: false };
  }
}

/** The post whose date range includes today (open-ended if no endDate). */
export function currentPost(posts: LocationPost[]): LocationPost | undefined {
  const today = new Date().toISOString().slice(0, 10);
  return posts.find(
    (p) => p.startDate <= today && (!p.endDate || p.endDate >= today),
  );
}

export function upcomingPosts(posts: LocationPost[]): LocationPost[] {
  const today = new Date().toISOString().slice(0, 10);
  return posts
    .filter((p) => p.startDate > today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function formatDateRange(post: LocationPost): string {
  const fmt = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  if (!post.endDate) return `From ${fmt(post.startDate)}`;
  if (post.startDate === post.endDate) return fmt(post.startDate);
  return `${fmt(post.startDate)} – ${fmt(post.endDate)}`;
}

export function directionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export function mapEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}
