// CartContext.js
import React, { createContext, useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/clients";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualizar su cantidad
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // Eliminar el producto del carrito
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  const createOrder = async () => {
    // Crea el objeto de orden y lo guarda en Firebase Firestore
    const order = {
      buyer: {
        name: "Abel",
        phone: "1155889966",
        email: "abel@abel.com",
      },
      items: cartItems,
      total: calculateTotal(),
    };

    try {
      const orderCollection = collection(db, "orders");
      const docRef = await addDoc(orderCollection, order);
      console.log("Orden creada con ID:", docRef.id);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        createOrder,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
