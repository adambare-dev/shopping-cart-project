import { useState } from "react";

import Navigations from "./Navigations";
import ProductsList from "./Shopincart/ProductsList";
import CartProvider from "./context/CartProvider";
import Footer from "./Footer";
import LayAout from "./LayAout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DetailsCard from "./Shopincart/DetailsCard";
function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="min-h-screen text-center flex flex-col justify-between">
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<LayAout input={input} setInput={setInput} />}
              >
                <Route
                  index
                  element={<ProductsList input={input} setInput={setInput} />}
                />
                <Route path="details" element={<DetailsCard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
