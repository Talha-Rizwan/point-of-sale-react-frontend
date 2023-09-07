import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import Products from "../components/Products";
// import Model from "../components/Model";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredItems = products?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center m-5 underline text-xl md:text-3xl font-bold">
        Products
      </h1>
      {/* <Model /> */}
      <SearchBar searchFtn={handleSearchChange} />
      <Products filteredItems={filteredItems} />
    </div>
  );
};

export default Home;
