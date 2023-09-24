import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Cart from "../cart/Cart";

function ShoppingCartPage() {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Contenido del Carrito</h2>
      <Cart cartItems={cartItems} />
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default ShoppingCartPage;
