import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Home from "../../pages/Home/Home";
import Training from "../../pages/Training/Training";
import Audits from "../../pages/audits/Audits";
import About from "../../pages/company/About";
import PageTest from "../../pages/tests/PageTest";

const NavBar = () => {
  const onSearch = (e) => {
    e.preventDefault();
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  };

  return (
    <div className="Navbar">
      <NavLink to="/" className="navigation-link" element={<Home />}>
        Home
      </NavLink>
      <div className="dropdown" data-dropdown>
        <button
          onMouseEnter={onSearch}
          className="navigation-link"
          data-dropdown-button
        >
          Formation
        </button>
        <div className="dropdown-menu information-grid">
          <div>
            <div className="dropdown-link">
              <NavLink
                to="/formation"
                className="item-link"
                element={<Training />}
              >
                Incendie
              </NavLink>
            </div>
          </div>
          <div>
            <div className="dropdown-link">
              <NavLink
                to="/formation"
                className="item-link"
                element={<Training />}
              >
                Risques professionnels
              </NavLink>
            </div>
          </div>
          <div>
            <div className="dropdown-link">
              <NavLink
                to="/formation"
                className="item-link"
                element={<Training />}
              >
                Sûreté
              </NavLink>
            </div>
          </div>
          <div>
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
      </div>
      <div className="dropdown" data-dropdown>
        <button
          onMouseEnter={onSearch}
          className="navigation-link"
          data-dropdown-button
        >
          Audits et conseils
        </button>
        <div className="dropdown-menu information-grid">
          <div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Prévention incendie
              </NavLink>
            </div>
          </div>
          <div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Assistance sûreté
              </NavLink>
            </div>
          </div>
          <div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Assistance risques professionnels
              </NavLink>
            </div>
          </div>
          <div>
            <div className="dropdown-link">
              <NavLink to="/audits" className="item-link" element={<Audits />}>
                Conseils
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/tests" className="navigation-link" element={<PageTest />}>
        Tests
      </NavLink>
      <NavLink to="/about" className="navigation-link" element={<About />}>
        A propos de nous
      </NavLink>
    </div>
  );
};

export default NavBar;
