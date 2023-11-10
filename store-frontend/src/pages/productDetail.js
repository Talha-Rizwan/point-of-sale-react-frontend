import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.data;

  return (
    <div className="flex justify-center m-4 ">
      <div className="max-w-lg p-4 shadow-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={product.image}
              alt="Not Available"
              className="block object-contain object-center w-full rounded-md h-72"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold ">{product.title}</h3>
            <h6 className="font-semibold">Price: ${product.price}</h6>
            <p>{product?.description || "No description provided."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
