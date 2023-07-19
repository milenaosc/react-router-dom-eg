import React from "react";
import ProductDetail from "./ProductDetail";
import TotalPrice from "./TotalPrice";
const ProductInfo = () => {
  return (
    <div class="product-info-container">
      <ProductDetail />
      <TotalPrice />
    </div>
  );
};

export default ProductInfo;
