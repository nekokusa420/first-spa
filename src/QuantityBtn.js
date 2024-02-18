import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function QuantityBtn({ productInfo }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  //購物車內有冇該產品
  let productIndextInCart = cartItems.findIndex((element) => {
    return element.id === productInfo.id;
  });
  //findIndex
  //購物車有該產品 => 返回索引位置
  //沒有加入過購物車 => 返回-1

  let [numInCart, setNumInCark] = useState(
    productIndextInCart === -1 ? 0 : cartItems[productIndextInCart].quantity
  );

  const handleAdd = () => {
    if (productIndextInCart === -1) {
      setCartItems([
        {
          id: productInfo.id,
          name: productInfo.name,
          image: productInfo.image,
          price: productInfo.price,
          description: productInfo.description,
          quantity: 1,
        },
        ...cartItems,
      ]);
    } else {
      let newCartArray = [...cartItems];
      newCartArray[productIndextInCart].quantity++;
      setCartItems(newCartArray);
    }
    setNumInCark(numInCart + 1);
  };

  const handleSubtract = () => {
    if (productIndextInCart === 1) {
      let newCartArray = [...cartItems];
      newCartArray.splice(productIndextInCart, 1);
      setCartItems(newCartArray);
    } else {
      let newCartArray = [...cartItems];
      newCartArray[productIndextInCart].quantity--;
      setCartItems(newCartArray);
    }

    setNumInCark(numInCart - 1);
  };

  return (
    <div>
      {numInCart === 0 ? (
        <button id="hover-button" onClick={handleAdd}>
          加入 {productInfo.name} 至購物車
        </button>
      ) : (
        <div>
          <button id="hover-button" onClick={handleSubtract}>
            -
          </button>
          {numInCart}件
          <button id="hover-button" onClick={handleAdd}>
            +
          </button>
        </div>
      )}
    </div>
  );
}
