import React from "react";
import styles from "./OrderDetails.module.css"; // Importing CSS module for styles
import { useTheme } from "../../context/ThemeContext.jsx";

export function OrderDetails({
  foods,
  orders,
  incrementCuenta,
  decrementCuenta,
  deleteCuenta,
}) {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)
  let totalPrices = orders.reduce((acc, order) => {
    const food = foods.find((food) => food.id === order.id);
    if (!food || order.quantity <= 0) return acc;
    return acc + food.price * order.quantity;
  }, 0);

  totalPrices = totalPrices.toFixed(2);

  return (
    <aside
      className={`${darkMode ? styles.dark : styles.light}`}
      style={{
        float: "right",
        // backgroundColor: "#f9f9f9",
        border: "1px solid #ccc",
        padding: "14px",
        borderRadius: "8px",
        margin: "6px",
        width: "25%",
        textAlign: "center",
      }}
    >
      <h1
        className={`${darkMode ? styles.dark : styles.light}`}
        style={{ borderBottom: "1px solid #ccc", paddingBottom: "5%" }}
      >
        Cuenta
      </h1>

      <OrderList
        className={`${darkMode ? styles.dark : styles.light}`}
        foods={foods}
        orders={orders}
        incrementCuenta={incrementCuenta}
        decrementCuenta={decrementCuenta}
        deleteCuenta={deleteCuenta}
      />

      <div
        className={`${darkMode ? styles.dark : styles.light}`}
        style={{
          marginTop: "10%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <h1 className={`${darkMode ? styles.dark : styles.light}`}>Total</h1>
        <h1 className={`${darkMode ? styles.dark : styles.light}`}>
          $ {totalPrices}
        </h1>
      </div>
    </aside>
  );
}

export function OrderList({
  foods,
  orders,
  incrementCuenta,
  decrementCuenta,
  deleteCuenta,
}) {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)

  return (
    <div className={`${darkMode ? styles.dark : styles.light}`}>
      {orders.map((order) => {
        const food = foods.find((food) => food.id === order.id);

        if (!food || order.quantity <= 0) return null; // Skip if food not found or quantity is 0

        return (
          <OrderListItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
            key={order.id}
            food={food}
            order={order}
            incrementCuenta={incrementCuenta}
            decrementCuenta={decrementCuenta}
            deleteCuenta={deleteCuenta}
          />
        );
      })}
    </div>
  );
}

export function OrderListItem({
  food,
  order,
  incrementCuenta,
  decrementCuenta,
  deleteCuenta,
  style,
}) {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)

  const { name, price, stock, id, image } = food;

  const quantityOrdered = order.quantity; // Get the quantity ordered from the order object
  const priceOrdered = (price * quantityOrdered).toFixed(2); // Calculate the total price for the ordered quantity

  return (
    <div
      className={`${darkMode ? styles.dark : styles.light}`}
      key={id}
      style={style}
    >
      <img src={image} alt={name} style={{ width: "50px" }} />
      {/* <p>{name}</p> */}
      <p>X {quantityOrdered}</p>
      <button
        className={`${darkMode ? styles.dark : styles.light}`}
        onClick={() => decrementCuenta(id)}
        style={{
          border: "none",
          width: "30px",
          height: "30px",
          // backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        ➖
      </button>
      <button
        className={`${darkMode ? styles.dark : styles.light}`}
        onClick={() => incrementCuenta(id)}
        style={{
          border: "none",
          width: "30px",
          height: "30px",
          // backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        ➕
      </button>
      <p>Price: ${priceOrdered}</p>
      <button
        className={`${darkMode ? styles.dark : styles.light}`}
        onClick={() => deleteCuenta(id)}
        style={{
          border: "none",
          width: "30px",
          height: "30px",
          // backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
    </div>
  );
}

export function TotalPrice() {
  return 1;
}
