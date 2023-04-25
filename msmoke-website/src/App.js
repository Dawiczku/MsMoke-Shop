import React from "react";
import Main from "./pages/Main";
import Produkty from "./pages/Produkty";
import Produkt from "./pages/Produkt";
import "./components/FontAwesomeIcons";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeVerify from "./components/AgeVerify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgeVerify />} />
          <Route path="/home" element={<Main />} />
          <Route path="/products/" element={<Produkty />} />
          <Route path="/products/product/" element={<Produkt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
