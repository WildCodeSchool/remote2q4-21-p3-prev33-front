import React from 'react'
import { Link } from 'react-router-dom'
import logo3 from '../../assets/logoprev33.png'
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className='Logo'>
        <Link to='/'><img className='Header-logo' src={logo3} alt="logo3" /></Link>
      </div>

      <div className='text1'>
        <p>"Protégeons, ensemble,</p>
        <p>votre outil de travail"</p>
      </div>
      <div className='text2'>
        <p>Incendie</p>
        <br />
        <p>Risques Professionnels</p>
        <br />
        <p>Sûreté</p>
      </div>
      <div className='Bouton'>
        <button className="favorite styled" type="button">
          Contactez-nous
        </button>
      </div>
    </div>
  )
}

export default Header