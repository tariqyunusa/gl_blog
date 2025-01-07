"use client"
import React, {useState} from 'react'
import upload from '../../public/upload.png'
import Image from 'next/image'
import styles from '../styles/addProduct.module.css'
import axios from 'axios'


const page = () => {
  const [image, setImage] = useState<any>()
  const [data, setData] = useState({
    Title: "",
    Category: "Tech",
    Description: "",
    Article: ""
  })
  const onChangeHandler = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]:value}))
    // console.log(data);
  }
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("Title", data.Title),
    formData.append("Category", data.Category),
    formData.append("Description", data.Description),
    formData.append("Article", data.Article)
    formData.append("image", image)
    const response = await axios.post('/api/blog', formData)
    if(response.data.success) {
      setData({
      Title: '',
      Category: 'Tech',
      Description: '',
      Article: '',
      })
      setImage(null)
      console.log("added new post!!!");
    }
  }
  return (
    <div className={styles.add__product}>
     <div className={styles.form__container}>
     <div>
        <h1>Add Blog</h1>
      </div>
      <div>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input type="text" name="Title" onChange={onChangeHandler} value={data.Title} placeholder='Title' className={styles.input__form_admin} />
        <select name='Categoty' value={data.Category} onChange={onChangeHandler} className={styles.input__form_admin_select}>
          <option value="Tech">Tech</option>
          <option value="Tech">Tech</option>
          <option value="Tech">Tech</option>
          <option value="Tech">Tech</option>
        </select>
        <input type="text" name="Description" value={data.Description} onChange={onChangeHandler} maxLength={100} placeholder='Description' className={styles.input__form_admin} />
        <textarea name="Article" value={data.Article} onChange={onChangeHandler} placeholder='Article' className={styles.input__form_admin_text_area}/>
        <p style={{marginBottom: "1rem"}}>Image</p>
        <label htmlFor="image">
          <Image src={!image ?upload : URL.createObjectURL(image)} width={394} height={180} alt='upload' />
        </label>
        <input type="file" name="image" id="image" hidden required className={styles.input__form_admin_image} onChange={(e) => {
          if (e.target.files) {
            setImage(e.target.files[0]);
          }
        }} />
        <button className={styles.input__form_admin_cta} >Add</button>
      </form>
      </div>
     </div>
      
    </div>
  )
}

export default page
