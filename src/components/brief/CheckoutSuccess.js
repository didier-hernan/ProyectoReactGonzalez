import React from "react";
import { useLocation } from "react-router-dom";

function CheckoutSuccess() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const purchasedData = {
    name: searchParams.get("name") || "Nombre del comprador",
    phone: searchParams.get("phone") || "Número de teléfono",
    email: searchParams.get("email") || "Correo electrónico",
    orderNumber:
      searchParams.get("orderNumber") || "Número de orden no disponible",
  };

  return (
    <div>
      <h2>¡Compra Exitosa!</h2>
      <p>Compra realizada por:</p>
      <p>Nombre: {purchasedData.name}</p>
      <p>Teléfono: {purchasedData.phone}</p>
      <p>Email: {purchasedData.email}</p>
      <p>Número de Orden: {purchasedData.orderNumber}</p>
      {/* Mostrar otros datos de compra si es necesario */}
    </div>
  );
}

export default CheckoutSuccess;
