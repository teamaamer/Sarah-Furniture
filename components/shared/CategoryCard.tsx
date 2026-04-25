import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export default function CategoryCard({
  name,
  slug,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
    >
      <div className="relative h-80 bg-gray-50 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors tracking-tight">
          {name}
        </h3>
        <p className="text-gray-600 leading-relaxed font-light">{description}</p>
        <div className="mt-6 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
          <span>Explore Collection</span>
          <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
