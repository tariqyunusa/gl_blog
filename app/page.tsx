"use client"
import { useEffect, useState } from "react";
import NavBar from "./adminComponents/NavBar";
import axios from "axios";
import Image from "next/image";



export default function Home() {
  interface Blog {
    Title: String ;
    Category: String;
    Description: String;
    Article: String;
    image: String ;

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
    {data && data.length > 0 ? <Image src={data[0].image} alt={data[0].Title} width={1000} height={600} />: "no image"}
    </section>
   </div>
    </>
  );
}
