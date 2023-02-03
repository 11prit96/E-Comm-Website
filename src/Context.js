import { createContext } from "react";
import { useState, useEffect } from "react";

export const ItemsContext = createContext();

const Context = (props) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      });
  }, []);

  return <ItemsContext.Provider value={item}>
    {props.children}
  </ItemsContext.Provider>;
};

export default Context;
