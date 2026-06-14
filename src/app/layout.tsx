import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    locale: siteData.site.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteData.site.language}>
      <body>{children}</body>
    </html>
  );
}
