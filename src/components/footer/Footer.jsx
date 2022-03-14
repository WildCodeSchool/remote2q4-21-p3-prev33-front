import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Map from "../map/Map";
import UseModal from "../mentionsLegales/UseModal";
import ModalMentions from "../mentionsLegales/ModalMentions";

function Footer() {
  const { show, toggle } = UseModal();

  const today = new Date();
  return (
    <>
      <div id="footer-top"></div>
      <Map />
      <div className="footer">
        <div className="footer-navigation">
          <ul>
            <li className="footer-list">
              <a
                href="https://www.facebook.com/PREV33/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </a>
            </li>
            <li className="footer-list">
              <a
                href="https://www.instagram.com/prev33_prevention/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <i className="fab fa-instagram-square"></i>
                </span>
              </a>
            </li>
            <li className="footer-list">
              <NavLink to="/about">
                <span className="icon">
                  <i className="fas fa-user"></i>
                </span>
              </NavLink>
            </li>
            <li className="footer-list">
              <a href="mailto:prev33.contact@gmail.com">
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>
              </a>
            </li>
            <li className="footer-list">
              <NavLink to="/">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
              </NavLink>
            </li>
            <p className="footer-school">
              Développé avec ❤ par{" "}
              <a
                href="https://www.wildcodeschool.com/fr-FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                les wilders
              </a>
            </p>

            <p className="footer-copyright">&copy; {today.getFullYear()}</p>

            <a href="#footer-top" className="footer-top">
              <svg width="2em" height="2em" viewBox="0 0 24 24">
                <path
                  fill="#1e4a6d"
                  d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm9-2.586l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 9.414V17a1 1 0 1 1-2 0V9.414z"
                ></path>
              </svg>
            </a>
          </ul>
        </div>
        <div className="footer-mentionsLegales">
          <button onClick={toggle}>
            <span>&darr;</span> Mentions légales <span>&darr;</span>
          </button>

          <ModalMentions show={show} hide={toggle} />
        </div>
      </div>
    </>
  );
}

export default Footer;
