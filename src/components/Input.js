import React from "react";
import "../stylesheets/Input.css";
import Dollar from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";

const BillInput = ({ title, icon, placeholder }) => {

  let iconSelected;
  if (icon === "dollar") {
    iconSelected = Dollar;
  } else {
    iconSelected = Person;
  }

  return (
    <article class="input-container">
      <span className="input-span">{title}</span>
      <input className="input" type="number" placeholder={placeholder} />
      <img src={iconSelected} className="input-logo" alt="input-logo" />
    </article>
  );
};

export default BillInput;
