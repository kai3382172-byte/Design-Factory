import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { requests, type RequestRow } from "@/db/schema";
import { dictionary } from "@/lib/i18n";

export const dynamic = "force-dynamic";

const kindLabels: Record<string, { ar: string; en: string }> = {
  appointment: { ar: dictionary.ar.adminKindAppointment, en: dictionary.en.adminKindAppointment },
  order: { ar: dictionary.ar.adminKindOrder, en: dictionary.en.adminKindOrder },
  maintenance: { ar: dictionary.ar.adminKindMaintenance, en: dictionary.en.adminKindMaintenance },
  contact: { ar: dictionary.ar.adminKindContact, en: dictionary.en.adminKindContact },
};

export default async function AdminPage() {
  let rows: RequestRow[] = [];
  try {
    rows = await db.select().from(requests).orderBy(desc(requests.createdAt)).limit(100);
  } catch {
    rows = [];
  }

  return (
    <main className="min-h-screen bg-cream py-10 text-ink" dir="rtl" lang="ar">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/images/design-factory-logo.jpg" alt="Design Factory" className="h-16 w-16 rounded-xl bg-white object-contain" />
            <div>
              <h1 className="text-2xl font-extrabold">{dictionary.ar.adminTitle}</h1>
              <p className="mt-1 text-xs text-ink/60">{dictionary.ar.adminSubtitle}</p>
            </div>
          </div>
          <Link href="/" className="btn-outline btn-small">العودة للموقع / Back to site</Link>
        </div>

        <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-5">
          <span className="text-xs font-bold text-ink/55">{dictionary.ar.adminTotal}</span>
          <span className="ms-3 text-2xl font-extrabold text-copper">{rows.length}</span>
        </div>

        {rows.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-ink/20 bg-white p-14 text-center text-sm text-ink/55">
            {dictionary.ar.adminEmpty}
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {rows.map((row) => (
              <article key={row.id} className="rounded-2xl border border-ink/10 bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-copper/15 px-3 py-1 text-xs font-extrabold text-copper">
                      {kindLabels[row.kind]?.ar ?? row.kind} / {kindLabels[row.kind]?.en ?? row.kind}
                    </span>
                    <span className="text-xs text-ink/45">#{row.id}</span>
                  </div>
                  <time className="text-xs text-ink/45" dir="ltr">
                    {row.createdAt.toLocaleString("en-GB")}
                  </time>
                </div>
                <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <p><strong className="text-ink/50">الاسم:</strong> {row.name}</p>
                  <p dir="ltr"><strong className="text-ink/50">Phone:</strong> {row.phone}</p>
                  {row.email && <p><strong className="text-ink/50">Email:</strong> {row.email}</p>}
                  {row.topic && <p><strong className="text-ink/50">Topic:</strong> {row.topic}</p>}
                  {row.city && <p><strong className="text-ink/50">City / Address:</strong> {row.city}</p>}
                  {row.total !== null && <p><strong className="text-ink/50">Total:</strong> {row.total.toLocaleString("en-US")} EGP</p>}
                </div>
                {row.message && <p className="mt-3 rounded-xl bg-cream p-3 text-sm leading-7 text-ink/75">{row.message}</p>}
                {row.details && <p className="mt-2 truncate text-[11px] text-ink/40" dir="ltr">{row.details}</p>}
                <p className="mt-3 text-[11px] font-bold text-ink/40">{row.status}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
