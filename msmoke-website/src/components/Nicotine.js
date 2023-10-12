import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Nicotine() {
  return (
    <>
      {" "}
      <Header currentSection={"liquid"} />
      <div className="section--nicotine">
        <div className="nicotine__container--amount text--bold text--upper">
          <Link to={"/products/liquid"} state={{ nicotine: 6 }}>
            <div className="nicotine--amount">
              <p>6mg</p>
            </div>
          </Link>
          <Link to={"/products/liquid"} state={{ nicotine: 12 }}>
            <div className="nicotine--amount">
              <p>12mg</p>
            </div>
          </Link>
          <Link to={"/products/liquid"} state={{ nicotine: 18 }}>
            <div className="nicotine--amount">
              <p>18mg</p>
            </div>
          </Link>
          <Link to={"/products/liquid"} state={{ nicotine: 20 }}>
            <div className="nicotine--amount">
              <p>20mg</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
