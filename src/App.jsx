import React, { useState} from "react";
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

function App() {
  const [orders, setOrders] = useState(FOODS.map(({ id }) => ({ id, quantity: 0 })));
  console.log(orders);
  return (
    <>
      <TitleHeader />
      <FoodTable foods={FOODS} />
      <OrderDetails />
    </>
  );
}

export default App;
