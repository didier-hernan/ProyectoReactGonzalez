import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Brieft from "../brief/brieft";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/clients";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      return;
    }

    createOrder();
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleDecreaseQuantity = (productId) => {
    const productInCart = cartItems.find((item) => item.id === productId);
    if (productInCart) {
      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      } else {
        removeFromCart(productId);
      }
    }
  };

  const createOrder = async () => {
    const order = {
      buyer: {
        name: "Abel",
        phone: "1155889966",
        email: "abel@abel.com",
      },
      items: cartItems,
      total: calculateTotal(),
    };

    const orderCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderCollection, order);
      console.log("Orden creada con ID:", docRef.id);
      navigate(`/checkout/${docRef.id}/form`); // Redirige al formulario con el número de orden
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div>
      <h3>Carrito de Compras</h3>
      {showForm ? (
        <Brieft onPurchase={handlePurchase} />
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

      {showForm ? (
        <Brieft onPurchase={handlePurchase} />
      ) : (
        <button onClick={handlePurchase}>Terminar Compra</button>
      )}

      {cartItems.length === 0 && (
        <p style={{ color: "red" }}>
          No puedes comprar sin productos en el carrito.
        </p>
      )}
      <Link to="/">Seguir comprando</Link>
    </div>
  );
}

export default Cart;
