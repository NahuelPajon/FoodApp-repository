export function OrderDetails({ foods, orders, incrementCuenta }) {
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

      <OrderList
        foods={foods}
        orders={orders}
        incrementCuenta={incrementCuenta}
      />

    </aside>
  );
}

export function OrderList({ foods, orders, incrementCuenta }) {
  return (
    <div>
      {orders.map((order) => {
        const food = foods.find((food) => food.id === order.id);
        if (!food || order.quantity <= 0) return null; // Skip if food not found
        return <OrderListItem
          food={food}
          order={order}
          incrementCuenta={incrementCuenta}
        />;
      })}
    </div>
  );
}

export function OrderListItem({ food, order, incrementCuenta }) {
  
  const { name, price, stock, id, image } = food;

  const quantityOrdered = order.quantity;
  return (
    <div key={ id }>
      <img src={ image } alt={ name } style={{ width: "50px" }} />
      <p>{ name }</p>
      <p>X {quantityOrdered}</p>
    

      <p>Price: ${ price }</p>
    </div>
  );
}

export function TotalPrice() {
  return 1;
}

// const itemsFromList = [
//   {
//     id: 1,
//     name: "Hamburger",
//     price: 5.99,
//     image: "src/images/hamburger.png",
//     stock: 10,
//   },
//   {
//     id: 2,
//     name: "Pizza",
//     price: 8.99,
//     image: "src/images/pizza.png",
//     stock: 5,
//   },
//   {
//     id: 3,
//     name: "Sushi",
//     price: 12.99,
//     image: "src/images/sushi.png",
//     stock: 0,
//   },
// ];
