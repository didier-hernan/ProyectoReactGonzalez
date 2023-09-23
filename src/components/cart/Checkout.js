import React from "react";

function Checkout({ purchasedData, cartItems, orderNumber, totalPrice }) {
  return (
    <div>
      <h3>Checkout</h3>
      <p>Orden número: {orderNumber}</p>
      {/* Comprobación de purchasedData antes de acceder a sus propiedades */}
      {purchasedData && (
        <div>
          <p>Nombre: {purchasedData.name}</p>
          <p>Teléfono: {purchasedData.phone}</p>
          <p>Email: {purchasedData.email}</p>
        </div>
      )}
      <h4>Productos Comprados:</h4>
      <ul>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Cantidad: {item.quantity}
            </li>
          ))}
      </ul>
      <p>Precio Total: {totalPrice ? `$${totalPrice.toFixed(2)}` : "N/A"}</p>
    </div>
  );
}

export default Checkout;
