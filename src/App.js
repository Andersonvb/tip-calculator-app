import "./App.css";
import Input from "./components/Input.js";
import BtnSection from "./components/BtnSection.js";
import TotalSection from "./components/TotalSection.js";

function App() {
  return (
    <main className="main-container">
      <h1 className="header">SPLITTER</h1>
      <div className="container">
        <Input title="Bill" icon="dollar" placeholder="" />
        <BtnSection />
        <Input title="Number of people" icon="people" placeholder="0" />
        <TotalSection />
      </div>
    </main>
  );
}

export default App;
