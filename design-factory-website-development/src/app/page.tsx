import SiteApp from "@/components/SiteApp";
import { fallbackProducts, getProducts } from "@/lib/products";
import type { Product } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let items: Product[];
  try {
    items = await getProducts();
  } catch {
    items = fallbackProducts();
  }
  return <SiteApp products={items} />;
}
