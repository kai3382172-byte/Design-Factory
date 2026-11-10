// Prepares the project for static hosting (GitHub Pages).
// Removes the server-only parts (API routes, admin page that read the database)
// and swaps the home page for a static version that uses the built-in content.
import { rmSync, writeFileSync } from "node:fs";

rmSync("src/app/api", { recursive: true, force: true });
rmSync("src/app/admin", { recursive: true, force: true });

writeFileSync(
  "src/app/page.tsx",
  `import SiteApp from "@/components/SiteApp";
import { productSeeds } from "@/lib/content";
import type { Product } from "@/db/schema";

export default function HomePage() {
  const items = productSeeds.map((item, index) => ({ id: index + 1, ...item })) as Product[];
  return <SiteApp products={items} />;
}
`,
);
console.log("Prepared for static export.");
