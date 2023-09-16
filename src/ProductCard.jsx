import React from "react";
import "./ProductCard.css";
import PrimaryButton from "./PrimaryButton";

function ProductCard({
  productId = null,
  name = "",
  productImage = "",
  price = 500,
  addToCart = () => {},
}) {
  return (
    <div className="card">
      <img src={productImage} alt="" />
      <div className="card__details">
        <h3 className="card__details__name">{name}</h3>
        <div className="card__details__price">{price}</div>
        <PrimaryButton text="BUY" onClick={() => addToCart(productId)} />
      </div>
    </div>
  );
}

export default ProductCard;
