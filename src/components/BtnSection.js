import React from "react";
import Btn from "../components/PercentageBtn.js";
import Input from "../components/PercentageInput.js";
import "../stylesheets/BtnSection.css";

const BtnSection = () => {
  return (
    <article className="btn-section">
      <span className="btn-section__header">Select Tip %</span>
      <section className="btn-container">
        <div className="btn-container__item">
          <Btn value="5%" />
        </div>
        <div className="btn-container__item">
          <Btn value="10%" />
        </div>
        <div className="btn-container__item">
          <Btn value="15%" />
        </div>
        <div className="btn-container__item">
          <Btn value="25%" />
        </div>
        <div className="btn-container__item">
          <Btn value="50%" />
        </div>
        <div className="btn-container__item">
          <Input />
        </div>
      </section>
    </article>
  );
};

export default BtnSection;
