import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "ThreadCycle",
  description: "ThreadCycle adalah platform untuk membeli dan menjual pakaian bekas dengan harga yang terjangkau.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased bg-black`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
