import type { Metadata } from "next";
// import { Playfair_Display } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
// });

// const themify = localFont({
//   src: "../../public/Fonts/themify.woff",
//   variable: "--font-themify",
// });

export const metadata: Metadata = {
  title: "Leospa",
  description: "A simple and elegant spa booking website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html /* className={`${themify.variable} ${playfair.variable}`}*/ lang="en">
      {children}
    </html>
  );
}
