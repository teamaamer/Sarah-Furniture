import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import CategoryCard from "@/components/shared/CategoryCard";
import ReviewCard from "@/components/shared/ReviewCard";
import SectionTitle from "@/components/shared/SectionTitle";
import ImageGallery from "@/components/shared/ImageGallery";
import { productCategories } from "@/data/products";
import { reviews } from "@/data/reviews";

const furnitureImages = [
  "/images/sarah1.jpeg",
  "/images/sarah2.jpeg",
  "/images/sarah3.jpeg",
  "/images/sarah4.jpeg",
  "/images/sarah5.jpeg",
  "/images/sarah6.jpeg",
  "/images/sarah7.jpeg",
  "/images/sarah8.jpeg",
];

export default function Home() {
  const featuredCategories = productCategories.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Shop by Category"
            subtitle="Discover our wide selection of quality furniture at unbeatable prices"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/products" className="btn-primary inline-block">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Furniture Showroom"
            subtitle="Browse our collection of quality furniture at unbeatable prices"
            centered
          />
          <ImageGallery images={furnitureImages} />
          <div className="text-center mt-16">
            <Link href="/products" className="btn-primary inline-block">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Read reviews from satisfied customers"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/reviews" className="btn-secondary inline-block">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      <InstagramFeed />

      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom text-center">
          <SectionTitle
            title="Ready to Save Big on Quality Furniture?"
            subtitle="Visit us today or request a call back to get started"
            centered
          />
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/locations" className="btn-primary">
              Find Our Locations
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Call Back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
