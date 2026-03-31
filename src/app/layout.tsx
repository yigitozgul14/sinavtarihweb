import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = localFont({
  src: [
    { path: "../assets/fonts/Cinzel-Regular.ttf",   weight: "400", style: "normal" },
    { path: "../assets/fonts/Cinzel-Medium.ttf",    weight: "500", style: "normal" },
    { path: "../assets/fonts/Cinzel-SemiBold.ttf",  weight: "600", style: "normal" },
    { path: "../assets/fonts/Cinzel-Bold.ttf",      weight: "700", style: "normal" },
    { path: "../assets/fonts/Cinzel-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../assets/fonts/Cinzel-Black.ttf",     weight: "900", style: "normal" },
  ],
  variable: "--font-cinzel",
});

const cinzelDecorative = localFont({
  src: [
    { path: "../assets/fonts/CinzelDecorative-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/CinzelDecorative-Bold.ttf",    weight: "700", style: "normal" },
    { path: "../assets/fonts/CinzelDecorative-Black.ttf",   weight: "900", style: "normal" },
  ],
  variable: "--font-cinzel-decorative",
});

const imFell = localFont({
  src: [
    { path: "../assets/fonts/IMFellEnglish-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/IMFellEnglish-Italic.ttf",  weight: "400", style: "italic" },
  ],
  variable: "--font-im-fell",
});

export const metadata: Metadata = {
  title: "KPSS Tarih Haritası",
  description: "Türk tarihini harita üzerinden keşfedin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${imFell.variable} antialiased bg-background`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
