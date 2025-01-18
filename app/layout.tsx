"use client"
import './globals.css';
import { BlogProvider } from './lib/context/blogContext';
import Loader from './clientComponents/Loader'





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="en">
      <body>
        <BlogProvider>
          <Loader />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}