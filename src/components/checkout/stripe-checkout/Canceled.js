import React from "react";
import { withRouter } from "react-router-dom";
import Layout from "../../shared/Layout";

function Canceled({ history }) {
  return (
    <Layout>
      <div className="checkout">
        <h1>Payment failed</h1>
        <p>Payment was not succesful</p>
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

export default withRouter(Canceled);
