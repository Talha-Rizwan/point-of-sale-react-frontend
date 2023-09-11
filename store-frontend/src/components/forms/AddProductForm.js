import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import FormComponent from "./FormComponent";

const AddProductForm = ({ setProducts, closeModal }) => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
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
          alert("Image dimensions must not be more than 200x200 pixels.");
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

    const productId = uuidv4();

    const newProduct = { ...productData, id: productId };

    axios
      .post("https://fakestoreapi.com/products", newProduct)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        setProducts((prev) => [...prev, newProduct]);

        if (response.status === 200) {
          console.log("The product " + newProduct.title + " has been added!");
        }
        setProductData({
          title: "",
          price: "",
          description: "",
          image: null,
        });
      })
      .catch((error) => {
        alert("Error submitting data!");
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

AddProductForm.propTypes = {
  setProducts: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddProductForm;
