export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  badge?: string;
}

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Sarah+Furniture+Liquidation+Atlantic+Blvd+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUz72athK97dgHX3bTwra3U273Ik8PCS8dxUzPRzcO2WkLKdcbhyS7J1DrWU6xmDQFHbsXFcnZNF-_vYlY_tBKABlp548c01QtpDm77Wo4swmOEVLocmkFxKwgz3pYizczePzkg%3D";

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sharon Mladucky",
    rating: 5,
    date: "2026-03-01",
    badge: "Local Guide",
    text: "We purchased a power reclining sofa from Sarah's this week. Sam and everyone we interacted with were very polite and helpful. When we picked up the sofa a few days later they loaded it into our trailer after we verified all the power components were operating as expected. Since the furniture there are generally floor models, etc so you can't always expect it to be in pristine condition but you definitely can't beat the prices!",
  },
  {
    id: "2",
    name: "Gianna Busillo",
    rating: 5,
    date: "2026-02-01",
    text: "Delivery went so smoothly, I cannot offer a better place to get affordable furniture in such great condition!! Everyone inside the store is super friendly and willing to work with you on prices and delivery dates! I'd like to shout out my delivery guys, they were willing to go above and beyond. Super happy customer :)",
  },
  {
    id: "3",
    name: "Greeshma Nandanan",
    rating: 5,
    date: "2025-11-01",
    badge: "Local Guide",
    text: "A great shopping experience for furniture at Sarah! Brilliant support from Prince on finalising the purchase. Quality products and amazing variety of furniture. Would definitely recommend this place to everyone looking to set up their new home or renovate!",
  },
  {
    id: "4",
    name: "Deborah Rosenbaum",
    rating: 5,
    date: "2025-10-01",
    badge: "Local Guide",
    text: "Amazing prices and very nice quality furniture. Prince was incredibly knowledgeable and understood our needs. Sam, the owner and Prince gave overall great prices. Walked out as happy campers and looking forward to setting up the apartment for what will be a part time home away from home every month so we can be closer to our family!",
  },
  {
    id: "5",
    name: "Deasia Beauge",
    rating: 5,
    date: "2025-10-15",
    badge: "Local Guide",
    text: "My husband decided to go here on his lunch break since we've been shopping for a couch. He immediately picked the perfect couch for our family of 8. The customer service was nothing short of amazing — Prince gave us an awesome deal with same day delivery. After leaving the store our new couch arrived to our home in less than 5 hours. The delivery guys were quick and professional. I highly recommend shopping here!",
  },
  {
    id: "6",
    name: "Madison Rivera",
    rating: 4,
    date: "2025-08-01",
    badge: "Local Guide",
    text: "Beautiful and comfortable couch! The customer service was amazing and they worked with me to find our dream sofa at our dream price, when the sofa I originally wanted sold. Overall the experience was fast and easy, got our new sofa the very next day and it couldn't be more perfect. Thank you!",
  },
];
