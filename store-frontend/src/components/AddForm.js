import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

function AddForm() {
  const [formData, setFormData] = useState({
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
          setFormData({ ...formData, image });
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/products", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);

        if (response.status === 200) {
          alert("The product " + formData.title + " has been added!");
        }
        setFormData({
          title: "",
          price: "",
          description: "",
          image: null,
        });
      })
      .catch((error) => {
        alert('Error submitting data!')
        console.error("Error :", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 ">
      <form onSubmit={handleSubmit} className="bg-slate-200 p-8 mb-4">
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
              <p>{formData.image.name}</p>
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

export default AddForm;
