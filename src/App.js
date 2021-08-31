import "./App.css";
import React from "react";
import { MiddleSection } from "./components/middle-section";
import { useState, useEffect } from "react";
import { Preloader } from "./components/preloader";
import { Description } from "./components/description";

function App() {
  const [globalDistplay, setGlobalDisplay] = useState("none");
  const [preloaderDistplay, setPreloaderDisplay] = useState("flex");
  const [darkMode, setDarkMode] = useState(false);

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
    <div>
      <div className="container" style={{ display: `${preloaderDistplay}` }}>
        <Preloader />
      </div>
      <section id="global" style={{ display: `${globalDistplay}` }}>
        <header id="main-header" className={darkMode ? "light-header" : "dark"}>
          <div className="wrapper">
            <span id={darkMode ? "light-text" : "dark-text"}>☽</span>
            <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span
                  className="slider round"
                  id={darkMode ? "special" : "dark-text"}
                ></span>
              </label>
            </div>
            <span id={darkMode ? "light-text" : "dark-text"}>☀︎</span>
          </div>
        </header>
        <section
          className={darkMode ? "light-background-top" : "dark-background-top"}
          id="tittle-section"
        >
          <h1
            className="tittle"
            id={darkMode ? "light-text" : "dark-text"}
            style={{ transform: `translateX(${offsetY * 0.3}%)` }}
          >
            Hello <br /> World!
          </h1>
        </section>
        <Description />
        <MiddleSection />
        <section
          className={
            darkMode ? "light-background-bottom" : "dark-background-bottom"
          }
          id="info-section"
        ></section>
      </section>
    </div>
  );
}

export default App;
