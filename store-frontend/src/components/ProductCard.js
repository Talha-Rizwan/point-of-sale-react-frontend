import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import ProductModal from "./forms/ProductModal";
import DeleteProductModal from "./forms/DeleteProductModal";
import { UPDATE_PRODUCT } from "../constants";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="container max-w-sm mx-auto hover:bg-slate-100 "
      onClick={() => {
        navigate(`/product/${product.id}`, { state: { data: product } });
      }}
    >
      <img
        alt="not available"
        className="object-contain mx-auto m-1 w-auto h-44"
        src={product?.image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold h-16 w-auto overflow-hidden ">
          {product?.title}
        </h3>
        <span className="text-xs ">Price : ${product?.price}</span>
      </div>
      <div className="flex justify-end m-2">
        <ProductModal name={UPDATE_PRODUCT} productDetails={product} />
        <DeleteProductModal productDetails={product} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
