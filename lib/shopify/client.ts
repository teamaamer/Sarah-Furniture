import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!storeDomain || storeDomain === 'your-store.myshopify.com') {
  console.warn('⚠️  SHOPIFY_STORE_DOMAIN is not configured. Please update .env.local');
}

if (!accessToken || accessToken === 'YOUR_STOREFRONT_ACCESS_TOKEN_HERE') {
  console.warn('⚠️  SHOPIFY_STOREFRONT_ACCESS_TOKEN is not configured. Please update .env.local');
}

const client = createStorefrontApiClient({
  storeDomain: storeDomain || 'demo-store.myshopify.com',
  apiVersion: process.env.SHOPIFY_API_VERSION || '2026-04',
  publicAccessToken: accessToken || 'demo-token',
});

export default client;
