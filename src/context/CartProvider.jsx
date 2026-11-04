import { createContext, useReducer } from "react";

import reducer from "../Shopincart/reducer";
export const CartContext = createContext();

const initialState = {
  carts: [],
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState); // <-- Fix 2: Standardized to 'dispatch'

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartProvider;
