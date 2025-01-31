"use client"
import { useBlogContext } from '@/app/lib/context/blogContext';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/BlogPage.module.css'
import NavBar from '@/app/adminComponents/NavBar';


interface PageProps {
  params: Promise<{ Title: string }>;
}

const Page = ({ params }: PageProps) => {
  interface BlogData {
    Title: string;
    Description: string;
    Article: string;
    image: string;
  }

  const [data, setData] = useState<BlogData | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const { blogs } = useBlogContext();
   

  useEffect(() => {
    params.then((resolvedParams) => {
      const decodedTitle = decodeURIComponent(resolvedParams.Title).trim().toLowerCase();
      setTitle(decodedTitle);
    });
  }, [params]);

  useEffect(() => {
    if (title) {
      const fetchBlogData = () => {
        for (let i = 0; i < blogs.length; i++) {
          console.log('Comparing:', title, 'with', blogs[i].Title.trim().toLowerCase());
          if (title === blogs[i].Title.trim().toLowerCase()) {
            setData(blogs[i]);
            break;
          }
        }
      };
      fetchBlogData();
    }
  }, [title, blogs]);

  return (
    <div>
      <NavBar />
      {data && (
        <section className={styles.blog__page_section}>
        <div className={styles.blog__page_article}>
          <div className={styles.blog__page_article_img}>
            <Image src={data.image} fill alt={data.Title} data-animation = 'header'/>
          </div>
          <div className={styles.blog__page_article_piece}>
            <div><h1 data-animation = 'header'>{data.Title}</h1></div>
            <div><p data-animation = 'paragraph'>{data.Description}</p></div>
            <div><p data-animation = 'paragraph'>{data.Article}</p></div>
          </div>
        </div>
        </section>
      )}
    </div>
  );
};

export default Page;