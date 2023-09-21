import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <h3>Carrito de Compras</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {/* Renderizar información del elemento del carrito */}
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
