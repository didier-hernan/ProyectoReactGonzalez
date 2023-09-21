import React from "react";

function ShoppingCart({ cart }) {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
