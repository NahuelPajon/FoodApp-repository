import React, { useState, useEffect } from "react";
import { FoodImage, FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
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
    <ThemeProvider>
      <TitleHeader />
      <FoodTable foods={foods} incrementCuenta={incrementCuenta} />
      <OrderDetails
        foods={foods}
        orders={orders}
        incrementCuenta={incrementCuenta}
        decrementCuenta={decrementCuenta}
        deleteCuenta={deleteCuenta}
      />
    </ThemeProvider>
  );
}

export default App;
