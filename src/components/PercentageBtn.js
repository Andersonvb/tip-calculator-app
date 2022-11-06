import React from "react";
import "../stylesheets/PercentageBtn.css";

const PercentageBtn = ({ value, btnSelected }) => {
  const handleClick = () => {
    btnSelected();
  };

  return (
    <button className="btn" onClick={handleClick}>
      {value}
    </button>
  );
};

export default PercentageBtn;
