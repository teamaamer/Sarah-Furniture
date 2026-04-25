export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Jolie",
    rating: 5,
    date: "2024-03-15",
    text: "Best prices and selection in Jacksonville! The staff was incredibly helpful and we found exactly what we were looking for. Delivery was fast and professional.",
  },
  {
    id: "2",
    name: "John M",
    rating: 5,
    date: "2024-03-10",
    text: "Good service and great prices. I've bought multiple pieces from Sarah Furniture and have never been disappointed. Highly recommend!",
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    rating: 5,
    date: "2024-03-05",
    text: "Amazing experience! The quality of furniture is outstanding and the prices are unbeatable. We furnished our entire living room for half of what we expected to pay.",
  },
  {
    id: "4",
    name: "David Thompson",
    rating: 4,
    date: "2024-02-28",
    text: "Great selection of sectionals and sofas. Staff was knowledgeable and patient while we made our decision. Very happy with our purchase!",
  },
  {
    id: "5",
    name: "Sarah Chen",
    rating: 5,
    date: "2024-02-20",
    text: "The financing options made it so easy to get the furniture we needed. Delivery within 24 hours as promised. Excellent service all around!",
  },
  {
    id: "6",
    name: "Michael Brown",
    rating: 5,
    date: "2024-02-15",
    text: "Family-owned business that truly cares about their customers. Quality furniture at prices that can't be beat. Will definitely shop here again!",
  },
];
