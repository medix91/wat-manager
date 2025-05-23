// src/AppRoutes.jsx
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Tasks from "../pages/Tasks/Tasks";
import Wallet from "../pages/Wallet/Wallet";
import About from "../pages/About/About";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AppRoutes = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Chargement...</div>; // ou un spinner
  }

  return (
    <>
      {user && <Navbar />}
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/tasks" />} />
          </>
        )}
      </Routes>
      {user && <Footer />}
    </>
  );
};

export default AppRoutes;
