import React from 'react'
import Image from 'next/image'
import styles from '../styles/more.module.css'
import Link from 'next/link';


interface Pick {
  image: string;
  Title: string;
  Description: string;
}

const More = ({ picks }: { picks: Pick[] }) => {
   
  return (
    <div className={styles.more__picks}>
      {picks && picks.length > 0 && (
        picks.map((pick, idx) => (
          pick && pick.image && pick.Title && pick.Description ? (
            <Link href={`/Blogs/${pick.Title}`} key={idx} className={`${styles.more__pick}`}>
              <div className={styles.more__pick_img}>
                <Image src={`${pick.image}`} alt={pick.Title}  fill data-animation = 'header'/>
              </div>
              <div className={styles.more__pick_text}>
                <h3 data-animation = 'header'>{pick.Title}</h3>
                <p data-animation = 'paragraph'>{pick.Description}</p>
              </div>
            </Link>
          ) : null
        ))
      )}
    </div>
  )
}

export default More;