import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Card from "../components/Card";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <div className="products">
      {data.map((element) => (
        <Card key={element.id} item={element} />
      ))}
    </div>
  );
}

export default Products;
