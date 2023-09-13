import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

import Form from "./Form";
import { ADD_PRODUCT } from "../../constants";

const ProductForm = ({ name, productDetails, setProducts, closeModal }) => {
  const [productData, setProductData] = useState({
    title: productDetails?.title || "",
    price: productDetails?.price || "",
    description: productDetails?.description || "",
    image: productDetails?.image || null,
  });

  const [errors, setErrors] = useState({
    title: "",
    price: "",
  });

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        if (img.width <= 200 && img.height <= 200) {
          setProductData({ ...productData, image });
        } else {
          console.log("Image dimensions must be 200x200 pixels or smaller.");
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

    if (name === "title") {
      if (value.trim() === "") {
        setErrors((prev) => ({ ...prev, title: "Title is required" }));
      } else {
        setErrors((prev) => ({ ...prev, title: null }));
      }
    } else if (name === "price") {
      if (!/^\d+(\.\d{1,2})?$/.test(value) || value === "0") {
        setErrors((prev) => ({
          ...prev,
          price: "Price must be a positive number with up to 2 decimal places",
        }));
      } else {
        setErrors((prev) => ({ ...prev, price: null }));
      }
    }
  };

  const handleUpdation = (e) => {
    e.preventDefault();

    if (
      !(
        (errors.title === "" || errors.title === null) &&
        (errors.price === "" || errors.price === null)
      )
    ) {
      console.log("remove the errors to submit!");
      return;
    }

    setProducts((prev) => {
      const indexToUpdate = prev.findIndex(
        (product) => product.id === productDetails.id
      );

      if (indexToUpdate !== -1) {
        const updatedProducts = [...prev];
        updatedProducts[indexToUpdate] = {
          ...updatedProducts[indexToUpdate],
          ...productData,
        };
        return updatedProducts;
      }
      return prev;
    });

    axios
      .put(
        "https://fakestoreapi.com/products/" + productDetails.id,
        productData
      )
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
          image: null,
        });
      })
      .catch((error) => {
        console.error("Error :", error);
      });
    closeModal(e);
  };

  const handleNewAddition = (e) => {
    e.preventDefault();

    if (productData.title.trim() === "") {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
    }
    if (productData.price === "") {
      setErrors((prev) => ({ ...prev, price: "price is required" }));
    }

    if (errors.title !== null || errors.price !== null) {
      console.log("remove the errors to submit!");
      return;
    }

    const productId = uuidv4();
    const newProduct = { ...productData, id: productId };

    axios
      .post("https://fakestoreapi.com/products", newProduct)
      .then((response) => {
        if (response.status === 200) {
          setProducts((prev) => [...prev, newProduct]);
          setProductData({
            title: "",
            price: "",
            description: "",
            image: null,
          });
        }
      })
      .catch((error) => {
        alert("Error submitting data!");
        console.error("Error :", error);
      });
    closeModal(e);
  };

  const handleSubmit = () => {
    if (name === ADD_PRODUCT) {
      return handleNewAddition;
    }
    return handleUpdation;
  };

  return (
    <div className="max-w-md mx-auto mt-8 ">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit()}
        productData={productData}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        titleError={errors.title}
        priceError={errors.price}
      />
    </div>
  );
};

ProductForm.propTypes = {
  productDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.object,
  }),
  name: PropTypes.string.isRequired,
  setProducts: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProductForm;
