"use client"

import React, { useContext } from 'react'
import styles from "../DarkmodToggle/darkmode.module.css"
import { FaSun,FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../../context/ThemeContext';

function DarkmodeToggle() {
    const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
         <div className={styles.icon}><FaSun/></div>
         <div className={styles.icon}><FaMoon/></div>
         <div className={styles.ball} style={mode === "light" ? { left:"2px"} : { right:"2px"}}></div>
    </div>
  )
}

export default DarkmodeToggle