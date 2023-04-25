import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SocialLinks from "./SocialLinks";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [navBarActive, setNavBarActive] = useState(false);

  const handleNavbarState = () => {
    setNavBarActive(!navBarActive);
  };

  return (
    <>
      <header className="header">
        <NavBar
          navBarActive={navBarActive}
          closeNavBar={handleNavbarState}
          page="home"
        />
        <div className="header--left">
          <button className="navbar__button" onClick={handleNavbarState}>
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="fa-icon burger"
            />
          </button>
          <SearchBar position={"header"} />
        </div>

        <div className="header--middle">
          <h1 className="logo">MsMoke Logo</h1>
        </div>

        <div className="header--right">
          <SocialLinks />
          <div className="phone--container">
            <a href="tel:+48789563210">
              <div className="phone">
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  className="fa-icon--phone fa-icon social__link"
                />
                <p className="text--bold">+48 789-563-210</p>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
