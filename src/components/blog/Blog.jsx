import React from 'react'
import styles from './Blog.module.scss'
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

const Blog = () => {
  return (
    <section className={styles.Blog}>
 <div className={styles.section}>
 <div>
           <nav>
           <h1>
A Discount Toner Cartridge <br />
Is Better Than Ever.</h1>
           </nav>





        </div>

        <nav className={styles.comment}>
<p> <CiHeart />15 Likes  <i><FaRegComment /></i>02 Comments</p>




<nav>
    <nav>
        <span>Mark wiens</span>
        <h>12 Dec, 2017 11:21 am</h>
    </nav>
    <img src="https://preview.colorlib.com/theme/blogger/img/user.jpg" alt="" />
</nav>



</nav>


 </div>

    </section>
  )
}

export default Blog