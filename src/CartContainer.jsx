import React from "react";
import "./CartContainer.css";

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
            <div className="Cart_img">
              <img
                className="CartContainer_img"
                src={product.productImage}
                alt=""
              />
            </div>
            <div className="cart__details">
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>

            <button className="cartCanncel_button">Canncel</button>
          </div>
        );
      })}
    </div>
  );
}

export default CartContainer;
