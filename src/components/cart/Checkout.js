// Checkout.js

import React from "react";
import { useParams } from "react-router-dom";

function Checkout() {
  const { orderNumber } = useParams(); // Obtén el número de orden de la URL

  // Aquí puedes acceder a los productos y otros datos relacionados con la compra
  // Usando los datos que recibiste desde la URL

  return (
    <div>
      <h2>Detalles de la Compra</h2>
      {/* Muestra los detalles de la compra aquí */}
      <p>Número de Orden: {orderNumber}</p>
      {/* Muestra otros detalles de la compra */}
    </div>
  );
}

export default Checkout;
