import { useState, useEffect, React } from "react";
import { useParams, Link } from "react-router-dom";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";

export default function ProductDetail() {
  let params = useParams();
  let [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch("https://nekokusa420.github.io/itdog/react-basic-product.json")
      .then((respone) => respone.json())
      .then((data) => {
        let productInfo = data.find((element) => {
          return element.id === parseInt(params.id);
        });
        setProductDetail(productInfo);
      });
  }, []);

  return (
    <>
      {productDetail && (
        <div>
          <Title mainTitle={productDetail.name + "產品資料"} />
          <img
            src={process.env.PUBLIC_URL + "/img/" + productDetail.image}
            width={300}
            alt={productDetail.name}
          />
          <p>名稱：{productDetail.name}</p>
          <p>售價：{productDetail.price}</p>
          <p>描述：{productDetail.description}</p>
          <QuantityBtn productInfo={productDetail} />
        </div>
      )}
    </>
  );
}
