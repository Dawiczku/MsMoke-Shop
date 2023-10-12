import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpecificProduct({ productInfo }) {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1).substring(0, 36);
  const dbItems = useSelector((state) => state.items);
  const [nazwa, setNazwa] = useState();
  const [photo, setPhoto] = useState();
  const [slicedPrice, setSlicedPrice] = useState();
  const [smak, setSmak] = useState();
  const [moc, setMoc] = useState();

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    dbItems.forEach((item) => {
      console.log(item.produkt_id + " : " + id);

      if (item.produkt_id === id) {
        setNazwa(item.produkt_nazwa);
        setPhoto(item.produkt_foto);
        setSlicedPrice(item.produkt_cena.split("."));
        setSmak(item.produkt_smak);
        setMoc(item.produkt_moc);
      }
    });
  }, [dbItems, id]);

  return (
    <>
      <div className="specific-product__wrapper">
        <div className="specific-product__card">
          <div className="specific-image__container">
            <img
              alt="malik-montana-jagodzianki"
              className="product__image"
              src={photo}
            />
          </div>
          <div className="product__info">
            <div className="info__container">
              <h3 className="card__heading">{nazwa}</h3>
              <div className="text--bold price__container">
                <p className="price--integer">
                  {slicedPrice && slicedPrice[0]}.
                </p>
                <p className="price--decimal">
                  {slicedPrice && slicedPrice[1]}
                </p>
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
              <div className="social__link phone">
                <a href="tel:+48789563210" rel="noreferrer">
                  <FontAwesomeIcon
                    icon="fa-solid fa-phone"
                    className="fa-icon fa-icon--phone"
                  />
                </a>
              </div>
              <p className="text--bold whatsapp__desc">Zamow przez telefon!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
