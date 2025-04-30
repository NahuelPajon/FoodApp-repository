export function OrderDetails() {
  return (
    <aside
      style={{
        float: "right",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ccc",
        padding: "14px",
        borderRadius: "8px",
        margin: "6px",
        width: "20%",
        textAlign: "center",
      }}
    >
      <h1>Cuenta</h1>
      <OrderList />
    </aside>
  );
}

export function OrderList() {
  // const itemsFromList = [
  //     {
  //       id: 1,
  //       name: "Hamburger",
  //       price: 5.99,
  //       image: "src/images/hamburger.png",
  //       stock: 10,
  //     },
  //     {
  //       id: 2,
  //       name: "Pizza",
  //       price: 8.99,
  //       image: "src/images/pizza.png",
  //       stock: 5,
  //     },
  //     {
  //       id: 3,
  //       name: "Sushi",
  //       price: 12.99,
  //       image: "src/images/sushi.png",
  //       stock: 0,
  //     },
  // ];

  return (
    <table>
      <tbody>
        <OrderListItem />
      </tbody>
    </table>
  );
}

export function OrderListItem() {
  return (
    <>
      {itemsFromList.map((food) => (
        <tr key={food.id}>
          <img src={food.image} alt={food.name} style={{ width: "50px" }} />
          <p>{food.name}</p>
          <p>Price: ${food.price}</p>
        </tr>
      ))}
    </>
  );
}

export function TotalPrice() {
  return 1;
}

const itemsFromList = [
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
];
