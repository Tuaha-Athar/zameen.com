import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Usman Property and Builders | Lahore Property Consultants",
    template: "%s | Usman Property and Builders",
  },
  description:
    "Usman Property and Builders helps with property buying, selling, investment, and location guidance in Lahore, near Luna Phase 6.",
  keywords: [
    "Usman Property and Builders",
    "property dealer Lahore",
    "property consultant Lahore",
    "real estate Lahore",
    "Luna Phase 6 Lahore",
    "house for sale Lahore",
    "plot for sale Lahore",
    "investment property Lahore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Usman Property and Builders | Lahore Property Consultants",
    description:
      "Property buying, selling, and investment guidance in Lahore with a focus on Luna Phase 6.",
    siteName: "Usman Property and Builders",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Property and Builders | Lahore Property Consultants",
    description:
      "Property buying, selling, and investment guidance in Lahore with a focus on Luna Phase 6.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
