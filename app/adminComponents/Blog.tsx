import React from "react";
import styles from "../styles/BlogAdmin.module.css";
import { FiTrash2 } from "react-icons/fi";

export interface Blog {
  id: number;
  Title: string;
  Description: string;
}

interface BlogProps {
  Data: Blog[];
}

const Blog = ({ Data }: BlogProps) => {
  return (
    <>
      {Data && Data.length > 0 ? (
        Data.map((blog, idx) => (
          <div key={idx} className={styles.blog__list_admin}>
            <div className={styles.blog__list_admin_info}>
              <h1 className={styles.blog__list_admin_info_title}>
                {blog.Title ? blog.Title : "No Title"}
              </h1>
              <p className={styles.blog__list_admin_info_desc}>
                {blog.Description ? blog.Description : "No Description"}
              </p>
            </div>
            <div className={styles.blog__list_admin_action}>
              <FiTrash2 />
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </>
  );
};

export default Blog;
