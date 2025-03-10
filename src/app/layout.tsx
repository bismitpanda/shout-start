import type { Metadata } from "next";
import { Fustat, Geist_Mono } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoutstart - Publish. Shout. Get Noticed.",
  description:
    "The quickest way to publish press releases, articles, books and expert content for maximum readership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fustat.variable} ${geistMono.variable} antialiased font-sans`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
