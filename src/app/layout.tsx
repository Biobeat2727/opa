import type { Metadata, Viewport } from "next";
import { Anton, Oswald, Figtree } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OPA! Greek Food — Authentic Gyros Food Truck in Ponderay, ID",
  description:
    "Authentic gyros, fresh and made to order. Find the OPA! Greek Food truck in the Ponderay / Sandpoint area, see the menu, and order online to skip the line.",
  openGraph: {
    title: "OPA! Greek Food",
    description: "Authentic gyros · fresh · made to order. Ponderay, Idaho.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#18130c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
