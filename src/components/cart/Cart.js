//Cart.js

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const { cartItems, addToCart, removeFromCart, createOrder } = useCart();

  // Calcula el total de la compra teniendo en cuenta la cantidad de cada producto
  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };

  return (
    <div>
      <h3>Carrito de Compras</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <h4>{item.title}</h4>
              <p>Precio: ${item.price}</p>
              <p>Stock: {item.stock}</p>
              <div>Cantidad: {item.quantity}</div>
              {/* Considera agregar botones para aumentar y disminuir la cantidad */}
              <button
                onClick={() =>
                  addToCart({ ...item, quantity: item.quantity + 1 })
                }
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div>Total de la Compra: ${calculateTotal().toFixed(2)}</div>
      <button onClick={createOrder}>Terminar Compra</button>{" "}
      {/* Agrega el botón para finalizar la compra */}
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default Cart;
