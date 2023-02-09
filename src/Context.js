import { createContext, useContext } from "react";
import { useReducer, useState, useEffect } from "react";
import { cartReducer } from "./Reducers";

const ItemsContext = createContext();

const defaultState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("items")) || [],
  grandTotal: 0,
  isLoading: true
}

// to be used in index.js file for wrapping App
const Context = (props) => {
  const [items, setItems] = useState([])

  const [state, dispatch] = useReducer(cartReducer, defaultState);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        dispatch({type: "GET_PRODUCTS", payload: json})
        setLoading(false)
      });
  }, []);

  const addItemToCartHandler = ( item ) => {
    dispatch({
      type: "ADD",
      item: item
    })
  }

  const calculateTotal = (price) => {
    dispatch({type: "CALCULATE_TOTAL",payload: price})
  }

  const removeItemFromCartHandler = ( id ) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  }

  const clearCart = () => {
    dispatch({
      type: "CLEAR"
    })
  }
  
  const cartContext = {
    products: items,
    grandTotal: state.grandTotal,
    cart: state.cart,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    calculateTotal: calculateTotal,
    clearCart: clearCart,
    isLoading: loading
  }

  return <ItemsContext.Provider value={cartContext}>
    {props.children}
  </ItemsContext.Provider>;
};

export default Context;

export const ItemList = () => {
  return useContext(ItemsContext)
}