import React from "react";
import { useForm } from "react-hook-form";
const NewProductRHF = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <h1>New Product</h1>
      <form
        className="container"
        onSubmit={handleSubmit(() => {
          console.log("Submittted..");
        })}
      >
        <div className="col-md-4">
          <div className="row">
            <label htmlFor="txtProductId">Id : </label>
            <input type="number" id="txtProductId" />
          </div>
          <div className="row">
            <label htmlFor="txtProductTitle">Title : </label>
            <input type="text" id="txtProductTitle" />
          </div>
          <div className="row">
            <label htmlFor="txtProductPrice">Price : </label>
            <input type="number" id="txtProductPrice" />
          </div>
          <div className="row">
            <label htmlFor="txtProductRating">Rating : </label>
            <input type="number" id="txtProductRating" />
          </div>
          <div className="row">
            <label htmlFor="txtProductLikes">Likes : </label>
            <input type="number" />
          </div>
          <div className="row">
            <label htmlFor="txtProductImageUrl">Image Url : </label>
            <input type="text" id="txtProductImageUrl" />
          </div>
          <button className="btn btn-success m-2">Add New Product</button>
        </div>
      </form>
    </div>
  );
};

export default NewProductRHF;
