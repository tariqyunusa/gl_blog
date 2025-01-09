"use client"
import { useEffect, useState } from "react";
import NavBar from "./adminComponents/NavBar";
import axios from "axios";
import Image from "next/image";



export default function Home() {
  interface Blog {
    Title: string;
  }

  const [data, setData] = useState<Blog[]>([])
  const fetchData =  async () => {
    const response = await axios.get('/api/blog')
    setData(response.data.blogs)
    console.log(response.data.blogs)
  }
  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    <NavBar />
   <div>
    <section>
    
    </section>
   </div>
    </>
  );
}
