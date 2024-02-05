import React, { useState } from "react";

export default function QuantityBtn() {
  let [numInCart, setNumInCark] = useState();

  return (
    <div>
      {numInCart === 0 ? (
        <div>加入購物車</div>
      ) : (
        <div>
          <span>-</span>
          {numInCart}件<span>+</span>
        </div>
      )}
    </div>
  );
}
