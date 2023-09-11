import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import Products from "../components/Products";
import ProductModal from "../components/forms/ProductModal";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = products?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        alert("Error getting data!");
        console.error("Error data: ", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <SearchBar setSearchInput={handleSearchChange} />
      <ProductModal name={"Add"} setProducts={setProducts} />
      <Products filteredItems={filteredItems} setProducts={setProducts} />
    </div>
  );
};

export default Home;
