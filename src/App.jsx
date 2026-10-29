import React from "react";
import Profile from "./Profile";
import Navigations from "./Navigations";
import ProductsList from "./Shopincart/ProductsList";
import CartProvider from "./context/CartProvider";
import Cart from "./Shopincart/Cart";
import ExpandableSearch from "./ExpandableSearch";
import OrderSummery from "./OrderSummery";

function App() {
  return (
    <>
      <div className="min-h-screen text-center flex flex-col justify-between">
        <CartProvider>
          <Navigations cart={<Cart />} />
          <ProductsList />
        </CartProvider>

        <footer>
          <p>my 20206 profile cards</p>
          <ExpandableSearch />
        </footer>
      </div>
    </>
  );
}

export default App;
