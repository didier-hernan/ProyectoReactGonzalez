import React from "react";
import { useParams } from "react-router-dom";

function Checkout() {
  const { orderNumber } = useParams();

  return (
    <div>
      <h2>Detalles de la Compra</h2>
      <p>Número de Orden: {orderNumber}</p>
    </div>
  );
}

export default Checkout;
