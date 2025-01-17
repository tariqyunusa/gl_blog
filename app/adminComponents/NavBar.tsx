"use client"
import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Inspiration } from 'next/font/google'
import DropDown from './DropDown'
import { usePathname } from 'next/navigation'

const inspiration = Inspiration({subsets: ["latin"], weight: "400"})


const NavBar = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.admin__navbar } style={{justifyContent: pathname.startsWith('/admin') ? 'space-between' : 'center'}}>
        <div className={styles.admin__navbar_filler} style={{ display: pathname.startsWith('/admin') ? 'block' : 'none' }}/>
        <div className={styles.admin__navbar_logo}>
            <h1 className={`${inspiration.className} ${styles.NavBar__logo}`} data-animation = 'header'>GL</h1>
        </div>
        {pathname.startsWith('/admin') && (
          <DropDown />
        )}
      
    </nav>
  )
}

export default NavBar
