import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from "react-icons/fa";

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
      <div className="grow-2 md:border-r md:border-slate-200">
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
            <p>Your Cart is Empty</p>
            <small className="text-lg"> 🛒</small>
          </div>
        ) : (
          state.carts.map((i) => (
            <div key={i.id} className=" bg-slate-100 mt-2 px-2 rounded-lg ">
              <article className="flex flex-col justify-between  gap-3">
                <section className="flex justify-between p-2">
                  <div className="flex flex-col ">
                    <h3 className="font-semibold">{i.name}</h3>
                    <small className="text-blue-500 font-medium text-left">{`$${i.price}`}</small>
                  </div>

                  <button>
                    <FaTrashAlt
                      size={19}
                      className="text-red-500 cursor-pointer flex justify-center"
                      title={`do you want to remove ${i.name} from your carts`}
                      onClick={() => deleteItem(i.id)}
                    />
                  </button>
                </section>

                <article className="flex  items-center gap-4">
                  <section className="flex items-center gap-3 border border-slate-300 shadow-sm rounded-lg   bg-white w-full">
                    <button
                      className="cursor-pointer bg-red-500 grow flex justify-center py-2 text-white"
                      onClick={() =>
                        dispatch({ type: "DECREMENT-QUANTITY", payLoad: i })
                      }
                    >
                      <FaMinus />
                    </button>

                    <small>{i.quantity}</small>
                    <button
                      className="grow bg-green-500 flex justify-center cursor-pointer text-white py-2 "
                      onClick={() =>
                        dispatch({ type: "INCREMENT-QUANTITY", payLoad: i })
                      }
                    >
                      <FaPlus />
                    </button>
                  </section>
                </article>
              </article>
            </div>
          ))
        )}
        <hr className="mt-6 text-slate-200" />
      </div>
    </>
  );
}

export default Cart;
