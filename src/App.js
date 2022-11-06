import "./App.css";
import Input from "./components/Input.js";
import BtnSection from "./components/BtnSection.js";
import TotalSection from "./components/TotalSection.js";
import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState([]);
  const [totalValues, setTotalValues] = useState([0.0, 0.0]);
  const [reset, setReset] = useState(false);

  const billChildToParent = (value) => {
    setBill(value);
  };

  const peopleChildToParent = (value) => {
    setPeople(value);
  };

  const btnChildToParent = (value) => {
    setPercentage(value);
  };

  const resetData = () => {
    setReset(true);
  };

  const afterReset = () => {
    setInterval(() => {
      setReset(false);
    }, 500);
  };

  useEffect(() => {
    let amountValue;
    let totalValue;
    let billValue;
    let peopleValue;
    let percentageValue;

    if (percentage[1]) {
      percentageValue = percentage[1];
    } else {
      percentageValue = percentage[0];
    }

    billValue = parseFloat(bill);
    peopleValue = parseFloat(people);
    percentageValue = parseFloat(percentageValue);

    amountValue = (billValue * percentageValue) / 100 / peopleValue;
    totalValue =
      (billValue + (billValue * percentageValue) / 100) / peopleValue;

    if (!isNaN(amountValue)) {
      setTotalValues([amountValue.toFixed(2), totalValue.toFixed(2)]);
    } else if (reset) {
      setPercentage([]);
      setTotalValues([0, 0]);
    }
  }, [bill, people, percentage]);

  useEffect(() => {
    console.log("Reset: ", bill, people, percentage, totalValues);
    console.log("ResetValue: ", reset);
  }, [totalValues]);

  return (
    <main className="main-container">
      <h1 className="header">SPLITTER</h1>
      <div className="container">
        <div className="container__input-section">
          <Input
            title="Bill"
            icon="Dollar"
            placeholder="0"
            childToParentFunc={billChildToParent}
            reset={reset}
            afterReset={afterReset}
          />
          <BtnSection childToParent={btnChildToParent} reset={reset} />
          <Input
            title="Number of people"
            icon="people"
            placeholder="0"
            childToParentFunc={peopleChildToParent}
            reset={reset}
            afterReset={afterReset}
          />
        </div>
        <TotalSection
          amount={totalValues[0]}
          total={totalValues[1]}
          resetFunc={resetData}
        />
      </div>
    </main>
  );
}

export default App;
