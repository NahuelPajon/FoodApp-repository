import React, { useState, useEffect } from "react";
import { FoodImage, FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";

function App() {
  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fetch de los FOODS desde el backend db.json
  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch("http://localhost:3000/FOODS");
        const data = await response.json();
        setFoods(data); // actualiza el estado de foods
        setOrders(data.map(({ id }) => ({ id, quantity: 0 }))); // inicializa los orders
      } catch (error) {
        console.error("Error fetching FOODS:", error);
      }
    }

    getFoods();
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
    <>
      <TitleHeader />
      <FoodTable foods={foods} incrementCuenta={incrementCuenta} />
      <OrderDetails
        foods={foods}
        orders={orders}
        incrementCuenta={incrementCuenta}
        decrementCuenta={decrementCuenta}
        deleteCuenta={deleteCuenta}
      />
    </>
  );
}

export default App;
