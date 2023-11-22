import React from 'react'
import styles from "../blog/page.module.css"
import Link from 'next/link'
import Image from 'next/image'
import blog1 from "/public/blog1.jpg"
import blog2 from "/public/Blog2.jpg"
import blog3 from "/public/Blog3.jpg"

function Blog() {
  return (
    <div>
      <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
        src={blog1}
        width={400}
        height={430}
        className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
Test
        </h1>
        <p className={styles.desc}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non, enim ea sit id facere nostrum odio temporibus dolor cupiditate, asperiores laborum, commodi amet modi dolorem autem dolores. Perspiciatis atque dolor soluta provident repellat, corrupti quibusdam, minus blanditiis iure magnam iste alias expedita similique! Unde fugit deleniti fuga voluptas! Dolorem!
        </p>
      </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
        src={blog2}
        width={400}
        height={430}
        className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
Test
        </h1>
        <p className={styles.desc}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima quos quia repellat reiciendis. Tempore ipsa iste, iusto accusantium veritatis, eveniet maiores hic impedit unde ratione velit fuga quisquam atque autem, dolores possimus nam officia cum inventore. Culpa dolorum eos itaque laborum quas ea perferendis ex, sequi id cupiditate sit.
        </p>
      </div>
      </Link>


      <Link href="/blog/testId" className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
        src={blog3}
        width={400}
        height={430}
        className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
Test
        </h1>
        <p className={styles.desc}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis aut dolorum reprehenderit voluptatibus enim commodi? Libero veritatis iure necessitatibus rem. Distinctio in harum blanditiis animi quidem officiis, aliquid commodi, voluptatem cupiditate natus dolorem accusamus beatae, obcaecati modi. Magnam in sunt nobis labore perferendis quas. Nobis quibusdam dolorem aspernatur commodi!
        </p>
      </div>
      </Link>
    </div>
  )
}

export default Blog