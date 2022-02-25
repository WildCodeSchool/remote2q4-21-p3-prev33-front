import { Routes, Route } from 'react-router-dom';
import Caroussel from './components/carousel/Caroussel';
import { SliderData } from './components/carousel/SliderData';
import './App.css';



function App() {
  return (
    <div className="App">
    
      <div className='container_caroussel'>
        <Caroussel slides={SliderData} />
      </div>

    </div>
  );
}

export default App;
