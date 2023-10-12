import React, { useEffect } from "react";
import Main from "./pages/Main";
import Produkty from "./pages/Produkty";
import Produkt from "./pages/Produkt";
import "./components/FontAwesomeIcons";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeVerify from "./components/AgeVerify";
import Secret from "./pages/Secret";
import { useDispatch } from "react-redux";
import { fetchDBItems } from "./helpers/actions";
import Nicotine from "./components/Nicotine";
import CartridgeType from "./components/CartridgeType";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDBItems());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgeVerify />} />
          <Route path="/home" element={<Main />} />
          <Route path="/products/:id" element={<Produkty />} />
          <Route exact path="/products" element={<Produkty />} />
          <Route path="/products/product/:id" element={<Produkt />} />
          <Route
            path={`/${process.env.REACT_APP_SECRET_PAGE}`}
            element={<Secret />}
          />
          <Route path="/liquid/nicotine" element={<Nicotine />} />
          <Route path="/cartridge/type" element={<CartridgeType />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
