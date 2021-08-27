import "./App.css";
import React, { useContext } from "react";
import { MiddleSection } from "./components/middle-section";
import { useState, useEffect } from "react";
import { Preloader } from "./components/preloader";
import { ThemeBtn } from "./components/theme-btn/theme-btn";
// import { themes } from "./components/theme-btn/theme-btn";

// const ThemeContext = React.createContext(themes.dark);

function App() {
  // const theme = useContext(ThemeContext);
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
    // <ThemeContext.Provider value={themes}>
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
            // style={{ color: theme.third }}
          >
            Hello <br /> World!
          </h1>
        </section>
        <MiddleSection />
        <section id="info-section"></section>
      </section>
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
