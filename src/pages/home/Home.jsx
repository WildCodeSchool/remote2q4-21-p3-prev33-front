import React from 'react'
import Caroussel from '../../components/caroussel/Caroussel';
import { SliderData } from '../../components/caroussel/SliderData';
import imagePompier from '../../assets/pompier.jpg'
import './Home.css'
import CardsFormation from '../../components/cards/CardsFormation';

const Home = () => {
    return (
        <div className='home'>
            <div className="img">
                <Caroussel slides={SliderData} />
            </div>
            <div className="formation-card">
                <CardsFormation />
            </div>

        </div>

    )
}

export default Home