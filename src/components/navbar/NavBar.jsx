import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import Home from '../../pages/home/Home';
import Formation from '../../pages/formation/Formation';
import Audits from '../../pages/audits/Audits'
import Company from '../../pages/company/Company';
import Tests from '../../pages/tests/Tests';
import Laws from '../../pages/laws/Laws';

const NavBar = () => {
    
    const onSearch = (e) => {
        e.preventDefault();
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    
        let currentDropdown
        if (isDropdownButton) {
            currentDropdown = e.target.closest("[data-dropdown]")
            currentDropdown.classList.toggle("active")
        }
    
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove("active")
        })
    }

    return (
        <div className='Navbar'>
            <NavLink to="/" className='navigation-link' element={<Home />}>Home</NavLink>
            <div className="dropdown" data-dropdown>
                <button onMouseEnter={onSearch} className="navigation-link" data-dropdown-button>Formation</button>
                    <div className='dropdown-menu information-grid'>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Formation" className='item-link' element={<Formation />}>Incendie</NavLink></div>
                        </div>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Formation" className='item-link' element={<Formation />}>Risques professionnels</NavLink></div>
                        </div>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Formation" className='item-link' element={<Formation />}>Sûreté</NavLink></div>
                        </div>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Formation" className='item-link' element={<Formation />}>Formations spécifiques</NavLink></div>
                        </div>
                    </div>
            </div>
            <div className="dropdown" data-dropdown>
                <button onMouseEnter={onSearch} className="navigation-link" data-dropdown-button>Audits et conseils</button>
                    <div className='dropdown-menu information-grid'>
                        <div>
                            <div className='dropdown-link'><NavLink to="/audits" className='item-link' element={<Audits />}>Prévention incendie</NavLink></div>
                        </div>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Audits" className='item-link' element={<Audits />}>Assistance sûreté</NavLink></div>
                        </div>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Audits" className='item-link' element={<Audits />}>Assistance risques professionnels</NavLink></div>
                        </div>
                        <div>
                            <div className='dropdown-link'><NavLink to="/Audits" className='item-link' element={<Audits />}>Conseils</NavLink></div>
                        </div>
                    </div>
            </div>
            <NavLink to="/Tests" className="navigation-link" element={<Tests />}>Tests</NavLink>
            <NavLink to="/Laws" className="navigation-link" element={<Laws />}>Textes de lois et agréments</NavLink>
            <NavLink to="/Company" className="navigation-link" element={<Company />}>A propos de nous</NavLink>
        </div>
    )
}

// <div className="navigation">
//     <NavLink to="Formation" className={(navData) =>
//         (navData.isActive ? "navigation-link selected" : "navigation-link")}>
//         Formation
//     </ NavLink>
//     <NavLink to="AuditsAndAdvices" className={(navData) =>
//         (navData.isActive ? "navigation-link selected" : "navigation-link")}>
//         Audits et conseils
//     </ NavLink>
//     <NavLink to="Tests" className={(navData) =>
//         (navData.isActive ? "navigation-link selected" : "navigation-link")}>
//         Tests
//     </ NavLink>
//     <NavLink to="TextOfLawsAndApprovals" className={(navData) =>
//         (navData.isActive ? "navigation-link selected" : "navigation-link")}>
//         Textes de lois et agréments
//     </ NavLink>
//     <NavLink to="AboutUs" className={(navData) =>
//         (navData.isActive ? "navigation-link selected" : "navigation-link")}>
//         À propos de nous
//     </ NavLink>
// </div>

export default NavBar

// return (
//     <div className='NavBar'>

//         <div className="logo-container">
//             <Link to='/'><img className='Header-logo' src={home} alt="logo" /></Link>
//         </div>
//         <NavLink to="/accueil" className={({ isActive }) =>
//           isActive ? "selected" : "navigation-link"
//         }>
//             Accueil
//         </NavLink>
//         <NavLink to="/prestations" className={({ isActive }) =>
//           isActive ? "selected" : "navigation-link"
//         }>
//             Prestations
//         </NavLink>
//         <NavLink to="/bibliotheque" className={({ isActive }) =>
//           isActive ? "selected" : "navigation-link"
//         }>
//             Bibliothèques
//         </NavLink>
//         <NavLink to="/contact-avis" className={({ isActive }) =>
//           isActive ? "selected" : "navigation-link"
//         }>
//             Contact/Avis
//         </NavLink>
//         <NavLink to="/login" className='login-button'>
//             Se connecter
//         </NavLink>
//     </div>
// );
// };