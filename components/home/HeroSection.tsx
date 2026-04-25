import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sarah1.jpeg')",
        }}
      />
      
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            {/* Small Label */}
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Premium Furniture
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Quality Furniture<br />
              Up to <span className="text-primary">70% Off</span> Retail
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-xl font-light leading-relaxed">
              Discover premium sectionals, beds, and sofa sets from trusted brands at unbeatable prices.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md text-base font-medium hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-md text-base font-medium hover:bg-white/20 transition-all"
              >
                Visit Showroom
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
