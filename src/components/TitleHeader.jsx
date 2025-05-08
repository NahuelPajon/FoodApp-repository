import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./TitleHeader.module.css";

export function TitleHeader() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={darkMode ? styles.dark : styles.light}
      style={{
        display: "flex",
        paddingLeft: "15px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1
        style={{
          width: "auto",
          height: "auto",
          fontSize: "40px",
        }}
      >
        Food App
      </h1>
      <button
        className={darkMode ? "dark-mode" : "light-mode"}
        style={{
          background: "none",
          border: "none",
          fontSize: "35px",
          cursor: "pointer",
          marginLeft: "auto",
          marginRight: "25px",
        }}
        onClick={toggleTheme}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
