import React from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar({ navBarActive, page }) {
  const currentPageStyle = {
    borderBottom: "2px solid dodgerblue",
  };

  return (
    <>
      <nav
        className={
          navBarActive ? "navbar navbar--opened" : "navbar navbar--closed"
        }
      >
        <SearchBar position={"nav"} />

        <ul className="text--bold">
          <li style={page === "home" ? currentPageStyle : null}>Home</li>
          <li>Liquidy</li>
          <li>Jednorazowki</li>
          <li>Zestawy</li>
          <li>Czesci do e-papierosow</li>
        </ul>

        <a href="tel:+48789563210">
          <div>
            <h2>Zamow juz teraz!</h2>
            <p className="text--bold">+48 789-563-210</p>
          </div>
        </a>

        <div className="header--right social-links__container">
          <div className="social__link--nav facebook">
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
          <div className="social__link--nav instagram">
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
          <div className="social__link--nav whatsapp">
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
        </div>
      </nav>
    </>
  );
}
