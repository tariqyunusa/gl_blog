import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./clientComponents/Footer";
import { BlogProvider } from "./lib/context/blogContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GL",
  description: "A blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BlogProvider>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </BlogProvider>
    </html>
  );
}
