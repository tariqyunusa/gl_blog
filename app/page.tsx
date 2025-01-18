"use client"

import NavBar from "./adminComponents/NavBar";

import Blog from "./clientComponents/Blog";
import styles from './page.module.css'
import Featured from "./clientComponents/Featured";
import More from "./clientComponents/More";
import { useBlogContext } from "./lib/context/blogContext";


export default function Home() {
  interface BlogData {
    Title: string;
    Category: string;
    Description: string;
    Article: string;
    image: string;
  }

  const {blogs: data} = useBlogContext()
  const featured = data[Math.floor(Math.random() * data.length)]
  const slicedData = data.slice(6, 12)
  const pickMore = (): BlogData[] => {
    if(!data) return [];
    const picked: BlogData[] = []
    for (let i = 0; i < 4; i++) {
      const randomPicks = Math.floor(Math.random() * data.length)
      picked.push(data[randomPicks])
    }
    return picked
  }
  pickMore()
   
  

  return (
    <>
      <NavBar />
      <div className={styles.body__client}>
        <section className={styles.client__section_first}>
         <Blog data={slicedData} /> 
        </section>
        {featured && <Featured data={featured} />}
        <section className={styles.more__picks_section}>
          <div className={styles.more__picks}>
            <h2 data-animation = 'header'>More Picks For You</h2>
           <More picks={pickMore() || []}/>
          </div>
        </section>
      </div>
    </>
  );
}