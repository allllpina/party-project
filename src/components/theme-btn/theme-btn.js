import React from "react";
import "./theme-btn.css";

export const themes = {
  light: {
    first: "#feffc1",
    second: "fa7f67",
    third: "#000000",
  },
  dark: {
    first: "#6200ff",
    second: "#010040",
    third: "#f0ffff",
  },
};

const themeChange = () => {
  alert();
};

export function ThemeBtn() {
  return (
    <button id="button-theme" onClick={themeChange}>
      Сменить тему
    </button>
  );
}
