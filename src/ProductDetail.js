import React from "react";
import { useParams } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";

export default function ProductDetail() {
  let params = useParams();

  return (
    <div>
      <h1>#{params.id}產品資料</h1>
      <QuantityBtn />
    </div>
  );
}
