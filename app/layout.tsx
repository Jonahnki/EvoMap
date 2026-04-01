// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EvoMap",
  description: "Interactive pathogen evolution and outbreak analysis platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-100 font-sans min-h-screen">
        {/* Header / Navigation */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">EvoMap</h1>
            <nav className="space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/map" className="text-gray-700 hover:text-blue-600">
                Map
              </Link>
              <Link href="/test" className="text-gray-700 hover:text-blue-600">
                Test
              </Link>
              <Link
                href="/phylogenetic"
                className="text-gray-700 hover:text-blue-600"
              >
                Phylogenetic
              </Link>
              <Link
                href="/search"
                className="text-gray-700 hover:text-blue-600"
              >
                Search
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-inner mt-12">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EvoMap. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
