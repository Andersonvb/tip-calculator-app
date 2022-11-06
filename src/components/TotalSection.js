import React, { useEffect } from "react";
import "../stylesheets/TotalSection.css";

const TotalSection = ({ amount, total, resetFunc }) => {
  const handleClick = () => {
    resetFunc();
  };

  return (
    <article className="total-container">
      <div className="info-container">
        <span className="info-container__span-1">Tip Amount</span>
        <span className="info-container__span-2">/ person</span>
        <span className="info-container__span-3">{"$" + amount}</span>
      </div>

      <div className="info-container">
        <span className="info-container__span-1">Total</span>
        <span className="info-container__span-2">/ person</span>
        <span className="info-container__span-3">{"$" + total}</span>
      </div>

      <button
        onClick={handleClick}
        className={
          amount === 0
            ? "total-container__btn disabled"
            : "total-container__btn"
        }
      >
        RESET
      </button>
    </article>
  );
};

export default TotalSection;
