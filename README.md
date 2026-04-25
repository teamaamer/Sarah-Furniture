# Sarah Furniture Liquidation Website

A modern, production-ready furniture store website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **SEO-Friendly**: Proper meta tags and semantic HTML
- **Accessible UI**: WCAG compliant components
- **Clean Architecture**: Reusable components and scalable folder structure
- **Performance**: Optimized images and code splitting

## Business Information

- **Name**: Sarah Furniture Liquidation
- **Locations**:
  - 7534 Atlantic Blvd, Jacksonville, FL 32211 (Main)
  - 3000 Dunn Ave Unit 40, Jacksonville, FL 32218
- **Phone**: (904) 484-8434
- **Hours**: Mon - Sun | 9:00 am - 9:00 pm
- **Rating**: 4.7 stars (747 reviews)

## Pages

1. **Home** - Hero section, featured categories, features, reviews
2. **Products** - Main products page with all categories
3. **Product Categories**:
   - Sectionals
   - Beds
   - Sofa Sets
   - Outdoor Furniture
   - Wood Furniture
   - Dining Rooms & Coffee Tables
4. **Reviews** - Customer testimonials and ratings
5. **About** - Business information and specialties
6. **Locations** - Store locations with details
7. **Financing** - Financing and leasing options
8. **Contact** - Request a call back form

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── products/          # Products pages
│   ├── reviews/           # Reviews page
│   ├── about/             # About page
│   ├── locations/         # Locations pages
│   ├── financing/         # Financing page
│   └── contact/           # Contact form page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── home/             # Home page components
│   └── shared/           # Shared components
├── data/                 # Data files
│   ├── businessInfo.ts   # Business information
│   ├── products.ts       # Product categories
│   ├── reviews.ts        # Customer reviews
│   └── financing.ts      # Financing partners
└── public/               # Static assets
    └── images/           # Image files
```

## Customization

### Adding Images

Place your images in the `public/images/` directory and update the image paths in:
- Product categories (`data/products.ts`)
- Hero section (`components/home/HeroSection.tsx`)

### Updating Business Information

Edit `data/businessInfo.ts` to update:
- Business name, phone, hours
- Locations
- Payment methods
- Social media links

### Styling

The website uses Tailwind CSS with a custom color scheme:
- **Primary**: Red/Pink accent (#DC2626)
- **Dark**: Dark gray for headers (#1F2937)
- **Background**: White and light gray

Update `tailwind.config.ts` to customize colors and theme.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

The built files will be in the `.next` directory.

## Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## License

© 2024 Sarah Furniture Liquidation. All rights reserved.
