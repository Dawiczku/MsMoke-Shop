import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <>
      <form className="search__form">
        <input
          type="text"
          placeholder="Szukaj..."
          name="search"
          maxLength={20}
          autoComplete="off"
        />
        <button type="submit">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className=" fa-icon"
          />
        </button>
      </form>
    </>
  );
}
