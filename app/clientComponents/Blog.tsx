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
    const slicedData = data.slice(0, 6)
    return (
       <>
            {slicedData.map((blog, index) => (
                <div key={index} className={styles.blog__client}>
                    <div className={styles.blog__client_img}>
                        <Image src={`http://localhost:3000${blog.image}`} alt={blog.Title} width={427} height={283} />
                    </div>
                    <div className={styles.blog__client_info}>
                        <h3>{blog.Title}</h3>
                        <p>{blog.Description}</p>
                    </div>

                </div>
            ))}
    </>
    )
}
export default Blog