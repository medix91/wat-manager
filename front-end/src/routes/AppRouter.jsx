import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
