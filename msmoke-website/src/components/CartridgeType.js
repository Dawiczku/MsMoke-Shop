import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function CartridgeType() {
  return (
    <>
      {" "}
      <Header currentSection={"liquid"} />
      <div className="section--nicotine">
        <div className="nicotine__container--amount text--bold text--upper">
          <Link to={"/products/cartridge"} state={{ cartridgeType: "vbar" }}>
            <div className="nicotine--amount">
              <p>VBar</p>
            </div>
          </Link>
          <Link
            to={"/products/cartridge"}
            state={{ cartridgeType: "aroma king" }}
          >
            <div className="nicotine--amount">
              <p>Aroma King</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
