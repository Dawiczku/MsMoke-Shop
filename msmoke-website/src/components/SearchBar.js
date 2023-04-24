import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({ position }) {
  return (
    <>
      <form
        className={
          position === "nav"
            ? "search__form search__form--nav"
            : "search__form search__form--header"
        }
      >
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
