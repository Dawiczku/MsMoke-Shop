import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Secret() {
  const [selectedData, setSelectedData] = useState({
    name: "",
    price: "",
    flavour: "",
    nicotine: "",
    type: "",
  });
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [newItemSubmitted, setNewItemSubmitted] = useState(false);
  const [image, setImage] = useState("");
  const [dbItems, setDbItems] = useState();
  const [serverMessage, setServerMessage] = useState(undefined);
  const [newPrice, setNewPrice] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/getItems`)
      .then((response) => {
        const { success, items } = response.data;
        if (success) {
          setDbItems(items);
          setServerMessage("");
        } else {
          setServerMessage("No items to show.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn, newItemSubmitted]);

  const deleteItem = (id) => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/deleteItem`, { data: { id } })
      .then((response) => {
        const { success, items } = response.data;
        if (success) {
          setDbItems(items);
          setServerMessage("");
        } else {
          setServerMessage("No items to show.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const logIn = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_HOST}/login`, { password })
      .then((response) => {
        if (response.data.success === true) {
          setLoggedIn(true);
        } else {
          setServerMessage(response.data.message);
        }
      });
    setPassword("");
    setServerMessage(undefined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", selectedData.name);
    formData.append("flavour", selectedData.flavour);
    formData.append("nicotine", selectedData.nicotine);
    formData.append("price", selectedData.price);
    formData.append("type", selectedData.type);
    formData.append("file", image);

    axios
      .post(`${process.env.REACT_APP_HOST}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === true) {
          setSelectedData({
            name: "",
            flavour: "",
            nicotine: "",
            price: "",
            type: "",
          });
          imageRef.current.value = "";
          setServerMessage(undefined);
          setNewItemSubmitted(!newItemSubmitted);
        } else {
          setServerMessage(response.data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  const changePrice = (id) => {
    axios
      .post(`${process.env.REACT_APP_HOST}/changePrice`, { newPrice, id })
      .then((response) => {
        const { success, items } = response.data;
        if (success) {
          setDbItems(items);
          setServerMessage("");
        } else {
          setServerMessage("No items to show.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputStyle = {
    backgroundColor: "rgb(30,30,30)",
    color: "rgb(220,220,220)",
    padding: "0.75rem",
    width: "300px",
    border: "2px solid firebrick",
    display: "block",
  };

  return loggedIn ? (
    <div className="db-items__wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa:
          <input
            style={inputStyle}
            name="name"
            type="text"
            value={selectedData.name}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Cena (Grosze po kropce):
          <input
            style={inputStyle}
            name="price"
            type="number"
            step="0.1"
            value={selectedData.price}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Smak:
          <input
            style={inputStyle}
            name="flavour"
            type="text"
            value={selectedData.flavour}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Moc (Tylko Liczba mg):
          <input
            style={inputStyle}
            name="nicotine"
            type="text"
            value={selectedData.nicotine}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Typ produktu:
          <br />
          <select
            style={{
              background: "rgb(30,30,30)",
              color: "rgb(220,220,220)",
              padding: "0.25rem",
              margin: "0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            name="type"
            value={selectedData.type}
            onChange={handleChange}
            required
          >
            <option value="">---Select---</option>
            <option value="jednorazowka">Jednorazowki</option>
            <option value="liquid">Liquidy</option>
            <option value="zestaw">Zestawy</option>
            <option value="sprzet">Sprzet</option>
          </select>
        </label>
        <label>
          Zdjecie (.png, .jpg, .jpeg):
          <input
            ref={imageRef}
            style={inputStyle}
            name="image"
            type="file"
            accept=".png .jpg .jpeg"
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <button
          type="submit"
          style={{
            ...inputStyle,
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
        {serverMessage && serverMessage}
      </form>
      <div className="db-items__container">
        {dbItems
          ? dbItems.map((item) => (
              <div
                key={item.produkt_id}
                style={{
                  border: "2px solid aqua",
                  padding: "1.5rem",
                  position: "relative",
                }}
              >
                <button
                  className="db-item__button--delete"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteItem(item.produkt_id);
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-x" />
                </button>
                <p>{item.produkt_nazwa}</p>
                <p>{item.produkt_smak}</p>
                <div>
                  <p>{item.produkt_cena}</p>
                  <input
                    type="number"
                    onChange={(e) => setNewPrice(e.target.value)}
                    style={{
                      backgroundColor: "rgb(30,30,30)",
                      color: "rgb(220,220,220)",
                      border: "1px solid white",
                      padding: ".125em",
                    }}
                  />
                  <button
                    style={{
                      backgroundColor: "rgb(30,30,30)",
                      color: "rgb(220,220,220)",
                      border: "1px solid white",
                      padding: ".125em",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      changePrice(item.produkt_id);
                    }}
                  >
                    Zmien
                  </button>
                </div>
                <p>{item.produkt_moc}mg</p>
                <p>{item.produkt_typ}</p>
              </div>
            ))
          : serverMessage}
      </div>
    </div>
  ) : (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgb(30,30,30)",
        color: "rgb(220,220,220)",
        padding: "1rem",
        display: "grid",
        placeItems: "center",
      }}
    >
      <form onSubmit={logIn}>
        <label>
          Password:
          <input
            style={inputStyle}
            name="password"
            type="password"
            value={password}
            required
            autoComplete="false"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          style={{
            ...inputStyle,
            borderRadius: "30px",
            cursor: "pointer",
            margin: "2em 0",
          }}
        >
          Submit
        </button>
        <p style={{ display: "block" }}>{serverMessage && serverMessage}</p>
      </form>
    </div>
  );
}
