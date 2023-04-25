import React from "react";

export default function Product() {
  return (
    <div className="product__wrapper">
      <div className="image__container">
        <img
          alt="malik-montana-jagodzianki"
          className="product__image"
          src={require("../images/malik.jpg")}
        />
      </div>
      <h2>Malik Montana Jagodzianki 700 Puff</h2>
      <div className="price__container">
        <p className="price--integer">40.</p>
        <p className="price--decimal">00</p>
        <p className="currency">PLN</p>
      </div>
    </div>
  );
}
