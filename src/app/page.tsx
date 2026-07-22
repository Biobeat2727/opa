import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationStrip } from "@/components/LocationStrip";
import { MenuSection } from "@/components/MenuSection";
import { FindTheTruck } from "@/components/FindTheTruck";
import { Footer } from "@/components/Footer";
import { getLocationPosts, currentPost } from "@/lib/locations";

// Re-fetch location posts at most every 60s so new posts show up quickly
export const revalidate = 60;

export default async function Home() {
  const { posts, isSample } = await getLocationPosts();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <LocationStrip post={currentPost(posts)} />
        <MenuSection />
        <FindTheTruck posts={posts} isSample={isSample} />
      </main>
      <Footer />
    </>
  );
}
