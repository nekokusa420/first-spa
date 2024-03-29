import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"; //React Hook
import styles from "./ProductList.module.css";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";

export default function ProductList() {
  let [productList, setProductList] = useState([]);

  //useEffect hook

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
    <>
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
      <div className="productBorder">
        {showProduct &&
          productList.map((product) => (
            // <div className="productBorder" key={product.id}>
            <React.Fragment key={product.id}>
              <div className={styles.productBorderItem}>
                <Link to={"/product/" + product.id}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/" + product.image}
                    alt={product.name}
                  />
                </Link>
                <div className="productName">
                  {product.name} - {product.price}元/件
                </div>

                <QuantityBtn productInfo={product} />
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
}
