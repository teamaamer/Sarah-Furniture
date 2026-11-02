import { productCategories, products } from "@/data/products";

export function getCategories() {
  return productCategories;
}

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug) ?? null;
}

export function getProducts(category?: string) {
  return category ? products.filter((p) => p.category === category) : products;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
