import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.core}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.sentence} ${site.descriptor} ${site.core}`,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Flatapps",
    "FlatNote",
    "FlatFile",
    "Flat Voice",
    "Markdown",
    "CSV",
    "files",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.core}`,
    description: site.sentence,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.core}`,
    description: site.sentence,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/flatapps-family-mark.svg", type: "image/svg+xml" }],
    apple: [{ url: "/flatapps-family-mark.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
