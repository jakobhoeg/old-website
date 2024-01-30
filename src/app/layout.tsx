import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { HoverProvider } from "@/lib/hover-context";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakob Hoeg",
  description: "Portfolio",
  icons: {
    icon: "/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <HoverProvider>
       <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
       </HoverProvider>
          <Analytics />
      </body>
    </html>
  );
}
