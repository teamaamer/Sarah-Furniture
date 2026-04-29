import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import FacebookFeed from "@/components/home/FacebookFeed";
import InstagramFeed from "@/components/home/InstagramFeed";
import SectionTitle from "@/components/shared/SectionTitle";
import { getAllCollections } from "@/lib/shopify";

export default async function Home() {
  const collections = await getAllCollections(8);

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Categories */}
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

      {/* 3. Facebook Feed */}
      <FacebookFeed />

      {/* 4. Instagram Feed */}
      <InstagramFeed />
    </>
  );
}
