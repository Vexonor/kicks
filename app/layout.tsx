import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "KICKS",
  description: "E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} bg-Gray`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
