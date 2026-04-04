import type { ReactNode } from "react";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css"; // ✅ THIS WAS MISSING

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}