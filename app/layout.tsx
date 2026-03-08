import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takuma | Portfolio",
  description: "Portfolio of Takuma, Grad Student at Kyoto University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30 selection:text-blue-200`}
      >
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
