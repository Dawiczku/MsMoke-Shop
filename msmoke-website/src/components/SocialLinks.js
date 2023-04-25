import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks({ page }) {
  return (
    <div
      className={
        page === "nav"
          ? "social-links__container--nav"
          : "social-links__container"
      }
    >
      <div className="social__link facebook">
        <a
          href="https://www.facebook.com/people/MsMoke/100088173109679/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-facebook-f"
            className="fa-icon fa-icon--facebook"
          />
        </a>
      </div>
      <div className="social__link instagram">
        <a
          href="https://www.instagram.com/msmoke_zagan/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-instagram"
            className="fa-icon fa-icon--instagram"
          />
        </a>
      </div>
      <div className="social__link whatsapp">
        <a href="https://wa.me/48783241423" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon="fa-brands fa-whatsapp"
            className="fa-icon fa-icon--whatsapp"
          />
        </a>
      </div>
    </div>
  );
}
