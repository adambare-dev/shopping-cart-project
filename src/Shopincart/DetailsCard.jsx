import React from "react";
import Cart from "./Cart";
import OrderSummery from "../OrderSummery";
function DetailsCard() {
  return (
    <div className="flex flex-col md:flex-row  justify-center mt-8 px-3 py-6">
      <Cart />
      <OrderSummery />
    </div>
  );
}

export default DetailsCard;
