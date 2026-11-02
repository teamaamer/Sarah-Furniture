import { getCategories } from "@/lib/catalog";
import Header from "./Header";

export default function HeaderServer() {
  return <Header categories={getCategories()} />;
}
