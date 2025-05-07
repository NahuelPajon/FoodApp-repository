import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./TitleHeader.module.css";

export function TitleHeader() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={darkMode ? styles.dark : styles.light}
      style={{
        paddingLeft: "15px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Food App</h1>
      <button className={darkMode ? "dark-mode" : "light-mode"} onClick={toggleTheme}>{darkMode ? "☀️" : "🌙"}</button>
    </div>
  );
}
