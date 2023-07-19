import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Card from "../components/Card";
import store from "../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../store/productsSlice";

function Products(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => dispatch(getAllProducts(res.data.products)))
      .catch((err) => console.log(err));
  }, []);
  const { allProducts } = useSelector((state) => state.productStore);
  console.log(allProducts);

  return (
    <div className="products">
      {allProducts?.map((element) => (
        <Card key={element.id} item={element} />
      ))}
    </div>
  );
}

export default Products;
