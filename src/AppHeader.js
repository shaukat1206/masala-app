import React from "react";
import "./AppHeader.css";
import Logo from "./Logo";
import Search from "./Search";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

function AppHeader({ cartItems = [] }) {
  const navigate = useNavigate();

  return (
    <div className="appHeader">
      <Logo />
      <Search />
      <div>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img
            style={{
              width: "30px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54LiNT8JRcOrRvBS_Y8KMDT8MHTD28YpQJA&usqp=CAU"
            alt=""
          />
        </button>

        <div>{cartItems.length}</div>
      </div>

      <div>
        <PrimaryButton text={"Login"} />
      </div>
    </div>
  );
}

export default AppHeader;
