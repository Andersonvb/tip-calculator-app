import React, { useEffect, useState } from "react";
import Btn from "../components/PercentageBtn.js";
import Input from "../components/PercentageInput.js";
import "../stylesheets/BtnSection.css";

const BtnSection = ({ childToParent, reset }) => {
  const [btnSelected, setBtnSelected] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [valueSelectedArray, setValueSelectedArray] = useState([
    btnSelected,
    inputValue,
  ]);

  const fiveBtn = () => {
    setBtnSelected("5");
  };

  const tenBtn = () => {
    setBtnSelected("10");
  };

  const fifteenBtn = () => {
    setBtnSelected("15");
  };

  const twentyFiveBtn = () => {
    setBtnSelected("25");
  };

  const fiftyBtn = () => {
    setBtnSelected("50");
  };

  const inputChildToParent = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    setValueSelectedArray([btnSelected, inputValue]);
  }, [btnSelected, inputValue]);

  useEffect(() => {
    childToParent(valueSelectedArray);
  }, [valueSelectedArray, childToParent]);

  useEffect(() => {
    if (reset) {
      setValueSelectedArray([]);
    }
  }, [reset]);

  return (
    <article className="btn-section">
      <span className="btn-section__header">Select Tip %</span>
      <section className="btn-container">
        <div className="btn-container__item">
          <Btn value="5%" btnSelected={fiveBtn} />
        </div>
        <div className="btn-container__item">
          <Btn value="10%" btnSelected={tenBtn} />
        </div>
        <div className="btn-container__item">
          <Btn value="15%" btnSelected={fifteenBtn} />
        </div>
        <div className="btn-container__item">
          <Btn value="25%" btnSelected={twentyFiveBtn} />
        </div>
        <div className="btn-container__item">
          <Btn value="50%" btnSelected={fiftyBtn} />
        </div>
        <div className="btn-container__item">
          <Input childToParentFunc={inputChildToParent} />
        </div>
      </section>
    </article>
  );
};

export default BtnSection;
