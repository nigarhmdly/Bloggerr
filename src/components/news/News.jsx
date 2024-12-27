import React from 'react'
import styles from './News.module.scss'

const News = () => {
  return (
    <section className={styles.News}>
<div className={styles.navigation}>
    <h1>Latest News from all categories</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>


<div className={styles.news}>



<div>
  <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" alt="" />
  <p>10 Jan 2018</p>
  <h6>What Makes A Hotel Boutique </h6>
</div>


<div>
  <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" alt="" />
  <p>10 Jan 2018</p>
  <h6>What Makes A Hotel Boutique </h6>
</div>

<div>
  <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg" alt="" />
  <p>10 Jan 2018</p>
  <h6>What Makes A Hotel Boutique </h6>
</div>





</div>



    </section>
  )
}

export default News