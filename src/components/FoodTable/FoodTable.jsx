import React from "react";
import styles from "./FoodTable.module.css"; // Importing CSS module for styles
import { useTheme } from "../../context/ThemeContext.jsx";
import { Link } from "react-router-dom";

export function FoodTable({ foods, incrementCuenta, decrementCuenta, orders }) {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)
  const columnsPerRow = 3; // Number of columns per row
  const filas = [];
  if (!foods || foods.length === 0) {
    return <p>No hay alimentos disponibles.</p>;
  }

  for (let i = 0; i < foods.length; i += columnsPerRow) {
    const fila = (
      <div key={i}>
        {foods.slice(i, i + columnsPerRow).map((food) => (
          <FoodCell
            key={food.id}
            food={food}
            incrementCuenta={incrementCuenta}
            decrementCuenta={decrementCuenta}
            orders={orders}
          />
        ))}
      </div>
    );
    filas.push(fila);
  }

  return (
    <div
      className={`${darkMode ? styles.dark : styles.light}`}
      style={{ float: "left" }}
    >
      {filas}
    </div>
  );
}

export function FoodCell({ food, incrementCuenta, decrementCuenta, orders }) {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)
  
  const order = orders.find((order) => food.id === order.id);
  const quantityOrdered = order.quantity;

  const { name, price, stock, id } = food;
  let stockCelda = stock - quantityOrdered;

  return (
    <button
      className={`${darkMode ? styles.dark : styles.light}`}
      onClick={() => incrementCuenta(id)}
      onContextMenu={(e) => {
        e.preventDefault();
        decrementCuenta(id)
      }}
      style={{
        display: "inline-block",
        border: "1px solid #ccc",
        padding: "14px",
        borderRadius: "8px",
        margin: "6px",
        width: "300px",
        height: "350px",
        textAlign: "center",
        verticalAlign: "top",
        cursor: "pointer",
        opacity: stockCelda === 0 ? 0.5 : 1,
        pointerEvents: stockCelda === 0 ? "none" : "auto",
        transition: "box-shadow 0.2s ease-in-out",
      }}
      // Adding hover effect for box shadow
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = darkMode ? "0 4px 8px rgba(255, 255, 255, 0.4)" : "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <FoodImage food={food} />
      <p
        className={`${darkMode ? styles.dark : styles.light}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {name}
      </p>
      <div
        className={`${darkMode ? styles.dark : styles.light}`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Precio: ${price}</p>
        <Link to={`/foods/details/${food.id}`}>Detalles</Link>
        <p
          className={`${darkMode ? styles.dark : styles.light}`}
          style={{
            color: stockCelda === 0 ? "red" : "green",
          }}
        >
          Stock: {stockCelda}
        </p>
      </div>
    </button>
  );
}

export function FoodImage({ food }) {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)
  return (
    <img
      className={`${darkMode ? styles.dark : styles.light}`}
      src={food.image}
      alt="food Image"
      style={{ width: "200px", height: "200px" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1.0)";
      }}
    />
  );
}

export function FoodPrice() {}

export function StockIndicator() {}
