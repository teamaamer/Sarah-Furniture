import CategoryCard from "@/components/shared/CategoryCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { productCategories } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Furniture Products"
          subtitle="Browse our complete collection of quality furniture at unbeatable prices"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
