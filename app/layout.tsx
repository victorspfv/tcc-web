import type {Metadata} from "next";
import {Geist, Geist_Mono, Pacifico} from "next/font/google";
import "./globals.css";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});



export const metadata: Metadata = {
  title: "The Closet Clique",
  description: "renting and reselling outfits within your high school or college community. Each verified school network, aka your Clique, is a private space where girls can post items from their own closets to rent or resell, earn cash, and browse looks from friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased bg-background min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
