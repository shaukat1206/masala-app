import React from "react";
import "./logo.css";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <button
      className="logo"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvAU6N_ZOtd2vOZhfHnfYX4pKshprQ2Zp8w&usqp=CAU" />
      <h3> Masala app</h3>
    </button>
  );
}

export default Logo;
