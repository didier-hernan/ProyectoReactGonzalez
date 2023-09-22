import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const { cartItems } = useCart();

  // Crear un objeto para rastrear la cantidad de cada producto en el carrito
  const productQuantities = {};

  // Llenar el objeto productQuantities con las cantidades actuales
  cartItems.forEach((item) => {
    if (productQuantities[item.id]) {
      productQuantities[item.id]++;
    } else {
      productQuantities[item.id] = 1;
    }
  });

  // Calcula el total de la compra correctamente, incluso para productos idénticos
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <h3>Carrito de Compras</h3>
      <ul>
        {Object.keys(productQuantities).map((productId) => {
          const item = cartItems.find((item) => item.id === productId);
          return (
            <li key={productId}>
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price}</p>
                <p>Stock: {item.stock}</p>
              </div>
              <div>Cantidad: {productQuantities[productId]}</div>
            </li>
          );
        })}
      </ul>
      <div>Total de la Compra: ${total.toFixed(2)}</div>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default Cart;
