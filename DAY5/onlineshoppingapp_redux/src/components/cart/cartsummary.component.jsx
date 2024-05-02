import React from "react";
import { useSelector } from "react-redux";

function CartSummary() {
  const products = useSelector(store => store.cart.products);
  return (
    <ul className="list-group">
      {products.map(p => (
        <li className="list-group-item" key={p.id}>
          {p.name}
        </li>
      ))}
    </ul>
  );
}

export default CartSummary;
