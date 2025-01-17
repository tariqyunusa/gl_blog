"use client"
import { Inter } from 'next/font/google';
import './globals.css';
import { BlogProvider } from './lib/context/blogContext';
import Loader from './clientComponents/Loader'
import { textReveal } from './lib/animations/textReveal';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    textReveal()
  },[])
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>
          <Loader />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}