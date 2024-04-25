import React, { Component, useEffect, useState } from "react";
import Product from "../product/product.component";
import axios from "axios";
const ListOfProducts = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3500/products");

        if (res.status == 200) {
          setProductList(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="row">
      {productList.map(product => (
        <Product productdetails={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListOfProducts;
