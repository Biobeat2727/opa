import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationStrip } from "@/components/LocationStrip";
import { About } from "@/components/About";
import { MenuSection } from "@/components/MenuSection";
import { FindTheTruck } from "@/components/FindTheTruck";
import { CateringCTA } from "@/components/CateringCTA";
import { Footer } from "@/components/Footer";
import { getLocationPosts, currentPost } from "@/lib/locations";

// Re-fetch location posts at most every 60s so new posts show up quickly
export const revalidate = 60;

export default async function Home() {
  const { posts, isSample } = await getLocationPosts();

  return (
    <div className="bg-ambient grain relative">
      <Header />
      <main>
        <Hero />
        <LocationStrip post={currentPost(posts)} />
        <About />
        <MenuSection />
        <FindTheTruck posts={posts} isSample={isSample} />
        <CateringCTA />
      </main>
      <Footer />
    </div>
  );
}
