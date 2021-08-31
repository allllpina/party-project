import "./App.css";
import React from "react";
import { MiddleSection } from "./components/middle-section";
import { useState, useEffect } from "react";
import { Preloader } from "./components/preloader";
import { ThemeBtn } from "./components/theme-btn/theme-btn";
import { Description } from "./components/description";
// import { themes } from "./components/theme-btn/theme-btn";

// const ThemeContext = React.createContext(themes.dark);

function App() {
  const [globalDistplay, setGlobalDisplay] = useState("none");
  const [preloaderDistplay, setPreloaderDisplay] = useState("flex");
  setTimeout(() => {
    setPreloaderDisplay("none");
    setGlobalDisplay("block");
  }, 2000);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <div className="container" style={{ display: `${preloaderDistplay}` }}>
        <Preloader />
      </div>
      <section id="global" style={{ display: `${globalDistplay}` }}>
        <header id="main-header">
          <ThemeBtn />
        </header>
        <section id="tittle-section">
          <h1
            className="tittle"
            style={{ transform: `translateX(${offsetY * 0.3}%)` }}
          >
            Hello <br /> World!
          </h1>
        </section>
        <Description />
        <MiddleSection />
        <section id="info-section"></section>
      </section>
    </div>
  );
}

export default App;
