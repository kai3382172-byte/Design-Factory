"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  FileText,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import type { Product } from "@/db/schema";
import { company, services } from "@/lib/content";
import { pick, type DictKey } from "@/lib/i18n";
import { SiteProvider, useSite } from "./state";
import { Glyph, Logo, SectionHeading, formatPrice } from "./ui";
import {
  AboutSection,
  BookingSection,
  CareSection,
  ContactSection,
  MediaSection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  ShopTeaser,
  TrustStrip,
} from "./Sections";
import ShopSection from "./Shop";

export default function SiteApp({ products }: { products: Product[] }) {
  return (
    <SiteProvider products={products}>
      <SiteShell />
    </SiteProvider>
  );
}

function SiteShell() {
  const { mode } = useSite();
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        {mode === "portfolio" ? <PortfolioHome /> : <ShopHome />}
      </main>
      <Footer />
      <FloatingActions />
      <CartDrawer />
      <ProjectLightbox />
    </div>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const { t, lang, setLang, mode, setMode, cartCount, setCartOpen } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav: { id: string; label: DictKey }[] =
    mode === "portfolio"
      ? [
          { id: "home", label: "home" },
          { id: "about", label: "about" },
          { id: "services", label: "services" },
          { id: "projects", label: "projects" },
          { id: "shop-teaser", label: "shop" },
          { id: "care", label: "care" },
          { id: "contact", label: "contact" },
        ]
      : [
          { id: "shop-home", label: "home" },
          { id: "shop-products", label: "shop" },
          { id: "custom", label: "services" },
          { id: "care", label: "care" },
          { id: "contact", label: "contact" },
        ];

  return (
    <>
      <div className="hidden bg-ink text-white/80 lg:block">
        <div className="container-x flex h-10 items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin size={13} className="text-[#e0a45f]" /> {t("location")}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={13} className="text-[#e0a45f]" /> {t("hours")}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={company.tel} className="inline-flex items-center gap-2 hover:text-white">
              <Phone size={13} className="text-[#e0a45f]" /> <span dir="ltr">{company.phoneDisplay}</span>
            </a>
            <a href={company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon width={15} height={15} />
            </a>
            <a href={company.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white">
              <InstagramIcon width={15} height={15} />
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-xl">
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <button onClick={() => scrollToId(mode === "portfolio" ? "home" : "shop-home")} className="shrink-0" aria-label="Design Factory">
            <Logo height={62} />
          </button>

          <nav className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-2 text-[13px] font-bold text-ink/75 transition hover:bg-sand hover:text-copper"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-ink/15 bg-white p-1 sm:flex">
              <button
                onClick={() => setLang("ar")}
                className={`rounded-full px-3 py-1 text-xs font-extrabold transition ${lang === "ar" ? "bg-ink text-white" : "text-ink/60 hover:text-ink"}`}
              >
                ع
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-extrabold transition ${lang === "en" ? "bg-ink text-white" : "text-ink/60 hover:text-ink"}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setCartOpen(true)}
              aria-label="cart"
              className="relative grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-copper hover:text-copper"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -end-1 grid h-5 min-w-5 place-items-center rounded-full bg-copper px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMode(mode === "portfolio" ? "shop" : "portfolio")}
              className="btn-main btn-small hidden md:inline-flex"
            >
              {mode === "portfolio" ? <ShoppingBag size={15} /> : <ArrowRight size={15} className="rtl:rotate-180" />}
              <span className="hidden lg:inline">{t(mode === "portfolio" ? "switchShop" : "switchPortfolio")}</span>
            </button>

            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink xl:hidden"
              aria-label={t("menu")}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="fade-in border-t border-ink/10 bg-cream px-5 py-4 xl:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-bold text-ink/80 hover:bg-sand hover:text-copper"
                >
                  {t(item.label)}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2 border-t border-ink/10 pt-3">
                <button onClick={() => setLang("ar")} className={`btn-outline btn-small ${lang === "ar" ? "!bg-ink !text-white" : ""}`}>
                  العربية
                </button>
                <button onClick={() => setLang("en")} className={`btn-outline btn-small ${lang === "en" ? "!bg-ink !text-white" : ""}`}>
                  English
                </button>
                <button onClick={() => { setMode(mode === "portfolio" ? "shop" : "portfolio"); setMenuOpen(false); }} className="btn-main btn-small flex-1">
                  {t(mode === "portfolio" ? "switchShop" : "switchPortfolio")}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Hero({ shop = false }: { shop?: boolean }) {
  const { t, setMode } = useSite();
  const stats = [
    { n: "+250", k: "statProjects" as const },
    { n: "+12", k: "statYears" as const },
    { n: "5", k: "statWarranty" as const },
    { n: "24/7", k: "statSupport" as const },
  ];

  return (
    <section id={shop ? "shop-home" : "home"} className="relative isolate flex min-h-[620px] items-center overflow-hidden lg:min-h-[88vh]">
      <img
        src={shop ? "/images/showroom.jpg" : "/images/hero-kitchen.jpg"}
        alt={shop ? "Design Factory showroom" : "Design Factory luxury walnut kitchen"}
        className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1e110a]/70 via-transparent to-[#1e110a]/30" />

      <div className="container-x relative z-10 py-20 lg:py-24">
        <div className="max-w-3xl">
          <div className="fade-in inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-extrabold tracking-[0.18em] text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#e0a45f]" />
            {t(shop ? "shopHeroBadge" : "heroBadge")}
          </div>

          <h1 className="reveal mt-7 text-4xl leading-[1.25] font-extrabold text-white sm:text-5xl lg:text-[4.1rem]">
            {shop ? (
              t("shopHeroTitle")
            ) : (
              <>
                {t("heroLine1")}
                <br />
                <span className="text-[#e9b57d]">{t("heroLine2")}</span>
              </>
            )}
          </h1>

          <p className="reveal mt-6 max-w-2xl text-base leading-[1.9] text-white/80 sm:text-lg">
            {t(shop ? "shopHeroDesc" : "heroDesc")}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3">
            {shop ? (
              <>
                <button onClick={() => scrollToId("shop-products")} className="btn-main !px-7 !py-3.5">
                  {t("shopBrowse")} <ArrowRight size={17} className="rtl:rotate-180" />
                </button>
                <button onClick={() => setMode("portfolio")} className="btn-light !py-3.5">
                  {t("backPortfolio")}
                </button>
              </>
            ) : (
              <>
                <button onClick={() => scrollToId("projects")} className="btn-main !px-7 !py-3.5">
                  {t("heroExplore")} <ArrowRight size={17} className="rtl:rotate-180" />
                </button>
                <button onClick={() => scrollToId("booking")} className="btn-light !py-3.5">
                  {t("heroBook")}
                </button>
                <button onClick={() => setMode("shop")} className="btn-light !py-3.5">
                  <ShoppingBag size={17} /> {t("heroShop")}
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.k} className="bg-[#29180f]/35 px-5 py-5 text-center backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-[#e9b57d] lg:text-3xl" dir="ltr">
                {stat.n}
              </div>
              <div className="mt-1 text-[11px] leading-5 font-semibold text-white/75 sm:text-xs">{t(stat.k)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex">
        <span className="text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}

function BrandBand() {
  const { t } = useSite();
  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white px-6 py-9 shadow-sm sm:px-10">
          <div className="soft-grid absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-start">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <Logo height={116} />
              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-copper" dir="ltr">{t("logoCaption")}</p>
                <p className="mt-2 text-sm font-bold text-ink/65">{t("logoCaptionSub")}</p>
                <p className="mt-1 text-xs text-ink/45">{t("heroBadge")}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <a href={company.catalog} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                <FileText size={15} /> {t("catalog")}
              </a>
              <a href={company.facebook} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                <FacebookIcon width={15} height={15} /> {t("facebook")}
              </a>
              <a href={company.instagram} target="_blank" rel="noreferrer" className="btn-outline btn-small">
                <InstagramIcon width={15} height={15} /> {t("instagram")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioHome() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BrandBand />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MediaSection />
      <ProcessSection />
      <ShopTeaser />
      <BookingSection />
      <CareSection />
      <ContactSection />
    </>
  );
}

function ShopHome() {
  const { t, lang, setMode } = useSite();
  return (
    <>
      <Hero shop />
      <TrustStrip />
      <BrandBand />
      <ShopSection />
      <section id="custom" className="relative overflow-hidden py-20 sm:py-24">
        <div className="soft-grid absolute inset-0 opacity-60" />
        <div className="container-x relative">
          <div className="card-soft flex flex-col items-start justify-between gap-7 overflow-hidden bg-gradient-to-br from-white to-sand p-8 sm:flex-row sm:items-center sm:p-12">
            <div className="max-w-2xl">
              <span className="eyebrow">BESPOKE / حسب الطلب</span>
              <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">{t("customNote")}</h2>
              <p className="mt-3 text-sm leading-8 text-ink/65">{t("customNoteDesc")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => scrollToId("booking")} className="btn-ink">
                  {t("requestCustom")} <ArrowUpRight size={16} />
                </button>
                <button onClick={() => setMode("portfolio")} className="btn-outline">
                  {t("backPortfolio")}
                </button>
              </div>
            </div>
            <div className="hidden w-56 shrink-0 text-6xl font-extrabold text-copper/15 lg:block" dir="ltr">
              DF
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-x grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading badge="servicesBadge" title="servicesTitle" desc="servicesDesc" />
            <a href={company.catalog} target="_blank" rel="noreferrer" className="btn-ink mt-7">
              <FileText size={16} /> {t("catalog")}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="rounded-2xl border border-ink/10 bg-cream p-4">
                <Glyph name={service.icon} size={20} className="text-copper" />
                <p className="mt-3 text-xs font-bold text-ink">{pick(service.title, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CareSection />
      <ContactSection />
    </>
  );
}

function Footer() {
  const { t, lang, mode, setMode } = useSite();
  const year = new Date().getFullYear();
  const links: { id: string; label: DictKey }[] = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "services", label: "services" },
    { id: "projects", label: "projects" },
    { id: "booking", label: "bookNow" },
    { id: "care", label: "care" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="wood-pattern absolute inset-0 opacity-60" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-2xl bg-white p-2 shadow-xl">
              <Logo height={78} boxed />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-8 text-white/65">{t("footerAbout")}</p>
            <div className="mt-6 flex gap-3">
              <a href={company.facebook} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-copper hover:bg-copper hover:text-white" aria-label="Facebook">
                <FacebookIcon width={17} height={17} />
              </a>
              <a href={company.instagram} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-copper hover:bg-copper hover:text-white" aria-label="Instagram">
                <InstagramIcon width={17} height={17} />
              </a>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" aria-label="WhatsApp">
                <MessageCircle size={17} />
              </a>
              <a href={company.catalog} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition hover:border-copper hover:bg-copper hover:text-white" aria-label="Catalogue">
                <FileText size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide text-[#e9b57d]">{t("quickLinks")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (mode === "shop") setMode("portfolio");
                      window.setTimeout(() => scrollToId(link.id), 80);
                    }}
                    className="transition hover:text-white"
                  >
                    {t(link.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide text-[#e9b57d]">{t("ourServices")}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>{pick(service.title, lang)}</li>
              ))}
            </ul>
            <a href={company.catalog} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#e9b57d] hover:text-white">
              <FileText size={14} /> {t("drive")}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-extrabold tracking-wide text-[#e9b57d]">{t("contact")}</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-copper" /> {t("addressDesc")}
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-copper" />
                <a href={company.tel} dir="ltr" className="hover:text-white">{company.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="mt-1 shrink-0 text-copper" />
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">{t("whatsappTitle")}</a>
              </li>
              <li className="flex items-start gap-3">
                <CalendarDays size={16} className="mt-1 shrink-0 text-copper" /> {t("hours")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Design Factory · WOOD & DESIGN. {t("rights")}</p>
          <div className="flex items-center gap-4">
            <a href="/admin" className="hover:text-white">Admin</a>
            <a href={company.facebook} target="_blank" rel="noreferrer" className="hover:text-white">{t("facebook")}</a>
            <a href={company.instagram} target="_blank" rel="noreferrer" className="hover:text-white">{t("instagram")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const { t, setCartOpen, cartCount } = useSite();
  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col items-end gap-3">
      {cartCount > 0 && (
        <button onClick={() => setCartOpen(true)} className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-xl transition hover:bg-copper">
          <ShoppingBag size={19} />
        </button>
      )}
      <a
        href={company.whatsappMessage}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={19} />
        <span className="hidden sm:inline">{t("whatsappTitle")}</span>
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("backToTop")}
        className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink shadow-lg transition hover:bg-copper hover:text-white"
      >
        <ArrowUp size={17} />
      </button>
    </div>
  );
}

function CartDrawer() {
  const {
    t, lang, cart, cartOpen, setCartOpen, cartTotal, setQty, removeFromCart, clearCart, postRequest, notify,
  } = useSite();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sending, setSending] = useState(false);

  const summary = cart
    .map((line) => `• ${lang === "ar" ? line.product.nameAr : line.product.nameEn} × ${line.qty} — ${formatPrice(line.product.price * line.qty)} ${t("currency")}`)
    .join("%0A");
  const whatsappLink = `https://wa.me/201060055554?text=${encodeURIComponent(
    `${lang === "ar" ? "مرحبًا ديزاين فاكتوري، أرغب في طلب المنتجات التالية:" : "Hello Design Factory, I would like to order:"}\n`,
  )}${summary}${encodeURIComponent(`\n${t("cartTotal")}: ${formatPrice(cartTotal)} ${t("currency")}`)}`;

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!cart.length || sending) return;
    setSending(true);
    const ok = await postRequest({
      kind: "order",
      name,
      phone,
      city: address,
      topic: "Ready-made order",
      message: `${t("cartAddress")}: ${address}`,
      total: cartTotal,
      details: JSON.stringify(
        cart.map((line) => ({ id: line.product.id, slug: line.product.slug, qty: line.qty, price: line.product.price })),
      ),
    });
    setSending(false);
    if (ok) {
      notify(t("toastOrder"));
      clearCart();
      setName("");
      setPhone("");
      setAddress("");
      setCartOpen(false);
    } else {
      notify(t("toastError"));
    }
  }

  return (
    <>
      {cartOpen && (
        <div className="fade-in fixed inset-0 z-[90] bg-ink/55 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      )}
      <aside
        className={`fixed inset-y-0 end-0 z-[95] flex w-full max-w-[430px] flex-col bg-cream shadow-2xl transition-transform duration-500 ${cartOpen ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"}`}
        aria-hidden={!cartOpen}
      >
        <div className="flex items-center justify-between border-b border-ink/10 bg-white px-6 py-5">
          <div>
            <h2 className="text-lg font-extrabold text-ink">{t("cartTitle")}</h2>
            <p className="mt-0.5 text-xs text-ink/50">DESIGN FACTORY STORE</p>
          </div>
          <button onClick={() => setCartOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-cream text-ink hover:bg-sand" aria-label={t("close")}>
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="mt-20 text-center">
              <ShoppingBag size={44} className="mx-auto text-copper/40" />
              <h3 className="mt-5 text-lg font-bold text-ink">{t("cartEmpty")}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-ink/60">{t("cartEmptyDesc")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((line) => (
                <div key={line.product.id} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-3">
                  <img src={line.product.image} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-ink">
                      {lang === "ar" ? line.product.nameAr : line.product.nameEn}
                    </p>
                    <p className="mt-1 text-xs font-bold text-copper" dir="ltr">
                      {formatPrice(line.product.price)} {t("currency")}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-ink/15 p-0.5">
                        <button onClick={() => setQty(line.product.id, line.qty - 1)} className="grid h-6 w-6 place-items-center rounded-full hover:bg-sand" aria-label="minus">
                          <Minus size={12} />
                        </button>
                        <span className="min-w-5 text-center text-xs font-bold">{line.qty}</span>
                        <button onClick={() => setQty(line.product.id, line.qty + 1)} className="grid h-6 w-6 place-items-center rounded-full hover:bg-sand" aria-label="plus">
                          <Plus size={12} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(line.product.id)} className="text-ink/40 hover:text-red-600" aria-label={t("remove")}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-ink/10 bg-white px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-ink/70">{t("cartTotal")}</span>
              <span className="text-xl font-extrabold text-copper" dir="ltr">
                {formatPrice(cartTotal)} <span className="text-sm">{t("currency")}</span>
              </span>
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-main mt-4 w-full">
              <MessageCircle size={16} /> {t("cartCheckout")}
            </a>
            <form onSubmit={submitOrder} className="mt-4 space-y-3">
              <p className="text-xs font-bold text-ink/70">{t("cartForm")}</p>
              <div className="grid grid-cols-2 gap-2">
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t("cartName")} className="field-input !py-2.5" />
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("cartPhone")} className="field-input !py-2.5" dir="ltr" />
              </div>
              <input required value={address} onChange={(e) => setAddress(e.target.value)} placeholder={t("cartAddress")} className="field-input !py-2.5" />
              <button type="submit" disabled={sending} className="btn-ink w-full disabled:opacity-60">
                {sending ? t("sending") : t("submit")}
              </button>
              <p className="text-center text-[11px] leading-5 text-ink/50">{t("cartNote")}</p>
            </form>
          </div>
        )}
      </aside>
    </>
  );
}

function ProjectLightbox() {
  const { lightbox, setLightbox, t, lang } = useSite();
  if (!lightbox) return null;
  return (
    <div className="fade-in fixed inset-0 z-[100] flex items-center justify-center bg-[#1e110a]/85 p-4 backdrop-blur-md" onClick={() => setLightbox(null)}>
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-cream shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setLightbox(null)} className="absolute top-4 end-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-lg hover:bg-copper hover:text-white" aria-label={t("close")}>
          <X size={19} />
        </button>
        <div className="grid md:grid-cols-[1.25fr_1fr]">
          <img src={lightbox.image} alt={pick(lightbox.title, lang)} className="h-64 w-full object-cover md:h-full md:min-h-[480px]" />
          <div className="flex flex-col justify-center p-7 sm:p-9">
            <span className="eyebrow">DESIGN FACTORY · {lightbox.year}</span>
            <h3 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">{pick(lightbox.title, lang)}</h3>
            <p className="mt-4 text-sm leading-8 text-ink/70">{pick(lightbox.desc, lang)}</p>
            <div className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm">
              <div className="flex items-center gap-2"><MapPin size={15} className="text-copper" /><span className="text-ink/60">{t("locationLabel")}:</span><strong>{pick(lightbox.location, lang)}</strong></div>
              <div className="flex items-center gap-2"><ShieldCheck size={15} className="text-copper" /><span className="text-ink/60">{t("areaLabel")}:</span><strong>{pick(lightbox.scope, lang)}</strong></div>
              <div className="flex items-center gap-2"><CalendarDays size={15} className="text-copper" /><span className="text-ink/60">{t("yearLabel")}:</span><strong>{lightbox.year}</strong></div>
            </div>
            <button
              onClick={() => { setLightbox(null); window.setTimeout(() => scrollToId("booking"), 120); }}
              className="btn-main mt-8"
            >
              {t("similarBook")} <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero, scrollToId };
