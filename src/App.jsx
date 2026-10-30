import React, { useState } from "react";
import Profile from "./Profile";
import Navigations from "./Navigations";
import ProductsList from "./Shopincart/ProductsList";
import CartProvider from "./context/CartProvider";
import Cart from "./Shopincart/Cart";
import ExpandableSearch from "./ExpandableSearch";
import OrderSummery from "./OrderSummery";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="min-h-screen text-center flex flex-col justify-between">
        <CartProvider>
          <Navigations input={input} setInput={setInput} />
          <ProductsList input={input} setInput={setInput} />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
