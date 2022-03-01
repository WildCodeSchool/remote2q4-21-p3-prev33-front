import React from 'react'
import Caroussel from '../components/caroussel/Caroussel';
import { SliderData } from '../components/caroussel/SliderData';


const Home = () => {
  return (
    <div>
      <div className='container_caroussel'>
        <Caroussel slides={SliderData} />
      </div>
    </div>
  )
}

export default Home