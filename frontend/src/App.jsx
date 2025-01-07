import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      {/* NavBar: Should be responsive to all screen sizes */}
      <NavBar />

      {/* Outlet: Main content area where pages will render */}
      <Outlet />

      {/* Footer: Should adjust its size and padding according to screen size */}
      <Footer />
    </>
  );
};

export default App;
