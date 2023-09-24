import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CheckoutForm.css";

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
      navigate(
        `/checkout/${orderNumber}/success?name=${name}&phone=${phone}&email=${email}&orderNumber=${orderNumber}`
      );
    }
  };

  return (
    <div className="checkout-form-container">
      {!completed ? (
        <div>
          <h3 className="checkout-form-heading">Finalizar Compra</h3>
          <form>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="checkout-input"
            />
            <label>Teléfono:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="checkout-input"
            />
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="checkout-input"
            />
            {formError && <p className="error-message">{formError}</p>}
            <button
              onClick={handleSubmit}
              disabled={!name || !phone || !email}
              className="checkout-button"
            >
              Finalizar Compra
            </button>
          </form>
        </div>
      ) : (
        <p className="checkout-success-message">
          Compra realizada. Gracias por tu compra.
        </p>
      )}
    </div>
  );
}

export default CheckoutForm;
