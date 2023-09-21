import React, { useState } from "react";
import { Link } from "react-router-dom";
import carrito from "./carrito.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "../cart/Cart";
import ItemCount from "../itemlist/ItemCount";
import "./CartWidget.css";

const CartWidget = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para rastrear los elementos del carrito
  const [cartItemCount, setCartItemCount] = useState(1);

  // Función para agregar productos al carrito y actualizar cartItems
  const handleAddToCart = (count) => {
    console.log(`Agregados ${count} elementos al carrito`);
    setCartItemCount(cartItemCount + count);

    // Agregar lógica para agregar productos a cartItems aquí
    // Ejemplo: setCartItems([...cartItems, productoAgregado]);
  };

  return (
    <div className="cart-widget">
      {/* Utiliza Link para redirigir al carrito */}
      <Link to="/carrito">
        <img src={carrito} alt="Icono del carrito" className="cart-icon" />
      </Link>
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
