"use client"
import React, { useState, useEffect } from 'react'
import styles from '../styles/footer.module.css'
import { Inspiration } from 'next/font/google'


const inspiration = Inspiration({subsets: ["latin"], weight: "400"})

const Footer = () => {
  const [year, setYear] = useState('')

  useEffect(() => {
    const currentYear = new Date().getFullYear().toString()
    setYear(currentYear)
  }, [])
   

  return (
    <footer className={`${styles.footer} `}>
      <div className={styles.footer__info}>
        <h1 className={`${inspiration.className}`} data-animation = 'header'>GL</h1>
        <p data-animation = 'paragraph'>All rights reserved © {year}</p>
      </div>
      <div>
        <p data-animation = 'paragraph'>Designed and Developed by Tariq Yunusa</p>
      </div>
    </footer>
  )
}

export default Footer