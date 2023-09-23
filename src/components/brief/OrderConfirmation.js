import React from "react";

function OrderConfirmation({ purchasedData, cartItems }) {
  return (
    <div>
      <h3>Compra Realizada</h3>
      <p>Gracias por tu compra, {purchasedData.name}.</p>
      <p>Número de teléfono: {purchasedData.phone}</p>
      <p>Email: {purchasedData.email}</p>
      <h4>Productos Comprados:</h4>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderConfirmation;
