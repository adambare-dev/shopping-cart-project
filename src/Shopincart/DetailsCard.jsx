import Cart from "./Cart";
import OrderSummery from "../OrderSummery";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Empty_Cart from "./Empty_Cart";
function DetailsCard() {
  const { state } = useContext(CartContext);
  return (
    <div className="p-4">
      {state.carts.length === 0 ? (
        <div className="flex justify-center">
          <Empty_Cart />
        </div>
      ) : (
        <section className="flex flex-col gap-1 md:flex-row">
          <Cart />
          <OrderSummery />
        </section>
      )}
    </div>
  );
}

export default DetailsCard;
