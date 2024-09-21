import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from './components/NavBar';

import "./assets/main.min.css"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Anime and Manga Place",
  description: "A website where you can find your favourite Anime or Manga and create watch lists and read lists",
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
        <NavBar />
            {children}
      </body>
    </html>
  );
}
