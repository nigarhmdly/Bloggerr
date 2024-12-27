import React from 'react'
import styles from './Header.module.scss'
import { FaHamburger } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <div className={styles.header}>
            <img src="https://preview.colorlib.com/theme/blogger/img/logo.png" alt="" />


            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">NEWS</a></li>
                    <li><a href="/">TRAVEL</a></li>
                    <li><a href="./admin">ADMIN</a></li>
                    <li><a href="./wish">WISH</a></li>
                    <li><a href="./cart">CART</a></li>
                    <li className={styles.hamburger}><FaHamburger /></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header