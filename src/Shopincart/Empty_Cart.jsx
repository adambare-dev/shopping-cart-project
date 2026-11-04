import { useNavigate } from "react-router-dom";

function Empty_Cart() {
  const navigate = useNavigate();
  const empty_URL =
    "https://thumbs.dreamstime.com/b/illustration-young-man-standing-next-to-empty-shopping-cart-appearing-puzzled-large-blue-question-mark-hovers-him-411933437.jpg";
  return (
    <>
      <div className="flex flex-col items-center   p-6 rounded-2xl">
        <img
          src={empty_URL}
          alt=""
          className="w-64 h-64 text-center object-contain"
        />
        <h3 className="font-semibold text-xl mt-4">Your Cart is Empty</h3>
        <p className="text-slate-600">
          Looks like you haven't added any items
          <br />
          to the cart😢!
        </p>
        <button
          className="border py-2.5 px-10 rounded-3xl mt-7 font-bold bg-purple-700 hover:bg-purple-500 transition transform duration-200 text-white w-full cursor-pointer shadow-purple-200"
          onClick={() => navigate("/")}
          title="explore the products"
        >
          Explore Now
        </button>
      </div>
    </>
  );
}

export default Empty_Cart;
