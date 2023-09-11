import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

import FormComponent from "./FormComponent";

const UpdateProductForm = ({ productDetails, setProducts, closeModal }) => {
  const [productData, setProductData] = useState({
    title: productDetails.title,
    price: productDetails.price,
    description: productDetails.description,
    image: productDetails.image,
  });

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;

      img.onload = function () {
        if (img.width <= 200 && img.height <= 200) {
          setProductData({ ...productData, image });
        } else {
          alert("Image dimensions must be 200x200 pixels or smaller.");
        }
      };
    };
    reader.readAsDataURL(image);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: [".jpg", ".jpeg", ".png"],
    onDrop,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts((prev) => {
      const indexToUpdate = prev.findIndex(
        (product) => product.id === productDetails.id
      );

      if (indexToUpdate !== -1) {
        const updatedProducts = [...prev];
        updatedProducts[indexToUpdate] = {
          ...updatedProducts[indexToUpdate],
          title: productData.title,
          price: productData.price,
          description: productData.description,
          image: productData.image,
        };

        return updatedProducts;
      }
      return prev;
    });

    axios
      .put("https://fakestoreapi.com/products/" + productDetails.id, productData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);

        if (response.status === 200) {
          console.log(
            "The product " +
              productData.title +
              " has been successfully updated!"
          );
        }
        setProductData({
          title: "",
          price: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error :", error);
      });
    closeModal();
  };

  return (
    <div className="max-w-md mx-auto mt-8 ">
      <FormComponent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        productData={productData}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
      />
    </div>
  );
};

UpdateProductForm.propTypes = {
  productDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
  setProducts: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UpdateProductForm;
