import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product__wrapper">
      <Link to="product">
        <div className="product__card">
          <div className="image__container">
            <img
              alt="malik-montana-jagodzianki"
              className="product__image"
              src={require("../images/malik.jpg")}
            />
          </div>
          <h2 className="card__heading">Malik Montana Jagodzianki 700 Puff</h2>
          <div className="text--bold price__container">
            <p className="price--integer">40.</p>
            <p className="price--decimal">00</p>
            <p className="currency">PLN</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
