import React, {useContext, createContext, useState, ReactNode } from "react"
import axios from "axios"


const BlogContext = createContext<{ blogs: any[]; fetchBlogs: () => Promise<void> }>({ blogs: [], fetchBlogs: async () => {} })

export const BlogProvider = ({children}: {children: ReactNode}) => {
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        try{
            const response = await axios.get('../../api/blog')
            setBlogs(response.data.blogs)
            console.log("fetched blogs!!!")
        }catch(error){
            throw new Error(`there was an error fetching blogs: ${error}`)
        }
    }
    return(
        <BlogContext.Provider value={{ blogs, fetchBlogs }}>
            {children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => {
    const context = useContext(BlogContext)
    if(!context){
        throw new Error('useBlogContext must be used within a BlogProvider')
    }
    return context
}
