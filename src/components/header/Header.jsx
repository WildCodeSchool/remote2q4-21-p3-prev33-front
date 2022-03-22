import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo3 from "../../assets/logoprev33.png";
import SignUp from "../../pages/signup/SignUp";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img className="Header-logo" src={logo3} alt="logo3" />
        </Link>
      </div>

      <div className="header-text1">
        <p>"Protégeons, ensemble,&nbsp;</p>
        <p> votre outil de travail"</p>
      </div>
      <div className="header-text2">
        <p>Incendie - Risques Professionnels - Sûreté</p>
      </div>
      <div className="header-info">
        <div className="header-phone">
          <a href="tel:+33695231873">
            <span className="icon">
              <i className="fas fa-phone"> 06 95 23 18 73 </i>
            </span>
          </a>
        </div>
        <div className="header-mail">
          <a href="mailto:prev33.contact@gmail.com">
            <span className="icon">
              <i className="fas fa-envelope"> prev33.contact@gmail.com</i>
            </span>
          </a>
        </div>
        <button className="favorite styled" type="button">
          <NavLink to="/signup" className="header-link" element={<SignUp />}>
            Demander un devis
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Header;
