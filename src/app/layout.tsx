import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CozySpace — เขียนบทความ แบ่งปันแรงบันดาลใจ",
    description:
        "CozySpace คือพื้นที่อบอุ่นสำหรับนักเขียนและนักอ่าน ที่ให้คุณแบ่งปันเรื่องราว สร้างแรงบันดาลใจ และค้นพบความคิดใหม่ ๆ",
    keywords: ["บล็อก", "เขียนบทความ", "นักเขียน", "แรงบันดาลใจ", "มินิมอล"],
    openGraph: {
        title: "CozySpace — แพลตฟอร์มสำหรับนักเขียนและนักอ่าน",
        description:
            "พื้นที่เรียบง่ายสำหรับการเขียนและแบ่งปันบทความในบรรยากาศอบอุ่น",
        url: "https://yourdomain.com",
        siteName: "CozySpace",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CozySpace Landing Page",
            },
        ],
        locale: "th_TH",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
