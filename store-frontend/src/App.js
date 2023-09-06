import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from "./pages/home";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/*" element={<h1>error 404 the page is not found</h1>} /> 
        </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
