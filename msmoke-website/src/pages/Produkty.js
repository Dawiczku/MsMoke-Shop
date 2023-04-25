import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Produkty() {
  return (
    <>
      <section className="products__wrapper">
        <Product />
        <Product />
        <Product />
      </section>
    </>
  );
}
