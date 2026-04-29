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
    id: "kafene",
    name: "Kafene",
    description: "Flexible lease-to-own for everyone",
    features: [
      "No credit needed",
      "Fast approval",
      "Flexible lease terms",
      "Early buyout options",
    ],
  },
];
