import { useEffect, useState } from "react";
import ProductService from "./services/ProductService";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => dispatch(getAllProducts(res.data.products)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
