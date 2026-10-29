import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./context/CartProvider";
import { useContext, useState } from "react";
import Cart from "./Shopincart/Cart";
function Navigations() {
  const { state } = useContext(CartContext);
  let totalItems = 0;
  for (const item of state.carts) {
    totalItems = totalItems + item.quantity;
  }
  const [open, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0  bg-white-800/20 border-b border-slate-100  backdrop-blur-md p-3 shadow-sm">
      <nav className="flex justify-between items-center">
        <header>
          <h3>Ebeye</h3>
        </header>
        <div className="flex gap-5 items-center justify-between">
          <section className="relative">
            <FaSearch className="absolute top-1/3 right-1.5 " />
            <input
              type="text"
              autoFocus
              placeholder="Search products..."
              className="border border-gray-300 bg-gray-50 focus:bg-white px-4 py-1.5 pr-10 rounded-xl text-sm outline-none transition-all w-48 sm:w-64 shadow-inner"
            />
          </section>

          <article className="flex relative items-center bg-slate-100 rounded-full">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaShoppingCart
                className="cursor-pointer text-gray-700  hover:text-blue-500 transform transition duration-200"
                size={24}
              />
            </button>

            {totalItems > 0 ? (
              <small className="absolute -top-2 right-0 font-bold text-md bg-red-600 text-white rounded-full h-5 w-5 flex justify-center items-center">
                {totalItems}
              </small>
            ) : (
              ""
            )}
          </article>
        </div>
      </nav>
      {open && <Cart />}
    </div>
  );
}

export default Navigations;
