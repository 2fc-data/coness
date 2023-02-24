import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNav from './components/MainNav';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

const App = () => {
  return (
    <>
      <MainNav />
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default App;
