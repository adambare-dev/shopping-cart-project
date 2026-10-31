import React from "react";
import products from "./products";
import ProductCard from "./ProductCard";
function ProductsList({ input }) {
  const filtredItems = products.filter((pro) =>
    pro.name.toLowerCase().includes(input.toLowerCase()),
  );
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-left mb-6">Your Shop</h2>
      <div
        className={
          filtredItems.length === 1
            ? "md:w-96 mx-auto"
            : "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
        }
      >
        {filtredItems.length === 0 ? (
          <p className="mt-40">No Product Found with this Id😓</p>
        ) : (
          filtredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsList;
