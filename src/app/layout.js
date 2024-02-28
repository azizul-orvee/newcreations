import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creations Mobile Tyre",
  description: "We are a mobile tyre fitting service provider. We provide our service in all over UK. We also provide emergency tyre fitting.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-NF8HL864" />
    </html>
  );
}
