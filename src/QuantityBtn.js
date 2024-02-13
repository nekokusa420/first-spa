import React, { useState } from "react";

export default function QuantityBtn() {
  let [numInCart, setNumInCark] = useState(0);

  const handleAdd = () => {
    setNumInCark(numInCart + 1);
  };

  const handleSubtract = () => {
    setNumInCark(numInCart - 1);
  };

  return (
    <div>
      {numInCart === 0 ? (
        <button id="hover-button" onClick={handleAdd}>
          加入購物車
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
