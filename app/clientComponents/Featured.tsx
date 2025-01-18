import React, { JSX } from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import Link from 'next/link'
import useTextReveal from '../lib/hooks/useTextReveal';


interface FeaturedProps {
  data: {
    image: string;
    title: string;
    description: string
  };
}

const Featured = ({data}: any): JSX.Element => {
   
    // console.log("featured data",data)
  return (
    <section className={styles.featured__wrapper}>
      <Image fill src={data.image} alt={data.Title}/>
      <div className={styles.featured__content}>
        <div className={styles.featured__header}>
          <h2 data-animation = 'header'>Featured</h2>
        </div>
        <div className={styles.featured__text}>
        <h1 data-animation = 'header'>{data.Title}</h1>
        <p data-animation = 'paragraph'>{data.Description}</p>
        <Link href={`/Blogs/${data.Title}`} className={styles.link__cta} data-animation = 'paragraph'>Read More</Link>
        </div>
        <div className={styles.featured__redundant}></div>
      </div>
    </section>
  )
}

export default Featured
