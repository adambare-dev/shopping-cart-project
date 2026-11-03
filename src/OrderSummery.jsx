import { useContext } from "react";
import { CartContext } from "./context/CartProvider";
import { useNavigate } from "react-router-dom";
function OrderSummery() {
  const navigate = useNavigate();
  const { state } = useContext(CartContext);
  let subtotal = 0;
  let totalItems = 0;
  for (const item of state.carts) {
    subtotal = subtotal + item.quantity * item.price;
    totalItems = totalItems + item.quantity;
  }
  const delivery = subtotal > 0 ? 5 : 0;
  const total = delivery + subtotal;
  return (
    <div className="p-6 grow">
      <h3 className="font-bold text-2xl mb-4">Order Summary</h3>
      <section>
        <article className="flex justify-between items-center">
          <p className="text-gray-500">Total items</p>
          <small className="font-semibold">{totalItems}</small>
        </article>

        <article className="flex justify-between items-center">
          <p className="text-gray-500">SubTotal</p>
          <small className="font-semibold">${subtotal.toFixed(1)}</small>
        </article>
        <article className="flex justify-between items-center">
          <p className="text-gray-500"> Delivery fee</p>
          <small className="font-semibold">${delivery}</small>
        </article>
        <article className="flex justify-between items-center border-t border-slate-200 mt-3">
          <p className="font-bold pt-5 text-lg">Total</p>
          <p className="font-bold text-blue-600 pt-5 text-lg">
            ${total.toFixed(1)}
          </p>
        </article>
        <button
          className="border rounded-lg py-2 px-6 cursor-pointer text-lg w-full max-w-xs active:scale-95 transition-transform my-12 flex justify-center items-center gap-2"
          onClick={() => navigate("/")}
        >
          <h3 className="font-bold text-2xl ">&larr;</h3>
          Go To Products
        </button>
      </section>
    </div>
  );
}

export default OrderSummery;
