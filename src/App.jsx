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
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Disconnect from "./components/disconnect/Disconnect";
import AdminPanel from "./components/admin/admin-panel/AdminPanel";
import AdminRoutes from "./components/admin/admin-routes/AdminRoutes";
import UserProvider from "./contexts/UserProvider";
import Connexion from "./pages/connexion/Connexion";
import Formation from "./components/files/Pdf";
import Training from "./pages/training/Training";
import AuditDetail from "./pages/audits/AuditDetail"

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formations/" element={<Formations />} /> 
          <Route path="/formation/:title" element={<Training />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/audit/:title" element={<AuditDetail />} />
          <Route path="/tests" element={<PageTest />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/disconnect" element={<Disconnect />} />
          <Route path="/admin" element={<AdminRoutes />}>
            <Route index element={<AdminPanel />} />
          </Route>
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
