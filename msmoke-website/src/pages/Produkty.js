import React, { useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Produkty() {
  return (
    <>
      <section className="products">
        <Header />
        <div className="products__wrapper">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </>
  );
}
