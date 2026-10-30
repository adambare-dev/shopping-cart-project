import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext); // <-- Match the updated lowercase 'dispatch'

  return (
    <div className="bg-white p-6  shadow-lg  rounded-xl">
      <div>
        <img
          src={product.img}
          alt=""
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      </div>

      <section className="flex flex-col gap-4 mt-6 border-t border-slate-300 pt-8">
        <h3 className="tex-2xl font-bold">{product.name}</h3>
        <small>{product.size}</small>
        <p>${product.price}</p>
      </section>
      <button
        className="bg-blue-600 py-4 px-6 w-full rounded-xl font-bold text-white flex items-center justify-center gap-2 mt-6 cursor-pointer active:scale-95 transition transform duration-200"
        onClick={() => dispatch({ type: "ADD-TO-CART", payLoad: product })}
      >
        <FaShoppingCart />
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
