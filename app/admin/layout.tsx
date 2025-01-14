"use client";
import NavBar from "../adminComponents/NavBar";
import { Inter } from "next/font/google";
import { BlogProvider, useBlogContext } from "../lib/context/blogContext";
import Loader from "../clientComponents/Loader";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Layout({ children }: any) {
  return (
    <div className={inter.className}>
      <BlogProvider>
        <ContentWrapper>
          <NavBar />
          {children}
        </ContentWrapper>
      </BlogProvider>
    </div>
  );
}
function ContentWrapper({ children }: { children: React.ReactNode }) {
 
  return (
    <>
      <Loader />
      {children}
    </>
  );
}
