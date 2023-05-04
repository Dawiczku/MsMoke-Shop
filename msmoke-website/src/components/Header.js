import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SocialLinks from "./SocialLinks";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../images/Logo.svg";
import { Link } from "react-router-dom";

export default function Header({ currentSection }) {
  const [navBarActive, setNavBarActive] = useState(false);

  useEffect(() => {
    setNavBarActive(false);
  }, [currentSection]);

  const handleNavbarState = () => {
    setNavBarActive(!navBarActive);
  };

  return (
    <>
      <header className="header">
        <NavBar
          currentSection={currentSection}
          navBarActive={navBarActive}
          closeNavBar={handleNavbarState}
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
          <Link to="/home">
            <Logo />
          </Link>
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
