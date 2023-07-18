import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Tienda de muebles en Bizkaia - Muebles Alonso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
