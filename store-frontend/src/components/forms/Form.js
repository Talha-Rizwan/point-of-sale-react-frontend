import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Form = ({
  handleChange,
  handleSubmit,
  productData,
  getInputProps,
  getRootProps,
}) => {
  const titleInputRef = useRef(null);

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  return (
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
          ref={titleInputRef}
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
        />
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded "
      >
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  productData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
  getInputProps: PropTypes.func.isRequired,
  getRootProps: PropTypes.func.isRequired,
};

export default Form;
