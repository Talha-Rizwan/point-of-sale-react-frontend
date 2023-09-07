import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

function UpdateForm() {
  let navigate = useNavigate();
  const location = useLocation();
  const itemData = location.state?.itemData;
  const [formData, setFormData] = useState({
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
          setFormData({ ...formData, image });
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("https://fakestoreapi.com/products/" + itemData.id, formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);

        if (response.status === 200) {
          alert(
            "The product " + formData.title + " has been successfully updated!"
          );
        }
        setFormData({
          title: "",
          price: "",
          description: "",
        });
        navigate("/");
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
            value={formData.title}
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
            value={formData.price}
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
            value={formData.description}
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
            {formData.image ? (
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
