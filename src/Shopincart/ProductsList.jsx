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
          filtredItems.length === 1 || filtredItems.length === 2
            ? "md:w-96 mx-auto"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        }
      >
        {filtredItems.length === 0 ? (
          <p className="mt-40">No Products Found😓</p>
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
