import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/sarahfurnitureliquidation";
const HANDLE = "@sarahfurnitureliquidation";

const INSTAGRAM_ICON_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

// First image is the large feature tile
const photos = [
  "/images/sarah2.jpeg",
  "/images/sarah5.jpeg",
  "/images/sarah7.jpeg",
  "/images/sarah3.jpeg",
  "/images/sarah9.jpeg",
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={INSTAGRAM_ICON_PATH} />
    </svg>
  );
}

export default function InstagramFeed() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-[3px] rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600"
            >
              <span className="relative block w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border-[3px] border-white overflow-hidden">
                <Image src="/images/sarahlogo.png" alt="Sarah Furniture" fill className="object-contain p-1.5" />
              </span>
            </a>
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Follow Us on Instagram
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight break-all sm:break-normal">
                {HANDLE}
              </h2>
              <p className="text-gray-500 mt-2">See our latest furniture arrivals and customer setups</p>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold py-3.5 px-8 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {photos.map((src, i) => (
            <a
              key={src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded-2xl bg-gray-200 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt="Sarah Furniture on Instagram"
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 lg:w-10 lg:h-10 text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
