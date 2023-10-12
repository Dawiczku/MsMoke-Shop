import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Produkty() {
  const dbItems = useSelector((state) => state.items);
  const { id } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    location.state
      ? location.state.filteredDBItems
        ? setProducts(location.state.filteredDBItems)
        : location.state.nicotine
        ? setProducts(
            dbItems.filter((item) => {
              return (
                item.produkt_typ === id &&
                item.produkt_moc === location.state.nicotine
              );
            })
          )
        : setProducts(
            dbItems.filter((item) => {
              return (
                item.produkt_typ === id &&
                item.produkt_nazwa
                  .toLowerCase()
                  .includes(location.state.cartridgeType)
              );
            })
          )
      : setProducts(
          dbItems.filter((item) => {
            return item.produkt_typ === id;
          })
        );
  }, [dbItems, id, location.state, products.length]);

  return (
    <>
      <section className="products">
        <Header currentSection={id} />
        {products.length === 0 && (
          <p
            style={{
              backgroundColor: "rgb(30,30,30)",
              color: "rgb(220,220,220)",
              fontSize: "clamp(1.5em, 3.5vw, 2.25em)",
              fontWeight: "600",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              left: "0",
              right: "0",
            }}
          >
            No items found.
          </p>
        )}
        <div className="products__wrapper">
          {products.length !== 0 &&
            products.map((product) => (
              <Product
                key={product.produkt_id}
                id={product.produkt_id}
                zdjecie={product.produkt_foto}
                nazwa={product.produkt_nazwa}
                cena={product.produkt_cena}
                smak={product.produkt_smak}
                moc={product.produkt_moc}
                typ={product.produkt_typ}
              />
            ))}
        </div>
      </section>
    </>
  );
}
