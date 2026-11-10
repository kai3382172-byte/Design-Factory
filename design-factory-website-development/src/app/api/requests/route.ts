import { db } from "@/db";
import { requests } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

const allowedKinds = new Set(["appointment", "maintenance", "contact", "order"]);

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : null;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const kind = clean(body.kind, 32) ?? "";
  const name = clean(body.name, 160);
  const phone = clean(body.phone, 60);

  if (!allowedKinds.has(kind) || !name || !phone) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    const [row] = await db
      .insert(requests)
      .values({
        kind,
        name,
        phone,
        email: clean(body.email, 160),
        city: clean(body.city, 160),
        topic: clean(body.topic, 160),
        message: clean(body.message, 4000),
        details: typeof body.details === "string" ? body.details.slice(0, 8000) : null,
        total: typeof body.total === "number" && Number.isFinite(body.total) ? Math.round(body.total) : null,
      })
      .returning({ id: requests.id });

    return Response.json({ ok: true, id: row.id });
  } catch {
    return Response.json({ ok: false, error: "Database error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const items = await db.select().from(requests).orderBy(desc(requests.createdAt)).limit(100);
    return Response.json({ ok: true, items });
  } catch {
    return Response.json({ ok: false, items: [] }, { status: 500 });
  }
}
