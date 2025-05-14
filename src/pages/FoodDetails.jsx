import { useParams } from "react-router-dom";

export default function FoodDetails() {
  const { id, name, price, image, details, ingredients, condiments } =
    useParams();
//   const { name, price, image, details, ingredients, condiments} = 

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} style={{ width: "200px", height: "200px" }} />
      <p>Precio: ${price}</p>
      <p>Detalles: {details}</p>
      <p>Ingredientes: {ingredients}</p>
      <p>Condimentos: {condiments}</p>
    </div>
  );
}
