import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <input type="text" />
    </div>
  );
}

export default Search;
