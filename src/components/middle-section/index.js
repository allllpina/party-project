import { React, useState } from "react";
import "./style.css";
import photo1 from "./imgs/pic-html-on-page.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function MiddleSection() {
  Aos.init({ duration: 1500 });
  const [left, setLeft] = useState(-200);
  const openModal = () => {
    setLeft(0);
    window.document.body.style.overflowY = "hidden";
  };
  const closeModal = () => {
    setLeft(-200);
    window.document.body.style.overflowY = "scroll";
  };
  return (
    <section id="cards-section">
      <div className="modal" style={{ left: `${left}%` }}>
        <div className="innerModal">
          <div className="modalInfo">
            <h1>Lorem</h1>
            <p></p>
          </div>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="img" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button onClick={openModal}>More</button>
      </div>
    </section>
  );
}
