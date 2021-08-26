import "./App.css";
import { MiddleSection } from "./components/middle-section";
import { useState, useEffect } from "react";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(handleScroll);
  }, []);
  return (
    <div className="App">
      <section id="tittle-section">
        <h1
          className="tittle"
          style={{ transform: `translateX(${offsetY * 0.3}%)` }}
        >
          Hello <br /> World!
        </h1>
      </section>
      <MiddleSection />
      <section id="info-section"></section>
    </div>
  );
}

export default App;
