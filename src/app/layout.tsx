import type { ReactNode } from "react";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css"; // ✅ THIS WAS MISSING
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}