import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const UpdateProductForm = ({itemData, setProducts}) => {
  const [productData, setProductData] = useState({
    title: itemData.title,
    price: itemData.price,
    description: itemData.description,
    image: itemData.image,
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
      const indexToUpdate = prev.findIndex((product) => product.id === itemData.id);
    
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
      .put("https://fakestoreapi.com/products/" + itemData.id, productData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);

        if (response.status === 200) {
          alert(
            "The product " + productData.title + " has been successfully updated!"
          );
        }
        setProductData({
          title: "",
          price: "",
          description: "",
        });
      })
      .catch((error) => {
        alert('Error Updating data!')
        console.error("Error :", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 ">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 shadow-md rounded p-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="w-full p-2 "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Price ($):
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-bold mb-2">
            Image:
          </label>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {productData.image ? (
              <p className="border border-blue-500 border-dashed p-2">
                File already uploaded, click to Browse or drag image here (max
                200x200 pixels)
              </p>
            ) : (
              <p className="border border-blue-500 border-dashed p-2">
                Drag an image (max 200x200 pixels) here, or click to Browse
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
        <form method="dialog">
              <button className="btn font-bold  rounded">Close</button>
        </form>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded "
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProductForm;
