import React from "react";
import { useSelector } from "react-redux";

function CartCount() {
  const currProducts = useSelector(store => store.cart.products);
  return (
    <p>
      <i className="fa-solid fa-cart-shopping"></i>{" "}
      <span className="badge text-bg-primary">{currProducts.length}</span>
    </p>
  );
}

export default CartCount;
