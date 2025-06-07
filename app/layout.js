"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/ui/Footer";
import { usePathname } from "next/navigation";
import { WelcomeModal } from "@/components/ui/WelcomeModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbarFooter = pathname === "/auth/login" || pathname === "/auth/register";

  return (
    <html lang="id" className="light">
      <head>
        <title>ThreadCycle | Platform Beli dan Jual Pakaian Bekas</title>
        <meta name="description" content="ThreadCycle adalah platform untuk membeli dan menjual pakaian bekas dengan harga yang terjangkau." />
        <link rel="icon" href="/img/logo.svg" />
      </head>

      <body className={`${inter.variable} antialiased bg-black`}>
        <ThemeProvider>
          {!hideNavbarFooter && <Navbar />}
          <div>
            <WelcomeModal />
          </div>
          <main>{children}</main>
          {!hideNavbarFooter && <Footer />}
        </ThemeProvider>
      </body>
      
    </html>
  );
}
