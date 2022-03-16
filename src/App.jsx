import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
// import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Training from "./pages/training/Training";
import Audits from "./pages/audits/Audits";
import PageTest from "./pages/tests/PageTest";
import About from "./pages/company/About";
import SignUp from "./pages/signup/SignUp";
import Admin from "./pages/admin/Admin";
import Connection from "./components/connection/Connection";
import Login from './components/login/Login';
import Disconnect from './components/disconnect/Disconnect';
import AdminPanel from './components/admin/admin-panel/AdminPanel';
import AdminRoutes from './components/admin/admin-routes/AdminRoutes';
import AddPost from './components/posts/AddPost';
import PostList from './components/posts/PostList';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <div>
      <Header />
      {/* <NavBar /> */}
      <UserProvider>
        <Connection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formation" element={<Training />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/tests" element={<PageTest />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/disconnect" element={<Disconnect />} />
          <Route path="/admin" element={<AdminRoutes />}>
            <Route index element={<AdminPanel />} />
          </Route>
          <Route path="/addpost" element={<AddPost/>} />
          <Route path="/readpost" element={<PostList/>} />
        </Routes>
      </UserProvider>
      <Admin />
    </div>
  );
}

export default App;
