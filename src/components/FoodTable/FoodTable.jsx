export function FoodTable({ foods }) {
  const filas = [];
  foods.forEach((food) => {
    filas.push(<FoodCell />);
  });

  return (
    <table>
      <tbody>{filas}</tbody>
    </table>
  );
}

export function FoodCell() {
  return (
  <td><FoodImage /></td>
);
}

export function FoodImage({ foods }) {
    return (
        <img src={foods.image} alt="" />
    );
}

export function FoodPrice() {}

export function StockIndicator() {}
