import SocialLinks from "./SocialLinks";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        </div>
        <ul className="text--bold">
          <Link to="/home">
            <li style={currentSection === "home" ? currentPageStyle : null}>
              Home
            </li>
          </Link>
          <Link to="/liquid/nicotine">
            <li style={currentSection === "liquid" ? currentPageStyle : null}>
              Liquidy
            </li>
          </Link>
          <Link to="/products/premix">
            <li style={currentSection === "premix" ? currentPageStyle : null}>
              Premixy
            </li>
          </Link>
          <Link to="/products/longfill">
            <li style={currentSection === "longfill" ? currentPageStyle : null}>
              Longfille
            </li>
          </Link>
          <Link to="/products/jednorazowka">
            <li
              style={
                currentSection === "jednorazowka" ? currentPageStyle : null
              }
            >
              Jednorazówki
            </li>
          </Link>
          <Link to="/products/zestaw">
            <li style={currentSection === "zestaw" ? currentPageStyle : null}>
              Zestawy
            </li>
          </Link>
          <Link to="/cartridge/type">
            <li
              style={currentSection === "cartridge" ? currentPageStyle : null}
            >
              Cartridge
            </li>
          </Link>
          <Link to="/products/pod">
            <li style={currentSection === "pod" ? currentPageStyle : null}>
              Pody
            </li>
          </Link>
          <Link to="/products/sprzet">
            <li style={currentSection === "sprzet" ? currentPageStyle : null}>
              Części do e-papierósow
            </li>
          </Link>
        </ul>

        <a href="tel:+48789563210">
          <div>
            <h2>Zamów już teraz!</h2>
            <p className="text--bold">+48 789-563-210</p>
            <h1
              style={{
                fontSize: "clamp(1rem, 4vw, 2.125rem)",
                borderBottom: "2px solid firebrick",
                borderTop: "2px solid firebrick",
                marginTop: "1rem",
              }}
            >
              ^ Click Here! v
            </h1>
          </div>
        </a>

        <SocialLinks page="nav" />
      </nav>
    </>
  );
}
