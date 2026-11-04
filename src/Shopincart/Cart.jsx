import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from "react-icons/fa";
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
        {state.carts.length === 0 ? (
          <div className="flex flex-col items-center">
            <img
              src="https://img.magnific.com/premium-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg"
              alt=""
              className="w-64 h-64 text-center"
            />
            <h3 className="font-semibold text-xl mt-4">Your Cart is Empty</h3>
            <p className="text-slate-600">
              Looks like you haven't added any items
              <br />
              to the cart😢!
            </p>
            <button
              className="border py-2.5 px-10 rounded-3xl mt-7 font-bold bg-purple-700 text-white w-full cursor-pointer shadow-purple-200"
              onClick={() => navigate("/")}
              title="explore the products"
            >
              Explore Now
            </button>
          </div>
        ) : (
          state.carts.map((i) => (
            <div key={i.id} className=" mt-2  rounded-lg px-6 ">
              <hr className="mb-3 text-slate-200" />
              <article className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <section className="flex gap-2 items-center">
                  <img
                    src={i.img}
                    alt=""
                    className="h-20 w-20 object-contain rounded-xl"
                  />
                  <p className="font-bold">{i.name}</p>
                </section>
                <div className="flex items-center gap-2">
                  <FaMinus
                    size={10}
                    className="cursor-pointer "
                    onClick={() =>
                      dispatch({ type: "DECREMENT-QUANTITY", payLoad: i })
                    }
                  />
                  <p className="border border-slate-300 p-1 rounded-sm w-6 h-6 flex items-center justify-center">
                    {i.quantity}
                  </p>
                  <FaPlus
                    size={10}
                    onClick={() =>
                      dispatch({ type: "INCREMENT-QUANTITY", payLoad: i })
                    }
                    className="cursor-pointer "
                  />
                </div>
                <p className="font-bold">${i.price.toFixed(2)}</p>
                <button onClick={() => deleteItem(i.id)} className="p-2 ">
                  <FaTrashAlt
                    className="text-red-500 cursor-pointer"
                    size={20}
                    title={`do you want to remove ${i.name} from your list cart`}
                  />
                </button>
              </article>
              <hr className="text-slate-200 mt-3" />
            </div>
          ))
        )}
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
