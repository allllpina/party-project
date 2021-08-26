import React from "react";
import "./style.css";
import photo1 from "./imgs/pic-html-on-page.jpg";

export function MiddleSection() {
  return (
    <section id="cards-section">
      <div className="info-card">
        <img src={photo1} alt="photo" className="cardPhoto"></img>
        <h1>WEB Developers</h1>
        <button>More</button>
      </div>
    </section>
  );
}
