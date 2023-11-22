import React from 'react'
import styles from '../contact/page.module.css'
import Image from 'next/image'
import contact from "/public/contact.jpg"
import Button from '@/components/Button/Button'

function Contact() {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>
      Let's Keep in Touch
     </h1>
     <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
         src={contact}
         className={styles.image}
         />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder='name' className={styles.input} />
        <input type="text" placeholder='email' className={styles.input} />
      <textarea name='' id='' cols={30} rows={10} placeholder='message' className={styles.textarea}></textarea>
      <Button url="url" text="Send"/>
      </form>
     </div>
    </div>
    
  )
}

export default Contact