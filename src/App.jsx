import React, { useState, useEffect } from "react";
//import { FoodImage, FoodTable } from "./components/FoodTable/FoodTable";
import { TitleHeader } from "./components/TitleHeader";
//import { OrderDetails } from "./components/OrderDetails/OrderDetails";
//import { useTheme } from "./context/ThemeContext";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodDetails from "./pages/FoodDetails";
// import { useTheme } from "./context/ThemeContext";
// import styles from "./App.module.css";

function App() {
  return (
    <>
      <TitleHeader />
      <Routes>
        {/* you can use 👇 character (* or wildcard) to any other route
        in combination with the Navigate component you can redirect the user to a default page */}
        <Route path="/*" element={<Navigate replace to="/foods" />} />

        {/* You can compose the routes the routes wrapping the Route components */}
          
        {/* </Route> */}
        <Route path="/foods/*" element={<HomePage />}/>
        <Route path="/foods/details" element={<FoodDetails />} />
        <Route path="/foods/details/:id" element={<FoodDetails />} />
        {/* <Route path="foods/details/:productId" element={<FoodDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
