import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartCount() {
  const currProducts = useSelector(store => store.cart.products);
  return (
    <p>
      <i className="fa-solid fa-cart-shopping"></i>{" "}
      <span className="badge text-bg-warning">
        <Link to="/cartsummary">{currProducts.length}</Link>
      </span>
    </p>
  );
}

export default CartCount;
