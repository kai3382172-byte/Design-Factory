import { db } from "@/db";
import { products, type Product } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { productSeeds } from "./content";

let seedPromise: Promise<void> | null = null;

async function ensureSeeded() {
  if (!seedPromise) {
    seedPromise = (async () => {
      const existing = await db.select({ id: products.id }).from(products).limit(1);
      if (existing.length === 0) {
        await db.insert(products).values(productSeeds).onConflictDoNothing();
      }
    })().catch((error) => {
      seedPromise = null;
      throw error;
    });
  }
  await seedPromise;
}

export async function getProducts(): Promise<Product[]> {
  await ensureSeeded();
  return db.select().from(products).where(eq(products.active, true)).orderBy(asc(products.id));
}

export function fallbackProducts(): Product[] {
  return productSeeds.map((item, index) => ({ id: index + 1, ...item }));
}
