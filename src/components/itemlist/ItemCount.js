import React, { useState } from "react";

function ItemCount({ initial, onAdd, cartItemCount }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      // Verifica que la cantidad sea mayor que 0 antes de decrementar
      setCount(count - 1);
      onAdd(-1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>Total: {cartItemCount}</p>
    </div>
  );
}

export default ItemCount;
