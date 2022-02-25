import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logoprev33.png'
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="logo-container">
          <Link to='/'><img className='Header-logo' src={logo} alt="logo" /></Link>
      </div>
          <p>"Protégeons ensemble votre outil de travail" <br/>
          Incendie - Risques Professionnels - Sûreté </p>
          <p>modif</p>
    </div>    
)
}

export default Header