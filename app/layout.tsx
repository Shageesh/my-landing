// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aether Dynamics | Next-Gen AI Solutions",
  description: "Modern landing page built for high performance and conversions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> {/* Required for smooth scroll */}
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navigation />
        <main className="flex-grow pt-16"> {/* Spacer for fixed nav */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}