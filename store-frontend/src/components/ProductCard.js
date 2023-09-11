import React from "react";
import PropTypes from "prop-types";
import UpdateProductModal from "./modals/UpdateProductModal";
import DeleteProductModal from "./modals/DeleteProductModal";

const ProductCard = ({item, setProducts}) => {

  return (
    <div className="container max-w-sm mx-auto hover:bg-slate-100 ">
      <img
        alt=""
        className="object-contain mx-auto m-1 w-auto h-44 "
        src={item?.image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold h-16 w-auto overflow-hidden ">
          {item?.title}
        </h3>
        <span className="text-xs ">Price : ${item?.price}</span>
      </div>
      <div className="flex justify-end m-2">
        <UpdateProductModal itemData={item} setProducts={setProducts}  />
        <DeleteProductModal itemData={item} setProducts={setProducts} />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  setProducts: PropTypes.func.isRequired,
};


export default ProductCard;
