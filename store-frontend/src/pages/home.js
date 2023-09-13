import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import SearchBar from "../components/SearchBar";
import Products from "../components/Products";
import ProductModal from "../components/forms/ProductModal";
import { ADD_PRODUCT } from "../constants";

const Home = () => {
  const dispatch = useDispatch();
  const newProducts = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = newProducts?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const getProducts = (items) => {
    dispatch({ type: "getProducts", data: items });
  };

  console.log(products);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        getProducts(response.data);
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
      <ProductModal name={ADD_PRODUCT} setProducts={setProducts} />
      <Products filteredItems={filteredItems} setProducts={setProducts} />
    </div>
  );
};

export default Home;
