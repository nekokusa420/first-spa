import React from "react";
import logo from "./React-icon.svg.png";
import styles from "./ProductList.module.css";
import { useState, useEffect } from "react"; //ReactHook
import { Link } from "react-router-dom";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";

export default function ProductList() {
  let [productList, setProductList] = useState([]);
  const quantityBtn = document.getElementById("quantityBtn");

  useEffect(() => {
    //1 : 無第二個參數 : component每次render都會觸法
    //2 : Dependency Array是空array時 : 只會在第一次網頁render時觸發
    //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發

    fetch("https://nekokusa420.github.io/itdog/react-basic-product.json")
      .then((respone) => respone.json())
      .then((data) => setProductList(data));
  }, []);

  const [showProduct, setShowProduct] = useState(true);

  // const handleClick = ()=>{
  //       setProduct('react')
  //       console.log(product)
  // }

  return (
    <div>
      <Title mainTitle="請選擇要購買的水果" subTitle="今日有九折" />
      {showProduct && (
        <button
          onClick={() => {
            setShowProduct(false);
          }}
        >
          隱藏產品
        </button>
      )}
      {!showProduct && (
        <button
          onClick={() => {
            setShowProduct(true);
          }}
        >
          顯示產品
        </button>
      )}
      <div>
        {showProduct &&
          productList.map((product) => (
            // <div className="productBorder" key={product.id}>
            <div className={styles.productBorder} key={product.id}>
              {product.name}
              {product.price}

              <Link to={"/product/" + product.id}>
                <img
                  src={process.env.PUBLIC_URL + "/img/" + product.image}
                  width={300}
                  alt={product.name}
                />{" "}
              </Link>
              <br />
              {product.description}
              <QuantityBtn productInfo={product} />
            </div>
          ))}
      </div>
      <img src={logo} width={300} />
    </div>
  );
}
