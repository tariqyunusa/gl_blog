"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from "../styles/Dropdown.module.css"

const DropDown = () => {
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value) {
      router.push(value)
    }
  }

  return (
    <select className={styles.admin__dropdown} onChange={handleChange}>
      <option value="/admin" className={styles.admin__dropdown_option}>New</option>
      <option value="/admin/Catalog" className={styles.admin__dropdown_option}>Catalog</option>
    </select>
  )
}

export default DropDown