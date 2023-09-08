import ProductCard from "./ProductCard";

const Products = ({filteredItems, setProducts}) => (
  <div className="max-w-6xl p-6 mx-auto">
    {filteredItems.length !== 0 ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          return <ProductCard key={item.id} item={item} setProducts={setProducts} />;
        })}
      </div>
    ) : (
      <h1 className="text-center">Sorry no items found!</h1>
    )}
  </div>
)

export default Products;
