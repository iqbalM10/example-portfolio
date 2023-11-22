import Image from 'next/image'
import styles from './page.module.css'
import home from "public/home2.jpg"
import Button from '@/components/Button/Button'

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
      <h1
      className={styles.title}>Design for your Digital and Modern Products</h1>

      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, et aliquid delectus nihil dolorem consequuntur nam inventore mollitia facere quae.</p>
      <Button url="/portfolio" text="See Our Works"/>
   
    </div>
    <div className={styles.item}
    ><Image src={home} className={styles.img}/></div>
   </div>
  )
}
