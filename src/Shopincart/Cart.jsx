import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import OrderSummery from "../OrderSummery";
function Cart() {
  const { state, dispatch } = useContext(CartContext);

  // Calculate overall total price
  function incrementQuantity() {
    dispatch({ type: "INCREMENT-QUANTITY" });
  }
  function deleteItem(id) {
    dispatch({ type: "Delete_Item", payLoad: id });
  }

  return (
    <>
      <div class="absolute top-18 right-3 p-6 bg-white rounded-lg shadow-lg shadow-gray-500/20 max-h-64 overflow-y-scroll">
        <header className="flex items-center gap-6 justify-between mb-4 border-b border-slate-300 pb-3">
          <h2 className="font-bold text-xl">Your Cart</h2>
          <small className="border border-slate-200 shadow-sm rounded-lg px-3 py-1">
            {state.carts.length === 1 ? (
              <p>{state.carts.length} item</p>
            ) : (
              state.carts.length + " Items"
            )}
          </small>
        </header>
        {state.carts.length === 0 ? (
          <div>
            <p>You have No Carts Yet</p>
            <small className="text-lg"> 🛒</small>
          </div>
        ) : (
          state.carts.map((i) => (
            <div
              key={i.id}
              className="flex justify-between items-center gap-6 bg-slate-100 mt-2 px-2 rounded-lg "
            >
              <section className="flex flex-col p-2">
                <h3 className="font-semibold">{i.name}</h3>
                <small className="text-blue-500 font-medium text-left">{`$${i.price}`}</small>
              </section>
              <article className="flex items-center gap-4">
                <section className="flex justify-center items-center gap-3 border border-slate-300 shadow-sm rounded-lg px-3 py-1 bg-white">
                  <FaMinus
                    className="cursor-pointer"
                    onClick={() =>
                      dispatch({ type: "DECREMENT-QUANTITY", payLoad: i })
                    }
                  />
                  <small>Quantity: {i.quantity}</small>
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() =>
                      dispatch({ type: "INCREMENT-QUANTITY", payLoad: i })
                    }
                  />
                </section>

                <FaTrashAlt
                  size={19}
                  className="text-red-500 cursor-pointer"
                  title={`do you want to remove ${i.name} from your carts`}
                  onClick={() => deleteItem(i.id)}
                />
              </article>
            </div>
          ))
        )}
        <hr className="mt-6 text-slate-200" />
        <OrderSummery />
      </div>
    </>
  );
}

export default Cart;
