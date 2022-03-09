import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import Home from "../../pages/home/Home";
import Training from "../../pages/training/Training";
import Audits from "../../pages/audits/Audits";
import About from "../../pages/company/About";
import PageTest from "../../pages/tests/PageTest";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div onClick={handleClick} className={click ? "Navbar" : "Navbar active"}>
        <NavLink to="/" className="navigation-link" element={<Home />}>
          Accueil
        </NavLink>
        <div className="dropdown" data-dropdown>
          <button className="navigation-button" data-dropdown-button>
            Formations
          </button>
          <div className="dropdown-menu information-grid">
            <div className="dropdown-link">
              <NavLink
                to="/formations"
                className="item-link"
                element={<Training />}
              >
                Incendie
              </NavLink>
            </div>
            <div className="dropdown-link">
              <NavLink
                to="/formation"
                className="item-link"
                element={<Training />}
              >
                Risques professionnels
              </NavLink>
            </div>
            <div className="dropdown-link">
              <NavLink
                to="/formation"
                className="item-link"
                element={<Training />}
              >
                Sûreté
              </NavLink>
            </div>
            <div className="dropdown-link">
              <NavLink
                to="/formation"
                className="item-link"
                element={<Training />}
              >
                Formations spécifiques
              </NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown" data-dropdown>
          <button className="navigation-button" data-dropdown-button>
            Audits et conseils
          </button>
          <div className="dropdown-menu information-grid">
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Prévention incendie
              </NavLink>
            </div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Assistance sûreté
              </NavLink>
            </div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Assistance risques professionnels
              </NavLink>
            </div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Conseils
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink to="/tests" className="navigation-link" element={<PageTest />}>
          Tests
        </NavLink>
        <NavLink to="/about" className="navigation-link" element={<About />}>
          A propos
        </NavLink>
      </div>
      <div className="navbar-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-bars" : "fas fa-times"} />
      </div>
    </>
  );
};

export default NavBar;
