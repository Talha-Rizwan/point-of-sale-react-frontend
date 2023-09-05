import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from "./pages/home";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          
          <Route path="/*" element={<h1>error 404 the page is not found</h1>} /> 
        </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
