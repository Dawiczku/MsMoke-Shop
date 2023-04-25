import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";

export default function Main() {
  return (
    <section className="section--main">
      <Header />
      <div className="main--middle">
        <div className="main--about">
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
