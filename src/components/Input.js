import React, { useEffect, useState } from "react";
import "../stylesheets/Input.css";
import Dollar from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";

const Input = ({ title, icon, placeholder, childToParentFunc, reset }) => {
  const [value, setValue] = useState("");
  const [iconSelected, setIconSelected] = useState(Dollar);

  useEffect(() => {
    if (icon !== "Dollar") {
      setIconSelected(Person);
    }

    if (reset && value) {
      setValue("");
    }
  }, [icon, reset, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    childToParentFunc(value);
  }, [value, childToParentFunc]);

  return (
    <article className="input-container">
      <span className="input-span">{title}</span>
      <input
        className="input"
        type="number"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <img src={iconSelected} className="input-logo" alt="input-logo" />
    </article>
  );
};

export default Input;
