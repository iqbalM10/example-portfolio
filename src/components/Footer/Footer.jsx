import React from 'react'
import styles from "../Footer/footer.module.css"
import Image from 'next/image'

function Footer() {
  return (
    
    <div className={styles.container}>
        <div>2023 IqbalFED. All right reserved</div>
    <div className={styles.social}>
        <Image src="/face1.png" width={20} height={20}/>
        <Image src="/insta.png" width={20} height={20}/>
        <Image src="/twitter.png" width={20} height={20}/>

    </div>
    </div>

    )
}

export default Footer