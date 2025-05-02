import React, { useState } from "react";
import { FoodImage, FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";

const FOODS = [
  {
    id: 1,
    name: "Hamburger",
    price: 5.99,
    image: "src/images/hamburger.png",
    stock: 10,
  },
  {
    id: 2,
    name: "Pizza",
    price: 8.99,
    image: "src/images/pizza.png",
    stock: 5,
  },
  {
    id: 3,
    name: "Sushi",
    price: 12.99,
    image: "src/images/sushi.png",
    stock: 0,
  },
  {
    id: 4,
    name: "Empanadas",
    price: 4.99,
    image: "src/images/empanada.png",
    stock: 30,
  },
];

// TODO: FOODS need to be imported from a JSON file with a fetch request

// TODO: list FOODS needs to be an state variable
// TODO: add USEFFECT to reflect the changes in the state variable that is obtained from the fetch request

function App() {
  const [orders, setOrders] = useState(
    FOODS.map(({ id }) => ({ id, quantity: 0 }))
  );

  const incrementCuenta = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          if (
            FOODS.find((food) => food.id === id).stock > 0 &&
            order.quantity < FOODS.find((food) => food.id === id).stock
          ) {
            // logic to add order if stock
            return {
              ...order,
              quantity: order.quantity + 1,
            };
          }
        }
        return order;
      })
    );
  };

  const decrementCuenta = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          if (
            FOODS.find((food) => food.id === id).stock > 0 &&
            order.quantity <= FOODS.find((food) => food.id === id).stock
          ) {
            // logic to remove order from the OrderList
            return {
              ...order,
              quantity: order.quantity - 1,
            };
          }
        }
        return order;
      })
    );
  };

  const deleteCuenta = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          if (
            FOODS.find((food) => food.id === id).stock > 0 &&
            order.quantity <= FOODS.find((food) => food.id === id).stock
          ) {
            // logic to remove order from the OrderList
            return {
              ...order,
              quantity: order.quantity - order.quantity,
            };
          }
        }
        return order;
      })
    );
  };

  return (
    <>
      <TitleHeader />
      <FoodTable foods={FOODS} incrementCuenta={incrementCuenta} />
      <OrderDetails
        foods={FOODS}
        orders={orders}
        incrementCuenta={incrementCuenta}
        decrementCuenta={decrementCuenta}
        deleteCuenta={deleteCuenta}
      />
    </>
  );
}

export default App;
