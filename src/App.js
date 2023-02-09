import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./ItemPage";
import { ItemList } from "./Context";
import Cart from "./Cart";
import Checkout from "./Checkout";

const App = () => {
  const { cart, grandTotal, calculateTotal } = ItemList();

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price,0);

    calculateTotal(total);

    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":id" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout total={grandTotal} />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
