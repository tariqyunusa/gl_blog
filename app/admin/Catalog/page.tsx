"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../../adminComponents/Blog";
import styles from "../../styles/catalog.module.css";

const page = () => {
  const [data, setData] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setData(response.data.blogs);
    console.log(response.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className={styles.catalog___container}>
      <div className={styles.catalog__container}>
        <div className={styles.catalog__header}>
          <h1>Catalog</h1>
        </div>
        <div className={styles.catalog__list}>
          <div className={styles.catalog}>
            <Blog Data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
