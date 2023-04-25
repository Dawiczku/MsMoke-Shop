import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AgeVerify() {
  const navigate = useNavigate();

  return (
    <>
      <div className="age-verify__page">
        <div>
          <h1>Strona jedynie dla pelnoletnich, czy jestes dorosly ?</h1>
          <div className="age-verify__buttons">
            <button className="button--minor" onClick={() => navigate(-1)}>
              Wychodze
            </button>
            <button className="button--adult" onClick={() => navigate("/home")}>
              Mam 18 lat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
