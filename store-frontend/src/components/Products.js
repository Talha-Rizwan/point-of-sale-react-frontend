import React from "react";
import PropTypes from "prop-types";

import ProductCard from "./ProductCard";

const Products = ({ filteredItems }) => (
  <div className="max-w-6xl p-6 mx-auto">
    {filteredItems.length !== 0 ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    ) : (
      <h1 className="text-center">Sorry no items found!</h1>
    )}
  </div>
);

Products.propTypes = {
  filteredItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Products;
