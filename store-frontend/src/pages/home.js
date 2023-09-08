import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import Products from "../components/Products";
import AddModal from "../components/modals/AddProductModal";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = products?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        alert('Error getting data!')
        console.error("Error data: ", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center m-5 underline text-xl md:text-3xl font-bold">
        Products
      </h1>
      <SearchBar searchFtn={handleSearchChange} />
      <AddModal  setProducts={setProducts}/>
      <Products filteredItems={filteredItems} setProducts={setProducts} />
    </div>
  );
};

export default Home;
