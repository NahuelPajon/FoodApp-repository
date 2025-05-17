import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function FoodDetails() {
  const [foods, setFoods] = useState([]); // stored fetched foods
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling state

  const { id } = useParams(); // El ID viene como string desde la URL

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
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const food = foods.find((f) => f.id === parseInt(id));
  if (!food) return <p>Comida no encontrada.</p>;
  //   const { name, price, image, details, ingredients, condiments } = food;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{food.name}</h1>
      <img
        src={food.image}
        alt={food.name}
        style={{ width: "200px", height: "200px" }}
      />
      <p>Precio: ${food.price}</p>
      <p>Detalles: {food.details}</p>
      <p>Ingredientes: {food.ingredients}</p>
      <p>Condimentos: {food.condiments}</p>
    </div>
  );
}
