import React, { useContext, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./context/CartProvider";
import Cart from "./Shopincart/Cart";

function Navigations() {
  const { state } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  // Compute total items safely
  const totalItems = state.carts.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-45 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h3 className="font-bold text-xl tracking-tight text-gray-900">
          Ebeye
        </h3>

        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-black transition-colors cursor-pointer p-2">
            <FaSearch size={18} />
          </button>

          <article className="flex relative items-center">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 cursor-pointer"
            >
              <FaShoppingCart className="text-gray-700" size={20} />
            </button>

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow-md ring-2 ring-white">
                {totalItems}
              </span>
            )}
          </article>
        </div>
      </nav>

      {/* Render the dropdown cart component cleanly when open */}
      {open && <Cart />}
    </header>
  );
}

export default Navigations;
