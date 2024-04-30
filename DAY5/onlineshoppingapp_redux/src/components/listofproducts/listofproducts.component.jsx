import React, { Component, useEffect, useState } from "react";
import Product from "../product/product.component";
import { useSelector } from "react-redux";
const ListOfProducts = () => {
  const productList = useSelector(store => store.products);

  return (
    <div className="row">
      {productList.map(product => (
        <Product productdetails={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListOfProducts;
