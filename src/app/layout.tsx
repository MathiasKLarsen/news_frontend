import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"], // Example weights (regular and bold)
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "News",
  description: "News website learn about whats going on around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${quicksand.className}`} lang="en">{children}</html>
  );
}
