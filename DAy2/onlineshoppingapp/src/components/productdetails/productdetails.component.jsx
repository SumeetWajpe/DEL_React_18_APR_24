import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="row">
      <h2>Product details for {id}</h2>
      <div className="col-md-9">Image</div>
      <div className="col-md-3">Description</div>
    </div>
  );
}

export default ProductDetails;
