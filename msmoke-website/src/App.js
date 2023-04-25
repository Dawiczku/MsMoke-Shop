import React from "react";
import Main from "./pages/Main";
import Produkty from "./pages/Produkty";
import Produkt from "./pages/Produkt";
import "./components/FontAwesomeIcons";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/" element={<Produkty />} />
          <Route path="/product/" element={<Produkt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
