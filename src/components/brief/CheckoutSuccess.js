import React from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation desde react-router-dom
import OrderConfirmation from "./OrderConfirmation"; // Asegúrate de que la ruta sea la correcta

function CheckoutSuccess() {
  // Obtén los parámetros de URL con los datos del usuario
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const purchasedData = {
    name: searchParams.get("name") || "Nombre del comprador",
    phone: searchParams.get("phone") || "Número de teléfono",
    email: searchParams.get("email") || "Correo electrónico",
  };

  const cartItems = [
    {
      id: 1,
      title: "Producto 1",
      quantity: 2,
    },
    // ...otros productos
  ];

  return (
    <div>
      <h2>¡Compra Exitosa!</h2>
      <OrderConfirmation purchasedData={purchasedData} cartItems={cartItems} />
      {/* Puedes personalizar el contenido de la página de éxito aquí si es necesario */}
    </div>
  );
}

export default CheckoutSuccess;
