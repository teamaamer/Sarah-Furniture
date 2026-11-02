import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FacebookFeed from "@/components/home/FacebookFeed";
import InstagramFeed from "@/components/home/InstagramFeed";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { getCategories } from "@/lib/catalog";

export default function Home() {
  const categories = getCategories();

  return (
    <>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturesSection />
      <AnimateOnScroll><FacebookFeed /></AnimateOnScroll>
      <AnimateOnScroll delay={0.1}><InstagramFeed /></AnimateOnScroll>
    </>
  );
}
