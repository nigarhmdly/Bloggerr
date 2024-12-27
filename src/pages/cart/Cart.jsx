import React, {useState, useEffect} from 'react'
import styles from '../../components/fashion/Fashion.module.scss'
import axios from 'axios'

const Cart = () => {
  const [data, setProducts] = useState([])

  useEffect (()=>{
      axios.get('http://localhost:3000/cart')
      .then((res)=>{
          setProducts(res.data);
      })
  }, [])


  const deleteButton = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
alert("silindi")
setProducts((Data) => Data.filter((product) => product.id !== id));
};


return (
  <section className={styles.Fashion}>
  <div className={styles.navigation}>
      <h1>CART</h1>
  </div>
  
  
  <div className={styles.news}>

  {data.map((products)=>(

  
  <div key={products.id}>
    <img src={products.image} alt="" />
    <p>10 Jan 2018</p>
    <h6>{products.name}</h6>
    <span>{products.title}</span>
    <span>Count: {products.count}</span>
    <button onClick={()=> deleteButton(products.id)}>sil</button>
  </div>
  
   ))}
  
  
  
  </div>
  
  
  
      </section>
)
}

export default Cart