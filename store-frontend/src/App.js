import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header';
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<h1>error 404 the page is not found</h1>} /> 
        </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
