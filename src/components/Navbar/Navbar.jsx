import React from 'react'
import Link from 'next/link'
import styles from "../Navbar/navbar.module.css"
import DarkmodeToggle from '../DarkmodToggle/DarkmodeToggle'

function Navbar() {
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/"

        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio"

        },
        {
            id: 3,
            title: "Blog",
            url: "/blog"

        },
        {
            id: 4,
            title: "About",
            url: "/about"

        },
        {
            id: 5,
            title: "Contact",
            url: "/contact"

        },
        {
            id: 4,
            title: "Dashboard",
            url: "/dashboard"

        }
    ]
    return (
        
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>IqbalFED</Link>

                <div className={styles.links}>
                    <DarkmodeToggle/>
                    {links.map(link => (
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                ))}</div>
            </div>

        
    )
}

export default Navbar