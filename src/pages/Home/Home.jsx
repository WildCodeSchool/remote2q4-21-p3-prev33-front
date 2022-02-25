import React from 'react'
import imagePompier from '../../assets/pompier.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>Accueil</h1>
            <div className="img">
                <img className='imagePompier' src={imagePompier} alt="logo" />
            </div>

        </div>

    )
}

export default Home