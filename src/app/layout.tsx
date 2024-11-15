import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
 

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rusith Tharindu Thushan | Portfolio",
  description: "This is my personal portfolio website. I'm a Frontend Developer and a Software Engineering undergraduate at the University of Plymouth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-3BCCD8Q939" />
    </html>
  );
}
