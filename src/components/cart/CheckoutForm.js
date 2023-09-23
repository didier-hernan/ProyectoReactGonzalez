import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CheckoutForm() {
  const { orderNumber } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [completed, setCompleted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      setFormError("Rellene todos los campos");
    } else {
      // Redirige a la página de éxito con los datos de compra y número de orden en la URL
      navigate(
        `/checkout/${orderNumber}/success?name=${name}&phone=${phone}&email=${email}&orderNumber=${orderNumber}`
      );
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
            {formError && <p style={{ color: "red" }}>{formError}</p>}
            <button onClick={handleSubmit} disabled={!name || !phone || !email}>
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

export default CheckoutForm;
