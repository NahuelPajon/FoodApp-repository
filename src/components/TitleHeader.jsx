import React from "react";
import { useTheme } from "../context/ThemeContext";

export function TitleHeader() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{
        paddingLeft: "15px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Food App</h1>
      <button onClick={toggleTheme}>{darkMode ? "☀️" : "🌙"}</button>
    </div>
  );
}
