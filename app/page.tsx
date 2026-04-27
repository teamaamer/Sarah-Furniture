import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import ReviewCard from "@/components/shared/ReviewCard";
import SectionTitle from "@/components/shared/SectionTitle";
import ImageGallery from "@/components/shared/ImageGallery";
import { ProductCard } from "@/components/products/product-card";
import { getProducts, getAllCollections } from "@/lib/shopify";
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

export default async function Home() {
  const [featuredProducts, collections] = await Promise.all([
    getProducts(undefined, 6),
    getAllCollections(8),
  ]);

  const featuredReviews = reviews.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Featured Products from Shopify */}
      {featuredProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container-custom">
            <SectionTitle
              title="Featured Products"
              subtitle="Shop our latest furniture arrivals at unbeatable prices"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/products" className="btn-primary inline-block">
                Shop All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Shop by Collection */}
      {collections.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="container-custom">
            <SectionTitle
              title="Shop by Category"
              subtitle="Discover our wide selection of quality furniture"
              centered
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="group block bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-40 bg-gray-100 overflow-hidden">
                    {collection.image ? (
                      <Image
                        src={collection.image.url}
                        alt={collection.image.altText || collection.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-4xl">🛋️</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    {collection.description && (
                      <p className="text-gray-500 text-xs mt-1 line-clamp-2">{collection.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/products" className="btn-secondary inline-block">
                View All Categories
              </Link>
            </div>
          </div>
        </section>
      )}

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
