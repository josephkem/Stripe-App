import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Layout from "../shared/Layout";
import StripeCheckout from "./stripe-checkout/StripeCheckout";
import ShippingAddress from "./custom-checkout/ShippingAddress";
import "./checkout.styles.scss";

function Checkout() {
  const { itemCount, total } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);
  const addressShown = {
    display: shipping ? "none" : "black",
  };
  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount Due: $${total}`}</h4>
        <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
