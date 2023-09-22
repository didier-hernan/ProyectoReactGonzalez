import React, { useState } from "react";

function Brieft({ onPurchase }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [completed, setCompleted] = useState(false);
  const [formError, setFormError] = useState(""); // Estado para controlar el mensaje de error del formulario

  const handlePurchase = () => {
    if (!name || !phone || !email) {
      // Si alguno de los campos está vacío, muestra el mensaje de error
      setFormError("Rellene todos los campos");
    } else {
      // Realiza validación de datos aquí, por ejemplo, asegúrate de que los campos no estén vacíos
      // Después de validar, marca la compra como completada y reinicia el mensaje de error
      setCompleted(true);
      setFormError("");
      onPurchase(name, phone, email);
    }
  };

  return (
    <div>
      {!completed ? (
        <div>
          <h3>Finalizar Compra</h3>
          <form>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Teléfono:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Mostrar el mensaje de error si existe */}
            {formError && <p style={{ color: "red" }}>{formError}</p>}
            <button
              onClick={handlePurchase}
              disabled={!name || !phone || !email}
            >
              Finalizar Compra
            </button>
          </form>
        </div>
      ) : (
        <p>Compra realizada. Gracias por tu compra.</p>
      )}
    </div>
  );
}

export default Brieft;
