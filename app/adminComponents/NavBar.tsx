import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Inspiration } from 'next/font/google'
import DropDown from './DropDown'

const inspiration = Inspiration({subsets: ["latin"], weight: "400"})


const NavBar = () => {
  return (
    <nav className={styles.admin__navbar}>
        <div className={styles.admin__navbar_filler} />
        <div className={styles.admin__navbar_logo}>
            <h1 className={`${inspiration.className} ${styles.NavBar__logo}`}>GL</h1>
        </div>
        <DropDown />
      
    </nav>
  )
}

export default NavBar
