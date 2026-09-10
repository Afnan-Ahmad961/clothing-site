import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "ZaamGrip Industries | Global Workwear, Sportswear, Gloves & Apparel Manufacturer",
  description:
    "ZaamGrip Industries is a certified global manufacturer of workwear, sportswear, protective gloves and fashion apparel, offering OEM, private-label and customized manufacturing solutions for clients worldwide.",
  keywords: [
    "Workwear Manufacturer",
    "Sportswear Manufacturer",
    "Gloves Manufacturer",
    "Apparel Manufacturer",
    "Protective Gloves Manufacturer",
    "Custom Workwear Manufacturer",
    "Custom Sportswear Manufacturer",
    "Fashion Apparel Manufacturer",
    "OEM Clothing Manufacturer",
    "Private Label Manufacturer",
    "Industrial Gloves Manufacturer",
    "Global Apparel Manufacturer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
