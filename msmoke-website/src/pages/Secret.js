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
  const [newMoc, setNewMoc] = useState(0);
  const [newSmak, setNewSmak] = useState("");
  const [newNazwa, setNewNazwa] = useState("");

  const imageRef = useRef();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/getItems/`, { maxRedirects: 0 })
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
      .delete(
        `${process.env.REACT_APP_HOST}/deleteItem/`,
        { data: { id } },
        { maxRedirects: 0 }
      )
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
      .post(
        `${process.env.REACT_APP_HOST}/login/`,
        { password },
        { maxRedirects: 0 }
      )
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
      .post(`${process.env.REACT_APP_HOST}/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        maxRedirects: 0,
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

  const changeNazwa = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_HOST}/changeNazwa/`,
        { newNazwa, id },
        { maxRedirects: 0 }
      )
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

  const changeSmak = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_HOST}/changeSmak/`,
        { newSmak, id },
        { maxRedirects: 0 }
      )
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

  const changeMoc = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_HOST}/changeMoc/`,
        { newMoc, id },
        { maxRedirects: 0 }
      )
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

  const changePrice = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_HOST}/changePrice/`,
        { newPrice, id },
        { maxRedirects: 0 }
      )
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
            maxLength={30}
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
            <option value="premix">Premix</option>
            <option value="longfill">Longfill</option>
            <option value="pod">Pod</option>
            <option value="cartridge">Cartridge</option>
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
                <input
                  type="text"
                  onChange={(e) => setNewNazwa(e.target.value)}
                  style={{
                    backgroundColor: "rgb(30,30,30)",
                    color: "rgb(220,220,220)",
                    border: "1px solid white",
                    padding: ".125em",
                  }}
                  placeholder="Nazwa"
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
                    changeNazwa(item.produkt_id);
                  }}
                >
                  Zmien
                </button>
                <p>{item.produkt_smak}</p>
                <input
                  type="text"
                  onChange={(e) => setNewSmak(e.target.value)}
                  style={{
                    backgroundColor: "rgb(30,30,30)",
                    color: "rgb(220,220,220)",
                    border: "1px solid white",
                    padding: ".125em",
                  }}
                  placeholder="Smak"
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
                    changeSmak(item.produkt_id);
                  }}
                >
                  Zmien
                </button>
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
                  placeholder="Cena"
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
                <p>{item.produkt_moc}mg</p>
                <input
                  type="number"
                  onChange={(e) => setNewMoc(e.target.value)}
                  style={{
                    backgroundColor: "rgb(30,30,30)",
                    color: "rgb(220,220,220)",
                    border: "1px solid white",
                    padding: ".125em",
                  }}
                  placeholder="Moc"
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
                    changeMoc(item.produkt_id);
                  }}
                >
                  Zmien
                </button>
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
