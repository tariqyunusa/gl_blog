import Link from 'next/link';
import styles from '../styles/Blog.module.css'
import Image from 'next/image'

interface BlogData {
    Title: string;
    Category: string;
    Description: string;
    Article: string;
    image: string;
}

interface BlogProps {
    data: BlogData[]
}

const Blog = ({data}: BlogProps) => {
 
     
    return (
       <>
            {data ? data.map((blog, index) => (
                <Link href={`/Blogs/${blog.Title}`} key={index} className={styles.blog__client}>
                    <div className={styles.blog__client_img}>
                        <Image src={`http://localhost:3000${blog.image}`} alt={blog.Title}  fill data-animation = 'header'/>
                    </div>
                    <div className={styles.blog__client_info}>
                        <h3 className={styles.blog__client_info_h3} data-animation = 'header'>{blog.Title}</h3>
                        <p className={styles.blog__client_info_p} data-animation = 'paragraph'>{blog.Description}</p>
                    </div>
                </Link>
            )) : ""}
    </>
    )
}
export default Blog
