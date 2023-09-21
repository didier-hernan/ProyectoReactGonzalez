import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <p>No hay elementos en el carrito.</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
