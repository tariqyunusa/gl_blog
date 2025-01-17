"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useBlogContext } from '../lib/context/blogContext';
import styles from '../styles/loader.module.css';
import gsap from 'gsap';

const Loader = () => {
  const { fetchBlogs, isLoading } = useBlogContext();
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const animate = () => {
    const tl = gsap.timeline();
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsVisible(false); 
      },
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      animate();
    }
  }, [isLoading]);

  if (!isVisible) {
    return null; 
  }

  return (
    <div className={styles.loader__container} ref={loaderRef}>
      <div className={styles.loader__container_text}>
        <span><h1 data-animation = 'header'>G</h1></span>
        <span><h1 data-animation = 'header'>L</h1></span>
      </div>
    </div>
  );
};

export default Loader;