import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Layout from "../../components/shared/Layout";
import CartItems from "./CartItems";
import Total from "./Total";
import "./cart-page.styles.scss";

function CartPage() {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your Cart Is empty</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItems {...item} key={item.id} />
                ))}
              </div>
              <Total itemCount={itemCount} total={total} />
            </div>
          </>
        )}
      </>
    </Layout>
  );
}

export default CartPage;
