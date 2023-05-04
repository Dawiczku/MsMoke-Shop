import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SpecificProduct from "../components/SpecificProduct";

export default function Produkt() {
  const location = useLocation();

  return (
    <section className="section--specific-product">
      <Header />
      <SpecificProduct productInfo={location.state} />
    </section>
  );
}
