import { MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@mantine/core/styles.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "CreativeLab",
  description:
    "CreativeLab is a community of creative people who are passionate about technology and design."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MantineProvider>
          <div className="w-full min-h-screen relative flex flex-col inter scroll-smooth">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
