import React, { Component, useEffect, useState } from "react";
import Product from "../product/product.component";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchAllProducts } from "../../redux/reducers/products.reducer";
const ListOfProducts = () => {
  // const productList = useSelector(store => store.products.products);
  // const error = useSelector(store => store.error);
  // const loading = useSelector(store => store.loading);
  const { products, error, loading } = useSelector(store => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length == 0) {
      dispatch({ type: "PRODUCTS_FETCH_REQUESTED_ASYNC" });
    }
  }, []);

  if (error) return <h2>Something went wrong ! {error} </h2>;

  if (loading) return <p>Loading...</p>;
  return (
    <div className="row">
      {products.map(product => (
        <Product productdetails={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListOfProducts;
