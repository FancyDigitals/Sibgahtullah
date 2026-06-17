import type { ReactNode } from "react";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css"; // ✅ THIS WAS MISSING
import { Poppins } from "next/font/google";
import IslamicGreetingPopup from "@/components/IslamicGreetingPopup";
import { Toaster } from "react-hot-toast";
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
  <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#2D004D",
              color: "#fff",
              border: "1px solid rgba(245,166,35,.3)",
              borderRadius: "18px",
            },
          }}
        />
  <IslamicGreetingPopup />
  <Footer />
</body>
    </html>
  );
}