"use client";

import { useState } from "react";
import { ArrowRight, Check, Package, ShieldCheck, ShoppingBag, Truck, X } from "lucide-react";
import type { Product } from "@/db/schema";
import { company, projectCategories } from "@/lib/content";
import { useSite } from "./state";
import { SectionHeading, formatPrice } from "./ui";

export default function ShopSection() {
  const { t, lang, products, addToCart, setCartOpen } = useSite();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);
  const visible = products.filter((product) => filter === "all" || product.category === filter);

  const perks = [
    { icon: <Truck size={20} />, k: "inStock" as const, d: "trust1d" as const },
    { icon: <Package size={20} />, k: "trust3" as const, d: "trust3d" as const },
    { icon: <ShieldCheck size={20} />, k: "care1" as const, d: "care1d" as const },
  ];

  return (
    <section id="shop-products" className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading badge="shopSectionBadge" title="shopSectionTitle" desc="shopSectionDesc" center />

        <div className="mt-9 grid gap-3 sm:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.k} className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream text-copper">{perk.icon}</span>
              <div>
                <p className="text-xs font-extrabold text-ink">{t(perk.k)}</p>
                <p className="mt-0.5 text-[11px] text-ink/55">{t(perk.d)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hide-scrollbar mt-9 flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {projectCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${filter === category.key ? "border-copper bg-copper text-white" : "border-ink/15 bg-white text-ink/65 hover:border-copper hover:text-copper"}`}
            >
              {t(category.dictKey)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => {
            const badge = lang === "ar" ? product.badgeAr : product.badgeEn;
            return (
              <article key={product.id} className="card-soft group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(182,106,45,0.55)]">
                <button onClick={() => setSelected(product)} className="relative block h-60 overflow-hidden bg-sand text-start">
                  <img src={product.image} alt={lang === "ar" ? product.nameAr : product.nameEn} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  {badge && (
                    <span className="absolute top-4 start-4 rounded-full bg-copper px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg">{badge}</span>
                  )}
                  <span className="absolute bottom-4 end-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-ink backdrop-blur">
                    {t("inStock")} · {product.stock} {t("pieces")}
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-extrabold text-ink">{lang === "ar" ? product.nameAr : product.nameEn}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-ink/60">{lang === "ar" ? product.descAr : product.descEn}</p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                    <div>
                      <span className="text-xl font-extrabold text-copper" dir="ltr">{formatPrice(product.price)}</span>
                      <span className="ms-1 text-xs font-bold text-ink/50">{t("currency")}</span>
                    </div>
                    <button onClick={() => setSelected(product)} className="text-[11px] font-bold text-ink/50 underline underline-offset-4 hover:text-copper">
                      {t("viewProject")}
                    </button>
                  </div>
                  <button onClick={() => addToCart(product)} className="btn-main mt-4 w-full !py-2.5">
                    <ShoppingBag size={16} /> {t("addToCart")}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-ink/20 py-16 text-center text-sm text-ink/55">
            {t("choose")}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl bg-ink px-8 py-8 text-white sm:flex-row">
          <div>
            <h3 className="text-lg font-extrabold">{t("customNote")}</h3>
            <p className="mt-2 max-w-xl text-xs leading-7 text-white/65">{t("customNoteDesc")}</p>
          </div>
          <a href={company.whatsappMessage} target="_blank" rel="noreferrer" className="btn-main shrink-0">
            {t("requestCustom")} <ArrowRight size={16} className="rtl:rotate-180" />
          </a>
        </div>
      </div>

      {selected && (
        <div className="fade-in fixed inset-0 z-[100] flex items-center justify-center bg-[#1e110a]/85 p-4 backdrop-blur-md" onClick={() => setSelected(null)}>
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-cream shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} aria-label={t("close")} className="absolute top-4 end-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-lg hover:bg-copper hover:text-white">
              <X size={19} />
            </button>
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <img src={selected.image} alt={lang === "ar" ? selected.nameAr : selected.nameEn} className="h-64 w-full object-cover md:h-full md:min-h-[420px]" />
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="eyebrow">DESIGN FACTORY STORE</span>
                <h3 className="mt-4 text-2xl font-extrabold text-ink">{lang === "ar" ? selected.nameAr : selected.nameEn}</h3>
                <p className="mt-4 text-sm leading-8 text-ink/65">{lang === "ar" ? selected.descAr : selected.descEn}</p>
                <ul className="mt-5 space-y-2 text-xs font-bold text-ink/70">
                  <li className="flex items-center gap-2"><Check size={14} className="text-copper" /> {t("inStock")} · {selected.stock} {t("pieces")}</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-copper" /> {t("trust3d")}</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-copper" /> {t("care1d")}</li>
                </ul>
                <div className="mt-6 text-2xl font-extrabold text-copper" dir="ltr">
                  {formatPrice(selected.price)} <span className="text-sm">{t("currency")}</span>
                </div>
                <button onClick={() => { addToCart(selected); setSelected(null); setCartOpen(true); }} className="btn-main mt-6">
                  <ShoppingBag size={17} /> {t("addToCart")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
