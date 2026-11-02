import { getAllCollections } from "@/lib/shopify";
import Header from "./Header";

export default async function HeaderServer() {
  const collections = await getAllCollections(20);
  return <Header collections={collections} />;
}
