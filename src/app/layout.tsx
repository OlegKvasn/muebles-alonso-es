import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { draftMode } from "next/headers";
import ExitDraftModeLink from "@/components/exitDraftModeLink";

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
        {draftMode().isEnabled && (
          <p className="draft-mode">
            Draft mode is on!{" "}
            <ExitDraftModeLink className="draft-mode-exit-link" />
          </p>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
