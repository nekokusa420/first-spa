import React, { useContext } from "react";
import { Link, useActionData } from "react-router-dom";
import Title from "./Title";
import { CartContext } from "./CartContext";
import QuantityBtn from "./QuantityBtn";

export default function Checkout() {
  let { cartItems } = useContext(CartContext);
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
            {cartItems.map((product) => (
              <div key={product.id}>
                <img
                  src={process.env.PUBLIC_URL + "/img/" + product.image}
                  alt={product.name}
                  width={300}
                />
                {product.name}
                {product.description}
                {product.price}
                <br />
                購買數量{product.quantity} <QuantityBtn productInfo={product} />
              </div>
            ))}
          </div>
          <div id="checkOutSection">
            <div>全部貨品總共</div>
            <div>{grandTotal}元</div>

            {grandTotal >= freeShippingPrice ? (
              <div>我們免費送貨</div>
            ) : (
              <div>
                滿${freeShippingPrice}免費送貨
                <br />
                還差${freeShippingPrice - grandTotal}
              </div>
            )}

            {/* 價錢總數+免費送貨 */}
          </div>
        </div>
      )}
    </div>
  );
}
