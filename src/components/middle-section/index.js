import React from "react";
import "./style.css";
import photo1 from "./imgs/pic-html-on-page.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export function MiddleSection() {
  Aos.init({ duration: 1500 });
  return (
    <section id="cards-section">
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="photo" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="photo" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="photo" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
      <div className="info-card" data-aos="fade-left">
        <img src={photo1} alt="photo" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
    </section>
  );
}
