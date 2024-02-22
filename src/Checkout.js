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
    <>
      <Title mainTitle="你的購物車" />

      {cartEmpty && (
        <div>
          <div className="nothingInCart">
            購物車現在沒有商品
            <br />
            <br />
            <Link to="/" className="link-spacing">
              去產品頁看看吧
            </Link>
          </div>
        </div>
      )}

      {!cartEmpty && (
        <div className="productBorder">
          <div className="cartSection">
            <table className="checkoutTable">
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={process.env.PUBLIC_URL + "/img/" + product.image}
                        alt={product.name}
                        width={300}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <br />
                    <td width="200">
                      {/* 購買數量{product.quantity} */}
                      <QuantityBtn productInfo={product} />
                    </td>
                    <td>
                      <div className="productSubTotal">
                        ${product.price * product.quantity}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
    </>
  );
}
