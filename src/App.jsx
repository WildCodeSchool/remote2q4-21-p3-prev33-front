import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Formations from "./pages/formations/Formations";
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
        <Route path="/formations" element={<Formations />} />
        <Route path="/audits" element={<Audits />} />
        <Route path="/tests" element={<PageTest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
