import React from "react";
import { FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
import { OrderDetails } from "./components/OrderDetails/OrderDetails";

function App() {
  return (
    <>
      <TitleHeader />
      <FoodTable foods={foods} />
      <OrderDetails />
    </>
  );
}

const foods = [
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
    image: "src/images/Pizza.jpeg",
    stock: 5,
  },
  {
    id: 3,
    name: "Sushi",
    price: 12.99,
    image: "src/images/Sushi.jpeg",
    stock: 0,
  },
];

export default App;
