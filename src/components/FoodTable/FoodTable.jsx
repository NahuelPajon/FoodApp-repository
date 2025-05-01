import React from "react";

export function FoodTable({ foods, incrementCuenta }) {
  if (!foods || foods.length === 0) {
    return <p>No hay alimentos disponibles.</p>;
  }

  const columnsPerRow = 2; // Number of columns per row
  const filas = [];

  for (let i = 0; i < foods.length; i += columnsPerRow) {
    const fila = (
      <div key={i}>
        {foods.slice(i, i + columnsPerRow).map((food) => (
          <FoodCell key={food.id} food={food} incrementCuenta={incrementCuenta} />
        ))}
      </div>
    );
    filas.push(fila);
  }

  return (
    <div style={{float: "left"}}>
      {filas}
    </div>
  );
}

export function FoodCell({ food, incrementCuenta }) {
  const { name, price, stock, id } = food;
  return (
    <div
      onClick={() => incrementCuenta(id)}
      style={{
        backgroundColor: "#f9f9f9",
        display: "inline-block",
        border: "1px solid #ccc",
        padding: "14px",
        borderRadius: "8px",
        margin: "6px",
        width: "250px",
        textAlign: "center",
        verticalAlign: "top",
      }}
      >
      <FoodImage food={food} />
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        {name}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        >
        <p>Price: ${price}</p>
        <p
          style={{
            color: stock === 0 ? "red" : "green",
          }}
          >
          Stock: {stock}
        </p>
      </div>
    </div>
  );
}
          

export function FoodImage({ food }) {
  return (
    <img
      src={food.image}
      alt="food Image"
      style={{ width: "200px", height: "200px", opacity: food.stock === 0 ? 0.5: 1 }}
    />
  );
}

export function FoodPrice() {}

export function StockIndicator() {}
