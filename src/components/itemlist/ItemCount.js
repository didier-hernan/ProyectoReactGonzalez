import React from "react";
import { useCart } from "./CartContext";

function ItemCount({ product }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div>
      <div>
        <button onClick={() => removeFromCart(product.id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
    </div>
  );
}

export default ItemCount;
