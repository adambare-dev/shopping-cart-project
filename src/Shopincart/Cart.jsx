import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);

  // Calculate overall total price
  function incrementQuantity(id) {
    dispatch({ type: "INCREMENT-QUANTITY", payLoad: id });
  }
  function deleteItem(id) {
    dispatch({ type: "Delete_Item", payLoad: id });
  }

  return (
    <>
      <div className="grow-2  md:border-slate-200 shadow p-2 rounded-lg">
        <header className="flex items-center gap-6 justify-between mb-4  pb-3">
          <h2 className="font-bold text-xl">Your Cart</h2>
          <small className="border border-slate-200 shadow-sm rounded-lg px-3 py-1">
            {state.carts.length === 1 ? (
              <p>{state.carts.length} item</p>
            ) : (
              state.carts.length + " Items"
            )}
          </small>
        </header>

        {state.carts.map((i) => (
          <div key={i.id} className=" mt-2  rounded-lg px-6 ">
            <hr className="mb-3 text-slate-200" />
            <article className="flex flex-col items-center md:flex-row gap-6 md:items-center justify-between">
              <section className="flex gap-2 items-center">
                <img
                  src={i.img}
                  alt={i.name}
                  className="h-20 w-20 object-contain rounded-xl"
                />

                <p className="font-bold">{i.name}</p>
              </section>

              <div className="flex items-center gap-2  py-0.5 px-4 rounded-lg">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT-QUANTITY", payLoad: i })
                  }
                >
                  <FaMinus size={10} className="cursor-pointer" />
                </button>
                <p className="border border-slate-300 p-1 px-2 rounded-sm flex items-center justify-center">
                  {i.quantity}
                </p>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT-QUANTITY", payLoad: i })
                  }
                  className="cursor-pointer "
                >
                  <FaPlus size={10} />
                </button>
              </div>
              <p className="font-bold">${i.price.toFixed(2)}</p>
              <button
                onClick={() => deleteItem(i.id)}
                className="p-2 hover:bg-slate-100 rounded-lg "
              >
                <FaTrashAlt
                  className="text-red-500 cursor-pointer"
                  size={20}
                  title={`do you want to remove ${i.name} from your list cart`}
                />
              </button>
            </article>
            <hr className="text-slate-200 mt-3" />
          </div>
        ))}

        <button
          className="flex items-center gap-1 mt-9 cursor-pointer"
          onClick={() => navigate("/")}
          title="go to the products page"
        >
          <h3 className="font-bold text-2xl mb-1">&larr;</h3>
          Back to shop
        </button>
      </div>
    </>
  );
}

export default Cart;
