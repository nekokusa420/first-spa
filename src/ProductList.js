import React from 'react'

import logo from './React-icon.svg.png'
import styles from './ProductList.module.css'
import {useState} from "react" //ReactHook
export default function ProductList() {
    let productList = [
        {"id" : 1, "name" : "蘋果", "price" : 5,"image" : "apple.jpeg","description" : "新鮮蘋果50克, 一日一蘋果, 醫生遠離我"},
        {"id" : 2, "name" : "橙", "price" : 3,"image" : "orange.jpeg","description" : "新鮮橙50克, 又甜又好吃"},
        {"id" : 3, "name" : "芒果", "price" : 4,"image" : "mango.jpg","description" : "新鮮芒果500克, 宜做甜品"},
        {"id" : 4, "name" : "西瓜", "price" : 20,"image" : "watermelon.jpeg","description" : "新鮮西瓜2公斤, 夏季必備"},
        {"id" : 5, "name" : "藍梅", "price" : 10,"image" : "blueberry.webp","description" : "新鮮藍梅50克, 補眼之寶"},
        {"id" : 6, "name" : "白蘿蔔", "price" : 5, "image" : "white-carrot.png", "description" : "新鮮白蘿蔔1公斤, 宜煲湯"}
    ]

    const[showProduct, setShowProduct] = useState(false)

    // const handleClick = ()=>{
    //       setProduct('react')
    //       console.log(product)
    // }

  return (
    <div>
      {showProduct && <button onClick={()=>{setShowProduct(false)}}>隱藏產品</button>}
      {!showProduct && <button onClick={()=>{setShowProduct(true)}}>顯示產品</button>}
      <h1 style={{backgroundColor:'orange',borderBottom:'5px solid red'}}>請選擇要購買的水果</h1>
      <img src={logo}width={300}/>
      <div>
        {
          showProduct && productList.map(product=>(
            // <div className="productBorder" key={product.id}>
            <div className={styles.productBorder} key={product.id}>
            {product.name}<br/>
              {product.price}<br/>
              <img src={process.env.PUBLIC_URL+'/img/'+product.image}width={300}/><br/>
              {product.description}<br/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

/*nekoneko meow*/