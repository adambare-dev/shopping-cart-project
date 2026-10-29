import React from "react";
import products from "./products";
import ProductCard from "./ProductCard";
function ProductsList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-left">Shop</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        ;
      </div>
    </div>
  );
}

export default ProductsList;
