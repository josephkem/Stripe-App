import React, { useState, useContext } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../../context/CartContext";
import { fetchFromAPI } from "../../../helpers";

function StripeCheckout() {
  const [email, setEmail] = useState("");
  const { cartItems } = useContext(CartContext);

  return (
    <form onSubmit={handleGuestCheckout}>
      <div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          className="nomad-input"
        />
      </div>
      <div className="submit-btn">
        <button className="button is-black nomad-btn submit">Checkout</button>
      </div>
    </form>
  );
}

export default StripeCheckout;
