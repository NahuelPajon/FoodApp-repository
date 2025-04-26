import React from "react";
import { FoodImage, FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";

function App() {
  return (
    <>
      <TitleHeader />
      <FoodTable foods={FOODS}/>
      <OrderDetails />
    </>
  );
}

const FOODS = [
  {
    id: 1,
    name: "Hamburger",
    price: 5.99,
    image: "src/images/Hamburger.jpeg",
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
];

export default App;
