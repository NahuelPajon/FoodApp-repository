import React, { useState, useEffect } from "react";
import { FoodImage, FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";
import { useTheme } from "./context/ThemeContext";
import { Routes } from "react-router-dom";
// import { useTheme } from "./context/ThemeContext";
// import styles from "./App.module.css";

function App() {
  const { darkMode } = useTheme(); //Traigo el contexto del tema (si es oscuro o claro)

  const [foods, setFoods] = useState([]); // stored fetched foods
  const [orders, setOrders] = useState([]); // stored orders
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling state

  // Fetch de los FOODS desde el backend db.json
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const url = "http://localhost:3000/FOODS";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFoods(data); // actualiza el estado de foods
        setOrders(data.map(({ id }) => ({ id, quantity: 0 }))); // inicializa los orders
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#222" : "#f9f9f9";
    document.body.style.color = darkMode ? "#fff" : "black";
  }, [darkMode]);

  const incrementCuenta = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        const food = foods.find((f) => f.id === id);
        if (order.id === id && food && order.quantity < food.stock) {
          return { ...order, quantity: order.quantity + 1 };
        }
        return order;
      })
    );
  };

  const decrementCuenta = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        const food = foods.find((f) => f.id === id);
        if (order.id === id && food && order.quantity > 0) {
          return { ...order, quantity: order.quantity - 1 };
        }
        return order;
      })
    );
  };

  const deleteCuenta = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          return { ...order, quantity: 0 };
        }
        return order;
      })
    );
  };

  return (
    <div>
      <TitleHeader />
      <FoodTable foods={foods} incrementCuenta={incrementCuenta} decrementCuenta= {decrementCuenta} orders={orders} />
      <OrderDetails
        foods={foods}
        orders={orders}
        incrementCuenta={incrementCuenta}
        decrementCuenta={decrementCuenta}
        deleteCuenta={deleteCuenta}
      />
    </div>
  );
}

export default App;
