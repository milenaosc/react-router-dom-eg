import React from "react";
import ImageContainer from "../components/ImageContainer";
import ProductInfo from "../components/ProductInfo";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import store from "../store/store";
import ProductService from "../services/ProductService";
import { getSingleProduct } from "../store/productsSlice";
import { useDispatch } from "react-redux";

function Product() {
  const location = useLocation();
  const { from } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(from);
    ProductService.getSingleProduct(from)
      .then(({ data }) => {
        dispatch(getSingleProduct({ data }));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="product-container">
      <ImageContainer />
      <ProductInfo />
    </div>
  );
}

export default Product;
