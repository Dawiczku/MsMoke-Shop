import React from "react";

export default function NavBar({ navBarActive }) {
  return (
    <>
      <nav
        className={
          navBarActive ? "navbar navbar--opened" : "navbar navbar--closed"
        }
      >
        <ul className="text--bold">
          <li>Home</li>
          <li>Liquidy</li>
          <li>Jednorazowki</li>
          <li>Zestawy</li>
          <li>Czesci do e-papierosow</li>
        </ul>
      </nav>
    </>
  );
}
