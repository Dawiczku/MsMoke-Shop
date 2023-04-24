import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";

export default function Main() {
  const [infoVisibility, setInfoVisibility] = useState(false);
  const [navBarActive, setNavBarActive] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const changeInfoVisibility = () => {
    setInfoVisibility(!infoVisibility);
  };

  const handleChildNavbarData = (data) => {
    setNavBarActive(data);
  };

  return (
    <section className="section--main">
      <Header
        changeInfoVisibility={changeInfoVisibility}
        handleChildNavbarData={handleChildNavbarData}
      />
      <div className="main--middle">
        <NavBar page={"home"} navBarActive={navBarActive} />
        <div
          className={
            firstRender.current
              ? infoVisibility
                ? "main--about element--show"
                : "main--about"
              : infoVisibility
              ? "main--about element--show"
              : "main--about element--hide"
          }
        >
          <h2 className="text--upper text--bold">
            Darmowy dowóz na terenie Zagania!
          </h2>
          <p className="font--content">
            Skonczyl Ci sie liquid, lub po prostu masz ochote sobie zapalic ?
            Trafiles idealnie, dowioze Ci czego potrzebujesz w szybkim czasie!
            Zrob liste potrzebnych produktow i zamow przez telefon lub WhatsApp!
          </p>
        </div>
        <Categories />
      </div>
    </section>
  );
}
