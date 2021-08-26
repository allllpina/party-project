import "./App.css";
import { MiddleSection } from "./components/middle-section";

function App() {
  return (
    <div className="App">
      <section id="tittle-section">
        <h1>
          Hello <br /> World!
        </h1>
      </section>
      <MiddleSection />
      <section id="info-section"></section>
    </div>
  );
}

export default App;
