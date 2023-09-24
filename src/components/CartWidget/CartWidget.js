import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import carrito from "./carrito.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "../cart/Cart";
import CartContext from "../cart/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartItems } = useCart();

  const [cartItemCount, setCartItemCount] = useState(1);

  const handleAddToCart = (count) => {
    console.log(`Agregados ${count} elementos al carrito`);
    setCartItemCount(cartItemCount + count);
  };
  return (
    <div className="cart-widget">
      <Link to="/carrito" className="cart-link">
        <img src={carrito} alt="Icono del carrito" className="cart-icon" />
        <span className="cart-count">{cartItems.length}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
