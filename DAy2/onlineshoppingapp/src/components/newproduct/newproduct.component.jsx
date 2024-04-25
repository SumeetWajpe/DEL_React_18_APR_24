import React, { useState } from "react";
export default function NewProduct() {
  const [newproduct, setNewProduct] = useState({}); // the state controls the form/controls state

  function AddNewProduct(e) {
    e.preventDefault(); // prevent the browser from reloading the page.
    console.log(newproduct);
  }
  return (
    <div>
      <h1>New Product</h1>
      <form className="container">
        <div className="col-md-4">
          <div className="row">
            <label htmlFor="txtProductId">Id : </label>
            <input
              type="number"
              id="txtProductId"
              onInput={e =>
                setNewProduct({ ...newproduct, id: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductTitle">Title : </label>
            <input
              type="text"
              id="txtProductTitle"
              onInput={e =>
                setNewProduct({ ...newproduct, title: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductPrice">Price : </label>
            <input
              type="number"
              id="txtProductPrice"
              onInput={e =>
                setNewProduct({ ...newproduct, price: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductRating">Rating : </label>
            <input
              type="number"
              id="txtProductRating"
              onInput={e =>
                setNewProduct({ ...newproduct, rating: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductLikes">Likes : </label>
            <input
              type="number"
              id="txtProductLikes"
              onInput={e =>
                setNewProduct({ ...newproduct, likes: +e.target.value })
              }
            />
          </div>
          <div className="row">
            <label htmlFor="txtProductImageUrl">Image Url : </label>
            <input
              type="text"
              id="txtProductImageUrl"
              onInput={e =>
                setNewProduct({ ...newproduct, imageUrl: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-success m-2"
            onClick={e => AddNewProduct(e)}
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
}
