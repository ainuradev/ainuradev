import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const editorialSerif = Playfair_Display({
  variable: "--font-editorial-serif",
  subsets: ["latin"],
});

const editorialSans = Source_Sans_3({
  variable: "--font-editorial-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AINURA DEV | Scalable Digital Products",
  description:
    "AINURA DEV is a web developer and full-stack engineer building scalable, performance-driven digital products with clean architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${editorialSerif.variable} ${editorialSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
