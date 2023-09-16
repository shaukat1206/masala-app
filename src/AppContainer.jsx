import React from "react";
import "./AppContainer.css";
import ProductCard from "./ProductCard";

function AppContainer({ products = [], addToCart = () => {} }) {
  return (
    <div className="appContainer">
      {products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            productImage={product.productImage}
            addToCart={addToCart}
            productId={product._id}
          />
        );
      })}
    </div>
  );
}

export default AppContainer;
