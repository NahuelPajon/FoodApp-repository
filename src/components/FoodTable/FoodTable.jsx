import React from "react";



export function FoodTable({ foods }) {
  const filas = [];
  foods.forEach((food) => {
    filas.push(
    <tr key={food.name}>
      <FoodCell food={food} />
    </tr >
  )});

  return (
    <table>
      <tbody>{filas}</tbody>
    </table>
  );
}

export function FoodCell({ food }) {
  return (
    <td>
      <FoodImage food={food}/>
    </td>
  );
}

export function FoodImage({ food }) {
  <img src={food.image} alt="" />;
}

export function FoodPrice() {}

export function StockIndicator() {}
