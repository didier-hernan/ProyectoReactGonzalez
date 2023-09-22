import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Brieft from "../brief/brieft"; // Importa el componente Brieft

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

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

  return (
    <div>
      <h3>Carrito de Compras</h3>
      {showForm ? (
        <div></div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price}</p>
                <p>Stock: {item.stock}</p>
                <div>Cantidad: {item.quantity}</div>
                {/* Considera agregar botones para aumentar y disminuir la cantidad */}
                <button
                  onClick={() =>
                    addToCart({ ...item, quantity: item.quantity + 1 })
                  }
                >
                  +
                </button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
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
      {/* Si no hay productos en el carrito, muestra el mensaje de error */}
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
//import Brieft from "../brief/brieft"
