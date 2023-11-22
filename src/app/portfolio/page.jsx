import React from 'react'
import styles from "../portfolio/page.module.css"
import img1 from "/public/imgportfolio.jpg"
import img2 from "/public/imgportfolio2.jpg"
import img3 from "/public/imgportfolio3.jpg"
import Image from 'next/image'
import Button from '@/components/Button/Button'


function Portfolio() {
  //  const cards = [
  //   {
  //     id:"1",
  //     img:"img1",
  //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea odit nisi, omnis, hic quae debitis qui ipsum optio autem repudiandae voluptate quibusdam magni, accusantium officiis nobis aliquid nihil ut. Sapiente dicta natus aperiam error magnam! Consectetur nostrum molestiae culpa",
    
  //   },

  //   {
  //     id:"2",
  //     img:"{img2}",
  //     desc:"      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea odit nisi, omnis, hic quae debitis qui ipsum optio autem repudiandae voluptate quibusdam magni, accusantium officiis nobis aliquid nihil ut. Sapiente dicta natus aperiam error magnam! Consectetur nostrum molestiae culpa",
    
  //   },

  //   {
  //     id:"3",
  //     img:"{img3}",
  //     desc:"      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea odit nisi, omnis, hic quae debitis qui ipsum optio autem repudiandae voluptate quibusdam magni, accusantium officiis nobis aliquid nihil ut. Sapiente dicta natus aperiam error magnam! Consectetur nostrum molestiae culpa",
    
  //   },
  // ]
  // console.log(cards);
  return (
    <div className={styles.container}>
      <h1 className={styles.maintitle}>Our Works</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit suscipit incidunt molestias hic quisquam facere! Voluptatum, reiciendis. Aliquid id architecto ipsa beatae ducimus, repudiandae quia, ad laborum voluptates assumenda fuga officiis quasi alias animi culpa dignissimos! Ab quia laborum ipsam dignissimos, deserunt placeat eligendi natus, id unde sed et.</p>
        <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} src={img1}/>
        </div>
       </div>
       
       <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit suscipit incidunt molestias hic quisquam facere! Voluptatum, reiciendis. Aliquid id architecto ipsa beatae ducimus, repudiandae quia, ad laborum voluptates assumenda fuga officiis quasi alias animi culpa dignissimos! Ab quia laborum ipsam dignissimos, deserunt placeat eligendi natus, id unde sed et.</p>
        <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} src={img2}/>
        </div>
       </div>

       <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit suscipit incidunt molestias hic quisquam facere! Voluptatum, reiciendis. Aliquid id architecto ipsa beatae ducimus, repudiandae quia, ad laborum voluptates assumenda fuga officiis quasi alias animi culpa dignissimos! Ab quia laborum ipsam dignissimos, deserunt placeat eligendi natus, id unde sed et.</p>
        <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} src={img3}/>
        </div>
       </div>
    </div>
  )
}

export default Portfolio