import React, { useState } from "react";
import carrito from "./carrito.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "../cart/Cart";
import ItemCount from "../itemlist/ItemCount";
import "./CartWidget.css";

const CartWidget = () => {
  const [cartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(1);

  const handleAddToCart = (count) => {
    console.log(`Agregados ${count} elementos al carrito`);
    setCartItemCount(cartItemCount + count);
  };

  return (
    <div className="cart-widget">
      <img src={carrito} alt="Icono del carrito" className="cart-icon" />
      <Cart cartItems={cartItems} />
      <ItemCount
        initial={cartItemCount}
        onAdd={handleAddToCart}
        cartItemCount={cartItemCount}
      />
      <p className="cart-count">Número total en el carrito: {cartItemCount}</p>
    </div>
  );
};

export default CartWidget;
