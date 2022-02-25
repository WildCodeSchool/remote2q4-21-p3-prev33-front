import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Training from './pages/Training/Training';

function App() {
  return ( 
    <div className = "App" >
    <Header/>
    <Navigation/>
    <Routes > 
      <Route path="/" element={<Home />}/>
      <Route path="/training" element={<Training />}/> 
    </Routes>

    </div>
  );
}

export default App;