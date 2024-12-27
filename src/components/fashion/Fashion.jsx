import React, {useState, useEffect} from 'react'
import styles from './Fashion.module.scss'
import axios from 'axios'
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Fashion = () => {

    const [data, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(4)

    useEffect (()=>{
        axios.get('http://localhost:3000/products')
        .then((res)=>{
            setProducts(res.data);
        })
    }, [])


    
    const addToCart = (product) => {
        axios.get(`http://localhost:3000/cart?id=${product.id}`)
            .then((response) => {
                if (response.data.length === 0) {
                         alert("elave olundu")
                    return axios.post('http://localhost:3000/cart', {
                        id: product.id,
                        name: product.name,
                        image: product.image,
                        count: 1
                    });
                }   
                else {
                    const existingProduct = response.data[0];
                alert("sayı artırıldı");
                return axios.patch(`http://localhost:3000/cart/${existingProduct.id}`, {
                    count: existingProduct.count + 1,
                });
                }
            }) 
    };



    const addToWish = (product) =>{
        axios
        .get(`http://localhost:3000/wish?id=${product.id}`)
        .then((response) => {
            if (response.data.length === 0) {
                alert("elave olundu")
                return axios.post('http://localhost:3000/wish', {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                });
            } else {
                alert("wishlistde var");
            }
        })
    }


    const lastIndexProducts = currentPage * productsPerPage
    const firstIndexProducts = lastIndexProducts - productsPerPage
  
    const currentproducts = data.slice(firstIndexProducts, lastIndexProducts)
  
    let pages = []
  
    for(let i = 1 ; i <= Math.ceil(data.length/productsPerPage); i++) {
      pages.push(i)
    }



  return (
    <section className={styles.Fashion}>
    <div className={styles.navigation}>
        <h1>Fashion News This Week</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    
    
    <div className={styles.news}>

    {currentproducts && currentproducts.map((products)=>(

    
    <div key={products.id}>
      <img src={products.image} alt="" />
      <p>10 Jan 2018</p>
      <h6>{products.name}</h6>
      <span>{products.title}</span>
      <div className={styles.add}>
                            <button  onClick={() => addToCart(products)}><IoCartOutline /></button>
                            <button onClick={()=> addToWish(products)}><FaHeart /></button>
                        </div>
    </div>
     ))}
    </div>
    <div>
                {pages && pages.map(item => {
        return <button className={styles.but} onClick={() => setCurrentPage(item)}>{item}</button>
      })}
                </div>
    
    
        </section>
  )
}

export default Fashion