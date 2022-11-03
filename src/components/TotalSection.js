import React from "react";
import "../stylesheets/TotalSection.css";

const TotalSection = () => {
  return (
    <article className="total-container">
      
      <div className="info-container">
        <span className="info-container__span-1">Tip Amount</span>
        <span className="info-container__span-2">/ person</span>
        <span className="info-container__span-3">$4.27</span>
      </div>

      <div className="info-container">
        <span className="info-container__span-1">Total</span>
        <span className="info-container__span-2">/ person</span>
        <span className="info-container__span-3">$32.79</span>
      </div>

      <button className="total-container__btn">RESET</button>
    </article>
  );
};

export default TotalSection;
