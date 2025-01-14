"use client"
import React from "react";
import Blog from "../../adminComponents/Blog";
import styles from "../../styles/catalog.module.css";
import { useBlogContext } from "@/app/lib/context/blogContext";

const page = () => {
 const {blogs} = useBlogContext()
  return (
    <div className={styles.catalog___container}>
      <div className={styles.catalog__container}>
        <div className={styles.catalog__header}>
          <h1>Catalog</h1>
        </div>
        <div className={styles.catalog__list}>
          <div className={styles.catalog}>
            <Blog Data={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
