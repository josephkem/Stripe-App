import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../../helpers";

function CustomCheckout() {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const lelements = useElements();

  const cardHandleChange = (event) => {
    const { error } = event;

    setError(error ? error.message : "");
  };

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "Roboto, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#606060",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div>
      <h4>Enter Payment Details</h4>
      <div className="stripe-card">
        <CardNumberElement
          className="card-element"
          options={cardStyle}
          onChange={cardHandleChange}
        />
      </div>
      <div className="stripe-card">
        <CardExpiryElement
          className="card-element"
          options={cardStyle}
          onChange={cardHandleChange}
        />
      </div>
      <div className="stripe-card">
        <CardCvcElement
          className="card-element"
          options={cardStyle}
          onChange={cardHandleChange}
        />
      </div>
      <div className="submit-button">
        <button
          disabled={processing}
          className="button is-black nomad-btn submit"
          onClick={() => handleCheckout()}
        >
          {processing ? "PROCESSING" : "PAY"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default CustomCheckout;
