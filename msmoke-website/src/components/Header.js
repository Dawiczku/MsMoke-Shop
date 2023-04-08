import React from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ changeInfoVisibility }) {
  return (
    <>
      <header className="header">
        <div className="header--left">
          <button className="info__button" onClick={changeInfoVisibility}>
            <FontAwesomeIcon icon="fa-solid fa-info" className="fa-icon info" />
          </button>
          <SearchBar />
        </div>

        <div className="header--middle">
          <h1>MsMoke Logo</h1>
        </div>

        <div className="header--right social-links__container">
          <div className="social__link facebook">
            <a
              href="https://www.facebook.com/people/MsMoke/100088173109679/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-facebook-f"
                className="fa-icon fa-icon--facebook"
              />
            </a>
          </div>
          <div className="social__link instagram">
            <a
              href="https://www.instagram.com/msmoke_zagan/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="fa-icon fa-icon--instagram"
              />
            </a>
          </div>
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
          <div className="phone">
            <a href="tel:+48789563210">
              <FontAwesomeIcon icon="fa-solid fa-phone" className="fa-icon" />
              <p className="text--bold">+48 789-563-210</p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
