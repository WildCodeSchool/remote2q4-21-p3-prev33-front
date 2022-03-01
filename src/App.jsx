<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';



function App() {
  return (
    <div className="App">
    < Home />
=======
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Training from "./pages/training/Training";
import Audits from "./pages/audits/Audits";
import PageTest from "./pages/tests/PageTest";
import About from "./pages/company/About";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Training />} />
        <Route path="/audits" element={<Audits />} />
        <Route path="/tests" element={<PageTest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
>>>>>>> dev
    </div>
  );
}

export default App;
