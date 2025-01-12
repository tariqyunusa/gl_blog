import React, { JSX } from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'


interface FeaturedProps {
  data: {
    image: string;
    title: string;
    description: string
  };
}

const Featured = ({data}: any): JSX.Element => {
    console.log("featured data",data)
  return (
    <section className={styles.featured__wrapper}>
      <Image fill src={data.image} alt={data.Title}/>
      <div className={styles.featured__content}>
        <div className={styles.featured__header}>
          <h2>Featured</h2>
        </div>
        <div className={styles.featured__text}>
        <h1>{data.Title}</h1>
        <p>{data.Description}</p>
        <button>Read More</button>
        </div>
        <div className={styles.featured__redundant}></div>
      </div>
    </section>
  )
}

export default Featured
