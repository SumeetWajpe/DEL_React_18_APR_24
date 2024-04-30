import React, { Component, useEffect, useState } from "react";
import Product from "../product/product.component";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchAllProducts } from "../../redux/reducers/products.reducer";
const ListOfProducts = () => {
  const productList = useSelector(store => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productList.length == 0) {
      dispatch(fetchAllProducts());
    }
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
