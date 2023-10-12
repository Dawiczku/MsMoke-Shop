import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ position }) {
  const [searchInput, setSearchInput] = useState("");
  const dbItems = useSelector((state) => state.items);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredDBItems = dbItems.filter((item) => {
      return item.produkt_nazwa
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase());
    });

    navigate(`/products/${searchInput}`, { state: { filteredDBItems } });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={
          position === "phone"
            ? "search__form search__form--phone"
            : "search__form search__form--header"
        }
      >
        <input
          type="text"
          placeholder="Szukaj..."
          name="search"
          maxLength={20}
          autoComplete="off"
          onChange={(e) => setSearchInput(e.target.value)}
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
