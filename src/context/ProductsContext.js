import React, { createContext, useState } from "react";
import SHOP_DATA from "../shop/shop-data";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);
  return (
    <ProductsContextProvider.Provider value={{ products }}>
      {children}
    </ProductsContextProvider.Provider>
  );
};

export default ProductsContextProvider;
