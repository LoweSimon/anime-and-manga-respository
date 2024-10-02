import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

import "./assets/main.min.css"

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
      <body>
        <NavBar />
            {children}
      </body>
    </html>
  );
}
