import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Audits from './pages/audits/Audits';
import Tests from './pages/tests/Tests';
import Laws from './pages/laws/Laws';
import Company from './pages/company/Company';
import Training from './pages/training/Training';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Training />} />
        <Route path="/audits" element={<Audits />}></Route>
        <Route path="/tests" element={<Tests />}></Route>
        <Route path="/laws" element={<Laws />}></Route>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
    </div>
  );
}

export default App;