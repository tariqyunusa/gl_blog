"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface Blog {
  id: number;
  Title: string;
  Category: string;
  Description: string;
  Article: string;
  image: string;
}

interface BlogContextProps {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
  isLoading: boolean;
  loadingProgress: number;
  fetchBlogs: () => void;
}

const BlogContext = createContext<BlogContextProps | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setLoadingProgress(0);
    try {
      const response = await axios.get('/api/blog', {
        onDownloadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const total = progressEvent.total;
            const current = progressEvent.loaded;
            const progress = Math.floor((current / total) * 100);
            console.log(`Progress: ${progress}%`);
            setLoadingProgress(progress);
          }
        },
      });
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, isLoading, loadingProgress, fetchBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};