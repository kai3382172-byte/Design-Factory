"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Send,
  Sparkles,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import {
  bookServices,
  careItems,
  company,
  issueTypes,
  processSteps,
  projectCategories,
  projects,
  services,
  trustItems,
} from "@/lib/content";
import { pick } from "@/lib/i18n";
import { useSite } from "./state";
import { Glyph, Logo, SectionHeading, formatPrice } from "./ui";

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function TrustStrip() {
  const { t } = useSite();
  return (
    <section className="relative z-20 -mt-9 sm:-mt-12">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 shadow-[0_25px_60px_-30px_rgba(66,41,29,0.5)] lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.k} className="group flex items-center gap-4 bg-white px-5 py-6 transition hover:bg-cream sm:px-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream text-copper transition group-hover:bg-copper group-hover:text-white">
                <Glyph name={item.icon} size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-ink">{t(item.k)}</h3>
                <p className="mt-1 text-[11px] leading-5 text-ink/55 sm:text-xs">{t(item.dk)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t } = useSite();
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="soft-grid absolute inset-0 opacity-40" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-35px_rgba(66,41,29,0.7)]">
            <img src="/images/workshop.jpg" alt="Inside the Design Factory workshop" className="h-[360px] w-full object-cover sm:h-[500px]" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 start-4 end-4 mx-auto flex max-w-md items-center gap-4 rounded-2xl border border-ink/8 bg-white p-4 shadow-xl sm:start-8 sm:end-auto">
            <Logo height={64} />
            <div>
              <p className="text-[10px] font-extrabold tracking-[0.12em] text-copper" dir="ltr">DESIGN FACTORY</p>
              <p className="mt-1 text-xs font-bold text-ink">{t("logoCaptionSub")}</p>
            </div>
          </div>
          <div className="absolute -top-4 end-4 hidden rounded-2xl bg-copper px-5 py-3 text-white shadow-lg sm:block">
            <span className="text-2xl font-extrabold" dir="ltr">+12</span>
            <p className="text-[10px] font-bold opacity-90">{t("statYears")}</p>
          </div>
        </div>

        <div>
          <SectionHeading badge="aboutBadge" title="aboutTitle" />
          <p className="mt-7 text-[15px] leading-[2] text-ink/70">{t("aboutP1")}</p>
          <p className="mt-4 text-[15px] leading-[2] text-ink/70">{t("aboutP2")}</p>
          <div className="mt-7 rounded-2xl border-s-4 border-copper bg-white px-6 py-4 text-sm font-bold text-ink shadow-sm">
            “{t("aboutQuote")}”
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {([
              { n: "01", k: "aboutStat1" as const, icon: "ruler" as const },
              { n: "02", k: "aboutStat2" as const, icon: "factory" as const },
              { n: "03", k: "aboutStat3" as const, icon: "shield" as const },
            ]).map((item) => (
              <div key={item.k} className="rounded-2xl border border-ink/10 bg-white/70 p-4 text-center">
                <Glyph name={item.icon} size={20} className="mx-auto text-copper" />
                <p className="mt-2 text-lg font-extrabold text-ink/25" dir="ltr">{item.n}</p>
                <p className="mt-1 text-[11px] font-bold leading-5 text-ink/75">{t(item.k)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => go("booking")} className="btn-main">
              {t("bookNow")} <ArrowRight size={16} className="rtl:rotate-180" />
            </button>
            <a href={company.catalog} target="_blank" rel="noreferrer" className="btn-outline">
              <FileText size={16} /> {t("catalog")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const { t, lang } = useSite();
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading badge="servicesBadge" title="servicesTitle" desc="servicesDesc" />
          <button onClick={() => go("booking")} className="btn-outline shrink-0">
            {t("serviceCta")} <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.id} className="card-soft group overflow-hidden p-7 hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-[0_30px_60px_-30px_rgba(182,106,45,0.5)]">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream text-copper transition group-hover:bg-copper group-hover:text-white">
                  <Glyph name={service.icon} size={25} />
                </span>
                <span className="text-2xl font-extrabold text-ink/10" dir="ltr">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-ink">{pick(service.title, lang)}</h3>
              <p className="mt-3 text-sm leading-8 text-ink/60">{pick(service.desc, lang)}</p>
              <button onClick={() => go("booking")} className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-copper hover:text-ink">
                {t("serviceCta")} <ArrowRight size={14} className="rtl:rotate-180" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  const { t, lang, setLightbox } = useSite();
  const [filter, setFilter] = useState<string>("all");
  const visible = projects.filter((project) => filter === "all" || project.category === filter);

  return (
    <section id="projects" className="bg-cream py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading badge="portfolioBadge" title="portfolioTitle" desc="portfolioDesc" />
          <div className="flex items-center gap-2 text-sm font-bold text-ink/40">
            <Sparkles size={16} className="text-copper" />
            <span dir="ltr">{visible.length.toString().padStart(2, "0")} / {projects.length}</span>
          </div>
        </div>

        <div className="hide-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {projectCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${filter === category.key ? "border-ink bg-ink text-white" : "border-ink/15 bg-white text-ink/65 hover:border-copper hover:text-copper"}`}
            >
              {t(category.dictKey)}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((project) => (
            <button
              key={project.id}
              onClick={() => setLightbox(project)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-ink text-start shadow-lg"
            >
              <img
                src={project.image}
                alt={pick(project.title, lang)}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#221208]/90 via-[#221208]/15 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <span>
                  <span className="inline-block rounded-full bg-copper/90 px-3 py-1 text-[10px] font-extrabold text-white">
                    {t(projectCategories.find((c) => c.key === project.category)?.dictKey ?? "filterAll")}
                  </span>
                  <span className="mt-2 block text-lg font-extrabold text-white">{pick(project.title, lang)}</span>
                  <span className="mt-1 block text-xs text-white/70">{pick(project.location, lang)} · {project.year}</span>
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/50 text-white transition group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight size={17} />
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => go("booking")} className="btn-ink">
            {t("similarBook")} <ArrowRight size={16} className="rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function MediaSection() {
  const { t } = useSite();
  const [playing, setPlaying] = useState(false);
  return (
    <section id="media" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="wood-pattern absolute inset-0 opacity-70" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading badge="mediaBadge" title="mediaTitle" desc="mediaDesc" light />
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={company.instagramReels} target="_blank" rel="noreferrer" className="btn-main">
              <InstagramIcon width={16} height={16} /> {t("watchReels")}
            </a>
            <a href={company.facebookVideos} target="_blank" rel="noreferrer" className="btn-light">
              <FacebookIcon width={16} height={16} /> {t("watchVideos")}
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href={company.instagram} target="_blank" rel="noreferrer" className="glass-panel flex items-center gap-3 p-4 transition hover:bg-white/20">
              <InstagramIcon width={22} height={22} className="text-[#e9b57d]" />
              <span className="text-sm font-bold">@designfactory160</span>
              <ArrowUpRight size={15} className="ms-auto opacity-60" />
            </a>
            <a href={company.facebook} target="_blank" rel="noreferrer" className="glass-panel flex items-center gap-3 p-4 transition hover:bg-white/20">
              <FacebookIcon width={22} height={22} className="text-[#e9b57d]" />
              <span className="text-sm font-bold">Design Factory | Giza</span>
              <ArrowUpRight size={15} className="ms-auto opacity-60" />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
          {playing ? (
            <video src={company.video} poster={company.videoPoster} controls autoPlay loop playsInline className="aspect-video w-full bg-black object-cover" />
          ) : (
            <>
              <img src={company.videoPoster} alt="Design Factory workshop film" className="aspect-video w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-ink/35" />
              <button onClick={() => setPlaying(true)} className="absolute inset-0 flex flex-col items-center justify-center gap-4" aria-label={t("playFilm")}>
                <span className="grid h-20 w-20 place-items-center rounded-full border-2 border-white/70 bg-copper/90 text-white shadow-2xl transition hover:scale-110">
                  <Play size={30} fill="currentColor" />
                </span>
                <span className="text-sm font-bold text-white">{t("playFilm")}</span>
              </button>
            </>
          )}
          <span className="absolute bottom-4 start-4 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white/90 backdrop-blur">
            BEHIND THE SCENES · DESIGN FACTORY
          </span>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { t } = useSite();
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading badge="processBadge" title="processTitle" center />
        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute inset-x-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent lg:block" />
          {processSteps.map((step) => (
            <div key={step.n} className="card-soft relative p-7 hover:-translate-y-1.5">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-cream bg-white text-copper shadow-md">
                <Glyph name={step.icon} size={26} />
              </div>
              <p className="mt-5 text-center text-3xl font-extrabold text-copper/25" dir="ltr">{step.n}</p>
              <h3 className="mt-2 text-center text-base font-extrabold text-ink">{t(step.k)}</h3>
              <p className="mt-3 text-center text-xs leading-7 text-ink/60">{t(step.dk)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopTeaser() {
  const { t, lang, products, setMode } = useSite();
  const featured = products.slice(0, 3);
  return (
    <section id="shop-teaser" className="relative overflow-hidden bg-gradient-to-br from-sand via-cream to-[#f6e7d4] py-24 sm:py-28">
      <div className="soft-grid absolute inset-0 opacity-50" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading badge="shopBadge" title="shopTitle" desc="shopDesc" />
          <div className="mt-8 rounded-2xl border border-ink/10 bg-white/80 p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-ink/60">
              <CheckCircle2 size={16} className="text-copper" /> {t("transformHint")}
            </div>
            <button onClick={() => setMode("shop")} className="btn-main mt-4 w-full !py-4 text-base">
              <Sparkles size={18} /> {t("transformBtn")} <ArrowRight size={18} className="rtl:rotate-180" />
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={company.catalog} target="_blank" rel="noreferrer" className="btn-outline btn-small">
              <FileText size={15} /> {t("catalog")}
            </a>
            <button onClick={() => go("contact")} className="btn-outline btn-small">
              <MessageCircle size={15} /> {t("contact")}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featured.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setMode("shop")}
              className={`group overflow-hidden rounded-2xl bg-white shadow-xl transition hover:-translate-y-1 ${index === 0 ? "col-span-2" : ""}`}
            >
              <div className={`overflow-hidden ${index === 0 ? "h-48" : "h-40"}`}>
                <img src={product.image} alt={lang === "ar" ? product.nameAr : product.nameEn} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-between gap-2 p-4">
                <span className="truncate text-xs font-extrabold text-ink">{lang === "ar" ? product.nameAr : product.nameEn}</span>
                <span className="shrink-0 text-xs font-bold text-copper" dir="ltr">{formatPrice(product.price)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}

export function BookingSection() {
  const { t, lang, postRequest, notify } = useSite();
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const ok = await postRequest({
      kind: "appointment",
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      city: String(data.get("city") ?? ""),
      topic: String(data.get("service") ?? ""),
      message: String(data.get("notes") ?? ""),
      details: JSON.stringify({ date: String(data.get("date") ?? ""), time: String(data.get("time") ?? "") }),
    });
    setSending(false);
    if (ok) {
      notify(t("toastBooking"));
      form.reset();
    } else notify(t("toastError"));
  }

  return (
    <section id="booking" className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading badge="bookBadge" title="bookTitle" desc="bookDesc" center />
        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-ink/10 bg-cream shadow-[0_30px_70px_-40px_rgba(66,41,29,0.6)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-ink p-9 text-white sm:p-12">
            <div className="wood-pattern absolute inset-0 opacity-70" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[11px] font-bold text-[#e9b57d]">
                <CalendarDays size={14} /> DESIGN FACTORY
              </span>
              <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">{t("bookFormTitle")}</h3>
              <p className="mt-4 text-sm leading-8 text-white/65">{t("visitTypes")}</p>
              <div className="mt-9 space-y-4">
                <a href={company.tel} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10">
                  <Phone size={17} className="text-[#e9b57d]" /> <span dir="ltr">{company.phoneDisplay}</span>
                </a>
                <a href={company.whatsappMessage} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10">
                  <MessageCircle size={17} className="text-[#e9b57d]" /> {t("bookWhatsapp")}
                </a>
                <a href={company.catalog} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10">
                  <FileText size={17} className="text-[#e9b57d]" /> {t("catalog")}
                </a>
              </div>
              <div className="mt-9 flex items-center gap-2 text-xs text-white/55">
                <Clock size={15} className="text-[#e9b57d]" /> {t("hours")}
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="grid gap-4 p-7 sm:grid-cols-2 sm:p-10">
            <FormField label={t("fieldName")}><input name="name" required className="field-input" placeholder={t("fieldName")} /></FormField>
            <FormField label={t("fieldPhone")}><input name="phone" required type="tel" dir="ltr" className="field-input" placeholder={company.phoneDisplay} /></FormField>
            <FormField label={t("fieldEmail")}><input name="email" type="email" className="field-input" placeholder="name@example.com" /></FormField>
            <FormField label={t("fieldCity")}><input name="city" className="field-input" placeholder={lang === "ar" ? "القاهرة / الجيزة…" : "Cairo / Giza…"} /></FormField>
            <FormField label={t("fieldService")}>
              <select name="service" required defaultValue="" className="field-input">
                <option value="" disabled>{t("choose")}</option>
                {bookServices.map((item) => <option key={item.value} value={item.value}>{pick(item, lang)}</option>)}
              </select>
            </FormField>
            <FormField label={t("fieldTime")}>
              <select name="time" defaultValue="anytime" className="field-input">
                <option value="anytime">{t("anytime")}</option>
                <option value="morning">{t("morning")}</option>
                <option value="afternoon">{t("afternoon")}</option>
                <option value="evening">{t("evening")}</option>
              </select>
            </FormField>
            <FormField label={t("fieldDate")}><input name="date" type="date" className="field-input" /></FormField>
            <div className="flex items-end">
              <a href={company.whatsappMessage} target="_blank" rel="noreferrer" className="btn-outline w-full !py-3">
                <MessageCircle size={16} /> {t("whatsappTitle")}
              </a>
            </div>
            <div className="sm:col-span-2">
              <FormField label={t("fieldNotes")}><textarea name="notes" rows={3} className="field-input resize-none" placeholder={lang === "ar" ? "المساحة، الخامات المفضلة، الميزانية التقريبية…" : "Space, preferred materials, approximate budget…"} /></FormField>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={sending} className="btn-main w-full !py-3.5 disabled:opacity-60">
                <Send size={16} /> {sending ? t("sending") : t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function CareSection() {
  const { t, lang, postRequest, notify } = useSite();
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const ok = await postRequest({
      kind: "maintenance",
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      topic: String(data.get("issue") ?? ""),
      city: String(data.get("address") ?? ""),
      message: String(data.get("details") ?? ""),
      details: JSON.stringify({ reference: String(data.get("reference") ?? ""), date: String(data.get("date") ?? "") }),
    });
    setSending(false);
    if (ok) {
      notify(t("toastCare"));
      form.reset();
    } else notify(t("toastError"));
  }

  return (
    <section id="care" className="relative overflow-hidden bg-[#352116] py-24 text-white sm:py-28">
      <div className="wood-pattern absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <SectionHeading badge="careBadge" title="careTitle" desc="careDesc" center light />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careItems.map((item) => (
            <div key={item.k} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper/25 text-[#e9b57d]"><Glyph name={item.icon} size={22} /></span>
              <h3 className="mt-5 text-base font-extrabold">{t(item.k)}</h3>
              <p className="mt-2 text-xs leading-7 text-white/60">{t(item.dk)}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-cream text-ink shadow-2xl lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-gradient-to-br from-copper to-[#8a4d20] p-9 text-white sm:p-11">
            <h3 className="text-2xl font-extrabold">{t("careFormTitle")}</h3>
            <p className="mt-4 text-sm leading-8 text-white/80">{t("careFormDesc")}</p>
            <div className="mt-9 rounded-2xl border border-white/25 bg-white/10 p-5">
              <p className="text-xs font-bold text-white/70">{t("careHotline")}</p>
              <a href={company.tel} dir="ltr" className="mt-2 block text-2xl font-extrabold hover:underline">{company.phoneDisplay}</a>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn-light btn-small mt-4 w-full">
                <MessageCircle size={15} /> {t("whatsappTitle")}
              </a>
            </div>
            <p className="mt-8 text-xs text-white/60">{t("hours")}</p>
          </div>

          <form onSubmit={submit} className="grid gap-4 p-7 sm:grid-cols-2 sm:p-10">
            <FormField label={t("fieldName")}><input name="name" required className="field-input" /></FormField>
            <FormField label={t("fieldPhone")}><input name="phone" required type="tel" dir="ltr" className="field-input" /></FormField>
            <FormField label={t("fieldOrderRef")}><input name="reference" className="field-input" /></FormField>
            <FormField label={t("fieldIssue")}>
              <select name="issue" required defaultValue="" className="field-input">
                <option value="" disabled>{t("choose")}</option>
                {issueTypes.map((issue) => <option key={issue.value} value={issue.value}>{t(issue.k)}</option>)}
              </select>
            </FormField>
            <FormField label={t("fieldAddress")}><input name="address" className="field-input" /></FormField>
            <FormField label={t("fieldDate")}><input name="date" type="date" className="field-input" /></FormField>
            <div className="sm:col-span-2">
              <FormField label={t("fieldDetails")}><textarea name="details" required rows={3} className="field-input resize-none" /></FormField>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={sending} className="btn-main w-full !py-3.5 disabled:opacity-60">
                <Send size={16} /> {sending ? t("sending") : t("submit")}
              </button>
            </div>
            <p className="text-[11px] text-ink/45 sm:col-span-2">{lang === "ar" ? "«خدمة ما بعد البيع» — التزامنا مع كل عميل" : "After-sales service — our promise to every client"}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t, postRequest, notify } = useSite();
  const [sending, setSending] = useState(false);
  const cards = [
    { icon: <Phone size={21} />, title: "callTitle", desc: "callDesc", href: company.tel, action: company.phoneDisplay },
    { icon: <MessageCircle size={21} />, title: "whatsappTitle", desc: "whatsappDesc", href: company.whatsapp, action: t("whatsappTitle") },
    { icon: <InstagramIcon width={21} height={21} />, title: "socialTitle", desc: "socialDesc", href: company.instagram, action: "@designfactory160" },
    { icon: <MapPin size={21} />, title: "addressTitle", desc: "addressDesc", href: company.map, action: "Giza, Egypt" },
  ];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const ok = await postRequest({
      kind: "contact",
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: "Website message",
      message: String(data.get("message") ?? ""),
    });
    setSending(false);
    if (ok) {
      notify(t("toastContact"));
      form.reset();
    } else notify(t("toastError"));
  }

  return (
    <section id="contact" className="bg-cream py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading badge="contactBadge" title="contactTitle" desc="contactDesc" center />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <a key={card.title} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-soft group p-6 hover:-translate-y-1 hover:border-copper/40">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cream text-copper transition group-hover:bg-copper group-hover:text-white">{card.icon}</span>
              <h3 className="mt-5 text-base font-extrabold text-ink">{t(card.title as Parameters<typeof t>[0])}</h3>
              <p className="mt-2 min-h-10 text-xs leading-6 text-ink/55">{t(card.desc as Parameters<typeof t>[0])}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-copper" dir="ltr">
                {card.action} <ArrowUpRight size={14} />
              </p>
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <form onSubmit={submit} className="card-soft grid gap-4 p-7 sm:grid-cols-2 sm:p-9">
            <div className="sm:col-span-2">
              <h3 className="text-xl font-extrabold text-ink">{t("contactFormTitle")}</h3>
            </div>
            <FormField label={t("fieldName")}><input name="name" required className="field-input" /></FormField>
            <FormField label={t("fieldPhone")}><input name="phone" required type="tel" dir="ltr" className="field-input" /></FormField>
            <div className="sm:col-span-2">
              <FormField label={t("fieldEmail")}><input name="email" type="email" className="field-input" /></FormField>
            </div>
            <div className="sm:col-span-2">
              <FormField label={t("fieldMessage")}><textarea name="message" required rows={4} className="field-input resize-none" /></FormField>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
              <button type="submit" disabled={sending} className="btn-main disabled:opacity-60">
                <Send size={16} /> {sending ? t("sending") : t("submit")}
              </button>
              <a href={company.whatsappMessage} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                <MessageCircle size={15} /> {t("whatsappTitle")}
              </a>
              <a href={company.catalog} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                <FileText size={15} /> {t("drive")}
              </a>
            </div>
          </form>

          <div className="card-soft overflow-hidden">
            <iframe src={company.map} title={t("mapTitle")} className="h-full min-h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={company.facebook} target="_blank" rel="noreferrer" className="btn-outline btn-small"><FacebookIcon width={15} height={15} /> {t("facebook")}</a>
          <a href={company.instagram} target="_blank" rel="noreferrer" className="btn-outline btn-small"><InstagramIcon width={15} height={15} /> {t("instagram")}</a>
          <a href={company.facebookVideos} target="_blank" rel="noreferrer" className="btn-outline btn-small"><Play size={15} /> {t("watchVideos")}</a>
          <a href={company.catalog} target="_blank" rel="noreferrer" className="btn-outline btn-small"><FileText size={15} /> {t("catalog")}</a>
        </div>
      </div>
    </section>
  );
}
