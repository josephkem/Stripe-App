import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../../shared/Layout";
import { CartContext } from "../../../context/CartContext";

function Success({ history }) {
  const { clearCart } = useContext(CartContext);
  useEffect(clearCart, []);
  return (
    <Layout>
      <div className="checkout">
        <h1>Thank you for your order</h1>
        <p>
          We are currently processing your order and we will send you a
          confirmation email shortly
        </p>
        <div>
          <button
            className="button is-black nomad-btn submit"
            onClick={() => history.push("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Success);
