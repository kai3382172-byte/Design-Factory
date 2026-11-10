import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Factory | Wood & Design — مطابخ وأثاث مخصص",
  description:
    "Design Factory — Custom interior & furniture solutions in Egypt. Kitchens, dressing rooms, bespoke furniture, shutters, aluminium & glass solutions, with after-sales care.",
  icons: { icon: "/images/design-factory-logo.jpg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
