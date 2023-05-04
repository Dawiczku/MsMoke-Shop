import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";

export default function Main() {
  return (
    <section className="section--main">
      <Header currentSection={"home"} />
      <div className="main--middle">
        <Categories />
      </div>
    </section>
  );
}
