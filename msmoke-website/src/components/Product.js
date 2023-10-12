import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { id, zdjecie, nazwa, cena, smak } = props;
  const slicedPrice = cena.split(".");
  return (
    <div className="product__wrapper">
      <Link to={`/products/product/${id}`} state={props}>
        <div className="product__card">
          <div className="image__container">
            <img
              alt="malik-montana-jagodzianki"
              className="product__image"
              src={zdjecie}
            />
          </div>
          <h2 className="card__heading">{nazwa}</h2>
          <h5 className="card__flavour">{smak}</h5>
          <div className="text--bold price__container">
            <p className="price--integer">{slicedPrice[0]}.</p>
            <p className="price--decimal">{slicedPrice[1]}</p>
            <p className="currency">PLN</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
