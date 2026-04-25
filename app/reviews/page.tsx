import Link from "next/link";
import ReviewCard from "@/components/shared/ReviewCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { reviews } from "@/data/reviews";
import { businessInfo } from "@/data/businessInfo";

export default function ReviewsPage() {
  const averageRating = businessInfo.rating;
  const totalReviews = businessInfo.reviewCount;

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Customer Reviews"
          subtitle="See what our customers are saying about us"
          centered
        />

        <div className="bg-gray-50 p-8 rounded-lg mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(averageRating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-bold text-dark">{averageRating}</span>
          </div>
          <p className="text-xl text-gray-700">
            Based on {totalReviews} customer reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6">
            We'd love to hear about your experience with Sarah Furniture
            Liquidation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Write a Review
          </Link>
        </div>
      </div>
    </div>
  );
}
