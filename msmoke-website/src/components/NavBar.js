import SocialLinks from "./SocialLinks";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import { ReactComponent as Logo } from "../images/Logo.svg";
import { Link } from "react-router-dom";

export default function NavBar({ navBarActive, closeNavBar, currentSection }) {
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
        <div className="nav__header">
          <button className="navbar__button" onClick={closeNavBar}>
            <FontAwesomeIcon
              icon="fa-solid fa-x"
              className="fa-icon icon--close"
            />
          </button>
          <Logo />
          <SearchBar position={"nav"} />
        </div>
        <ul className="text--bold">
          <Link to="/home">
            <li style={currentSection === "home" ? currentPageStyle : null}>
              Home
            </li>
          </Link>
          <Link to="/products/liquid">
            <li style={currentSection === "liquid" ? currentPageStyle : null}>
              Liquidy
            </li>
          </Link>
          <Link to="/products/jednorazowka">
            <li
              style={
                currentSection === "jednorazowka" ? currentPageStyle : null
              }
            >
              Jednorazowki
            </li>
          </Link>
          <Link to="/products/zestaw">
            <li style={currentSection === "zestaw" ? currentPageStyle : null}>
              Zestawy
            </li>
          </Link>
          <Link to="/products/sprzet">
            <li style={currentSection === "sprzet" ? currentPageStyle : null}>
              Czesci do e-papierosow
            </li>
          </Link>
        </ul>

        <a href="tel:+48789563210">
          <div>
            <h2>Zamow juz teraz!</h2>
            <p className="text--bold">+48 789-563-210</p>
          </div>
        </a>

        <SocialLinks page="nav" />
      </nav>
    </>
  );
}
