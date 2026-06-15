import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ParticleBackground from "@/components/canvas/ParticleBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manas Gurde | Full Stack & AI Developer",
  description: "Portfolio of Manas Gurde - Full Stack Developer specializing in AI, SaaS, and Intelligent Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ParticleBackground />
        <main className="relative z-10 w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
