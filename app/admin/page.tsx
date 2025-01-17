"use client"
import React, { useState, useEffect } from 'react';
import upload from '../../public/upload.png';
import Image from 'next/image';
import styles from '../styles/addProduct.module.css';
import axios from 'axios';

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState({
    Title: "",
    Category: "Tech",
    Description: "",
    Article: ""
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Title", data.Title);
    formData.append("Category", data.Category);
    formData.append("Description", data.Description);
    formData.append("Article", data.Article);
    formData.append("image", image as Blob);
    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      setData({
        Title: '',
        Category: 'Tech',
        Description: '',
        Article: '',
      });
      setImage(null);
      console.log("added new post!!!");
    }
  };

  return (
    <div className={styles.add__product}>
      <div className={styles.form__container}>
        <div>
          <h1 data-animation = 'header'>Add Blog</h1>
        </div>
        <div>
          <form className={styles.form} onSubmit={onSubmitHandler}>
            <input type="text" name="Title" onChange={onChangeHandler} value={data.Title} placeholder='Title' className={styles.input__form_admin} data-animation = 'paragraph'/>
            <select name='Category' value={data.Category} onChange={onChangeHandler} className={styles.input__form_admin_select} data-animation = 'paragraph'>
              <option value="Tech">Tech</option>
              <option value="Tech">Tech</option>
              <option value="Tech">Tech</option>
              <option value="Tech">Tech</option>
            </select>
            <input type="text" name="Description" value={data.Description} onChange={onChangeHandler} maxLength={100} placeholder='Description' className={styles.input__form_admin} data-animation = 'paragraph'/>
            <textarea name="Article" value={data.Article} onChange={onChangeHandler} placeholder='Article' className={styles.input__form_admin_text_area} data-animation = 'paragraph'/>
            <p style={{ marginBottom: "1rem" }} data-animation = 'paragraph'>Image</p>
            <label htmlFor="image" data-animation = 'paragraph'>
              <Image src={image ? URL.createObjectURL(image) : upload } width={394} height={180} alt='upload' data-animation = 'paragraph' />
            </label>
            <input type="file" name="image" id="image" hidden required className={styles.input__form_admin_image} onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }} />
            <button className={styles.input__form_admin_cta} data-animation = 'paragraph'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;