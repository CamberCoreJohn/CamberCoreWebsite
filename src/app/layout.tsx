import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Camber & Core Systems | Secure Local Intelligence",
  description:
    "Camber & Core Systems builds geospatial, LiDAR, and custom software solutions for local governments across British Columbia. NG9-1-1 readiness, GIS consulting, and data automation.",
  keywords: [
    "GIS",
    "LiDAR",
    "NG9-1-1",
    "geospatial",
    "Victoria BC",
    "local government",
    "NENA",
    "ArcGIS",
  ],
  openGraph: {
    title: "Camber & Core Systems | Secure Local Intelligence",
    description:
      "Geospatial solutions engineered for the public sector.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
