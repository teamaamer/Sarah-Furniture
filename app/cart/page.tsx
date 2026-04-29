import Link from 'next/link';
import { businessInfo } from '@/data/businessInfo';

export default function CartPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 bg-white text-center px-6">
      <div className="max-w-md">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">In-Store Purchase Only</h1>
        <p className="text-gray-600 mb-8">
          Our furniture is available exclusively at our Jacksonville showroom. Visit us in person at{' '}
          <span className="font-semibold">{businessInfo.locations[0].address}</span> to browse and purchase.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/locations"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            Get Directions
          </Link>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            {businessInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
