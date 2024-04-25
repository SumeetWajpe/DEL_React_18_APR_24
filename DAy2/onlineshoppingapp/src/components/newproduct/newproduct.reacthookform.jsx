import React from "react";
import { useForm } from "react-hook-form";
const NewProductRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });
  return (
    <div>
      <h1>New Product</h1>
      <form
        className="container"
        onSubmit={handleSubmit(data => {
          console.log("Submittted..");
          console.log(data);
          // add this as new product
          reset();
        })}
      >
        <div className="col-md-4">
          <div className="row">
            <label htmlFor="txtProductId">Id : </label>
            <input
              type="number"
              id="txtProductId"
              {...register("id", { required: true })}
            />
            {errors.id && (
              <p className="text-danger">Product Id is required !</p>
            )}
          </div>
          <div className="row">
            <label htmlFor="txtProductTitle">Title : </label>
            <input
              type="text"
              id="txtProductTitle"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required !",
                },
                maxLength: {
                  value: 20,
                  message: "Title cannot exceed 20 chars !",
                },
              })}
            />
            {errors.title && (
              <p className="text-danger">
                {errors.title.type === "maxLength"
                  ? errors.title.message
                  : errors.title.message}
              </p>
            )}
          </div>
          <div className="row">
            <label htmlFor="txtProductPrice">Price : </label>
            <input type="number" id="txtProductPrice" {...register("price")} />
          </div>
          <div className="row">
            <label htmlFor="txtProductRating">Rating : </label>
            <input
              type="number"
              id="txtProductRating"
              {...register("rating")}
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductLikes">Likes : </label>
            <input type="number" {...register("likes")} />
          </div>
          <div className="row">
            <label htmlFor="txtProductImageUrl">Image Url : </label>
            <input
              type="text"
              id="txtProductImageUrl"
              {...register("imageUrl")}
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductDesc">Description :</label>
            <textarea id="txtProductDesc" cols="30" rows="5"></textarea>
          </div>
          <button className="btn btn-success m-2">Add New Product</button>
        </div>
      </form>
    </div>
  );
};

export default NewProductRHF;
