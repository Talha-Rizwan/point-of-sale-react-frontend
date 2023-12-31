import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import ProductDetail from "./pages/productDetail";

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/*" element={<h1>error 404 the page is not found</h1>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
