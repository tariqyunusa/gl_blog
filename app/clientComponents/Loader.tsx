"use client"
import React, {useEffect} from 'react';
import { useBlogContext } from '../lib/context/blogContext';
// import styles from '../styles/loader.module.css';


const Loader = () => {
  const {  fetchBlogs} = useBlogContext();
  useEffect(() => {
    fetchBlogs()
  },[])

  return (
    <div >
      <div>
        <div ></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;