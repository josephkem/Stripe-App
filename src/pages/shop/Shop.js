import React, { useContext } from "react";
import Layout from "../../components/shared/Layout";
import FeaturedProduct from "../../components/shared/FeaturedProduct";
import { ProductsContext } from "../../context/ProductsContext";
import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
}

export default Shop;
