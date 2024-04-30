import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../rating/rating.component";
import { useSelector } from "react-redux";
function ProductDetails() {
  const { id } = useParams();
  const products = useSelector(store => store.products);
  const theProduct = products.find(p => p.id == id);

  return (
    <div className="row">
      <div className="col-md-9">
        <img src={theProduct.imageUrl} alt={theProduct.name} width="100%" />
      </div>
      <div className="col-md-3">
        <h2>{theProduct.name}</h2>
        <Rating rating={theProduct.rating} color="orange" />

        <p>
          <button className="btn btn-primary">
            {theProduct.likes} <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </p>
        <p>{theProduct.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
