import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import Home from "../../pages/home/Home";
import Training from "../../pages/training/Training";
import Audits from "../../pages/audits/Audits";
import About from "../../pages/company/About";
import PageTest from "../../pages/tests/PageTest";
import AuditList from "../component_audit/AuditList";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div onClick={handleClick} className={click ? "Navbar" : "Navbar active"}>
        <NavLink to="/" className="navigation-link" element={<Home />}>
          Accueil
        </NavLink>
        <NavLink
          to="/formations"
          className="navigation-link"
          element={<Training />}
        >
          Formations
        </NavLink>

        <NavLink to="/audits" className="navigation-link" element={<Audits />}>
          Audits et conseils
        </NavLink>

        <NavLink to="/tests" className="navigation-link" element={<PageTest />}>
          votre niveau de sécurité
        </NavLink>

        <NavLink to="/about" className="navigation-link" element={<About />}>
          mon entreprise
        </NavLink>
      </div>
      <div className="navbar-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-bars" : "fas fa-times"} />
      </div>
    </>
  );
};

export default NavBar;
