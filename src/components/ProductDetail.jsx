import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProductDetail = () => {
  const { singleProduct } = useSelector((state) => state.productStore);
  console.log(singleProduct);
  return (
    <div>
      <div>{singleProduct.title}</div>
      <div>{singleProduct.price}$</div>
      <div>Rating: {singleProduct.rating}</div>
      <div>
        {singleProduct.stock > 0 ? (
          <div>
            <div>Available</div>
            <div>
              Hurry up! Only {singleProduct.stock} products left in stock
            </div>
          </div>
        ) : (
          <div>Out of stock</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
