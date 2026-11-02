import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FacebookFeed from "@/components/home/FacebookFeed";
import InstagramFeed from "@/components/home/InstagramFeed";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { getAllCollections } from "@/lib/shopify";

export default async function Home() {
  const collections = await getAllCollections(8);

  return (
    <>
      <HeroSection />
      {collections.length > 0 && <CategoriesSection collections={collections} />}
      <FeaturesSection />
      <AnimateOnScroll><FacebookFeed /></AnimateOnScroll>
      <AnimateOnScroll delay={0.1}><InstagramFeed /></AnimateOnScroll>
    </>
  );
}
