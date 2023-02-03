import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./ItemPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":id" element={<ItemPage />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
