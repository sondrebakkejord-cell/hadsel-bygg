import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://hadsel-bygg.no";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Hadsel Bygg og Vedlikehold — Entreprenør i Stokmarknes",
  description:
    "Hadsel Bygg og Vedlikehold AS — entreprenør og snekker i Stokmarknes. Nybygg, rehabilitering, betongarbeid, fliser og maling. Vesterålen, Nord-Nordland og Sør-Troms. Ring 91 67 05 35.",
  keywords: [
    "snekker Stokmarknes",
    "entreprenør Vesterålen",
    "byggmester Hadsel",
    "betong Stokmarknes",
    "rehabilitering Nordland",
    "tømrer Hadsel",
    "Hadsel Bygg",
    "HBV",
    "fasade Vesterålen",
    "tak Stokmarknes",
  ],
  openGraph: {
    title: "Hadsel Bygg og Vedlikehold — Stokmarknes",
    description:
      "Entreprenør og snekker i Stokmarknes. Nybygg, rehabilitering, betongarbeid og fliser i Nord-Nordland og Sør-Troms.",
    type: "website",
    locale: "nb_NO",
    url: BASE_URL,
    siteName: "Hadsel Bygg og Vedlikehold",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">{children}</body>
    </html>
  );
}
