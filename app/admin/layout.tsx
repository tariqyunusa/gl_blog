"use client";
import NavBar from "../adminComponents/NavBar";
import { Inter } from "next/font/google";
import { BlogProvider, useBlogContext } from "../lib/context/blogContext";
import Loader from "../clientComponents/Loader";
import Footer from '../clientComponents/Footer'
import { useEffect } from "react";
import { textReveal } from "../lib/animations/textReveal";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Layout({ children }: any) {
  useEffect(() => {
    textReveal()
  },[])
  return (
    <div >
      <BlogProvider>
        <ContentWrapper>
          <NavBar />
          {children}
          <Footer />
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
