import { getProducts, fallbackProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return Response.json({ ok: true, items: await getProducts() });
  } catch {
    return Response.json({ ok: true, items: fallbackProducts() });
  }
}
