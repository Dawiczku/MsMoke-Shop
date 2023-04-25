import SocialLinks from "./SocialLinks";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import { ReactComponent as Logo } from "../images/Logo.svg";

export default function NavBar({ navBarActive, page, closeNavBar }) {
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

        <SocialLinks page="nav" />
      </nav>
    </>
  );
}
