import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import LayoutClient from "@/components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBlog - Share Your Stories",
  description:
    "Discover inspiring articles, expert insights, and creative stories on NextBlog. Join our community of writers and readers exploring ideas that matter.",
  keywords: "blog, articles, writing, stories, tech, lifestyle",
  authors: [{ name: "NextBlog Team" }],
  openGraph: {
    title: "NextBlog - Share Your Stories",
    description:
      "Discover inspiring articles, expert insights, and creative stories",
    url: "https://nextblog.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
