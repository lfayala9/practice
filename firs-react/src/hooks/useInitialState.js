import { useState } from "react";

const initialState = {
  cart: [],
  total: 0
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      total: state.total + payload.price,
    });
  };

  const removeFromCart = (ids) => {
    const removedElement = state.cart.splice(ids, 1)[0]
  
    setState({
      ...state,
      cart: state.cart,
      totalPrice: state.totalPrice - removedElement.price
    });
  };
  

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
