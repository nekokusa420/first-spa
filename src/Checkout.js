import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

export default function checkout() {
  let cartItem = {
    cartItems: [
      {
        "id:": 5,
        name: "藍梅",
        image: "blueberry.webp",
        price: 10,
        description: "新鮮藍梅50克, 補眼之寶",
        quantity: 3,
      },
      {
        "id:": 4,
        name: "西瓜",
        image: "watermelon.jpeg",
        price: 20,
        description: "新鮮西瓜2公斤, 夏季必備",
        quantity: 0,
      },
    ],
  };

  let { cartItems } = cartItem;
  let cartEmpty = cartItems.length <= 0 ? true : false;

  let grandTotal = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0); //reduce計Total
  const freeShippingPrice = 99; //滿$99免費送貨

  return (
    <div>
      <Title mainTitle="你的購物車" />

      {cartEmpty && (
        <div>
          <center>
            <p>購物車現在沒有商品</p>
            <Link to="/" className="link-spacing">
              去產品頁看看吧
            </Link>
          </center>
        </div>
      )}

      {!cartEmpty && (
        <div>
          <div id="cartSection">
            {
              /*產品列表*/
              cartItems.map((product) => (
                <div key={product.id}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/" + product.image}
                    width={300}
                  />
                  {product.name}
                  {product.price}
                  {product.description}
                  購買數量{product.quantyty}
                </div>
              ))
            }
          </div>
          <div id="checkOutSection">
            <div>全部貨品總共</div>
            <div>{grandTotal}元</div>

            {
              grandTotal>=freeShippingPrice?
              <div>我們免費送貨</div>:
              <div>滿${freeShippingPrice}免費送貨<br/>還差${freeShippingPrice-grandTotal}</div>
              
              }

            {/*價錢總數+免費送貨*/}
          </div>
        </div>
      )}
    </div>
  );
}
