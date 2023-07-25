import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TotalPrice = () => {
  const { totalPrice } = useSelector((state) => state.productSlice);
  console.log(totalPrice);
  return (
    <div>
      <div>{`Total Price: ${totalPrice}$`}</div>
      <div>
        <div>Quantity</div>
        <button>+</button>
        <button>No</button>
        <button>-</button>
      </div>
      <div>
        <button>Add to Cart</button>
        <button>Buy it now</button>
        <button>Favorite</button>
      </div>
    </div>
  );
};

export default TotalPrice;
