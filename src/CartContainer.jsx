import React from "react";

function CartContainer({ products = [], cartItems = [] }) {
  const cartMapsItems = cartItems
    .map((productId) => {
      const foundProduct = products.find((p) => p._id === productId);
      return foundProduct;
    })
    .filter((p) => p);

  return (
    <div>
      {cartMapsItems.map((product, index) => {
        return (
          <div key={index}>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CartContainer;
