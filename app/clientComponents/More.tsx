import React from 'react'
import Image from 'next/image'
import styles from '../styles/more.module.css'

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
            <div key={idx} className={`${styles.more__pick}`}>
              <div className={styles.more__pick_img}>
                <Image src={`http://localhost:3000${pick.image}`} alt={pick.Title}  fill />
              </div>
              <div className={styles.more__pick_text}>
                <h3>{pick.Title}</h3>
                <p>{pick.Description}</p>
              </div>
            </div>
          ) : null
        ))
      )}
    </div>
  )
}

export default More;