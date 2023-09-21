import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Importa el contexto del carrito
import Cart from "../cart/Cart";

function ShoppingCartPage() {
  const { cartItems } = useCart(); // Usa el contexto del carrito

  return (
    <div>
      <h2>Contenido del Carrito</h2>
      {/* Pasa cartItems como prop al componente Cart */}
      <Cart cartItems={cartItems} />
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default ShoppingCartPage;
