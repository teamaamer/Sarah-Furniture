export interface FinancingPartner {
  id: string;
  name: string;
  description: string;
  features: string[];
  logo?: string;
}

export const financingPartners: FinancingPartner[] = [
  {
    id: "american-first",
    name: "American First Finance",
    description: "Flexible payment options to fit your budget",
    features: [
      "Quick approval process",
      "No credit needed",
      "Flexible payment plans",
      "Shop today, pay over time",
    ],
  },
  {
    id: "acima",
    name: "Acima Leasing",
    description: "Lease-to-own solutions for everyone",
    features: [
      "No credit needed",
      "Fast approval",
      "Flexible lease terms",
      "Early buyout options",
    ],
  },
  {
    id: "snap",
    name: "Snap Finance",
    description: "Get approved in seconds",
    features: [
      "Instant decisions",
      "100-day payment option",
      "Build your credit",
      "Easy application process",
    ],
  },
];
