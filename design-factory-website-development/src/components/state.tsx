"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Check, X } from "lucide-react";
import type { Product } from "@/db/schema";
import type { Project } from "@/lib/content";
import { dictionary, type DictKey, type Lang } from "@/lib/i18n";

export type Mode = "portfolio" | "shop";
export type CartLine = { product: Product; qty: number };

type RequestPayload = Record<string, unknown>;

type SiteState = {
  lang: Lang;
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  t: (key: DictKey) => string;
  mode: Mode;
  setMode: (mode: Mode) => void;
  products: Product[];
  cart: CartLine[];
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product) => void;
  setQty: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  lightbox: Project | null;
  setLightbox: (project: Project | null) => void;
  notify: (message: string) => void;
  postRequest: (payload: RequestPayload) => Promise<boolean>;
};

const SiteContext = createContext<SiteState | null>(null);

export function useSite(): SiteState {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}

export function SiteProvider({ children, products }: { children: ReactNode; products: Product[] }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [mode, setModeState] = useState<Mode>("portfolio");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("df-lang");
    if (stored === "en" || stored === "ar") {
      setLangState(stored);
      document.documentElement.lang = stored;
      document.documentElement.dir = stored === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("df-lang", next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    setCartOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const t = useCallback((key: DictKey) => dictionary[lang][key], [lang]);

  const notify = useCallback((message: string) => setToast(message), []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback(
    (product: Product) => {
      setCart((current) => {
        const line = current.find((item) => item.product.id === product.id);
        if (line) {
          return current.map((item) =>
            item.product.id === product.id && item.qty < product.stock
              ? { ...item, qty: item.qty + 1 }
              : item,
          );
        }
        return [...current, { product, qty: 1 }];
      });
      notify(dictionary[lang].toastAdded);
    },
    [lang, notify],
  );

  const setQty = useCallback((id: number, qty: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === id ? { ...item, qty: Math.max(0, Math.min(qty, item.product.stock)) } : item,
        )
        .filter((item) => item.qty > 0),
    );
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((current) => current.filter((item) => item.product.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const postRequest = useCallback(async (payload: RequestPayload) => {
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return response.ok;
    } catch {
      return false;
    }
  }, []);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty * item.product.price, 0),
    [cart],
  );

  const value: SiteState = {
    lang,
    isRTL: lang === "ar",
    setLang,
    t,
    mode,
    setMode,
    products,
    cart,
    cartCount,
    cartTotal,
    cartOpen,
    setCartOpen,
    addToCart,
    setQty,
    removeFromCart,
    clearCart,
    lightbox,
    setLightbox,
    notify,
    postRequest,
  };

  return (
    <SiteContext.Provider value={value}>
      {children}
      {toast && (
        <div className="fade-in fixed bottom-6 left-1/2 z-[120] flex max-w-[92vw] -translate-x-1/2 items-center gap-3 rounded-2xl bg-ink px-5 py-3.5 text-sm font-bold text-white shadow-2xl">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
            <Check size={16} />
          </span>
          <span>{toast}</span>
          <button onClick={() => setToast(null)} aria-label="close" className="ms-2 opacity-60 hover:opacity-100">
            <X size={16} />
          </button>
        </div>
      )}
    </SiteContext.Provider>
  );
}
