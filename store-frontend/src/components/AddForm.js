import React, { useState } from 'react';
import axios from 'axios';

function AddForm() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image);



    console.log('the formdata is : ', formData)
    axios.post('https://fakestoreapi.com/products', formDataToSend)
    .then((response) => {
      console.log('Data sent successfully:', response.data);
      
      if (response.status === 200){
        alert("The product "+ formData.title + " has been added!")
      }
      setFormData({
        title: '',
        price: '',
        description: '',
        image: null,
      })
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 ">
      <form onSubmit={handleSubmit} className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
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
          <label htmlFor="name" className="block text-sm font-bold mb-2">
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
          <label htmlFor="description" className="block text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="rounded w-full p-2 "
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png" 
          />
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
