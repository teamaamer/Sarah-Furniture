export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "sectionals",
    name: "Sectionals",
    slug: "sectionals",
    description: "Stylish sectional options for your home with quality, comfort, and style at discounted pricing.",
    image: "/images/sarah2.jpeg",
  },
  {
    id: "beds",
    name: "Beds",
    slug: "beds",
    description: "Premium beds and bedroom furniture from top brands at unbeatable prices.",
    image: "/images/sarah3.jpeg",
  },
  {
    id: "sofa-sets",
    name: "Sofa Sets",
    slug: "sofa-sets",
    description: "Complete sofa sets perfect for any living room style and budget.",
    image: "/images/sarah4.jpeg",
  },
  {
    id: "outdoor-furniture",
    name: "Outdoor Furniture",
    slug: "outdoor-furniture",
    description: "Durable and stylish outdoor furniture for your patio and garden.",
    image: "/images/sarah5.jpeg",
  },
  {
    id: "wood-furniture",
    name: "Wood Furniture",
    slug: "wood-furniture",
    description: "Handcrafted wood furniture pieces that add warmth to any space.",
    image: "/images/sarah6.jpeg",
  },
  {
    id: "dining-coffee-tables",
    name: "Dining Rooms & Coffee Tables",
    slug: "dining-coffee-tables",
    description: "Elegant dining sets and coffee tables for entertaining and everyday use.",
    image: "/images/sarah7.jpeg",
  },
];
