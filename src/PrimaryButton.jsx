import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ text = "", onClick = () => {} }) {
  return (
    <button onClick={onClick} className="primaryButton">
      {text}
    </button>
  );
}

export default PrimaryButton;
