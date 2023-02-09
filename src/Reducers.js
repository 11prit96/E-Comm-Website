export const cartReducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return { ...state, products: action.payload };
  }

  if(action.type === "CALCULATE_TOTAL"){
    return {...state, grandTotal: action.payload}
  }

  if (action.type === "ADD") {
    const existingItemIndex = state.cart.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    const existingCartItem = state.cart[existingItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.cart];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.cart.concat({ ...action.item, quantity: 1});
    }

    return {
      ...state,
      cart: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.cart.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.cart[existingItemIndex];
    let updatedItems;

    if (existingItem.quantity === 1) {
      updatedItems = state.cart.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.cart];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      ...state,
      cart: updatedItems,
    };
  }

  if (action.type === "CLEAR") {
    return state;
  }

  return state;
};
