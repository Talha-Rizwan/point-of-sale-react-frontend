import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

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
    setSearch(event.target.value);
  };

  const filteredItems = products?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center m-5 underline text-xl md:text-3xl font-bold">
        {" "}
        Products
      </h1>
      <SearchBar searchFtn={handleSearchChange} />
      <Products filteredItems={filteredItems} />
    </div>
  );
};

export default Home;
