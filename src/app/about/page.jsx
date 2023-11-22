import React from 'react'
import styles from "../about/page.module.css"
import Image from 'next/image'
import code from "/public/code.jpg"
import Button from '@/components/Button/Button'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src={code}
          className={styles.img}
        />

        <div className={styles.imgtext}>
          <h1 className={styles.imgTitle}>Modern Design</h1>
          <h2 className={styles.imgDesc}>Responsible and Hardworking</h2>
        </div>
      </div>

      <div className={styles.TextContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Am I ?</h2>

          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero neque similique dicta error. Optio tenetur nesciunt, mollitia nostrum laboriosam earum molestiae voluptatibus rerum, quaerat praesentium aperiam eius cupiditate placeat vel voluptates sapiente.
            <br />
            <br />
             Expedita nesciunt dolorum animi. Sunt similique aspernatur, quibusdam ab neque voluptatem dolorem. Aperiam placeat blanditiis quas autem.</p>
        <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione molestias ducimus amet? Perferendis, culpa eligendi sapiente sit ex, atque voluptatum incidunt doloremque ullam, sequi tempora assumenda odit quasi iste?
        
        </div>
        <div className={styles.item}>
        <h2 className={styles.title}>What Am I Doing ?</h2>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero neque similique dicta error. Optio tenetur nesciunt, mollitia nostrum laboriosam earum molestiae voluptatibus rerum, quaerat praesentium aperiam eius cupiditate placeat vel voluptates sapiente.
            <br />
            <br />
             Expedita nesciunt dolorum animi. Sunt similique aspernatur, quibusdam ab neque voluptatem dolorem. Aperiam placeat blanditiis quas autem.</p>
           Creative Illustration
           <br />
           <br /> - Dynamic Websites
           <br />
           <br /> - Fast and Modern
           <br />
           <br /> - Responsive
       <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About