import React from "react";

function OrderConfirmation({ purchasedData, cartItems }) {
  if (!purchasedData) {
    return <p>No hay datos de compra disponibles.</p>;
  }

  return (
    <div>
      <h3>Compra Realizada</h3>
      <p>
        Gracias por tu compra, {purchasedData.name || "Nombre no disponible"}.
      </p>
      <p>
        Número de teléfono: {purchasedData.phone || "Teléfono no disponible"}
      </p>
      <p>Email: {purchasedData.email || "Email no disponible"}</p>
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
