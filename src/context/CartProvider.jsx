import { createContext, useReducer } from "react";

import reducer from "../Shopincart/reducer";
export const CartContext = createContext();

const initialState = {
  carts: [
    {
      id: 5,
      name: "Dairy Milk",
      quantity: 1,
      price: 4.75,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9u7yX8GR8MZS6dxtHrRdk0_8siGhCLGnMi84SwmwGA&s",
      size: "Meduim",
      color: "Balck",
    },
    {
      id: 6,
      name: "Luxury Perfum",
      quantity: 1,
      price: 138.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGFVMzZ4qCWPOt_IrC0tw2jf5YCzG6g1Wfjat-zQjyQ&s",
      size: "Meduim",
      color: "Balck",
    },
  ],
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
