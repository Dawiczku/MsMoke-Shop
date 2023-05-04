import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpecificProduct({ productInfo }) {
  const { zdjecie, nazwa, cena, smak, moc } = productInfo;
  const slicedPrice = cena.split(".");

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="specific-product__wrapper">
        <div className="specific-product__card">
          <div className="specific-image__container">
            <img
              alt="malik-montana-jagodzianki"
              className="product__image"
              src={zdjecie}
            />
          </div>
          <div className="product__info">
            <div className="info__container">
              <h3 className="card__heading">{nazwa}</h3>
              <div className="text--bold price__container">
                <p className="price--integer">{slicedPrice[0]}.</p>
                <p className="price--decimal">{slicedPrice[1]}</p>
                <p className="currency">PLN</p>
              </div>
              <p>
                <strong>Smak: </strong>
                {smak}
              </p>
              <p>
                <strong>Moc: </strong>
                {moc}mg
              </p>
            </div>

            <div className="order__links">
              <div className="social__link whatsapp">
                <a
                  href="https://wa.me/48783241423"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon="fa-brands fa-whatsapp"
                    className="fa-icon fa-icon--whatsapp"
                  />
                </a>
              </div>
              <p className="text--bold whatsapp__desc">Zamow przez WhatsApp!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
