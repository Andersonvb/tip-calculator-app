import React, { useEffect, useState } from "react";
import "../stylesheets/PercentageInput.css";

const PercentageBtn = ({ childToParentFunc }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    childToParentFunc(value);
  }, [value, childToParentFunc]);

  return (
    <input
      className="percentage-input"
      type="number"
      placeholder="Custom"
      onChange={handleChange}
    />
  );
};

export default PercentageBtn;
