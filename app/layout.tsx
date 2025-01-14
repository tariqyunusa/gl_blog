"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./clientComponents/Footer";
import { BlogProvider, useBlogContext } from "./lib/context/blogContext";
import { useEffect } from "react";
import Loader from "./clientComponents/Loader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </BlogProvider>
      </body>
    </html>
  );
}

function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useBlogContext();

 

  return isLoading ? <Loader /> : <>{children}</>;
}