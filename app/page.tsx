"use client"
import { useEffect, useState } from "react";
import NavBar from "./adminComponents/NavBar";
import axios from "axios";
import Image from "next/image";
import Blog from "./clientComponents/Blog";
import styles from './page.module.css'

export default function Home() {
  interface BlogData {
    Title: string;
    Category: string;
    Description: string;
    Article: string;
    image: string;
  }

  const [data, setData] = useState<BlogData[]>([])

  
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/blog')
      setData(response.data.blogs)
      // console.log(response.data.blogs)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  const slicedData = data.length > 0 ? data.slice(0, 6) : []

  return (
    <>
      <NavBar />
      <div>
        <section className={styles.client__section_first}>
         <Blog data={slicedData} />
          
        </section>
      </div>
    </>
  );
}