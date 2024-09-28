import { ThemeProvider } from "../context/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://honeycomb.tech",
  title: {
    default: "Honeycomb.ai",
    template: "",
  },
  description: "",
  keywords: ["honeycomb", "learn", "roadmaps", "college planning", ""],
  twitter: {
    card: "summary_large_image",
    site: "@honeycomb",
    creator: "@honeycomb",
    images: "",
    title: {
      default: "",
      template: "",
    },
    description: "Honeycomb",
  },
  openGraph: {
    url: "https://honeycomb.tech/",
    type: "website",
    locale: "en_US",
    siteName: "Honeycomb",
    title: {
      default: "",
      template: "",
    },
    description: "",
    images: [
      {
        url: "",
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black text-white`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
