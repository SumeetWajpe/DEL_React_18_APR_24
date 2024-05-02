import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../rating/rating.component";
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes } from "../../redux/reducers/products.reducer";
function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(store => store.products.products);
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
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incrementLikes(theProduct.id))}
          >
            {theProduct.likes} <i className="fa-solid fa-thumbs-up"></i>
          </button>
        </p>
        <p>{theProduct.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
