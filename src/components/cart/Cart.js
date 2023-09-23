// Cart.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Brieft from "../brief/brieft"; // Importa el componente Brieft

function Cart() {
  const { cartItems, addToCart, removeFromCart, setCartItems } = useCart();
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario
  const navigate = useNavigate();

  const handlePurchase = (name, phone, email) => {
    if (cartItems.length === 0) {
      // Si no hay productos en el carrito, no muestra el formulario
      return;
    }
    // Cambia el estado para mostrar el formulario
    setShowForm(true);
  };

  // Calcula el total de la compra teniendo en cuenta la cantidad de cada producto
  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };
  const handleDecreaseQuantity = (productId) => {
    // Encuentra el producto en el carrito
    const productInCart = cartItems.find((item) => item.id === productId);

    if (productInCart) {
      if (productInCart.quantity > 1) {
        // Si la cantidad es mayor que 1, reduce la cantidad en 1
        productInCart.quantity -= 1;
        setCartItems([...cartItems]); // Actualiza el carrito
      } else {
        // Si la cantidad es 1, elimina el producto del carrito
        removeFromCart(productId);
      }
    }
  };

  const handleCheckout = () => {
    // Redirige a la vista de Checkout
    navigate("/checkout");
  };

  return (
    <div>
      <h3>Carrito de Compras</h3>
      {showForm ? (
        <div>
          {/* Aquí va tu formulario */}
          <Brieft onPurchase={handlePurchase} />
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price}</p>
                <p>Stock: {item.stock}</p>
                <div>Cantidad: {item.quantity}</div>
                <button
                  onClick={() =>
                    addToCart({ ...item, quantity: item.quantity + 1 })
                  }
                >
                  +
                </button>
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>Total de la Compra: ${calculateTotal().toFixed(2)}</div>
      {cartItems.length === 0 && (
        <p style={{ color: "red" }}>
          No puedes comprar sin productos en el carrito.
        </p>
      )}
      {showForm ? (
        <div>
          {/* Botón Checkout debajo del formulario */}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <div>
          {/* Botón Terminar Compra cuando el formulario no está visible */}
          <button onClick={handlePurchase}>Terminar Compra</button>
        </div>
      )}
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default Cart;
